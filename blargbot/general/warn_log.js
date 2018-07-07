b!snippet submit {if;{logic;!;{iscc}};{return}}
{//; Make sure array exists }
{if;{logic;!;{isarray;{get;_{get;~user}warn.log}}};
	{set;_{get;~user}warn.log;[]}
	{set;_{userid}warn.count;0}
}
{//; Push relevant info about the warn }
{push;_{get;~user}warn.log;
	fields.name:Warn #{increment;_{userid}warn.count};
	fields.inline:false;

	fields.name:Type;
	fields.value:Warning;
	fields.inline:true;

	fields.name:Reason;
	fields.value:Warning;
	fields.inline:true;

	fields.name:Warnings;
	fields.value:Warning;
	fields.inline:true;