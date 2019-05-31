{trim;{//; A function where it will recursively call itself as long as the regex provided is true }
{function;whileregex;
	{set;~r;{params;1}}{set;~c;{params;2;n}}{set;~i;{params;0}}
	{while;{inject;{lb}regextest{semi}{get;{get;~i}}{semi}{get;~r}{rb}};
		{void;{increment;~loops}}
		{set;{get;~i};{trim;
			{func.exponent;
				{inject;{lb}regexreplace{semi}{get;{get;~i}}{semi}{get;~r}{semi}{get;~c}{rb}}
			}
		}}
	}
}

{//; A function where it will recursively inject itself as long as the regex provided is true }
{function;whileregexinject;
	{set;~r;{params;1}}{set;~c;{params;2;n}}{set;~i;{params;0}}
	{while;{inject;{lb}regextest{semi}{get;{get;~i}}{semi}{get;~r}{rb}};
		{void;{increment;~loops}}
		{set;{get;~i};{trim;
			{func.exponent;
				{inject;{inject;
					{lb}regexreplace{semi}{get;{get;~i}}{semi}{get;~r}{semi}{get;~c}{rb}
				}}
			}
		}}
	}
}

{//; A function to fix exponents as changed by JavaScript }
{function;exponent;{trim;
	{inject;
		{regexreplace;{params};/(\d+|\d+\.\d+)e\+?(\d+)/g;
			{lb}realpad{semi}{lb}replace{semi}$1{semi}.{semi}{rb}{semi}{lb}math{semi}+{semi}0$2{semi}1{rb}{semi}0{semi}right{rb}
		}
	}
}}

{//; A function for debug logging }
{function;debug;
	{void;{increment;~s}}
	{if;{get;~last};!=;{get;~f};
		{push;~debug;{repeat;​{space}​;{math;-;2;{length;{get;~s}}}}{get;~s}: {if;{flagset;d};{func.flip;{get;~f}};{get;~f}}}
		{set;~last;{get;~f}}
	}
}

{//; A function to flip the delimiters }
{function;flip;{trim;
	{set;~output;{regexreplace;{params};/\./g;$DOT$}}
	{set;~output;{regexreplace;{get;~output};/,/g;.}}
	{set;~output;{regexreplace;{get;~output};/\$DOT\$/g;,}}
	{get;~output}
}}

{//; Initialization }
{set;~debug;[]}
{set;~f;{flag;_}}
{set;~last;{get;~f}}
{set;~loops;0}

{//; Use point or comma for decimals }
{if;{flagset;d};
	{set;~f;{func.flip;{get;~f}}}
}

{while;{logic;!;{regextest;{get;~f};/^(?:-?(?:\d+\.\d*|\.?\d+)$|NaN)/}};
	{void;{increment;~loops}}
	{set;~s;0}
	{//; 1: Spaces, newlines, and commas }
    {set;~f;{regexreplace;{get;~f};/[\s,]/g;}}
	{func.debug}

	{//; 2: Words conversion }
    {set;~f;{regexreplace;{get;~f};/plus|add/ig;+}}
	{set;~f;{regexreplace;{get;~f};/minus|subtract/ig;-}}
	{set;~f;{regexreplace;{get;~f};/divided?(?:by|)/ig;/}}
	{set;~f;{regexreplace;{get;~f};/multipl(?:y|ied)(?:by|)/ig;/}}
	{set;~f;{regexreplace;{get;~f};/mod(?:ulo)/ig;%}}
	{func.debug}

	{//; 3: Resolve -(x) -> -x}
	{set;~f;{regexreplace;{get;~f};/-\((-?(?:\d+\.\d*|\.?\d+))\)/g;-$1}}
	{func.debug}

	{//; 4: Resolve x) -> x, (x -> x }
	{set;~f;{regexreplace;{get;~f};/^[(]*(-?(?:\d+\.\d*|\.?\d+))[)]*$/g;$1}}
	{func.debug}

	{//; 5: Resolve (x) -> x }
	{set;~f;{regexreplace;{get;~f};/(?:^|([(]-?))\((-?(?:\d+\.\d*|\.?\d+))\)(?:([)])|$)/g;$1$2$3}}
	{func.debug}

	{//; 6: Fix sign convention }
	{func.whileregex;~f;/--|\+\+/g;+}
	{func.whileregex;~f;/-\+|\+-/g;-}
	{func.debug}

	{//; 7: Exponents }
	{set;~f;{func.exponent;{get;~f}}}

	{//; 8: Convert constants }
	{set;~f;{regexreplace;{get;~f};/(?:Math\.|)PI/ig;3.141592653589793}}
	{set;~f;{regexreplace;{get;~f};/(?:Math\.|)E/ig;2.718281828459045}}
	{func.debug}

	{//; 9: Math.sqrt(x) }
	{func.whileregex;~f;/(?:Math\.|)Sqrt\((-?(?:\d+\.\d*|\.?\d+))\)/ig;(($1)^(0.5))}
	{func.debug}

	{//; 10: Math.cbrt(x) }
	{func.whileregex;~f;/(?:Math\.|)Cbrt\((-?(?:\d+\.\d*|\.?\d+))\)/ig;(($1)^(1/3))}
	{func.debug}

	{//; 12: Math.root(x,y) }
	{func.whileregex;~f;/(?:Math\.|)Root\((.+?),(.+?)\)/ig;(($1)^(1/$2))}
	{func.debug}

	{//; 11: Math.pow(x,y) }
	{func.whileregex;~f;/(?:Math\.|)Pow\((.+?),(.+?)\)/ig;(($1)^($2))}
	{func.debug}

	{//; 12: Resolve missing * in operations }
	{func.whileregex;~f;
		/(-?(?:\d+\.\d*|\.?\d+))\((-?(?:\d+\.\d*|\.?\d+))\)|\((-?(?:\d+\.\d*|\.?\d+))\)(\d+\.\d*|\.?\d+)/g;
		($1$3*$2$4)
	}
	{func.whileregex;~f;
		/\((-?(?:\d+\.\d*|\.?\d+))\)\((-?(?:\d+\.\d*|\.?\d+))\)/g;
		($1*$2)
	}
	{func.debug}

	{//; 13: Solve ^ }
	{func.whileregexinject;~f;
		/(-?(?:\d+\.\d*|\.?\d+))\^(-?(?:\d+\.\d*|\.?\d+))|(-?(?:\d+\.\d*|\.?\d+))\^\((-?(?:\d+\.\d*|\.?\d+))\)/g;
		{lb}lb{rb}math{lb}semi{rb}^{lb}semi{rb}$1$3{lb}semi{rb}$2$4{lb}rb{rb}
	}
	{func.whileregexinject;~f;
		/\((-?(?:\d+\.\d*|\.?\d+))\)\^(-?(?:\d+\.\d*|\.?\d+))|\((-?(?:\d+\.\d*|\.?\d+))\)\^\((-?(?:\d+\.\d*|\.?\d+))\)/g;
		{lb}lb{rb}math{lb}semi{rb}^{lb}semi{rb}$1$3{lb}semi{rb}$2$4{lb}rb{rb}
	}
	{func.debug}

	{//; 14: Solve %, *, / }
	{//;  x  [%*/]  x
	     (x) [%*/] (x)
	}
	{func.whileregexinject;~f;
		/(\d+\.\d*|\.?\d+)([%*/])(-?(?:\d+\.\d*|\.?\d+))|\((-?(?:\d+\.\d*|\.?\d+))\)([%*/])\((-?(?:\d+\.\d*|\.?\d+))\)/g;
		{lb}lb{rb}math{lb}semi{rb}$2$5{lb}semi{rb}$1$4{lb}semi{rb}$3$6{lb}rb{rb}
	}
	{//; (x) [%*/]  x
		  x  [%*/] (x)
	}
	{func.whileregexinject;~f;
		/\((-?(?:\d+\.\d*|\.?\d+))\)([%*/])(-?(?:\d+\.\d*|\.?\d+))|(\d+\.\d*|\.?\d+)([%*/])\((-?(?:\d+\.\d*|\.?\d+))\)/g;
		{lb}lb{rb}math{lb}semi{rb}$2$5{lb}semi{rb}$1$4{lb}semi{rb}$3$6{lb}rb{rb}
	}
	{func.debug}

	{//; 15: Solve +, - }
	{//;  x  [+-]  x
	     (x) [+-] (x)
	}
	{func.whileregexinject;~f;
		/(-?(?:\d+\.\d*|\.?\d+))([+-])(-?(?:\d+\.\d*|\.?\d+))|\((-?(?:\d+\.\d*|\.?\d+))\)([+-])\((-?(?:\d+\.\d*|\.?\d+))\)/g;
		{lb}lb{rb}math{lb}semi{rb}$2$5{lb}semi{rb}$1$4{lb}semi{rb}$3$6{lb}rb{rb}
	}
	{//; (x) [+-]  x
		  x  [+-] (x)
	}
	{func.whileregexinject;~f;
		/\((-?(?:\d+\.\d*|\.?\d+))\)([+-])(-?(?:\d+\.\d*|\.?\d+))|(-?(?:\d+\.\d*|\.?\d+))([+-])\((-?(?:\d+\.\d*|\.?\d+))\)/g;
		{lb}lb{rb}math{lb}semi{rb}$2$5{lb}semi{rb}$1$4{lb}semi{rb}$3$6{lb}rb{rb}
	}
	{func.debug}
}

{set;~result;{parsefloat;{get;~f}}}
{if;{flagset;v};
	```cs{newline}{clean;{join;{get;~debug};{newline}}}{newline;2} A: {if;{flagset;d};{func.flip;{get;~result}};{get;~result}}{newline}Repeats: {get;~loops}```;
	{if;{flagset;d};{func.flip;{get;~result}};{get;~result}}
}}