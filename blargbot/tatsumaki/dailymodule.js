{if;==;help;{lower;{args;0}};**Daily Module**

**1.** You need to run this tag in an {lb}exec{semi}dailymodule[{semi}user]{rb}
**2.** To run the code properly, you need to set some variables
```js
{lb}set{semi}var_name{semi}VARIABLE_NAME{rb}
{lb}set{semi}key{semi}KEY_NAME{rb}
{lb}set{semi}cool{semi}TIME_IN_MS{rb}

Advanced:
{lb}set{semi}min{semi}MINIMUM_DAILY{rb}
{lb}set{semi}max{semi}MAXIMUM_DAILY{rb}
{lb}set{semi}is_giveable{semi}1|0{rb}
{lb}set{semi}min_user{semi}MINIMUM_DAILY{rb}
{lb}set{semi}max_user{semi}MAXIMUM_DAILY{rb}

{lb}exec{semi}dailymodule[{semi}user]{rb}```
**3.** The `variable` is the variable name, it can be like `{lb}userid{rb}credits`
**4.** The `cool` is the time of the cooldown, it is usually 1 day by default if not specified.
**5.** The `key` is the one the key of the daily. Should be just simple (can be used so you can have multiple dailies). Default is `credits` if not specified.

**Advanced**
**1.** The `min` and `max` is the one that specifies the amount of daily you get.
**2.** The `is_giveable` specifies if you can give your own daily to other people. This would mean `[{semi}user]` would be used.
**3.** The `min_user` and `max_user` is the one that specifies the amount of daily other people get.
	{return}
}
{if;==;1;{get;@execchk};
	:x: Please run this in an {lb}exec{rb}! do `{prefix}t dailymodule help` for more help!
		{return}
}
{if;==;;{get;var_name};
	:x: Please provide a variable name!
	{return}
}
{if;==;;{get;key};
	{set;key;credits}
}
{if;==;;{get;cool};
	{set;cool;{math;*;24;60;60}000}
}
{if;!=;1;{get;is_giveable};
	{set;is_giveable;0}
}
{if;==;NaN;{parseint;{get;min}};
	{set;min;200}
}
{if;==;NaN;{parseint;{get;max}};
	{set;max;200}
}
{if;==;NaN;{parseint;{get;min_user}};
	{set;min;200}
}
{if;==;NaN;{parseint;{get;max_user}};
	{set;max;400}
}
{if;!=;1;{get;is_giveable};
	{set;user;{userid}}
	{set;usr_pr;0};
	{if;==;;{args};
		{set;user;{userid}};
		{set;user;
			{if;==;{userid};{userid;{args;0}};
				{userid};{userid;{args;0}}
			}
		}
	}
	{set;usr_pr;
		{if;!=;{userid};{get;user};
			1;0
		}
	}
}
{set;{get;var_name};
	{if;==;NaN;{parseint;{get;{get;var_name}}};0;
	{if;==;;{get;{get;var_name}};0;
	{if;>=;{get;{get;var_name}};0;
		{get;{get;var_name}};0}}}
}
{set;time;{time;x}}
{set;chk;{if;>=;{get;time};0{get;@{get;user}{get;key}math};1;0}}
{set;@{get;user}{get;key}math;{if;==;1;{get;chk};{math;+;{get;time};{get;cool}};{get;@{get;user}{get;key}math}}}
{set;ref;{math;-;{get;@{get;user}{get;key}math};{get;time}}}
{if;!=;1;{get;chk};
:atm: | **{username}, your daily :yen: credits refreshes in** {void;
	{set;YYYY;{math;-;{abs;{time;YYYY;{get;ref};x}};1970}}
	{set;MM;{abs;{time;MM;{get;ref};x}}}
	{set;DD;{abs;{time;DD;{get;ref};x}}}
	{set;H;{abs;{time;H;{get;ref};x}}}
	{set;mm;{abs;{time;mm;{get;ref};x}}}
	{set;ss;{abs;{time;ss;{get;ref};x}}}
} {if;!=;0;{get;YYYY};**{get;YYYY}** year{if;>;{get;YYYY};1;s},} {if;!=;0;{get;MM};**{get;MM}** month{if;>;{get;MM};1;s},} {if;!=;0;{get;DD};**{get;DD}** day{if;>;{get;DD};1;s},} {if;!=;0;{get;H};**{get;H}** hour{if;>;{get;H};1;s},} {if;!=;0;{get;mm};**{get;mm}** minute{if;>;{get;mm};1;s}, and} **{get;ss}** second{if;>;{get;YYYY};1;s}.**;
	{set;udail;
		{randint;
			{get;min{if;==;1;{get;usr_pr};_user}};
			{get;max{if;==;1;{get;usr_pr};_user}}
		}
	}
	{set;{get;var_name};
		{math;+;
			{get;{get;var_name}};
			{get;@udail}
		}
	}
:atm: | **{username}, you received your :yen: {get;udail} daily credits!**
Total credits: **{get;{get;var_name}}**}{set;var_name}{set;key}{set;cool}{set;min}{set;max}{set;is_giveable}{set;min_user}{set;max_user}