{set;@marerm;```rb
`Marriage Menu` ```
Always prefix tags with `{prefix}t`.

**1. `{prefix}t {get;@marcmd} propose @user` - Proposes to the user.
2. `{prefix}t {get;@marcmd} deny` - Denies the proposal.
3. `{prefix}t {get;@marcmd} cancel` - Cancels the proposal.
4. `{prefix}t {get;@marcmd} accept` - Accepts the marriage.
5. `{prefix}t {get;@marcmd} divorce` - Divorces a marriage.
6. `{prefix}t {get;@marcmd} status [@user]` - Checks your status. If `@user` - is specified, it checks the status of that user.**

```py
>>> This marriage system was made by Kao#9678```}{set;@marerm1;**❎ | That's not a recognized command. Do `{prefix}t {get;@marcmd} help` for more help.**}{set;@divm1;This will divorce you and your partner. You won't be able to marry this user again. Are you sure? Type `{prefix}t {get;@marcmd} divorce accept`.}{set;@pre25; to accept the proposal, do `{prefix}t {get;@marcmd} accept` or `{prefix}t {get;@marcmd} cancel` to cancel it.}{set;@marer4;💒 | {username}, you are now successfully wed with}{set;@marer5;❎ | No one has proposed to you yet! Propose by doing `{prefix}t {get;@marcmd} propose @user`.}{set;@diver3;**💔 | {username}** and}{set;@pre14;, to accept type `{prefix}t {get;@marcmd} accept`.}{if;==;{argslength};
	0;{get;@marerm};{set;0;
	{switch;{lower;{args;0}};
		help;0;
		status;1;
		propose;2;
		marry;3;
		accept;3;
		yes;3;
		deny;-3;
		cancel;-3;
		no;-3;
		divorce;4;
		0
	}}
}{switch;{get;0};
		0;{get;@marerm};
		1;{if;==;info;{lower;{args;0}};
	{set;@{userid}info;{args;1;n}}{if;<;{argslength};2;🆗 | Cleared your info.;🆗 | Set your info.};
			{switch;{argslength};
				1;{set;@0;{userid}};
				{set;@0;{userid;{args;0}}}
			}Relationship status of {username;{get;@0}}: **{if;==;1;{get;@{get;@0}status};Married;Single}**{if;!=;;{get;@{get;@0}info};{newline}Info: {get;@{get;@0}info}}{if;==;{get;@{get;@0}status};1;{newline}💒 | {randchoose;Happily;Is;Successfully;Bound and;Vowed and} {randchoose;wedded;married;together;coupled} {randchoose;with;to;together with} **{username;{get;@{get;@0}partner}}**}
};
		2;{if;==;{argslength};
    0;{set;@0;######};{set;@0;{userid;{args;0}}}{set;@{get;@0}marrystat;{if;>;{math;-;{time;x};{get;@2wk}};{round;{usercreatedat;x;{get;@0}}};1;0}}
}{set;@{userid}marrystat;{if;>;{math;-;{time;x};{get;@2wk}};{round;{usercreatedat;x;{userid}}};1;0}}{if;==;{get;@0};######;
    {set;@{userid}propelig;4};
    {set;@{userid}propelig;
        {if;==;{get;@kao};{userid};1;
        {if;!=;832961;{get;@scd};0;
        {if;==;1;{get;@{userid}bl};16;
        {if;==;1;{get;@{get;@0}bl};17;
        {if;==;1;{get;@{userid}status};15;
        {if;==;1;{get;@{get;@0}status};6;
        {if;==;1;{get;@{userid}proby};24;
        {if;==;1;{get;@{get;@0}proby};
            {if;==;{userid};{get;@{get;@0}propose};26;10};
        {if;==;{get;@0};{get;@{userid}propose};2;
        {if;==;1;{get;@{userid}proposed};3;
        {if;!=;18;{length;{get;@0}};5;
        {if;==;{userid};{userid;{args;0}};7;
        {if;==;0;{get;@{userid}marrystat};8;
        {if;==;0;{get;@{get;@0}marrystat};9;
        {if;==;1;{get;@{userid}${get;@0}};11;
        {if;==;1;{get;@{get;@0}${userid}};12;
        1}}}}}}}}}}}}}}}}}}{switch;{get;@{userid}propelig};
        0;❎ | **An error occurred!**;
        1;⛪ | {username} {aget;pre13} {username;{get;@0}}.
{username;{get;@0}}{aget;pre14}
            {set;@{userid}propose;{get;@0}}
            {set;@{get;@0}propose;{userid}}
            {set;@{userid}proposed;{if;==;{userid};{get;@kao};0;1}}
            {set;@{get;@0}proby;1};
        10;{get;@pre10} {username;{get;@{get;@0}propose}} {get;@pre23};
        24;{get;@pre24} {username;{get;@{userid}propose}} {get;@pre25};
        26;{get;@pre26}
{username;{get;@{get;@0}propose}} {get;@pre14};
        {get;@pre{get;@{userid}propelig}}}
			4;{set;@{userid}time;{time;x}}{set;@{userid}omarrmath;{get;@{userid}marrmath}}{set;@{userid}smarrmath;{if;>=;{get;@{userid}time};{get;@{userid}omarrmath};1;0}}{set;@{userid}refmath;{math;-;{get;@{userid}marrmath};{get;@{userid}time}}}{set;@{userid}divelig;
	{if;!=;1;{get;@{userid}status};3;
	{if;==;0;{get;@{userid}smarrmath};2;
	{if;==;accept;{lower;{args;0}};1;4}}}
}{if;==;1;{get;@{userid}divelig};{exec;marset;{get;@{userid}partner}};{exec;marset1}
}{switch;{get;@{userid}divelig};
	2;{get;@diver1}{set;YYYY;{math;-;{abs;{time;YYYY;{get;@{userid}refmath};x}};1970}}{set;MM;{abs;{time;MM;{get;@{userid}refmath};x}}}{set;DD;{abs;{time;DD;{get;@{userid}refmath};x}}}{set;H;{abs;{time;H;{get;@{userid}refmath};x}}}{set;mm;{abs;{time;mm;{get;@{userid}refmath};x}}}{set;ss;{abs;{time;ss;{get;@{userid}refmath};x}}} {if;!=;0;{get;YYYY};**{get;YYYY}** year{if;>;{get;YYYY};1;s},} {if;!=;0;{get;MM};**{get;MM}** month{if;>;{get;MM};1;s},} {if;!=;0;{get;DD};**{get;DD}** day{if;>;{get;DD};1;s},} {if;!=;0;{get;H};**{get;H}** hour{if;>;{get;H};1;s},} {if;!=;0;{get;mm};**{get;mm}** minute{if;>;{get;mm};1;s}, and} **{get;ss}** second{if;>;{get;YYYY};1;s}.;
	3;{get;@diver2};
	4;{get;@divm1};
	1;{get;@diver3} {username;{get;@{userid}partner}} {get;@diver4}
	{set;@{userid}${get;@{userid}partner;1}}
	{set;@{get;@{userid}partner}status;0}
	{set;@{get;@{userid}partner}partner;0}
	{set;@{userid}status;0}
	{set;@{userid}partner;0};
	❎ | An error occurred!
};{set;@{userid}time;{time;x}}{set;@{userid}omarrmath;{get;@{userid}marrmath}}{set;@{userid}marrmath;
	{math;+;{get;@{userid}time};{get;@3d}}
}{set;@{userid}marelig;
	{if;==;{args;0};cancel;3;
	{if;==;1;{get;@{userid}status};2;
	{if;==;1;{get;@{get;@{userid}propose}status};2;
	{if;==;0;{get;@{userid}proby};5;
	{if;==;{lower;{args;0}};
		accept;{if;==;1;{get;@{userid}proposed};4;1};
		0}}}}}
}{switch;{get;@{userid}marelig};
	0;❎ | That's not a valid answer!;
	1;{get;@marer4} {username;{get;@{userid}propose}}!
		{set;@{get;@{userid}propose}status;1}
		{set;@{get;@{userid}propose}partner;{userid}}
		{set;@{get;@{userid}propose}proposed;0}
		{set;@{userid}status;1}
		{set;@{userid}proby;0}
		{set;@{userid}partner;{get;@{userid}propose}}
		{set;@{get;@{userid}partner}marrmath;{get;@{userid}marrmath}}
		{set;@{get;@{userid}propose}propose;0}
		{set;@{userid}propose;0};
	2;{get;@marer1};
	3;{get;@marer2}
		{set;@{get;@{userid}propose}proposed;0}
		{set;@{get;@{userid}propose}proby;0}
		{set;@{get;@{userid}propose}propose;0}
		{set;@{userid}proposed;0}
		{set;@{userid}proby;0}
		{set;@{userid}propose;0};
	4;{get;@marer3};
	5;{get;@marer5};
}{set;@{userid}marrmath;{get;@{userid}{if;!=;1;{get;@{userid}marelig};o}marrmath}}
}