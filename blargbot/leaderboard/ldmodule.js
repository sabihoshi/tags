{if;==;help;{lower;{args;0}};
**__Leaderboards System Module:__**
**1.** You must run this tag in an `{lb}exec{rb}`
**2.** The arguments used are: ```js
{lb}set{semi}var_name{semi}`name`{rb}
{lb}set{semi}leaderboard_name{semi}`name`{rb}
{lb}set{semi}id{semi}1|0{rb}
{lb}set{semi}crlength{semi}21{rb}

Optional:
{lb}set{semi}rand_user{semi}1|0{rb}
{lb}set{semi}curr_name{semi}`name`{rb}
{lb}set{semi}header{semi}📋 Rank | Name{rb}
{lb}set{semi}show_rank{semi}1|0{rb}

{lb}exec{semi}ldmodule{semi}[page_no]{rb}```
**3.** The `var_name` is the variable of the currency, for example `@{lb}userid{rb}credits`
**4.** The `leaderderboard_name` is the name of the leaderboard variable that will be used.
**5.** The `-id` flag specifies if the user ID is included in the leaderboards.
**6.** The page_no is optional, it defaults to 1.
**7.** You must do `{lb}set{semi}crlength{semi}21{rb}` or the number in which your variable length goes. If it's `5` and user has `600` credits, it becomes `00600`. If it's not specified, it turns to 21 by default.
**8.** `curr_name` is the name of the currency. Credits is the default name.
	{return}
}
{if;!=;;{get;@execldmodule};
	:x: Please run this tag in an `{lb}exec{rb}`. Do `{prefix}t ldmodule help` for more help.
            {return}
}
{if;==;;{get;var_name};
	:x: You didn't provide a variable! Do `{prefix}t ldmodule help` for more help.
		{return}
}
{if;==;;{get;leaderboard_name};
	:x: You didn't provide a leaderboard name! Do `{prefix}t ldmodule help` for more help.
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
{if;==;1;{get;rand_user};
	{set;~user;{randuser}};
	{set;~user;{userid}}
}
{set;{get;~user}credits;
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
			{get;{get;~user}credits}
		};
		{get;crlength};
			{set;crlength;
				{length;
					{get;{get;~user}credits}
				}
			}
	}
	{set;nw;
		{pad;
			left;
			{repeat;0;{get;crlength}};
			0{get;{get;~user}credits}
		}
	}
	{if;==;-1;
		{indexof;
			{get;@0};
			{get;~user}
		};
			{push;{get;leaderboard_name};
				{get;nw}#{get;~user}
			};
			{inject;
				{lb}set{semi}
					{lb}get{semi}leaderboard_name{rb}{semi}
					{lb}regexreplace{semi}
						{lb}get{semi}{lb}get{semi}leaderboard_name{rb}{rb}{semi}
						/\d+(?=#{get;~user})/g{semi}
						{get;nw}
					{rb}
				{rb}
			}
	}
	{sort;{get;{get;leaderboard_name}};descending}
	{set;@0;
		{regexreplace;
			{get;{get;leaderboard_name}};
			/(\d+#)(\d{1,18})/g;
			$2
		}
	}
	{set;~mx;
		{length;{get;@0}}
	}
	{set;~maxpg;
		{ceil;
			{math;/;{get;~mx};10}
		}
	}
	{set;~pg;
		{if;==;0;{argslength};1;
		{if;==;NaN;{parseint;{args;0}};1;
		{if;>;{args;0};{get;~maxpg};{get;~maxpg};
		{if;==;0;{floor;{args;0}};1;
		{abs;{floor;{args;0}}}
	}}}}}
	{set;~mg;
		{math;*;10;
			{math;-;{get;~pg};1}
		}
	}
	{set;@0;
		{slice;
			{regexreplace;
				{get;{get;leaderboard_name}};
				/\d+#(\d{1,18})/g;
				$1
			};
			{get;~mg};
			{math;+;10;{get;~mg}}
		}
	}
	{set;@1;{get;@0;0}}
	{set;@2;{get;@0;1}}
	{set;@3;{get;@0;2}}
	{set;@4;{get;@0;3}}
	{set;@5;{get;@0;4}}
	{set;@6;{get;@0;5}}
	{set;@7;{get;@0;6}}
	{set;@8;{get;@0;7}}
	{set;@9;{get;@0;8}}
	{set;@10;{get;@0;9}}
}```py
{get;header}                  

{trim;{if;!=;NaN;{parseint;{get;@1}};{if;<=;17;{length;{get;@1}};{pad;right;{space;9};[{math;+;1;{get;~mg}}]}> #{username;{get;@1}} {if;==;1;{get;id};({get;@1})}
{space;2}{get;curr_name}: {get;{get;@1}credits}}}
{if;!=;NaN;{parseint;{get;@2}};{if;<=;17;{length;{get;@2}};{pad;right;{space;9};[{math;+;2;{get;~mg}}]}> #{username;{get;@2}} {if;==;1;{get;id};({get;@2})}
{space;2}{get;curr_name}: {get;{get;@2}credits}}}
{if;!=;NaN;{parseint;{get;@3}};{if;<=;17;{length;{get;@3}};{pad;right;{space;9};[{math;+;3;{get;~mg}}]}> #{username;{get;@3}} {if;==;1;{get;id};({get;@3})}
{space;2}{get;curr_name}: {get;{get;@3}credits}}}                     
{if;!=;NaN;{parseint;{get;@4}};{if;<=;17;{length;{get;@4}};{pad;right;{space;9};[{math;+;4;{get;~mg}}]}> #{username;{get;@4}} {if;==;1;{get;id};({get;@4})}
{space;2}{get;curr_name}: {get;{get;@4}credits}}}
{if;!=;NaN;{parseint;{get;@5}};{if;<=;17;{length;{get;@5}};{pad;right;{space;9};[{math;+;5;{get;~mg}}]}> #{username;{get;@5}} {if;==;1;{get;id};({get;@5})}
{space;2}{get;curr_name}: {get;{get;@5}credits}}}
{if;!=;NaN;{parseint;{get;@6}};{if;<=;17;{length;{get;@6}};{pad;right;{space;9};[{math;+;6;{get;~mg}}]}> #{username;{get;@6}} {if;==;1;{get;id};({get;@6})}
{space;2}{get;curr_name}: {get;{get;@6}credits}}}
{if;!=;NaN;{parseint;{get;@7}};{if;<=;17;{length;{get;@7}};{pad;right;{space;9};[{math;+;7;{get;~mg}}]}> #{username;{get;@7}} {if;==;1;{get;id};({get;@7})}
{space;2}{get;curr_name}: {get;{get;@7}credits}}}
{if;!=;NaN;{parseint;{get;@8}};{if;<=;17;{length;{get;@8}};{pad;right;{space;9};[{math;+;8;{get;~mg}}]}> #{username;{get;@8}} {if;==;1;{get;id};({get;@8})}
{space;2}{get;curr_name}: {get;{get;@8}credits}}}                      
{if;!=;NaN;{parseint;{get;@9}};{if;<=;17;{length;{get;@9}};{pad;right;{space;9};[{math;+;9;{get;~mg}}]}> #{username;{get;@9}} {if;==;1;{get;id};({get;@9})}
{space;2}{get;curr_name}: {get;{get;@9}credits}}}
{if;!=;NaN;{parseint;{get;@10}};{if;<=;17;{length;{get;@10}};{pad;right;{space;9};[{math;+;10;{get;~mg}}]}> #{username;{get;@10}} {if;==;1;{get;id};({get;@10})}
{space;2}{get;curr_name}: {get;{get;@10}credits}}}}
                        
-------------------------------------
# Your {get;curr_name}: {get;{get;~user}credits}
{if;==;1;{get;show_rank};😐 Rank: {math;+;1;{indexof;{get;@0};{get;~user}}}/{get;~mx}}```{set;var_name}{set;leaderboard_name}{set;id;0}{set;crlength;21}{set;curr_name;Credits}{set;crlock;false}{set;header;📋 Rank | Name}{set;show_rank;1}{set;rand_user;0}