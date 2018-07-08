{if;{logic;!;{iscc}};{return}}
{if;{flagset;v};
	{if;{argslength};==;2;
		{set;~user;{userid}};
		{suppresslookup}
		{set;~user;{userid;{args;1}}}
		{if;{get;~user};==;;{usermention}, please provide a valid user!{return}}
	}
	{if;{length;{get;_{get;~user}warn.log}};==;0;User does not have any logs.{return}}
	{//; eColor snippet by Allen Miquel#8168 }
	{set;~eColor;[]}
	{set;~roles;{get;~user}}
	{foreach;~color;{get;~roles};{if;{rolecolor;{get;~color}};!=;000000;{push;{get;~eColor};{rolecolor;{get;~color}}}}}
	{if;{length;{get;~eColor}};==;0;{set;~eColor;peach}}
	{set;~embed;
		author.name:{username}#{userdiscrim} ({userid});
		author.icon_url:{useravatar};
		color:{get;~eColor;0}
	}
	{apply;push;~embed;{get;_{get;~user}warn.log}}
	{embed;{apply;embedbuild;{get;~embed}}}
	{return}
}
{if;{get;~user};==;;{usermention}, please provide a valid user!{return}}
{//; Make sure array exists }
{if;{logic;!;{isarray;{get;_{get;~user}warn.log}}};
	{set;_{get;~user}warn.log;[]}
	{set;_{userid}warn.count;0}
}
{//; Push relevant info about the warn }
{push;_{get;~user}warn.log;
	fields.name:Warn #{increment;_{userid}warn.count} - {time;MMMM D, YYYY HH:mm:ss;;;{usertimezone;{get;~user}}};
	fields.value:by **{username}#{userdiscrim}** ({userid});
	fields.inline:false;

	fields.name:Reason;
	fields.value:{zws}{flag;r};
	fields.inline:true;

	fields.name:Warnings;
	fields.value:Assigned: {if;{flagset;c};{flag;c};1}{newline}New Total:{warnings;{get;~user}};
	fields.inline:true
}