{clean;{fallback;NaN}{if;{lower;{args;0}};==;-v;{set;~f;{exec;number;{clean;{args;1;n}}}}{set;~v;true};{set;~f;{exec;number;{clean;{args}}}}{set;~v;false}}{if;{get;~v};```cs{set;~c;{get;~f}}}
{while;{logic;!;{regextest;{get;~f};/^(?:-?(?:\d+\.\d*|\.?\d+)$|NaN)/}};
    {set;~f;{regexreplace;{get;~f};/\s+|\s*\+\s*0(?!\d+\.\d*|\.?\d+)\s*/g;}}{//;Spaces and commas and results with zero}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}01 - {get;~f}}}
	{exec;whileregex;"~f" "/--|\+\+/g" "+"}{//;Sign convention}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}02 - {get;~f}}}
	{exec;whileregex;"~f" "/-\+|\+-/g" "-"}{//;Sign convention}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}03 - {get;~f}}}
	{set;~f;{regexreplace;{get;~f};/PI/g;3.141592653589793}}{//;Constants}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}04 - {get;~f}}}
	{set;~f;{regexreplace;{get;~f};/E/g;2.718281828459045}}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}05 - {get;~f}}}
	{exec;whileregex;"~f" "/sqrt\((-?(?:\d+\.\d*|\.?\d+))\)/g" "(($1)^(1/2))"}{//;Math.sqrt(x)}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}06 - {get;~f}}}
	{exec;whileregex;"~f" "/cbrt\((-?(?:\d+\.\d*|\.?\d+))\)/g" "(($1)^(1/3))"}{//;Math.cbrt(x)}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}07 - {get;~f}}}
	{exec;whileregex;"~f" "/root\((.+?),(.+?)\)/g" "(($1)^(1/$2))"}{//;Math.root(x,y)}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}08 - {get;~f}}}
	{exec;whileregex;"~f" "/pow\((.+?),(.+?)\)/g" "(($1)^($2))"}{//;Math.pow(x,y)}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}09 - {get;~f}}}
	{exec;whileregexinject;"~f" "/((?:\d+\.\d*|\.?\d+))(\^)(-?(?:\d+\.\d*|\.?\d+))/" "{lb}lb{rb}math{lb}semi{rb}$2{lb}semi{rb}$1{lb}semi{rb}$3{lb}rb{rb}"}{//;Solve x^y}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}10 - {get;~f}}}
	{set;~f;{exec;number;{get;~f}}}
	{exec;whileregexinject;"~f" "/(-?(?:\d+\.\d*|\.?\d+))([*/%])(-?(?:\d+\.\d*|\.?\d+))/" "{lb}lb{rb}math{lb}semi{rb}$2{lb}semi{rb}$1{lb}semi{rb}$3{lb}rb{rb}"}{//;Solve x*y, x/y, x%y}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}11 - {get;~f}}}
	{exec;whileregexinject;"~f" "/(-?(?:\d+\.\d*|\.?\d+))([-+])(\d+\.\d*|\.?\d+)/" "{lb}lb{rb}math{lb}semi{rb}$2{lb}semi{rb}$1{lb}semi{rb}$3{lb}rb{rb}"}{//;Solve x+y, x-y}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}12 - {get;~f}}}
	{exec;whileregex;"~f" "/\((-?(?:\d+\.\d*|\.?\d+))\)\((-?(?:\d+\.\d*|\.?\d+))\)/" "($1*$2)"}{//;Resolve (x)(y) -> (x*y)}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}13 - {get;~f}}}
	{exec;whileregex;"~f" "/\((-?(?:\d+\.\d*|\.?\d+))\)(-?(?:\d+\.\d*|\.?\d+))/" "($1*$2)"}{//;Resolve (x)y -> (x*y)}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}14 - {get;~f}}}
	{exec;whileregex;"~f" "/(-?(?:\d+\.\d*|\.?\d+))\((-?(?:\d+\.\d*|\.?\d+))\)/" "($1*$2)"}{//;Resolve x(y) -> (x*y)}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}15 - {get;~f}}}
	{set;~f;{regexreplace;{get;~f};/(?:^|\s|([-+/*^(]))\((-?(?:\d+\.\d*|\.?\d+))\)/g;$1$2}}{//;Resolve (x) -> x}{if;{get;~v};{if;{get;~nf};!=;{get;~f};{set;~nf;{get;~f}}16 - {get;~f}}{newline}}
}}{if;{get;~v};{newline}A{space}-{space}}{parsefloat;{get;~f}}{if;{get;~v};```}