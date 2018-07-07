{lang;js}
{switch;{get;~mv2};
	g1;
		{if;{logic;&&;{if;==;1;{get;@{get;~p}unmoved$K};true;false};{if;==;1;{get;@{get;~p}unmoved$R_h1};true;false}};
			{set;~castling;true};
			:x: The King or Rook has already moved and you cannot castle anymore!
			{return}
		}
		{if;!=;-;{get;@{get;~p}f1};{set;~continue;false}}
		{if;!=;-;{get;@{get;~p}g1};{set;~continue;false}}
		{if;==;false;{get;~continue};:x: Invalid move!
			{return}
		}
		{switch;{get;~side_2};
			0;
				{if;!=;R;{get;@{get;~p}h1};:x: FATAL ERROR! Please report to tag creator. `rook not found in h1`
					{return}
				}
				{if;!=;true;{get;~castling};:x: FATAL ERROR! Please report to tag creator. `castling is not true`
					{return}
				}
				{set;@{get;~p}{get;~mv2};{get;~piece}}
				{set;@{get;~p}{get;~mv1};-}
				{set;@{get;~p}f1;R}
				{set;@{get;~p}h1;-}
				{set;@{get;~p}unmoved$R_h1;0}
				{set;@{get;~p}unmoved$K;0}
				{set;~move_success;true}
				{exec;chess_move_2};
			:x: FATAL ERROR! `{lb}userid{rb}side_2 out of bounds`
				{return}
		};
	c1;
		{if;{logic;&&;{if;==;1;{get;@{get;~p}unmoved$K};true;false};{if;==;1;{get;@{get;~p}unmoved$R_a1};true;false}};
			{set;~castling;true};
			:x: The King or Rook has already moved and you cannot castle anymore!
			{return}
		}
		{if;!=;-;{get;@{get;~p}b1};{set;~continue;false}}
		{if;!=;-;{get;@{get;~p}c1};{set;~continue;false}}
		{if;!=;-;{get;@{get;~p}d1};{set;~continue;false}}
		{if;==;false;{get;~continue};:x: Invalid move!
			{return}
		}
		{switch;{get;~side_2};
			0;
				{if;!=;R;{get;@{get;~p}h1};:x: FATAL ERROR! Please report to tag creator. `rook not found in h1`
					{return}
				}
				{if;!=;true;{get;~castling};:x: FATAL ERROR! Please report to tag creator. `castling is not true`
					{return}
				}
				{set;@{get;~p}{get;~mv2};{get;~piece}}
				{set;@{get;~p}{get;~mv1};-}
				{set;@{get;~p}d1;R}
				{set;@{get;~p}a1;-}
				{set;@{get;~p}unmoved$R_a1;0}
				{set;@{get;~p}unmoved$K;0}
				{set;~move_success;true}
				{exec;chess_move_2};
			:x: FATAL ERROR! `{lb}userid{rb}side_2 out of bounds`
				{return}
		};
		{set;~hor;
		{switch;{get;~hor1};
			{math;+;{get;~hor2};0};0;
			{math;+;{get;~hor2};1};1;
			-1
			}
		}
		{set;~ver;
			{switch;{get;~ver1};
				{math;+;{get;~ver2};0};0;
				{math;+;{get;~ver2};1};1;
				-1
			}
		}
		{switch;-1;
			{get;~ver};:x: Invalid move! {return};
			{get;~hor};:x: Invalid move! {return}
		}
		{set;~move_success;true}
		{set;@{get;~p}unmoved$K;0}
		{exec;chess_move_eat;{lower;{args}}}
}