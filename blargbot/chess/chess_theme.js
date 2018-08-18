{if;{get;~key};!=;{get;@chess.key};
	{func.error;Please run this tag in a cc! Do `{prefix}cc import chess chess` to continue.}
	{return}
}
{fallback;}
{set;~sizes;21;27;37;49;65;87;115}
{switch;{lower;{args;1}};;
	Please do `{prefix}t chess theme <type>` in order to get that style.
	```prolog
	{realpad;Piece;11;{space};left}
	{realpad;alpha;7;{space};left} | (Default)
	{realpad;linares;7;{space};left} | merida``````prolog
	{realpad;Sizes;12;{space};left}
	{realpad;Name;8;{space};left} | Description
	{newline}	{realpad;21;8;{space};left} | 21px sized board.
	{realpad;27;8;{space};left} | 27px sized board.
	{realpad;37;8;{space};left} | 37px sized board. (Default)
	{realpad;49;8;{space};left} | 49px sized board.
	{realpad;65;8;{space};left} | 65px sized board.
	{realpad;87;8;{space};left} | 87px sized board.
	{realpad;115;8;{space};left} | 115px sized board.
	{realpad;dark;8;{space};left} | `dark [hex]` code for the dark colored tiles. Leave blank for default.
	{realpad;light;8;{space};left} | `light [hex]` code for the light colored tiles. Leave blank for default.
	{newline}	{realpad;o;8;{space};left} | coordinates at the Outside of the board. (Default)
	{realpad;nc;8;{space};left} | No Coordinates shown.```;
	alpha;Successfully set piece style to alpha!{set;@{userid}chess_piecen;1};
	linares;Successfully set piece style to linares!{set;@{userid}chess_piecen;2};
	merida;Successfully set piecestyle to merida!{set;@{userid}chess_piecen;0};
	{get;~sizes};Set chess board size to {parseint;{args;1}}px!{set;@{userid}chess_sizen;{parseint;{args;1}}};
	o;Set chess coordinates to the outside of the board!{set;@{userid}chess_coordn;o};
	nc;Hidden chess coordinates!{set;@{userid}chess_coordn;nc};
	light;
		{if;==;;{args;2};
			{set;@{userid}chess_color_light;ffcc99}Reset light color to `{get;@{userid}chess_color_lightn}`!;
		{if;==;true;{regexreplace;{args;2};/([A-Fa-f0-9]{lb}6{rb})$/;true};
			{set;@{userid}chess_color_lightn;{upper;{args;2}}}Set light color to `{get;@{userid}chess_color_lightn}`!;
			:x: Provide a valid hexcode!
			{return}
		}};
	dark;
		{if;==;;{args;2};
			{set;@{userid}chess_color_darkn;8F604F}Reset dark color to `{get;@{userid}chess_color_darkn}`!;
		{if;==;true;{regexreplace;{args;2};/([A-Fa-f0-9]{lb}6{rb})$/;true};
			{set;@{userid}chess_color_darkn;{upper;{args;2}}}Set dark color to `{get;@{userid}chess_color_darkn}`!;
			:x: Provide a valid hexcode!
			{return}
		}};
		{embed;{exec;chess_error;Invalid command!}}
		{return}
}