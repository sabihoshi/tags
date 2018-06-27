{lang;cs}
{if;!=;1;{get;@{userid}chess_game};
	:x: You do not have an active chess game!
	{return}
}
{set;~p;{get;@{userid}chess_instance}}
{if;!=;{get;@{userid}chess_color};{get;@{get;~p}tm};
	:x: It is not your turn yet! Wait for your opponent to make a move!
	{return}
}
{if;<;{argslength};3;
	:x: Did you even try to move the piece?
	{return}
}
{set;~mv1;{substring;{args;1};0;2}}
{set;~mv2;{substring;{args;2};0;2}}
{if;==;{get;~mv1};{get;~mv2};
	:x: Did you even try to move the piece?
	{return}
}
{if;{logic;&&;
	{regextest;{get;~mv1};/[a-h][1-8]/i};
	{regextest;{get;~mv2};/[a-h][1-8]/i}};
	{void};
	:x: Invalid move! `{if;==;{regextest;{get;~mv1};/[a-h][1-8]/};false;{get;~mv1}} {if;==;{regextest;{get;~mv2};/[a-h][1-8]/};false;{get;~mv2}} out of bounds`
	{return}
}
{set;~a;1}{set;~1;a}{set;~b;2}{set;~2;b}{set;~c;3}{set;~3;c}{set;~d;4}{set;~4;d}{set;~e;5}{set;~5;e}{set;~f;6}{set;~6;f}{set;~g;7}{set;~7;g}{set;~h;8}{set;~8;h}
{set;~piece;{get;@{get;~p}{get;~mv1}}}
{set;~side;
	{if;==;-;{get;@{get;~p}{get;~mv1}};0;
	{if;{regextest;{get;@{get;~p}{get;~mv1}};/r|n|b|q|k|p/};1;2
	}}
}
{if;==;{if;==;w;{get;@{userid}chess_color};1;2};{get;~side};
	This is not your piece you `heccin baka` 
	{return}
}
{switch;{get;~side};
	0;
		:x: There is no piece here, what are you trying to move?
		{return};
	-1;
		:x:  FATAL ERROR! Please report to tag creator.
		p_stat {get;@{userid}p_stat}
		chess_instance {get;@{userid}chess_instance}
		side {get;~side}
		{return};
	1;
		{if;!=;b;{get;@{userid}chess_color};
			:x: This is not your piece you `heccing baka`
			{return}
		};
	2;
		{if;!=;w;{get;@{userid}chess_color};
			:x: This is not your piece you `heccing baka`
			{return}
		};
	:x:  FATAL ERROR! Please report to tag creator. `{get;~side} is undefined.`
}
{set;~piece2;{get;@{get;~p}{get;~mv2}}}
{set;~side_2;
	{if;==;-;{get;@{get;~p}{get;~mv2}};0;
	{if;{regextest;{get;@{get;~p}{get;~mv2}};/r|n|b|q|k|p/};1;2
	}}
}
{if;==;{if;==;w;{get;@{userid}chess_color};2;1};{get;~side_2};
	:x: You cannot move your piece here! {get;~side_2} 
	{return}
}
{set;~h1;{get;~{substring;{get;~mv1};0;1}}}
{set;~h2;{get;~{substring;{get;~mv2};0;1}}}
{set;~v1;{substring;{get;~mv1};1;2}}
{set;~v2;{substring;{get;~mv2};1;2}}
{set;~ver1;{if;>;{get;~v1};{get;~v2};{get;~v1};{get;~v2}}}
{set;~ver2;{if;<;{get;~v1};{get;~v2};{get;~v1};{get;~v2}}}
{set;~hor1;{if;>;{get;~h1};{get;~h2};{get;~h1};{get;~h2}}}
{set;~hor2;{if;<;{get;~h1};{get;~h2};{get;~h1};{get;~h2}}}
{switch;{get;@{userid}chess_color};
	b;
		{switch;{get;~piece};
			-;0;
			r;	
				{exec;chess_move_br;{args}};
			n;	
				{exec;chess_move_bn;{args}};
			b;	
				{exec;chess_move_bb;{args}};
			q;	
				{exec;chess_move_bq;{args}};
			k;	
				{exec;chess_move_bk;{args}};
			p;	
				{exec;chess_move_bp;{args}};
			:x: FATAL ERROR! Please report to tag creator. `chess_color and piece does not match.`
			{return}
		};
	w;
		{switch;{get;~piece};
			-;0;
			P;
				{exec;chess_move_wp;{args}};
			Q;	
				{exec;chess_move_wq;{args}};
			K;	
				{exec;chess_move_wk;{args}};
			B;	
				{exec;chess_move_wb;{args}};
			N;
				{exec;chess_move_wn;{args}};
			R;
				{exec;chess_move_wr;{args}};
			:x: FATAL ERROR! Please report to tag creator. `chess_color and piece does not match.`
			{return}
		};
	:x: FATAL ERROR! Please report to tag creator. `chess_color is out of bounds.`
	{return}
}