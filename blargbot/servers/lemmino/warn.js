{//;Help if there's no arguments given}
{if;{argslength};==;0;
	{clean;**__Command Name__**: warn
	**__Usage__**: `warn <user> [flags]`
	Issues a warning.
	If mod-logging is enabled, the warning will be logged.
	If `kickat` and `banat` have been set using the settings command, the target could potentially get banned or kicked.

	**__Flags__**:
	​ ​ ​ ​ `-r` The reason for the warning.
	​ ​ ​ ​ `-c` The number of warnings that will be issued.
	​ ​ ​ ​ `-t` The length of time before user will automatically get pardoned.
	}
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
{void;
	{roleadd;327953998663385088;{get;~user}}
	{roleremove;462822300383707137;{get;~user}}
	{roleremove;326422286842200064;{get;~user}}
}
{//; DM the user }
{exec;warn_dm}
{//; Automatically pardon the user after 24 hours if no time flag is set. Ignore if more than two warnings. }
{switch;{warnings;{get;~user}};
	0;{void};
	1;
		{timer;
			{void;{pardon;{get;~user};{flag;c};Auto-pardon after set time.}{roleremove;327953998663385088;{get;~user}}};
			{if;{flagset;t};{flag;t};24h}
		};
	2;
		{set;_{userid}kicked;true};
		{set;_{userid}banned;true}
}
{timer;{send;326759213261127680;Issued by {usermention}};15s}