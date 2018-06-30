b!cc edit underage {set;~mods;
	386511933140107267; 
	399299714698182676; 
	386522479994077184; 
	400421918584471552; 
	400425011669893121 
}
{if;==;false;{hasrole;{get;~mods};{userid}};
	:x: You are not a mod!
	{return}
}
{if;==;0;{argslength};
	:x: Please provide a user!
	{return}
}
{if;{userjoinedat;x;{args;0};quiet};==;{args;0};
  :x: The user does not exist!
  {return}
}
{set;~user;{userid;{args;0}}}
{if;==;{get;~user};{userid};
	:x: The user cannot be you!
	{return}
}
{set;_{get;~user}underage;1}
:white_check_mark: User is blacklisted now!