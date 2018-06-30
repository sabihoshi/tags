{lang;js}
{set;~hor;{math;-;{get;~hor1};{get;~ver1}}}
{set;~ver;{math;-;{get;~hor2};{get;~ver2}}}
{if;!=;{get;~hor};{get;~ver};
	:x: Invalid move! You can only move diagonally. {return}
}
{set;~i_h1;{get;~h1}}
{set;~i_v1;{get;~v1}}
{repeat;
	{void;
		{{if;>;{get;~h1};{get;~h2};de;in}crement;~i_h1}
		{{if;>;{get;~v1};{get;~v2};de;in}crement;~i_v1}
	}
	{if;!=;-;{get;@{get;~p}{get;~{get;~i_h1}}{get;~i_v1}};
		{set;~continue;0}
		{set;~exp;piece_obstruct}
	};
	{math;-;{get;~ver1};{get;~ver2};1}
}
{if;==;0;{get;~continue};:x: You cannot move your piece here!
	{set;~continue;false}
	{set;~exp;taken_space}
	{return}
}
{exec;chess_move_eat;{args}}