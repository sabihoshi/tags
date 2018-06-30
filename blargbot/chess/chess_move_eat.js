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
	:x: FATAL ERROR! `side_2 is out of bounds.`
	{return}
}