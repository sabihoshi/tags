{lang;js}
{switch;{lower;{args;1}};;There are currently two customizable themes, the chess board and the chess pieces. Please do `t!t chess theme <piece|board> <type>` in order to get that style. Putting no type gives the default theme.
		{regexreplace;```prolog
		{pad;left;{space;18};Themes}
		{pad;left;{space;14};Piece} | Board

		{pad;left;{space;14};adventure} | cold-marble
		{pad;left;{space;14};adventure-flat} | gray-tiles
		{pad;left;{space;14};alfonso-x} | green-marble
		{pad;left;{space;14};alfonso-x-flat} | pale-wood
		{pad;left;{space;14};alpha} | plain
		{pad;left;{space;14};alpha-flat} | red-marble
		{pad;left;{space;14};berlin} | slate
		{pad;left;{space;14};berlin-flat} | winter
		{pad;left;{space;14};condal} | wooden-dark
		{pad;left;{space;14};condal-flat} |
		{pad;left;{space;14};harlequin} |
		{pad;left;{space;14};harlequin-flat} |
		{pad;left;{space;14};kingdom} |
		{pad;left;{space;14};kingdom-flat} |
		{pad;left;{space;14};leipzig} |
		{pad;left;{space;14};leipzig-flat} |
		{pad;left;{space;14};line} |
		{pad;left;{space;14};line-flat} |
		{pad;left;{space;14};lucena} |
		{pad;left;{space;14};lucena-flat} |
		{pad;left;{space;14};magnetic} |
		{pad;left;{space;14};magnetic-flat} |
		{pad;left;{space;14};mark} |
		{pad;left;{space;14};mark-flat} |
		{pad;left;{space;14};marroquin} |
		{pad;left;{space;14};marroquin-flat} |
		{pad;left;{space;14};maya} |
		{pad;left;{space;14};maya-flat} |
		{pad;left;{space;14};medieval} |
		{pad;left;{space;14};medieval-flat} |
		{pad;left;{space;14};merida} |
		{pad;left;{space;14};merida-flat} |
		{pad;left;{space;14};motif} |
		{pad;left;{space;14};motif-flat} |
		{pad;left;{space;14};smart} |
		{pad;left;{space;14};smart-flat} |
		{pad;left;{space;14};usual} |
		{pad;left;{space;14};usual-flat} |
		{pad;left;{space;14};utrecht} |
		{pad;left;{space;14};utrecht-flat} |```
		
		Do `t!t chess theme advanced` to get more info about advanced features.;/\t/g;};
	board;
		{set;@p_stat;
			{switch;{lower;{args;2}};;2;
				cold-marble;1;
				gray-tiles;1;
				green-marble;1;
				pale-wood;1;
				plain;1;
				red-marble;1;
				slate;1;
				winter;1;
				wooden-dark;1;
				0
			}
		}{regexreplace;
		{switch;{aget;~p_stat};
			1;Succesfully set board style to `{args;2}`!
				{set;@{userid}chess_board;{args;2}};
			2;Reset board style to `plain`!
				{set;@{userid}chess_board;plain}
				{set;@{userid}chess_color_dark;8f604f}
				{set;@{userid}chess_color_dark;ffcc99};
			0;:x: You gave an invalid name!
		};/\t/g;};
	piece;
		{set;@p_stat;
			{switch;{lower;{args;2}};;2;
				adventure;1;
				adventure-flat;1;
				alfonso-x;1;
				alfonso-x-flat;1;
				alpha;1;
				alpha-flat;1;
				berlin;1;
				berlin-flat;1;
				condal;1;
				condal-flat;1;
				harlequin;1;
				harlequin-flat;1;
				kingdom;1;
				kingdom-flat;1;
				leipzig;1;
				leipzig-flat;1;
				line;1;
				line-flat;1;
				lucena;1;
				lucena-flat;1;
				magnetic;1;
				magnetic-flat;1;
				mark;1;
				mark-flat;1;
				marroquin;1;
				marroquin-flat;1;
				maya;1;
				maya-flat;1;
				medieval;1;
				medieval-flat;1;
				merida;1;
				merida-flat;1;
				motif;1;
				motif-flat;1;
				smart;1;
				smart-flat;1;
				usual;1;
				usual-flat;1;
				utrecht;1;
				utrecht-flat;1;
				0
			}
		}
		{regexreplace;
		{switch;{aget;~p_stat};
			1;Succesfully set piece style to `{args;2}`!
				{set;@{userid}chess_piece;{args;2}};
			2;Reset board style to `plain`!
				{set;@{userid}chess_board;alpha};
			0;:x: You gave an invalid name!
		};/\t/g;};
	advanced;
		{switch;{lower;{args;2}};;Please do `t!t chess theme advanced <type>` in order to get that style.
			{regexreplace;```prolog
			{pad;left;{space;12};Sizes}
			{pad;left;{space;8};Name} | Description

			{pad;left;{space;8};s} | Small sized board.
			{pad;left;{space;8};m} | Medium sized board. (Default)
			{pad;left;{space;8};l} | Large sized board.
			{pad;left;{space;8};xl} | Extra large sized board.
			
			{pad;left;{space;8};r} | coordinates at the Rim of the board.
			{pad;left;{space;8};o} | coordinates at the Outside of the board. (Default)
			{pad;left;{space;8};nc} | No Coordinates shown.```
			
			Do `t!t chess theme advanced` to get more info about advanced features.;/\t/g;};
			s;Set chess board size to small!{set;@{userid}ch_size;s};
			m;Set chess board size to medium!{set;@{userid}ch_size;m};
			l;Set chess board size to large!{set;@{userid}ch_size;l};
			xl;Set chess board size to extra large!{set;@{userid}ch_size;xl};
			r;Set chess coordinates to the rim of the board!{set;@{userid}ch_coord;r};
			o;Set chess coordinates to the outside of the board!{set;@{userid}ch_coord;o};
			nc;Hidden chess coordinates!{set;@{userid}ch_coord;nc};
			:x: Unrecognized command!
		};
	:x: Unrecognized command!
}
