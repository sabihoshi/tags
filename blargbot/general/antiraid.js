{if;{logic;!;{isstaff}};{return}}
{if;{argslength};==;0;
	{set;~t;5};
	{set;~t;{abs;{parseint;{args;0}}}}
	{if;{get;~t};==;NaN;{set;~t;5}}
}
{foreach;~user;_userjoins;
	{if;{math;-;{time;X};{userjoinedat;X;{get;~user}}};<=;{math;*;{get;~t};60};
		{ban;{get;~user};1;[Anti-raid];{flag;~r}}
	}
}
{set;_userjoins;[]}{if;{logic;!;{isstaff}};{return}}
{if;{argslength};==;0;
	{set;~t;5};
	{set;~t;{abs;{parseint;{args;0}}}}
	{if;{get;~t};==;NaN;{set;~t;5}}
}
{foreach;~user;_userjoins;
	{if;{math;-;{time;X};{userjoinedat;X;{get;~user}}};<=;{math;*;{get;~t};60};
		{ban;{get;~user};1;[Anti-raid];{flag;~r}}
	}
}
{set;_userjoins;[]}