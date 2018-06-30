{lang;js}
{switch;{get;~move_success};
	1;{void};
	true;{void};
	:x: Invalid move!
	{return}
}
{if;==;eat;{get;~move_type};**Ate enemy {switch;{lower;{get;~piece2}};r;Rook;n;Knight;b;Bishop;q;Queen;k;King;p;Pawn} and moved;**Moved} {switch;{lower;{get;~piece}};r;Rook;n;Knight;b;Bishop;q;Queen;k;King;p;Pawn} from position `{get;~mv1}` to `{get;~mv2}`!** {if;==;k;{lower;{get;~piece2}};{newline}:tada: **Congratulations!** {username}#{userdiscrim} has won the game!
}
{void;
	{set;@{userid}{get;~p}moves_{get;@{get;~p}{get;~mv1}};
		{math;+;0{get;@{userid}{get;~p}moves_{get;@{get;~p}{get;~mv1}};1}}
	}
	{set;@{get;~p}tm;{if;==;w;{get;@{get;~p}tm};b;w}}
	{set;~chess_link;
			http://www.jinchess.com/chessboard/?p=	
	}
}{get;~chess_link}{get;@{get;~p}a8}{get;@{get;~p}b8}{get;@{get;~p}c8}{get;@{get;~p}d8}{get;@{get;~p}e8}{get;@{get;~p}f8}{get;@{get;~p}g8}{get;@{get;~p}h8}{get;@{get;~p}a7}{get;@{get;~p}b7}{get;@{get;~p}c7}{get;@{get;~p}d7}{get;@{get;~p}e7}{get;@{get;~p}f7}{get;@{get;~p}g7}{get;@{get;~p}h7}{get;@{get;~p}a6}{get;@{get;~p}b6}{get;@{get;~p}c6}{get;@{get;~p}d6}{get;@{get;~p}e6}{get;@{get;~p}f6}{get;@{get;~p}g6}{get;@{get;~p}h6}{get;@{get;~p}a5}{get;@{get;~p}b5}{get;@{get;~p}c5}{get;@{get;~p}d5}{get;@{get;~p}e5}{get;@{get;~p}f5}{get;@{get;~p}g5}{get;@{get;~p}h5}{get;@{get;~p}a4}{get;@{get;~p}b4}{get;@{get;~p}c4}{get;@{get;~p}d4}{get;@{get;~p}e4}{get;@{get;~p}f4}{get;@{get;~p}g4}{get;@{get;~p}h4}{get;@{get;~p}a3}{get;@{get;~p}b3}{get;@{get;~p}c3}{get;@{get;~p}d3}{get;@{get;~p}e3}{get;@{get;~p}f3}{get;@{get;~p}g3}{get;@{get;~p}h3}{get;@{get;~p}a2}{get;@{get;~p}b2}{get;@{get;~p}c2}{get;@{get;~p}d2}{get;@{get;~p}e2}{get;@{get;~p}f2}{get;@{get;~p}g2}{get;@{get;~p}h2}{get;@{get;~p}a1}{get;@{get;~p}b1}{get;@{get;~p}c1}{get;@{get;~p}d1}{get;@{get;~p}e1}{get;@{get;~p}f1}{get;@{get;~p}g1}{get;@{get;~p}h1}&tm={get;@{get;~p}tm}{if;==;m;{get;@{userid}ch_size};;&s={get;@{userid}ch_size}}&tt={username;{get;@{get;~p}p2}}&ct={username;{get;@{get;~p}p1}}{switch;{get;@{userid}chess_board};;;plain;;&bp={get;@{userid}chess_board}}{switch;{get;@{userid}chess_board};;;alpha;;&ps={get;@{userid}chess_piece}}{switch;{get;@{userid}ch_coord};;&cm=o;nc;;&cm={get;@{userid}ch_coord}}{return}