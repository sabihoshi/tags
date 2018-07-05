{lang;cs}
{set;~hor;{if;!=;{get;~hor1};{get;~hor2};true{set;~rook_move;h};false}}
{set;~ver;{if;!=;{get;~ver1};{get;~ver2};true{set;~rook_move;v};false}}
{if;{logic;&&;{get;~hor};{get;~ver}};
	:x: Invalid move! Rooks can only move horizontally or vertically, it cannot be both.
	{return};
	{void}
}
{switch;{get;~rook_move};
	h;
		{if;!=;{get;~v1};{get;~v2};
			:x: FATAL ERROR! `v1 and v2 do not match`
			{return}
		}
		{set;~i_h1;{get;~hor2}}
		{if;==;{math;-;{get;~hor1};{get;~hor2}};1;
			{set;~continue;true};
			{repeat;
				{void;
					{increment;~i_h1}
				}
				{if;!=;-;{get;@{get;~p}{get;~{get;~i_h1}}{get;~v1}};
					{set;~continue;false}
				};
				{math;-;{get;~hor1};{get;~hor2};1}
			}
		}
		{if;==;false;{get;~continue};:x: Invalid move!
			{return}
		}
		{switch;{get;~side_2};
			0;
				{set;@{get;~p}{get;~mv2};{get;~piece}}
				{set;@{get;~p}{get;~mv1};-}
				{set;~move_success;true};
			1;
				{if;!=;w;{get;@{userid}chess_color};
					:x: You can not move your piece here!
					{return}
				}
				{set;@{get;~p}{get;~mv2};{get;~piece}}
				{set;@{get;~p}{get;~mv1};-}
				{set;~move_success;true};
			2;
				{if;!=;b;{get;@{userid}chess_color};
					:x: You can not move your piece here!
					{return}
				}
				{set;@{get;~p}{get;~mv2};{get;~piece}}
				{set;@{get;~p}{get;~mv1};-}
				{set;~move_success;true};
			:x:  `side_2 is out of bounds.`
			{return}
		}
		{set;~attack;true};
	v;
		{if;!=;{get;~h1};{get;~h2};
			:x: FATAL ERROR! `h1 and h2 do not match`
			{return}
		}
		{set;~i_v1;{get;~ver2}}
		{if;==;{math;-;{get;~ver1};{get;~ver2}};1;
			{set;~continue;true};
			{repeat;
				{void;
					{increment;~i_v1}
				}
				{if;!=;-;{get;@{get;~p}{get;~{get;~h1}}{get;~i_v1}};
					{set;~continue;false};
				};
				{math;-;{get;~ver1};{get;~ver2};1}
			}
		}
		{if;==;false;{get;~continue};:x: Invalid move!
			{return}
		}
		{switch;{get;~side_2};
			0;
				{set;@{get;~p}{get;~mv2};{get;~piece}}
				{set;@{get;~p}{get;~mv1};-}
				{set;~move_success;true};
			1;
				{if;!=;w;{get;@{userid}chess_color};
					:x: You can not move your piece here!
					{return}
				}
				{set;@{get;~p}{get;~mv2};{get;~piece}}
				{set;@{get;~p}{get;~mv1};-}
				{set;~move_success;true};
			2;
				{if;!=;b;{get;@{userid}chess_color};
					:x: You can not move your piece here!
					{return}
				}
				{set;@{get;~p}{get;~mv2};{get;~piece}}
				{set;@{get;~p}{get;~mv1};-}
				{set;~move_success;true};
			:x:  `side_2 is out of bounds.`
			{return}
		}
		{set;~attack;true}
}
{if;==;true;{get;~move_success};
	{switch;{get;~mv1};
		a8;{set;@{get;~p}unmoved$r_a8;0};
		h8;{set;@{get;~p}unmoved$r_h8;0};
	}
}