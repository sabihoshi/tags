{//; Checks if user is staff. You can remove this and do `b!cc setrole [commandname] [roles]` instead for bypassing staff requirement. }
{if;{logic;!;{ismod}};{return}}
{if;{argslength};==;0;
	Please provide a user!
	{return}
}
{suppresslookup}
{set;~user;{userid;{args;0}}}

{//; Warn logging }
{if;{lower;{args;0}};==;view;
	{exec;warn_log;"{args}" -v};
	{exec;warn_log;{args}}
}

{//; Actually warning the user }
{if;{get;~user};==;;{usermention}, please provide a valid user!{return}}
{void;{warn;{get;~user};{flag;c};{flag;r}}}
:ok_hand: **{username;{get;~user}}#{userdiscrim;{get;~user}}** has been given {if;0{flag;c};>;1;{flag;c} warnings.;a warning.} They now have {warnings;{get;~user}} warnings.

{//; DM the user }
{exec;warn_dm}

{//; 1. Automatically pardon the user after 24 hours if no time flag is set. }

{timer;{void;{pardon;{get;~user};{flag;c};Auto-pardon after set time.}};{if;{flagset;t};{flag;t};24h}}{return}

{//; 2. Automatically pardon ONLY when time flag is set. Remove if using 1. }
{if;{flagset;t};{timer;{void;{pardon;{get;~user};{flag;c};Auto-pardon after set time.}};{flag;t}}}