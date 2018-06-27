{lang;js}
{regexreplace;```prolog
	{if;!=;move;{lower;{args;1}};
		{pad;left;{space;23};p} | {get;~p}
		{pad;left;{space;23};uid @chess_instance} | {get;@{userid}chess_instance}
		{pad;left;{space;23};uid @en @chess_instance} | {get;@{get;@{userid}en}chess_instance}
		{pad;left;{space;23};p @tm} | {get;@{get;~p}tm}
		{pad;left;{space;23};p @en} | {if;==;;{get;@{get;~p}en};{space;18};{get;@{get;~p}en}} ({if;==;;{get;@{get;~p}en};null;{username;{get;@{get;~p}en}}})
		{pad;left;{space;23};p @en @en} | {if;==;;{get;@{get;@{get;~p}en}en};{space;18};{get;@{get;@{get;~p}en}en}} ({if;==;;{get;@{get;@{get;~p}en}en};null;{username;{get;@{get;@{get;~p}en}en}}})
		{pad;left;{space;23};p @p1} | {if;==;;{get;@{get;~p}p1};{space;18};{get;@{get;~p}p1}} ({if;==;;{get;@{get;~p}p1};null;{username;{get;@{get;~p}p1}}})
		{pad;left;{space;23};p @p2} | {if;==;;{get;@{get;~p}p2};{space;18};{get;@{get;~p}p2}} ({if;==;;{get;@{get;~p}p2};null;{username;{get;@{get;~p}p2}}})
		{pad;left;{space;23};uid @en p1} | {if;==;;{get;@{get;@{userid}en}p1};{space;18};{get;@{get;@{userid}en}p1}} ({if;==;;{get;@{get;@{userid}en}p1};null;{username;{get;@{get;@{userid}en}p1}}})
		{pad;left;{space;23};uid @en p2} | {if;==;;{get;@{get;@{userid}en}p2};{space;18};{get;@{get;@{userid}en}p2}} ({if;==;;{get;@{get;@{userid}en}p2};null;{username;{get;@{get;@{userid}en}p2}}})
		{pad;left;{space;23};uid @chess_color} | {get;@{userid}chess_color}
		{pad;left;{space;23};uid @en @chess_color} | {get;@{get;@{userid}en}chess_color}
		{pad;left;{space;23};uid @game} | {get;@{userid}game;1}
		{pad;left;{space;23};uid @en @game} | {get;@{get;@{userid}en}game}
		{pad;left;{space;23};1} | {get;~1} | {pad;left;{space;4};a} | {get;~a}
		{pad;left;{space;23};2} | {get;~2} | {pad;left;{space;4};b} | {get;~b}
		{pad;left;{space;23};3} | {get;~3} | {pad;left;{space;4};c} | {get;~c}
		{pad;left;{space;23};4} | {get;~4} | {pad;left;{space;4};d} | {get;~d}
		{pad;left;{space;23};5} | {get;~5} | {pad;left;{space;4};e} | {get;~e}
		{pad;left;{space;23};6} | {get;~6} | {pad;left;{space;4};f} | {get;~f}
		{pad;left;{space;23};7} | {get;~7} | {pad;left;{space;4};g} | {get;~g}
		{pad;left;{space;23};8} | {get;~8} | {pad;left;{space;4};h} | {get;~h}
	}
	{if;==;move;{lower;{args;1}};
		{pad;left;{space;23};h} | {get;~h} | {pad;left;{space;4};v} | {get;~v}
		{pad;left;{space;23};v1} | {get;~v1} | {pad;left;{space;4};v2} | {get;~v2}
		{pad;left;{space;23};h1} | {get;~h1} | {pad;left;{space;4};h2} | {get;~h2}
		{pad;left;{space;23};h_m} | {get;~h_m} | {pad;left;{space;4};v_m} | {get;~v_m}
		{pad;left;{space;23};hor1} | {get;~hor1} | {pad;left;{space;4};hor2} | {get;~hor2}
		{pad;left;{space;23};ver1} | {get;~ver1} | {pad;left;{space;4};ver2} | {get;~ver2}
		{pad;left;{space;23};i_h1} | {get;~i_h1} | {pad;left;{space;4};i_h2} | {get;~i_h2}
		{pad;left;{space;23};i_v1} | {get;~i_v1} | {pad;left;{space;4};i_v2} | {get;~i_v2}
		{pad;left;{space;23};rank} | {get;~rank}
		{pad;left;{space;23};get i_h1} | {get;~{get;~i_h1}}
		{pad;left;{space;23};rook_move} | {get;~rook_move}
		{pad;left;{space;23};move_success} | {get;~move_success}
		{pad;left;{space;23};move_type} | {get;~move_type}
		{pad;left;{space;23};uid @piece} | {get;@{userid}piece}
	}
		{pad;left;{space;23};p @unmoved$k} | {get;@{get;~p}unmoved$k}
		{pad;left;{space;23};p @unmoved$K} | {get;@{get;~p}unmoved$K}
		{pad;left;{space;23};p @unmoved$R_a1} | {get;@{get;~p}unmoved$R_a1}
		{pad;left;{space;23};p @unmoved$R_h1} | {get;@{get;~p}unmoved$R_h1}
		{pad;left;{space;23};p @unmoved$r_a8} | {get;@{get;~p}unmoved$r_a8}
		{pad;left;{space;23};p @unmoved$r_h8} | {get;@{get;~p}unmoved$r_a8}
		{pad;left;{space;23};p @unmoved$p_a7} | {get;@{get;~p}unmoved$p_a7}
		{pad;left;{space;23};p @unmoved$p_b7} | {get;@{get;~p}unmoved$p_b7}
		{pad;left;{space;23};p @unmoved$p_c7} | {get;@{get;~p}unmoved$p_c7}
		{pad;left;{space;23};p @unmoved$p_d7} | {get;@{get;~p}unmoved$p_d7}
		{pad;left;{space;23};p @unmoved$p_e7} | {get;@{get;~p}unmoved$p_e7}
		{pad;left;{space;23};p @unmoved$p_f7} | {get;@{get;~p}unmoved$p_f7}
		{pad;left;{space;23};p @unmoved$p_g7} | {get;@{get;~p}unmoved$p_g7}
		{pad;left;{space;23};p @unmoved$p_h7} | {get;@{get;~p}unmoved$p_h7}
		{pad;left;{space;23};p @unmoved$P_a2} | {get;@{get;~p}unmoved$P_a2}
		{pad;left;{space;23};p @unmoved$P_b2} | {get;@{get;~p}unmoved$P_b2}
		{pad;left;{space;23};p @unmoved$P_c2} | {get;@{get;~p}unmoved$P_c2}
		{pad;left;{space;23};p @unmoved$P_d2} | {get;@{get;~p}unmoved$P_d2}
		{pad;left;{space;23};p @unmoved$P_e2} | {get;@{get;~p}unmoved$P_e2}
		{pad;left;{space;23};p @unmoved$P_f2} | {get;@{get;~p}unmoved$P_f2}
		{pad;left;{space;23};p @unmoved$P_g2} | {get;@{get;~p}unmoved$P_g2}
		{pad;left;{space;23};p @unmoved$P_h2} | {get;@{get;~p}unmoved$P_h2}```
		{set;~chess_link;
			http://www.jinchess.com/chessboard/?p=
		}<{get;~chess_link}{get;@{get;~p}a8}{get;@{get;~p}b8}{get;@{get;~p}c8}{get;@{get;~p}d8}{get;@{get;~p}e8}{get;@{get;~p}f8}{get;@{get;~p}g8}{get;@{get;~p}h8}{get;@{get;~p}a7}{get;@{get;~p}b7}{get;@{get;~p}c7}{get;@{get;~p}d7}{get;@{get;~p}e7}{get;@{get;~p}f7}{get;@{get;~p}g7}{get;@{get;~p}h7}{get;@{get;~p}a6}{get;@{get;~p}b6}{get;@{get;~p}c6}{get;@{get;~p}d6}{get;@{get;~p}e6}{get;@{get;~p}f6}{get;@{get;~p}g6}{get;@{get;~p}h6}{get;@{get;~p}a5}{get;@{get;~p}b5}{get;@{get;~p}c5}{get;@{get;~p}d5}{get;@{get;~p}e5}{get;@{get;~p}f5}{get;@{get;~p}g5}{get;@{get;~p}h5}{get;@{get;~p}a4}{get;@{get;~p}b4}{get;@{get;~p}c4}{get;@{get;~p}d4}{get;@{get;~p}e4}{get;@{get;~p}f4}{get;@{get;~p}g4}{get;@{get;~p}h4}{get;@{get;~p}a3}{get;@{get;~p}b3}{get;@{get;~p}c3}{get;@{get;~p}d3}{get;@{get;~p}e3}{get;@{get;~p}f3}{get;@{get;~p}g3}{get;@{get;~p}h3}{get;@{get;~p}a2}{get;@{get;~p}b2}{get;@{get;~p}c2}{get;@{get;~p}d2}{get;@{get;~p}e2}{get;@{get;~p}f2}{get;@{get;~p}g2}{get;@{get;~p}h2}{get;@{get;~p}a1}{get;@{get;~p}b1}{get;@{get;~p}c1}{get;@{get;~p}d1}{get;@{get;~p}e1}{get;@{get;~p}f1}{get;@{get;~p}g1}{get;@{get;~p}h1}&tm={get;@{get;~p}tm}{if;==;m;{get;@{userid}ch_size};;&s={get;@{userid}ch_size}}&tt={username;{get;@{get;~p}p2}}&ct={username;{get;@{get;~p}p1}}{switch;{get;@{userid}chess_board};;;plain;;&bp={get;@{userid}chess_board}}{switch;{get;@{userid}chess_board};;;alpha;;&ps={get;@{userid}chess_piece}}{switch;{get;@{userid}ch_coord};;&cm=o;nc;;&cm={get;@{userid}ch_coord}}>;/\t/g;
}