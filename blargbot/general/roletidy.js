{foreach;~role;{roles};
	{if;{rolemembers;{get;~role}};==;0;
		{roledelete;{get;~role}}
	}
}