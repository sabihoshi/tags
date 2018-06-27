{if;==;help;{lower;{args;0}};
**__Leaderboards System Module:__**
**1.** You must run this tag in an `{lb}exec{rb}`
**2.** The arguments used are: ```js
{lb}set{semi}var_name{semi}`name`{rb}
{lb}set{semi}leaderboard_name{semi}`name`{rb}
{lb}set{semi}crlength{semi}21{rb}
{lb}exec{semi}ldchk{rb}```
**3.** The `var_name` is the variable of the currency, for example `@{lb}userid{rb}credits`
**4.** The `leaderderboard_name` is the name of the leaderboard variable that will be used.
**5.** You must do `{lb}set{semi}crlength{semi}21{rb}` or the number in which your variable length goes. If it's `5` and user has `600` credits, it becomes `00600`. If it's not specified, it turns to 21 by default.
	{return}
}
{if;!=;;{get;@execldmodulechk};
	:x: Please run this tag in an `{lb}exec{rb}`. Do `{prefix}t ldmodulechk help` for more help.
            {return}
}
{if;==;;{get;var_name};
	:x: You didn't provide a variable! Do `{prefix}t ldmodulechk help` for more help.
		{return}
}
{if;==;;{get;leaderboard_name};
	:x: You didn't provide a leaderboard name! Do `{prefix}t ldmodulechk help` for more help.
		{return}
}
{if;!=;1;{abs;{floor;{parseint;{get;id}}}};
	{set;id;0}
}
{if;!=;0;{abs;{floor;{parseint;{get;show_rank}}}};
	{set;show_rank;1}
}
{if;==;NaN;{parseint;{get;crlength}};
	{set;crlength;21}
}
{if;<=;{get;crlength};6;
	{if;{get;crlock};;
		:x: Are you sure to set `crlength` to be low? Add `{set;crlock;true}` in your code if you are. 
			{return}
	}
}
{if;==;;{get;curr_name};
	{set;curr_name;Credits}
}
{set;{userid}credits;
	{get;{get;var_name}}
}
{if;{isarray;{get;{get;leaderboard_name}}};;
	{set;{get;leaderboard_name};[]}
}
{if;!=;{get;o{get;var_name}};{get;{get;var_name}};
	{set;o{get;var_name};{get;{get;var_name}}}
	{set;@0;
		{regexreplace;
			{get;{get;leaderboard_name}};
			/(\d+#)(\d{1,18})/g;
			$2
		}
	}
	{if;>;
		{length;
			{get;{userid}credits}
		};
		{get;crlength};
			{set;crlength;
				{length;
					{get;{userid}credits}
				}
			}
	}
	{set;nw;
		{pad;
			left;
			{repeat;0;{get;crlength}};
			0{get;{userid}credits}
		}
	}
	{if;==;-1;
		{indexof;
			{get;@0};
			{userid}
		};
			{push;{get;leaderboard_name};
				{get;nw}#{userid}
			};
			{inject;
				{lb}set{semi}
					{lb}get{semi}leaderboard_name{rb}{semi}
					{lb}regexreplace{semi}
						{lb}get{semi}{lb}get{semi}leaderboard_name{rb}{rb}{semi}
						/\d+(?=#{userid})/g{semi}
						{get;nw}
					{rb}
				{rb}
			}
	}
	{sort;{get;{get;leaderboard_name}};descending}
}