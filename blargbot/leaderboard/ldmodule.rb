{if;!=;1;{get;~exec};
	:x: Do `{prefix}t raw leaderboard` for help!
	{return}
}
{if;==;;{get;~credit_name};
	:x: Do `{prefix}t raw leaderboard` for help! {throw;No credit name}
	{return}
}
{if;==;;{get;~leaderboard};
	:x: Do `{prefix}t raw leaderboard` for help! {throw;No leaderboard name}
	{return}
}
{//;Sets the name by uppercasing the first letter}
{set;~name;{upper;{substring;{get;~credit_name};0;1}}{substring;{get;~credit_name};1}}

{//;Checks if the array exists}
{if;!=;true;
	{isarray;{get;{get;~leaderboard}}};
	{set;{get;~leaderboard};[]}
}
{void;
	{//;Updating the leaderboard. Checks if your credits had changed in value.}
	{exec;ldupdate}
	
	{//;Getting the leaderboard}
	
	{//;The number of entries in the leaderboard}
	{set;~mx;{length;{get;{get;~leaderboard}}}}
	
	{//;The max amount of pages in the leaderboard}
	{set;~maxpg;{ceil;{math;/;{get;~mx};10}}}
	
	{//;The page that will be taken based on arguments}
	{set;~pg;
		{if;==;0;{argslength};1;
		{if;==;NaN;{parseint;{args;0}};1;
		{if;>;{args;0};{get;~maxpg};{get;~maxpg};
		{if;==;0;{floor;{args;0}};1;
		{abs;{floor;{args;0}}}
	}}}}}
	
	{//;Multiplies the page number by 10, this is the index that we will get from leaderboard}
	{set;~mg;{math;*;10;{math;-;{get;~pg};1}}}
	
	{//;Sets maximum repeats if items exceed leaderboard length}
	{if;==;{get;~maxpg};{get;~pg};
		{set;~pgr;{math;-;{get;~mx};{get;~mg}}};
		{set;~pgr;10}
	}
	
	{//;Will get rank based on the index of your userid in the leaderboard}
	{set;~rank;
		{indexof;
			{regexreplace;{get;{get;~leaderboard}};/(?:(?:\w|`)+#)(\d{1,18})/g;$1};
			{userid}
		}
	}
	
	{//;The number of zeroes preceding the numbers when showing the leaderboard. For exmaple page 10 (91-100) has [091] - [100].}
	{set;~pad;{length;{math;+;{get;~mg};10}}}
	
	{//;Makes another array including only the userids}
	{set;~0;
		{slice;
			{regexreplace;
				{get;{get;~leaderboard}};
				/(?:\d*#)(\d{1,18})/g;$1
			};
			{get;~mg};
			{math;+;0{get;~mg};10}
		}
	}
	
	{//;Makes another array for the obsolete entries}
	{if;==;1;{get;~del_obsolete};
		{set;~obs;
			{regexreplace;
				{get;{get;~leaderboard}};
				/(?:\d*#)(\d{1,18})/g;$1
			}
		}
	}
	{//;Gets the userids based on the page number. If it is page 3, it will set ~1 - ~10 from {get;~0;0} to {get;~0;9}}
	{set;~in1;0}
	{set;~in2;-1}
	{repeat;
		{set;~{increment;~in1};{get;~0;{increment;~in2}}};
		{get;~pgr}
	}
}💴 **| {get;~name} Leaderboard**
```py
📋 Rank | Name

{set;~index;0}
{trim;
	{repeat;
		{if;!=;0;{get;~{increment;~index}};
			[{realpad;{math;+;{get;~index};{get;~mg}};{get;~pad};0;left}]{space;6}>{if;==;{username;{get;~{get;~index}};quiet};{userid;{get;~{get;~index}};quiet};
				#Missing user! - ({get;~{get;~index}}){newline}{space;12}{if;==;1;{get;~del_obsolete};Removed index {indexof;{get;~obs};{get;~{get;~index}}}{void;{splice;{get;{get;~leaderboard}};{indexof;{get;~obs};{get;~{get;~index}}};1}{set;~obs;{regexreplace;{get;{get;~leaderboard}};/(?:\d*#)(\d{1,18})/g;$1}}}};
				#{username;{get;~{get;~index}}}{newline}{space;12}{get;~name}: {get;@{userid;{get;~{get;~index}}}{get;~credit_name}}
			}{newline}
		};
		{get;~pgr}
	}
}

-------------------------------------
# Your {get;~name}: {get;@{userid}{get;~credit_name}}
😐 Rank: {increment;~rank}/{get;~mx}```