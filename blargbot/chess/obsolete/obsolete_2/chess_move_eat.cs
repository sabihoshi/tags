{if;>;{math;+;{time;x};10000};{get;~time};
  :x: Run in the main tag! 
  {return}
}
{switch;{get;~side_2};
	0;
		{set;@{get;~p}{get;~mv2};{get;~piece}}
		{set;@{get;~p}{get;~mv1};-}
		{set;~move_success;true}
		{set;~move_type;null};
	1;
		{if;!=;w;{get;@{userid}chess_color};
			:x: You can not move your piece here!
			{return}
		}
		{set;@{get;~p}{get;~mv2};{get;~piece}}
		{set;@{get;~p}{get;~mv1};-}
		{set;~move_success;true}
		{set;~move_type;eat};
	2;
		{if;!=;b;{get;@{userid}chess_color};
			:x: You can not move your piece here!
			{return}
		}
		{set;@{get;~p}{get;~mv2};{get;~piece}}
		{set;@{get;~p}{get;~mv1};-}
		{set;~move_success;true}
		{set;~move_type;eat};
	:x: FATAL ERROR! `side_2 is out of bounds.`
	{return}
}
{exec;chess_move_2;{args}}