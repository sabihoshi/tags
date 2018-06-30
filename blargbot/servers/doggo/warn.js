!snippet submit {//;Checks if user is staff. You can remove this and do `b!cc setrole [commandname] [roles]` instead for bypassing staff requirement.}
{if;{logic;!;{ismod}};{return}}
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
{//;Set the user}
{suppresslookup}
{set;~user;{userid;{args;0}}}
{if;{get;~user};==;;{usermention}, please provide a valid user!{return}}
{//;Actually warning the user}
{void;{warn;{get;~user};{flag;c};{flag;r}}}
:ok_hand: **{username;{get;~user}}#{userdiscrim;{get;~user}}** has been given {if;0{flag;c};>;1;{flag;c} warnings.;a warning.} They now have {warnings;{get;~user}} warnings.
{//;DM the user of their warning}
{dm;{get;~user};{buildembed;author.name:{username}#{userdiscrim} ({userid});author.icon_url:{useravatar};title:You have gotten a warning!;description:You have {warnings;{get;~user}} now{newline}Reason: {get;~r};timestamp:{time};color:peach}}
{//;Automatically pardon the user after 24 hours if no time flag is set.}
{timer;
	{void;{pardon;{get;~user};{flag;c};Auto-pardon after set time.}};
	{if;{flagset;t};{flag;t};24h}
}

{//;Remove this if you're using the one above. Automatically pardon ONLY when time flag is set.}
{if;{flagset;t};
	{timer;
		{void;{pardon;{get;~user};{flag;c};Auto-pardon after set time.}};
		{flag;t}
	}
} -t Warn command with Auto Pardon (Customizable) -d This creates a Warn command that enables a timer so that they get automatically pardoned after the set amount of time. You can choose between 24 hours default, or only when `-t` flag is set.