{trim;{clean;{set;~roles;393744943555936260;400106301826269184;406828219032010762;441050979396222986;507274426656489482}
{if;{logic;!;{userhasrole;{get;~roles}}};{return}}
{set;~n;{parseint;{args;0}}}
{if;{get;~n};==;NaN;
	Please enter a valid number!
	{return}
}
{if;{get;~n};>;{get;_user.join};
	That number is too high!
	{return}
}
{if;{userhasrole;393737003100930058;{get;_user.{get;~n}}};
	That user has already been accepted!
	{return}
}
{void;{roleadd;393737003100930058;{get;_user.{get;~n}}}}
{void;{roleremove;451115812426874882;{get;_user.{get;~n}}}}
User has been accepted!
}}