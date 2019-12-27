{if;{logic;!;{iscc}};{return}}

{suppresslookup}
{set;~user;{args;0}}
{if;{get;~user};==;{null};{return}}

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