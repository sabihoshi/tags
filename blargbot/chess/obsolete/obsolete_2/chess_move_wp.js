{lang;js}
{if;>;{get;~v1};{get;~v2};:x: Invalid move! The pawn can not move backwards!
	{return}
}
{set;~hor;
	{switch;{get;~hor1};
		{math;+;{get;~hor2};1};1;
		{get;~hor2};0;
		-1
	}
}
{set;~ver;
	{switch;{get;~ver1};
		{math;+;{get;~ver2};1};1;
		{math;+;{get;~ver2};2};2;
		-1
	}
}
{switch;-1;
	{get;~ver};:x: Invalid move! {return};
	{get;~hor};:x: Invalid move! {return}
}
{switch;{get;~hor};
	0;
		{switch;{get;~ver};
			1;
				{switch;{get;~side_2};
					0;
						{set;@{get;~p}{get;~mv2};{get;~piece}}
						{set;@{get;~p}{get;~mv1};-}
						{set;~move_success;true}
						{set;~move_type;null};
					1;:x: You can not move your piece here!
							{set;~continue;false}
							{set;~exp;taken_space};
					2;:x: You can not move your piece here!
							{set;~continue;false}
							{set;~exp;taken_space};
				};
			2;
				{if;!=;-;{get;@{get;~p}{get;{get;~h2}}{math;-;{get;~v2};1}};
					:x: You can not move your piece here! 
					{set;~continue;false}
					{set;~exp;taken_space}
					{return}
				}
				{if;==;1;{get;@{get;~p}unmoved$P_{get;~mv1}};
					{switch;{get;~side_2};
						0;
							{set;@{get;~p}{get;~mv2};{get;~piece}}
							{set;@{get;~p}unmoved$P{get;~mv1};0}
							{set;@{get;~p}{get;~mv1};-}
							{set;~move_success;true}
							{set;~move_type;null};
						1;:x: You can not move your piece here!
								{set;~continue;false}
								{set;~exp;taken_space}
								{return};
						2;:x: You can not move your piece here!
								{set;~continue;false}
								{set;~exp;taken_space}
								{return};
					};
					:x: You can not move pawns 2 spaces if it has been moved already!
					{return}
				}
		};
	1;
		{switch;{get;~ver};
			0;:x: You can not move your piece here! {return};
			1;
				{switch;{get;~side_2};
					0;
						:x: You can not move your piece here!
						{return}
					1;
						{set;@{get;~p}{get;~mv2};{get;~piece}}
						{set;@{get;~p}{get;~mv1};-}
						{set;~move_success;true}
						{set;~move_type;eat};
					2;
						:x: You can not move your piece here!
						{return};
					:x: FATAL ERROR! Please report to tag creator. `~side_2 is out of bounds.`
					{return}
				};
			2;:x: You can not move your piece here! {return};
			:x: FATAL ERROR! `~ver is out of bounds` 
			{return}
		}
}
{exec;chess_move_2;{args}}