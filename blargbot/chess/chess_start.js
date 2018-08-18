{if;{get;~key};!=;{get;@chess.key};
	{func.error;Please run this tag in a cc! Do `{prefix}cc import chess chess` to continue.}
	{return}
}
{//; Make sure you don't have an existing game }
{if;{get;_{userid}chess.start};==;1;
	{func.error;You already have a chess game!}
	{return}
}
{//; Lookup for the opponent }
{suppresslookup}
{set;~en;{userid;{args}}}
{if;{get;~en};==;;
	{func.error;Please provide a valid user!}
	{return}
}
{//; Make sure opponent doesn't have an existing game }
{if;{get;_{get;~en}chess.start};==;1;
	{func.error;Your opponent already has a chess game!}
	{return}
}
{//; Set board color }
{set;_{userid}chess.color;w}
{set;_{get;~en}chess.color;b}
{set;_{get;~p}chess.w;{userid}}
{set;_{get;~p}chess.b;{get;~en}}
{//; Setup game variables }
{set;_{userid}chess.game;{base;{time;x};10;16}}
{set;_{get;~en}chess.game;{get;_{userid}chess.game}}
{set;~p;{get;_{userid}chess.game}}
{set;_{get;~p}chess.move;1}
{set;_{get;~p}chess.tm;w}
{set;_{get;~p}chess.tm;b}
{func.default}
{//; White pieces }
{set;_{get;~p}a1;R}
{set;_{get;~p}b1;N;a3;c3}
{set;_{get;~p}c1;B}
{set;_{get;~p}d1;Q}
{set;_{get;~p}e1;K}
{set;_{get;~p}f1;B}
{set;_{get;~p}g1;N;f3;h3}
{set;_{get;~p}h1;R}
{//; White Pawns }
{for;~H;1;<=;8;
	{set;_{get;~p}{get;~{get;~H}}2.moved;false}
	{set;_{get;~p}{get;~{get;~H}}2;
		P;
		{get;~{get;~H}}3;
		{get;~{get;~H}}4
	}
}
{//; Black pieces }
{set;_{get;~p}a8;["r"]}
{set;_{get;~p}b8;["n"];a6;c6}
{set;_{get;~p}c8;["b"]}
{set;_{get;~p}d8;["q"]}
{set;_{get;~p}e8;["k"]}
{set;_{get;~p}f8;["b"]}
{set;_{get;~p}g8;["n"];f6;h6}
{set;_{get;~p}h8;["r"]}
{//; Black Pawns }
{for;~H;1;<=;8;
	{set;_{get;~p}{get;~{get;~H}}7.moved;false}
	{set;_{get;~p}{get;~{get;~H}}7;
		p;
		{get;~{get;~H}}6;
		{get;~{get;~H}}5
	}
}
{//; Empty pieces }
{for;~V;3;<=;6;
	{for;~H;1;<=;8;
		{set;_{get;~p}{get;~{get;~H}}{get;~V};_}
	}
}
{//; Positions being attacked }
{set;_{get;~p}attacked.w;a6;c6;f6;h6}
{for;~H;1;<=;8;
	{push;_{get;~p}attacked.w;
		{get;~{get;~H}}6;
		{get;~{get;~H}}5
	}
}
{set;_{get;~p}attacked.b;a3;c3;f3;h3}
{for;~H;1;<=;8;
	{push;_{get;~p}attacked.b;
		{get;~{get;~H}}3;
		{get;~{get;~H}}4
	}
}
{//; Output the board }
{func.chess.board;**Game started!**}