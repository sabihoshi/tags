{if;{logic;!;{iscc}};{return}}
{dm;{get;~user};{embedbuild;
	author.name:{username;{get;~user}}#{userdiscrim;{get;~user}} ({userid;{get;~user}});
	author.icon_url:{useravatar;{get;~user}};
	footer.text:{username}#{userdiscrim} ({userid});
	footer.icon_url:{useravatar};
	timestamp:{time};
	color:peach;

	title:You have gotten a warning in {guildname}!;

	fields.name:Type;
	fields.value:Warning;
	fields.inline:true;

	fields.name:Reason;
	fields.value:{zws}{flag;r};
	fields.inline:true;

	fields.name:Warnings;
	fields.value:Assigned: {if;{flagset;c};{flag;c};1}{newline}New Total:{warnings;{get;~user}};
	fields.inline:true
}}