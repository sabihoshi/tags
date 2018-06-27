b!t edit answer {set;@{userid}time;{time;x}}{set;@{userid}omarrmath;{get;@{userid}marrmath}}{set;@{userid}marrmath;
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