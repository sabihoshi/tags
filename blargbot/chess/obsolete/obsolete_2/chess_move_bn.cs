{lang;js}
{set;~hor;
	{switch;{get;~hor1};
		{math;+;{get;~hor2};1};1{set;~h_m;v};
		{math;+;{get;~hor2};2};2{set;~h_m;h};
		0
	}
}
{set;~ver;
	{switch;{get;~ver1};
		{math;+;{get;~ver2};2};1{set;~v_m;v};
		{math;+;{get;~ver2};1};2{set;~v_m;h};
		0
	}
}
{if;==;{get;~hor};{get;~ver};
	{if;==;0;{get;~hor};
		:x: Invalid move!
		{return}
	};
	:x: Invalid move!
	{return}
}
{set;~i_h;{get;~h2}}
{set;~i_v;{get;~v2}}
{if;!=;{get;~h_m};{get;~v_m};
	:x: FATAL ERROR! Please report to tag creator. `h_m and v_m does not match.`
	{return}
}
{exec;chess_move_eat;{args}}