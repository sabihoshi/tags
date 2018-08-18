{if;{logic;!;{isstaff}};{return}}
{if;{argslength};==;0;
	{set;~t;5};
	{set;~t;{abs;{parseint;{args;0}}}}
	{if;{get;~t};==;NaN;{set;~t;5}}
}
{for;~i;{math;-;{length;{get;_userjoins}};1};>=;0;-1;
	{if;{math;-;{time;X};{userjoinedat;X;{get;_userjoins;{get;~i}}}};<=;{math;*;{get;~t};60};
		{set;~msg;Banned {username;{get;_userjoins;{get;~i}}}#{userdiscrim;{get;_userjoins;{get;~i}}} ({userid;{get;_userjoins;{get;~i}}}){newline}}
		{if;{ban;{splice;_userjoins;{get;~i};1};1;[Anti-raid];{flag;~r}};{get;~msg}};
		{return}
	}
}