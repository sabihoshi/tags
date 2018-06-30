{//; Styles to choose from:
	0: Delete all empty roles
	1: Delete all 'new role' roles
	2: Delete all roles without color
 }
{set;~style;0}
{foreach;~role;{roles};
	{switch;{get~style};
		0;
			{if;{rolemembers;{get;~role}};==;0;
				{roledelete;{get;~role}}
			};
		1;
			{if;{rolename;{get;~role}};==;new role;
				{roledelete;{get;~roles}}
			};
		2;
			{if;{rolecolor;{get;~role}};==;000000;
				{roledelete;{get;~roles}}
			}
	}
}