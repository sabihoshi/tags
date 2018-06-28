{if;{logic;!;{iscc}};{return;false}}
{set;~options;{get;~l}}
{switch;{length;{get;~options}};
	0;{void};
	1;{set;~item;{get;~options;0}};
		{set;~prompt;{send;{channelid};{clean;
		**{repeat;`;3}cs
		# Multiple results found!
		Please pick a number from the options below.
		{newline}{zws}{newline}{set;~c;-1}{foreach;~i;~options;[{realpad;{increment;~c};{length;{math;-;{length;{get;~options}};1}};;left}] - {get;~i}{newline}}
		--------------------
		Or type 'c' to cancel.{repeat;`;3}**}}}
		{set;~msg;
			{waitmessage;{channelid};{userid};
				{logic;||;{bool;[0...{math;-;{length;{get;~options}};1}];includes;{parseint;{messagetext}}};{bool;{lower;{messagetext}};==;c}}
			}
		}
		{switch;true;
			{bool;[0...{math;-;{length;{get;~options}};1}];includes;{parseint;{messagetext;{get;~msg;1}}}};
				{set;~item;{get;~options;{parseint;{messagetext;{get;~msg;1}}}}}{delete;{get;~prompt}};
			{bool;{lower;{messagetext;{get;~msg;1}}};==;c};
				Query cancelled in custom command `{commandname}`.{delete;{get;~prompt}}{return;false};
				Not a valid option!
				{return;false}
		}
}