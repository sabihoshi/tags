!snippet submit {//;Using the Lexer}
{exec;calculate;(5-3)^3}

{//;Raw code}
{void;
	{set;~f;{args}}
	{while;{logic;!;{regextest;{get;~f};/^-?(?:\.?\d+\.\d+|\.?\d+)$/}};
		{//;Sign convention}
		{exec;whileregex;"~f" "/--|\+\+/g" "+"}
		{exec;whileregex;"~f" "/-\+|\+-/g" "-"}

		{//;Solve x^y}
		{exec;whileregexinject;"~f" "/\s*((?:\.?\d+\.\d+|\.?\d+))\s*(\^)\s*(-?\s*(?:\.?\d+\.\d+|\.?\d+))\s*/" "{lb}lb{rb}math{lb}semi{rb}$2{lb}semi{rb}$1{lb}semi{rb}$3{lb}rb{rb}"}

		{//;Solve x*y, x/y}
		{exec;whileregexinject;"~f" "/\s*(-?\s*(?:\.?\d+\.\d+|\.?\d+))\s*([*/])\s*(-?\s*(?:\.?\d+\.\d+|\.?\d+))\s*/" "{lb}lb{rb}math{lb}semi{rb}$2{lb}semi{rb}$1{lb}semi{rb}$3{lb}rb{rb}"}

		{//;Solve x+y, x-y}
		{exec;whileregexinject;"~f" "/\s*(-?\s*(?:\.?\d+\.\d+|\.?\d+))\s*([-+])\s*(?:\.?\d+\.\d+|\.?\d+)\s*/" "{lb}lb{rb}math{lb}semi{rb}$2{lb}semi{rb}$1{lb}semi{rb}$3{lb}rb{rb}"}

		{//;Resolve (x)(y) -> x*y}
		{exec;whileregex;"~f" "/\s*\((-?(?:\.?\d+\.\d+|\.?\d+))\)\s*\((-?(?:\.?\d+\.\d+|\.?\d+))\)\s*/" "$1*$2"}

		{//;Resolve (x)y -> x*y}
		{exec;whileregex;"~f" "/\s*\(\s*(-?\s*(?:\.?\d+\.\d+|\.?\d+))\s*\)\s*(-?\s*(?:\.?\d+\.\d+|\.?\d+))\s*/" "$1*$2"}

		{//;Resolve x(y) -> x*y}
		{exec;whileregex;"~f" "/\s*(-?\s*(?:\.?\d+\.\d+|\.?\d+))\s*\(\s*(-?\s*(?:\.?\d+\.\d+|\.?\d+))\s*\)\s*/" "$1*$2"}

		{//;Resolve (x) -> x}
		{exec;whileregex;"~f" "/\s*\(\s*(-?(?:\.?\d+\.\d+|\.?\d+))\s*\)\s*/" "$1"}
	}
}{parsefloat;{get;~f}} -t Math Lexer -d This allows you to do math without having to code it. This uses two external tags to execute the code, namely `whileregex` and `whileregexinject`, which is vital to the code.