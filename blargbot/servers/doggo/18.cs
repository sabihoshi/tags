b!cc edit 18 {if;==;1;{get;_{userid}underage};
	:x: You are not 18+ DM a moderator or admin if this is a mistake.
	{return}
}
{set;~genders;
	397168148450902017;
	400698361201688578;
	397138335556042753;
	397138333081403392;
	397166616280039425;
	400698817797685249;
	398972855968333825;
	400849341696180225;
	397142389787197461
}
{set;~assignable;
	397138335556042753;
	397138333081403392;
	397166616280039425;
	400698817797685249;
	398972855968333825;
	400849341696180225;
	397142389787197461
}
{if;==;false;{hasrole;{get;~genders};{userid}};
	:x: Please set a gender role first! Do {repeat;`.iam <@&{shift;{get;~assignable}}>` ;{length;{get;~assignable}}}
	{return}
}
{if;{hasrole;398945628090007568;{userid}};
	{void;{removerole;398945628090007568;{userid}}}
	{usermention} Removed 18+ role!;
	{void;{addrole;398945628090007568;{userid}}}
	{usermention} Added 18+ role!
}