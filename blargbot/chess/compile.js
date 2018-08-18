{fallback;}
{set;@exec;true}
{set;@return}
{set;~continue}
{set;~promote}
{set;~promote_piece}
{set;~passant}
{set;~move_success}
{set;@nl;​{newline}}
{set;~attack}
{set;@version;v1.7 Build 2}
{set;@aph;
 '
}
{//;'}
{set;@help;
```ruby
`Chess Help Menu {get;@version}` ```
**Commands:**
1. `{prefix}t chess theme` - Changes your style to the desired theme.
2. `{prefix}t chess start <@user> [w|b]` - Starts a match against user. If a color is chosen, that will be your color.
3. `{prefix}t chess move <pos1> <pos2> [queen|knight|rook|bishop]` - Moves the piece in `pos1` to `pos2`, example you move the rook at `a1` to `a8`, it ill be `{prefix}t chess move a1 a8`. The queen, knight, rook, and bishop are when promoting a pawn.
4. `{prefix}t chess <forfeit|quit|stop|end>` - Forfeit your current match and lose the game.
5. `{prefix}t chess stalemate` - To announce if your current game is a stalemate.
```py
>>> Made by: Kao#0001```
}
{set;@won;
	:tada: **Congratulations! ** {username}#{userdiscrim} has won the game!
}
{set;@chess_link0;
	http://jinchess.com/chessboard/?p=
}
{set;@chess_link1;
	http://apronus.com/chess/diagram/stagram.php?d=P
}
{if;==;;{get;@{userid}chess_board};{set;@{userid}chess_board;plain}}
{if;==;;{get;@{userid}chess_piece};{set;@{userid}chess_piece;alpha}}
{if;==;;{get;@{userid}chess_piecen};{set;@{userid}chess_piecen;1}}
{if;==;;{get;@{userid}chess_size};{set;@{userid}chess_size;xl}}
{if;==;;{get;@{userid}chess_sizen};{set;@{userid}chess_sizen;37}}
{if;==;;{get;@{userid}chess_color_dark};{set;@{userid}chess_color_dark;8f604f}}
{if;==;;{get;@{userid}chess_color_light};{set;@{userid}chess_color_light;ffcc99}}
{if;==;;{get;@{userid}chess_color_darkn};{set;@{userid}chess_color_darkn;8F604F}}
{if;==;;{get;@{userid}chess_color_lightn};{set;@{userid}chess_color_lightn;FFCC99}}
{if;==;;{get;@{userid}chess_coord};{set;@{userid}chess_coord;o}}
{if;==;;{get;@{userid}chess_coordn};{set;@{userid}chess_coordn;o}}
{if;==;;{get;@{userid}chess_style};{set;@{userid}chess_style;new}}
{set;~a;1}{set;~1;a}
{set;~b;2}{set;~2;b}
{set;~c;3}{set;~3;c}
{set;~d;4}{set;~4;d}
{set;~e;5}{set;~5;e}
{set;~f;6}{set;~6;f}
{set;~g;7}{set;~7;g}
{set;~h;8}{set;~8;h}
{switch;{lower;{args;0}};
	help;
		{get;@help};
	theme;
		{if;==;obsolete;{lower;{args;1}};
			{if;==;obsolete;{get;@{userid}chess_style};
				{set;@{userid}chess_style;new}:ok: | **Set your style to the new type!**;
				{set;@{userid}chess_style;obsolete}:ok: | **Set your style to the obsolete type!**
			};
		{if;==;obsolete;{get;@{userid}chess_style};
			{switch;{lower;{args;1}};;There are currently two customizable themes, the chess board and the chess pieces. Please do `{prefix}t chess theme <piece|board> <type>` in order to get that style. Putting no type gives the default theme.
					{regexreplace;```prolog
					​{realpad;Piece;18;{space};left}
					{realpad;adventure;14;{space};left} | magnetic
					{realpad;adventure-flat;14;{space};left} | magnetic-flat
					{realpad;alfonso-x;14;{space};left} | mark
					{realpad;alfonso-x-flat;14;{space};left} | mark-flat
					{realpad;alpha;14;{space};left} | marroquin
					{realpad;alpha-flat;14;{space};left} | marroquin-flat
					{realpad;berlin;14;{space};left} | maya
					{realpad;berlin-flat;14;{space};left} | maya-flat
					{realpad;condal;14;{space};left} | medieval
					{realpad;condal-flat;14;{space};left} | medieval-flat
					{realpad;harlequin;14;{space};left} | merida
					{realpad;harlequin-flat;14;{space};left} | merida-flat
					{realpad;kingdom;14;{space};left} | motif
					{realpad;kingdom-flat;14;{space};left} | motif-flat
					{realpad;leipzig;14;{space};left} | smart
					{realpad;leipzig-flat;14;{space};left} | smart-flat
					{realpad;line;14;{space};left} | usual
					{realpad;line-flat;14;{space};left} | usual-flat
					{realpad;lucena;14;{space};left} | utrecht
					{realpad;lucena-flat;14;{space};left} | utrecht-flat``````prolog
					​{realpad;Board;18;{space};left}
					{realpad;cold-marble;14;{space};left} | red-marble
					{realpad;gray-tiles;14;{space};left} | slate
					{realpad;green-marble;14;{space};left} | winter
					{realpad;pale-wood;14;{space};left} | wooden-dark
					{realpad;plain;14;{space};left} |```
					Do `{prefix}t chess theme advanced` to get more info about advanced features. Do `{prefix}t chess theme obsolete` to get the new style of the board.;/\t/g;};
				board;
					{set;~p_stat;
						{switch;{args;2};;2;
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
					{switch;{get;~p_stat};
						1;Succesfully set board style to `{args;2}`!
							{set;@{userid}chess_board;{args;2}};
						2;Reset board style to `plain`!
							{set;@{userid}chess_board;plain}
							{set;@{userid}chess_color_dark;8f604f}
							{set;@{userid}chess_color_light;ffcc99};
						0;:x: You gave an invalid name!
					};/\t/g;};
				piece;
					{set;~p_stat;
						{switch;{args;2};;2;
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
					{switch;{get;~p_stat};
						1;Succesfully set piece style to `{args;2}`!
							{set;@{userid}chess_piece;{args;2}};
						2;Reset piece style to `alpha`!
							{set;@{userid}chess_piece;alpha};
						0;:x: You gave an invalid name!
					};/\t/g;};
				advanced;
					{switch;{args;2};;Please do `{prefix}t chess theme advanced <type>` in order to get that style.
						{regexreplace;```prolog
						{realpad;Sizes;12;{space};left}
						{realpad;Name;8;{space};left} | Description
						{newline}			{realpad;s;8;{space};left} | Small sized board.
						{realpad;m;8;{space};left} | Medium sized board. (Default)
						{realpad;l;8;{space};left} | Large sized board.
						{realpad;xl;8;{space};left} | Extra large sized board.
						{newline}			{realpad;r;8;{space};left} | coordinates at the Rim of the board.
						{realpad;o;8;{space};left} | coordinates at the Outside of the board. (Default)
						{realpad;nc;8;{space};left} | No Coordinates shown.```
						Do `{prefix}t chess theme advanced` to get more info about advanced features.;/\t/g;};
						s;Set chess board size to small!{set;@{userid}chess_size;s};
						m;Set chess board size to medium!{set;@{userid}chess_size;m};
						l;Set chess board size to large!{set;@{userid}chess_size;l};
						xl;Set chess board size to extra large!{set;@{userid}chess_size;xl};
						r;Set chess coordinates to the rim of the board!{set;@{userid}chess_coord;r};
						o;Set chess coordinates to the outside of the board!{set;@{userid}chess_coord;o};
						nc;Hidden chess coordinates!{set;@{userid}chess_coord;nc};
						:x: Unrecognized command!
					};
				:x: Unrecognized command!
			};
			{switch;{lower;{args;1}};;
				Please do `{prefix}t chess theme <type>` in order to get that style.
				{regexreplace;```prolog
				​{realpad;Piece;11;{space};left}
				{realpad;alpha;7;{space};left} | merida
				{realpad;linares;7;{space};left} | ``````prolog
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
				{realpad;nc;8;{space};left} | No Coordinates shown.```
				Do `{prefix}t chess theme obsolete` to use the old style of the board.;/\t/g;};
				alpha;Succesfully set piece style to alpha!{set;@{userid}chess_piecen;1};
				linares;Succesfully set piece style to linares!{set;@{userid}chess_piecen;2};
				merida;Succesfully set piece style to merida!{set;@{userid}chess_piecen;0};
				21;Set chess board size to 21px{set;@{userid}chess_sizen;21};
				27;Set chess board size to 27px{set;@{userid}chess_sizen;27};
				37;Set chess board size to 37px{set;@{userid}chess_sizen;37};
				49;Set chess board size to 49px{set;@{userid}chess_sizen;49};
				65;Set chess board size to 65px{set;@{userid}chess_sizen;65};
				87;Set chess board size to 87px{set;@{userid}chess_sizen;87};
				115;Set chess board size to 115px{set;@{userid}chess_sizen;115};
				o;Set chess coordinates to the outside of the board!{set;@{userid}chess_coordn;o};
				nc;Hidden chess coordinates!{set;@{userid}chess_coordn;nc};
				{switch;{lower;{args;1}};
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
					:x: Unrecognized command!
				}
			}
		}};
	start;
		{if;==;true;{get;@return};{return}}
		{if;==;{if;==;{get;@admin};{userid};{void};{userid}};{userid;{args;1}};:x: You cannot play against yourself!{return}}
		{if;==;1;{get;@{userid;{args;1}}bl};:x: This user is blacklisted or is a bot!{return}}
		{if;==;1;{get;@{userid;{args;1}}chess_game};:x: User is still playing a game!{return}}
		{if;==;1;{get;@{userid}chess_game};:x: You are still playing a game! Do `{prefix}t chess quit`{return}}
		{set;@{userid}chess_instance;{base;{time;x};10;16}}
		{set;~p;{get;@{userid}chess_instance}}
		{set;@{userid}en;{userid;{args;1}}}
		{set;@{get;@{userid}en}en;{userid}}
		{set;@{get;@{userid}en}chess_instance;{get;~p}}
		{set;@{userid}chess_init;1}
		{set;@{get;@{userid}en}chess_init;1}
		{set;@{get;~p}unmoved$k;1}
		{set;@{get;~p}unmoved$K;1}
		{set;@{get;~p}unmoved$r_a8;1}
		{set;@{get;~p}unmoved$r_h8;1}
		{set;@{get;~p}unmoved$R_a1;1}
		{set;@{get;~p}unmoved$R_h1;1}
		{set;index0;1}{set;index1;7}{repeat;{set;@{get;~p}unmoved$p_{get;~{get;index0}}{get;index1};1}{if;==;8;{get;index0};{set;index0;1}{void;{decrement;index1}};{void;{increment;index0}}}};8
		{set;index0;1}{set;index1;2}{repeat;{set;@{get;~p}unmoved$P_{get;~{get;index0}}{get;index1};1}{if;==;8;{get;index0};{set;index0;1}{void;{decrement;index1}};{void;{increment;index0}}};8}
		{set;index0;1}{set;index1;5}{repeat;{set;@{get;~p}passant$p_{get;~{get;index0}}{get;index1};0}{if;==;8;{get;index0};{set;index0;1}{void;{decrement;index1}};{void;{increment;index0}}};8}
		{set;index0;1}{set;index1;4}{repeat;{set;@{get;~p}passant$P_{get;~{get;index0}}{get;index1};0}{if;==;8;{get;index0};{set;index0;1}{void;{decrement;index1}};{void;{increment;index0}}};8}
		**Chess game started with {username;{get;@{userid}en}}!** Instance: `{get;~p}`.{get;@nl}
		{set;@{userid}chess_color;
			{switch;{args;2};
				w;w;
				white;w;
				b;b;
				black;b;
				r;{randchoose;w;b};
				random;{randchoose;w;b};
				{randchoose;w;b}
			}
		}
		{if;==;-1;{get;@{userid}chess_color};
			:x:  FATAL ERROR! Please report to tag creator. `chess_color is out of bounds.`
			{return}
		}
		{set;~p;{get;@{userid}chess_instance}}
		{set;@{get;@{userid}en}chess_color;{if;==;w;{get;@{userid}chess_color};b;w}}
		{set;@{get;~p}p1;{if;==;w;{get;@{userid}chess_color};{userid};{get;@{userid}en}}}
		{set;@{get;~p}p2;{if;==;b;{get;@{userid}chess_color};{userid};{get;@{userid}en}}}
		{set;@{userid}game;1}
		{set;@{get;@{userid}en}game;1}
		{set;@{userid}chess_game;1}
		{set;@{get;@{userid}en}chess_game;1}
		{set;@{get;@{userid}en}p1;{get;@{userid}p1}}
		{set;@{get;@{userid}en}p2;{get;@{userid}p2}}
		{set;@{get;~p}tm;w}
		{set;@{get;~p}move;1}
		{set;@{get;~p}a8;r}{set;@{get;~p}a1;R}
		{set;@{get;~p}b8;n}{set;@{get;~p}b1;N}
		{set;@{get;~p}c8;b}{set;@{get;~p}c1;B}
		{set;@{get;~p}d8;q}{set;@{get;~p}d1;Q}
		{set;@{get;~p}e8;k}{set;@{get;~p}e1;K}
		{set;@{get;~p}f8;b}{set;@{get;~p}f1;B}
		{set;@{get;~p}g8;n}{set;@{get;~p}g1;N}
		{set;@{get;~p}h8;r}{set;@{get;~p}h1;R}
		{set;index0;1}{set;index1;6}{repeat;{set;@{get;~p}{get;~{get;index0}}{get;index1};-}{if;==;8;{get;index0};{set;index0;1}{void;{decrement;index1}};{void;{increment;index0}}};32}
		{set;index0;1}{set;index1;7}{repeat;{set;@{get;~p}{get;~{get;index0}}{get;index1};p}{if;==;8;{get;index0};{set;index0;1}{void;{decrement;index1}};{void;{increment;index0}}};8}
		{set;index0;1}{set;index1;2}{repeat;{set;@{get;~p}{get;~{get;index0}}{get;index1};P}{if;==;8;{get;index0};{set;index0;1}{void;{decrement;index1}};{void;{increment;index0}}};8}
		**Game Started as {if;==;w;{get;@{userid}chess_color};White;Black}!**
		{set;~p;{get;@{userid}chess_instance}}
		**Move Number**: **__{get;@{get;~p}move}__** - **{username;{get;@{get;~p}p{if;==;w;{get;@{get;~p}tm};1;2}}}{get;@aph}s** turn to move
		{switch;{get;@{userid}chess_style};
			obsolete;
				{get;@chess_link0}{set;index0;1}{set;index1;8}{repeat;{get;@{get;~p}{get;~{get;index0}}{get;index1}}{if;==;8;{get;index0};{set;index0;1}{void;{decrement;index1}};{void;{increment;index0}}};64}&tm={get;@{get;~p}tm}{if;==;m;{get;@{userid}chess_size};;&s={get;@{userid}chess_size}}&tt={regexreplace;{username;{get;@{get;~p}p2}};/[^a-zA-Z0-9]/g;}&ct={regexreplace;{username;{get;@{get;~p}p1}};/[^a-zA-Z0-9]/g;}{switch;{get;@{userid}chess_board};;;~plain;;&bp={get;@{userid}chess_board}}{switch;{get;@{userid}chess_board};;;alpha;;&ps={get;@{userid}chess_piece}}{switch;{get;@{userid}chess_coord};;&cm=o;nc;;&cm={get;@{userid}chess_coord}};
				{get;@chess_link1}{set;index0;1}{set;index1;1}{regexreplace;{repeat;{get;@{get;~p}{get;~{get;index0}}{get;index1}}{if;==;8;{get;index0};{set;index0;1}{void;{increment;index1}};{void;{increment;index0}}};64};/-/g;_}&p={get;@{userid}chess_sizen}&s={get;@{userid}chess_piecen}&c={get;@{userid}chess_color_darkn}{get;@{userid}chess_color_lightn}{switch;{get;@{userid}chess_coordn};;&r=FFFFFF;nc;;o;&r=FFFFFF;&r=FFFFFF}{set;k;{if;&&;{if;!=;;{get;~{get;~p}1a};1;0};{if;!=;;{get;~{get;~p}1b};1;0};{get;~{get;~p}1a}Q{get;~{get;~p}1b}Q0Q0Q255A}{if;&&;{if;!=;;{get;~{get;~p}2a};1;0};{if;!=;;{get;~{get;~p}2b};1;0};{get;~{get;~p}2a}Q{get;~{get;~p}2b}Q0Q0Q255}}{if;!=;;{get;k};&k={get;k}}&z={get;@{get;~p}tm}{if;==;b;{get;@{get;~p}tm};&f=1}
		};
	stalemate;
		{set;~p;{get;@{userid}chess_instance}}
		{if;!=;1;{get;@{userid}chess_game};:x: You do not have an active chess game!{return}}
		{if;!=;1;{get;@{get;~p}stalemate_in};Stalemate announced! <@{get;@{userid}en}>, please do `{prefix}t chess stalemate` to confirm it.{set;@{get;~p}stalemate_in;1}{set;@{get;~p}stalemate_en;{userid}};
		{if;==;{userid};{get;@{get;~p}stalemate_en};:x: Your opponent must confirm the stalemate. <@{get;@{userid}en}>, please do `{prefix}t chess stalemate` to confirm it.;**Stalemate!** Nobody has won.
		{set;@{userid}chess_game;0}{set;@{get;@{userid}en}chess_game;0}
		}};
	move;
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
		{set;~a;1}{set;~1;a}
		{set;~b;2}{set;~2;b}
		{set;~c;3}{set;~3;c}
		{set;~d;4}{set;~4;d}
		{set;~e;5}{set;~5;e}
		{set;~f;6}{set;~6;f}
		{set;~g;7}{set;~7;g}
		{set;~h;8}{set;~8;h}
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
						{set;~hor;{if;!=;{get;~hor1};{get;~hor2};true{set;~rook_move;h};false}}
						{set;~ver;{if;!=;{get;~ver1};{get;~ver2};true{set;~rook_move;v};false}}
						{if;{logic;&&;{get;~hor};{get;~ver}};
							:x: Invalid move! Rooks can only move horizontally or vertically, it cannot be both.
							{return};
							{void}
						}
						{switch;{get;~rook_move};
							h;
								{if;!=;{get;~v1};{get;~v2};
									:x: FATAL ERROR! `v1 and v2 do not match`
									{return}
								}
								{set;~i_h1;{get;~hor2}}
								{if;==;{math;-;{get;~hor1};{get;~hor2}};1;
									{set;~continue;true};
									{repeat;
										{void;
											{increment;~i_h1}
										}
										{if;!=;-;{get;@{get;~p}{get;~{get;~i_h1}}{get;~v1}};
											{set;~continue;false}
										};
										{math;-;{get;~hor1};{get;~hor2};1}
									}
								}
								{if;==;false;{get;~continue};:x: Invalid move!
									{return}
								}
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
									:x:  `side_2 is out of bounds.`
									{return}
								}
								{set;~attack;true};
							v;
								{if;!=;{get;~h1};{get;~h2};
									:x: FATAL ERROR! `h1 and h2 do not match`
									{return}
								}
								{set;~i_v1;{get;~ver2}}
								{if;==;{math;-;{get;~ver1};{get;~ver2}};1;
									{set;~continue;true};
									{repeat;
										{void;
											{increment;~i_v1}
										}
										{if;!=;-;{get;@{get;~p}{get;~{get;~h1}}{get;~i_v1}};
											{set;~continue;false};
										};
										{math;-;{get;~ver1};{get;~ver2};1}
									}
								}
								{if;==;false;{get;~continue};:x: Invalid move!
									{return}
								}
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
									:x:  `side_2 is out of bounds.`
									{return}
								}
								{set;~attack;true}
						}
						{if;==;true;{get;~move_success};
							{switch;{get;~mv1};
								a8;{set;@{get;~p}unmoved$r_a8;0};
								h8;{set;@{get;~p}unmoved$r_h8;0};
							}
						};
					n;b1 a3  c1 a3   3  1   3   1+1 or 1+2
2   1

2   1+1 or 1+2
						{set;~hor;
							{switch;{get;~hor1};
								{math;+;{get;~hor2};1};1{set;~h_m;v};
								{math;+;{get;~hor2};2};2{set;~h_m;h};
								0
							}
						}
						{set;~ver;
							{switch;{get;~ver1};
								{math;+;{get;~ver2};2};1{set;~v_m;v};
								{math;+;{get;~ver2};1};2{set;~v_m;h};
								0
							}
						}
						{if;==;{get;~hor};{get;~ver};
							{if;==;0;{get;~hor};
								:x: Invalid move!
								{return}
							};
							:x: Invalid move!
							{return}
						}
						{set;~i_h;{get;~h2}}
						{set;~i_v;{get;~v2}}
						{if;!=;{get;~h_m};{get;~v_m};
							:x: FATAL ERROR! Please report to tag creator. `h_m and v_m does not match.`
							{return}
						}
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
							:x:  `side_2 is out of bounds.`
							{return}
						}
						{set;~attack;true};
					b;
						{set;~hor;{math;-;{get;~hor1};{get;~ver1}}}
						{set;~ver;{math;-;{get;~hor2};{get;~ver2}}}
						{if;!=;{get;~hor};{get;~ver};
							:x: Invalid move! You can only move diagonally. {return}
						}
						{set;~i_h1;{get;~h1}}
						{set;~i_v1;{get;~v1}}
						{repeat;
							{void;
								{{if;>;{get;~h1};{get;~h2};de;in}crement;~i_h1}
								{{if;>;{get;~v1};{get;~v2};de;in}crement;~i_v1}
							}
							{if;!=;-;{get;@{get;~p}{get;~{get;~i_h1}}{get;~i_v1}};
								{set;~continue;0}
							};
							{math;-;{get;~ver1};{get;~ver2};1}
						}
						{if;==;0;{get;~continue};:x: You cannot move your piece here!
							{set;~continue;false}
							{return}
						}
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
							:x:  `side_2 is out of bounds.`
							{return}
						}
						{if;==;true;{get;@return};;
							{switch;{get;~move_success};
								1;{void};
								true;{void};
								:x: Invalid move!
								{return}
							}
							{if;==;true;{get;@return};;
								{set;~attack;true}
							}
						};
					q;
						{set;~hor;{if;!=;{get;~hor1};{get;~hor2};true{set;~queen_move;h};false}}
						{set;~ver;{if;!=;{get;~ver1};{get;~ver2};true{set;~queen_move;v};false}}
						{if;{logic;&&;{get;~hor};{get;~ver}};
							{set;~hor;{math;-;{get;~hor1};{get;~ver1}}}
							{set;~ver;{math;-;{get;~hor2};{get;~ver2}}}
							{if;!=;{get;~hor};{get;~ver};
								:x: Invalid move! You can only move diagonally or straight.
								{return}
							}
							{set;~i_h1;{get;~h1}}
							{set;~i_v1;{get;~v1}}
							{repeat;
								{void;
									{{if;>;{get;~h1};{get;~h2};de;in}crement;~i_h1}
									{{if;>;{get;~v1};{get;~v2};de;in}crement;~i_v1}
								}
								{if;!=;-;{get;@{get;~p}{get;~{get;~i_h1}}{get;~i_v1}};
									{set;~continue;0};
								};
								{math;-;{get;~ver1};{get;~ver2};1}
							}
							{if;==;0;{get;~continue};:x: You cannot move your piece here!
								{set;~continue;false}
								{return}
							}
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
								:x:  `side_2 is out of bounds.`
								{return}
							}
							{set;~attack;true};
							{switch;{get;~queen_move};
								h;
									{if;!=;{get;~v1};{get;~v2};
										:x: FATAL ERROR! Please report to tag creator. `v1 and v2 does not match.`
											{return}
									}
									{set;~i_h1;{get;~hor2}}
									{if;==;{math;-;{get;~hor1};{get;~hor2}};1;
										{set;~continue;true};
										{repeat;
											{void;
												{increment;~i_h1}
											}
											{if;!=;-;{get;@{get;~p}{get;~{get;~i_h1}}{get;~v1}};
												{set;~continue;false}
											};
											{math;-;{get;~hor1};{get;~hor2};1}
										}
									}
									{if;==;false;{get;~continue};:x: Invalid move!
										{return}
									}
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
										:x:  `side_2 is out of bounds.`
										{return}
									}
									{set;~attack;true};
								v;
									{if;!=;{get;~h1};{get;~h2};
										:x: FATAL ERROR! `h1 and h2 do not match`
										{return}
									}
									{set;~i_v1;{get;~ver2}}
									{if;==;{math;-;{get;~ver1};{get;~ver2}};1;
										{set;~continue;true};
										{repeat;
											{void;
												{increment;~i_v1}
											}
											{if;!=;-;{get;@{get;~p}{get;~{get;~h1}}{get;~i_v1}};
												{set;~continue;false};
											};
											{math;-;{get;~ver1};{get;~ver2};1}
										}
									}
									{if;==;false;{get;~continue};:x: Invalid move!
										{return}
									}
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
										:x:  `side_2 is out of bounds.`
										{return}
									}
									{set;~attack;true}
							}
						};
					k;
						{if;==;1;{get;@{get;~p}unmoved$k};
							{switch;{get;~mv2};
								g8;
									{if;{logic;&&;{if;==;1;{get;@{get;~p}unmoved$k};true;false};{if;==;1;{get;@{get;~p}unmoved$r_h8};true;false}};
										{set;~castling;true};
										:x: The King or Rook has already moved and you cannot castle anymore!
										{return}
									}
									{if;!=;-;{get;@{get;~p}f8};{set;~continue;false}}
									{if;!=;-;{get;@{get;~p}g8};{set;~continue;false}}
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
											{set;@{get;~p}f1;r}
											{set;@{get;~p}h1;-}
											{set;@{get;~p}unmoved$r_h8;0}
											{set;@{get;~p}unmoved$k;0}
											{set;~move_success;true}
											{set;~attack;true};
										:x: FATAL ERROR! `{lb}userid{rb}side_2 out of bounds`
											{return}
									};
								c8;
									{if;{logic;&&;{if;==;1;{get;@{get;~p}unmoved$k};true;false};{if;==;1;{get;@{get;~p}unmoved$r_a8};true;false}};
										{set;~castling;true};
										:x: The King or Rook has already moved and you cannot castle anymore!
										{return}
									}
									{if;!=;-;{get;@{get;~p}b8};{set;~continue;false}}
									{if;!=;-;{get;@{get;~p}c8};{set;~continue;false}}
									{if;!=;-;{get;@{get;~p}d8};{set;~continue;false}}
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
											{set;@{get;~p}f1;r}
											{set;@{get;~p}h1;-}
											{set;@{get;~p}unmoved$r_a8;0}
											{set;@{get;~p}unmoved$k;0}
											{set;~move_success;true}
											{set;~attack;true};
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
									{switch;{get;~side_2};
										0;
											{set;@{get;~p}{get;~mv2};{get;~piece}}
											{set;@{get;~p}{get;~mv1};-}
											{set;@{get;~p}unmoved$k;0}
											{set;~move_success;true}
											{set;~attack;true};
										1;
											{if;!=;w;{get;@{userid}chess_color};
												:x: You can not move your piece here!
												{return}
											}
											{set;@{get;~p}{get;~mv2};{get;~piece}}
											{set;@{get;~p}{get;~mv1};-}
											{set;@{get;~p}unmoved$k;0}
											{set;~move_success;true}
											{set;~attack;true};
										2;
											{if;!=;b;{get;@{userid}chess_color};
												:x: You can not move your piece here!
												{return}
											}
											{set;@{get;~p}{get;~mv2};{get;~piece}}
											{set;@{get;~p}{get;~mv1};-}
											{set;@{get;~p}unmoved$k;0}
											{set;~move_success;true}
											{set;~attack;true};
										:x:  FATAL ERROR! Please report to tag creator. `side_2 is out of bounds.`
										{return}
									}

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
							{switch;{get;~side_2};
								0;
									{set;@{get;~p}{get;~mv2};{get;~piece}}
									{set;@{get;~p}{get;~mv1};-}
									{set;@{get;~p}unmoved$k;0}
									{set;~move_success;true}
									{set;~attack;true};
								1;
									{if;!=;w;{get;@{userid}chess_color};
										:x: You can not move your piece here!
										{return}
									}
									{set;@{get;~p}{get;~mv2};{get;~piece}}
									{set;@{get;~p}{get;~mv1};-}
									{set;@{get;~p}unmoved$k;0}
									{set;~move_success;true}
									{set;~attack;true};
								2;
									{if;!=;b;{get;@{userid}chess_color};
										:x: You can not move your piece here!
										{return}
									}
									{set;@{get;~p}{get;~mv2};{get;~piece}}
									{set;@{get;~p}{get;~mv1};-}
									{set;@{get;~p}unmoved$k;0}
									{set;~move_success;true}
									{set;~attack;true};
								:x:  FATAL ERROR! Please report to tag creator. `side_2 is out of bounds.`
								{return}
							}
						};
					p;
						{if;<;{get;~v1};{get;~v2};
							:x: Invalid move! The pawn can not move backwards!
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
						{if;==;1;{get;~v2};
							{set;~promote;true}
							{set;~promote_piece;
								{switch;{lower;{args;3}};
									q;q;
									queen;q;
									k;n;
									n;n;
									knight;n;
									r;r;
									rook;r;
									b;b;
									bishop;b;
									0
								}
							};
							{set;~promote;false}
						}
						{switch;{get;~hor};
							0;
								{switch;{get;~ver};
									1;
										{switch;{get;~side_2};
											0;
												{if;==;true;{get;~promote};
													{if;==;0;{get;~promote_piece};
														:x: You need to promote the pawn. Choose between `{prefix}t chess move {get;~mv1} {get;~mv2} [queen|knight|rook|bishop]`.
														{return};
														{set;~piece;{get;~promote_piece}}
														{set;@{get;~p}{get;~mv2};{get;~piece}}
														{set;@{get;~p}{get;~mv1};-}
														{set;~move_success;true}
													};
													{set;@{get;~p}{get;~mv2};{get;~piece}}
													{set;@{get;~p}{get;~mv1};-}
													{set;~move_success;true}
												};
											1;
												:x: You can not move your piece here!
												{return};
											2;
												:x: You can not move your piece here!
												{return};
											:x: FATAL ERROR! Please report to tag creator. `~side_2 is out of bounds.`
											{return}
										};
									2;
										{if;!=;-;{get;@{get;~p}{get;~{get;~h2}}{math;+;{get;~v2};1}};
											:x: You can not move your piece here!
											{return}
										}
										{if;==;1;{get;@{get;~p}unmoved$p_{get;~mv1}};
											{switch;{get;~side_2};
												0;
													{set;@{get;~p}{get;~mv2};{get;~piece}}
													{set;@{get;~p}{get;~mv1};-}
													{set;~move_success;true};
												1;
													:x: You can not move your piece here!
													{return};
												2;
													:x: You can not move your piece here!
													{return};
												:x: FATAL ERROR! Please report to tag creator. `~side_2 is out of bounds.`
												{return}
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
												{if;!=;true;{regextest;{get;~mv2};/[a-h]3/i};
													:x: You cannot move your piece here!
													{return}
												}
												{if;!=;1;{get;@{get;~p}passant$P_{get;~{get;~h2}}{increment;{get;~v2}}};
													:x: You cannot move your piece here!
													{return}
												}
												{if;!=;p;{get;@{get;~p}{get;~{get;~h2}}{increment;{get;~v2}}};
													:x:  FATAL ERROR! Please report to tag creator. `p does not exist in {get;~{get;~h2}}{increment;{get;~v2}}`
													{return}
												}
												{if;!=;{get;@{get;~p}passant};{get;@{get;~p}move};
													:x: You cannot make an En Passant move anymore! It must be immedietly after the enemy pawn moves.
													{return}
												}
												{set;@{get;~p}{get;~mv2};{get;~piece}}
												{set;@{get;~p}{get;~mv1};-}
												{set;@{get;~p}{get;~{get;~h2}}{increment;{get;~v2}};-}
												{set;~move_success;true}
												{set;~passant;true};
											1;
												:x: You can not move your piece here!
												{return};
											2;
												{if;==;true;{get;~promote};
													{if;==;0;{get;~promote_piece};
														:x: You need to promote the pawn. Choose between `{prefix}t chess move {get;~mv1} {get;~mv2} [queen|knight|rook|bishop]`.
														{return}
													}
													{set;~piece;{get;~promote_piece}}
													{set;@{get;~p}{get;~mv2};{get;~piece}}
													{set;@{get;~p}{get;~mv1};-}
													{set;~move_success;true};
													{set;@{get;~p}{get;~mv2};{get;~piece}}
													{set;@{get;~p}{get;~mv1};-}
													{set;~move_success;true}
												};
											:x:  FATAL ERROR! Please report to tag creator. `~side_2 is out of bounds.`
											{return}
										};
									2;:x: You can not move your piece here! {return};
									:x:  FATAL ERROR! Please report to tag creator. `~ver is out of bounds`
									{return}
								}
						}
						{if;==;true;{get;@return};;
							{if;==;1;
								{get;@{get;~p}unmoved$p_{get;~mv1}};
								{if;==;2;{get;~ver};
									{set;@{get;~p}passant$p_{get;~mv2};1}
									{set;@{get;~p}passant;{increment;{get;@{get;~p}move}}}
								}
								{set;@{get;~p}unmoved$p_{get;~mv1};0}
							}
							{switch;{get;~move_success};
								1;{void};
								true;{void};
								:x: Invalid move!
								{return}
							}
							{if;==;true;{get;@return};;
								{set;~attack;true}
							}
						};
					:x:  FATAL ERROR! Please report to tag creator. `chess_color and piece does not match.`
					{return}
				};
			w;
				{switch;{get;~piece};
					-;0;
					P;
						{if;>;{get;~v1};{get;~v2};:x: Invalid move! The pawn can not move backwards!;
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
							{if;==;8;{get;~v2};
								{set;~promote;true}
								{set;~promote_piece;
									{switch;{lower;{args;3}};
										q;Q;
										queen;Q;
										k;N;
										n;N;
										knight;N;
										r;R;
										rook;R;
										b;B;
										bishop;B;
										0
									}
								};
								{set;~promote;false}
							}
							{if;==;true;{get;@return};;
								{switch;{get;~hor};
									0;
										{switch;{get;~ver};
											1;
												{switch;{get;~side_2};
													0;
														{if;==;true;{get;~promote};
															{if;==;0;{get;~promote_piece};
																:x: You need to promote the pawn. Choose between `{prefix}t chess move {get;~mv1} {get;~mv2} [queen|knight|rook|bishop]`.
																{return};
																{set;~piece;{get;~promote_piece}}
																{set;@{get;~p}{get;~mv2};{get;~piece}}
																{set;@{get;~p}{get;~mv1};-}
																{set;~move_success;true}
															};
															{set;@{get;~p}{get;~mv2};{get;~piece}}
															{set;@{get;~p}{get;~mv1};-}
															{set;~move_success;true}
														};
													1;
														:x: You can not move your piece here!
														{return};
													2;
														:x: You can not move your piece here!
														{return};
												};
											2;
												{if;!=;-;{get;@{get;~p}{get;~{get;~h2}}{math;-;{get;~v2};1}};
													:x: You can not move your piece here!
													{return};
												{if;==;1;{get;@{get;~p}unmoved$P_{get;~mv1}};
													{switch;{get;~side_2};
														0;
															{set;@{get;~p}{get;~mv2};{get;~piece}}
															{set;@{get;~p}{get;~mv1};-}
															{set;~move_success;true};
														1;
															:x: You can not move your piece here!
															{return};
														2;
															:x: You can not move your piece here!
															{return};
													};
													:x: You can not move pawns 2 spaces if it has been moved already!
													{return}
												}}
										};
									1;
										{switch;{get;~ver};
											0;:x: You can not move your piece here! {return};
											1;
												{switch;{get;~side_2};
													0;
														{if;!=;true;{regexreplace;{get;~mv2};/[a-h]6/i;true};
															:x: You cannot move your piece here!
															{return};
														{if;!=;1;{get;@{get;~p}passant$p_{get;~{get;~h2}}{decrement;{get;~v2}}};
															:x: You cannot move your piece here!
															{return};
														{if;!=;p;{get;@{get;~p}{get;~{get;~h2}}{decrement;{get;~v2}}};
															:x:  FATAL ERROR! Please report to tag creator. `p does not exist in {get;~{get;~h2}}{decrement;{get;~v2}}`
															{return};
														{if;!=;{get;@{get;~p}passant};{get;@{get;~p}move};
															:x: You cannot make an En Passant move anymore! It must be immedietly after the enemy pawn moves.
															{return};
															{set;@{get;~p}{get;~mv2};{get;~piece}}
															{set;@{get;~p}{get;~mv1};-}
															{set;@{get;~p}{get;~{get;~h2}}{decrement;{get;~v2}};-}
															{set;~move_success;true}
															{set;~passant;true}
														}}}};
													1;
														{if;==;true;{get;~promote};
															{if;==;0;{get;~promote_piece};
																:x: You need to promote the pawn. Choose between `{prefix}t chess move {get;~mv1} {get;~mv2} [queen|knight|rook|bishop]`.
																{return};
																{set;~piece;{get;~promote_piece}}
																{set;@{get;~p}{get;~mv2};{get;~piece}}
																{set;@{get;~p}{get;~mv1};-}
																{set;~move_success;true}
															};
															{set;@{get;~p}{get;~mv2};{get;~piece}}
															{set;@{get;~p}{get;~mv1};-}
															{set;~move_success;true}
														};
													2;
														:x: You can not move your piece here!
														{return};
													:x:  FATAL ERROR! Please report to tag creator. `~side_2 is out of bounds.`
													{return}
												};
											2;:x: You can not move your piece here! {return};
											:x:  FATAL ERROR! Please report to tag creator. `~ver is out of bounds`
											{return}
										}
								}
								{if;==;true;{get;@return};;
									{if;==;1;
										{get;@{get;~p}unmoved$P_{get;~mv1}};
										{if;==;2;{get;~ver};
											{set;@{get;~p}passant$P_{get;~mv2};1}
											{set;@{get;~p}passant;{increment;{get;@{get;~p}move}}}
										}
										{set;@{get;~p}unmoved$P_{get;~mv1};0}
									}
									{switch;{get;~move_success};
										1;{void};
										true;{void};
										:x: Invalid move!
										{return}
									}
									{if;==;true;{get;@return};;
										{set;~attack;true}
									}
								}
							}
						};
					Q;
						{set;~hor;{if;!=;{get;~hor1};{get;~hor2};true{set;~queen_move;h};false}}
						{set;~ver;{if;!=;{get;~ver1};{get;~ver2};true{set;~queen_move;v};false}}
						{if;{logic;&&;{get;~hor};{get;~ver}};
							{set;~hor;{math;-;{get;~hor1};{get;~ver1}}}
							{set;~ver;{math;-;{get;~hor2};{get;~ver2}}}
							{if;!=;{get;~hor};{get;~ver};
								:x: Invalid move! You can only move diagonally or straight.
								{return}
							}
							{set;~i_h1;{get;~h1}}
							{set;~i_v1;{get;~v1}}
							{repeat;
								{void;
									{{if;>;{get;~h1};{get;~h2};de;in}crement;~i_h1}
									{{if;>;{get;~v1};{get;~v2};de;in}crement;~i_v1}
								}
								{if;!=;-;{get;@{get;~p}{get;~{get;~i_h1}}{get;~i_v1}};
									{set;~continue;0};
								};
								{math;-;{get;~ver1};{get;~ver2};1}
							}
							{if;==;0;{get;~continue};:x: You cannot move your piece here!
								{set;~continue;false}
								{return}
							}
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
								:x:  `side_2 is out of bounds.`
								{return}
							}
							{set;~attack;true};
							{switch;{get;~queen_move};
								h;
									{if;!=;{get;~v1};{get;~v2};
										:x: FATAL ERROR! Please report to tag creator. `v1 and v2 does not match.`
											{return}
									}
									{set;~i_h1;{get;~hor2}}
									{if;==;{math;-;{get;~hor1};{get;~hor2}};1;
										{set;~continue;true};
										{repeat;
											{void;
												{increment;~i_h1}
											}
											{if;!=;-;{get;@{get;~p}{get;~{get;~i_h1}}{get;~v1}};
												{set;~continue;false}
											};
											{math;-;{get;~hor1};{get;~hor2};1}
										}
									}
									{if;==;false;{get;~continue};:x: Invalid move!
										{return}
									}
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
										:x:  `side_2 is out of bounds.`
										{return}
									}
									{set;~attack;true};
								v;
									{if;!=;{get;~h1};{get;~h2};
										:x: FATAL ERROR! `h1 and h2 do not match`
										{return}
									}
									{set;~i_v1;{get;~ver2}}
									{if;==;{math;-;{get;~ver1};{get;~ver2}};1;
										{set;~continue;true};
										{repeat;
											{void;
												{increment;~i_v1}
											}
											{if;!=;-;{get;@{get;~p}{get;~{get;~h1}}{get;~i_v1}};
												{set;~continue;false};
											};
											{math;-;{get;~ver1};{get;~ver2};1}
										}
									}
									{if;==;false;{get;~continue};:x: Invalid move!
										{return}
									}
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
										:x:  `side_2 is out of bounds.`
										{return}
									}
									{set;~attack;true}
							}
						};
					K;
						{if;==;1;{get;@{get;~p}unmoved$K};
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
											{set;~attack;true};
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
											{set;~attack;true};
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
									{switch;{get;~side_2};
										0;
											{set;@{get;~p}{get;~mv2};{get;~piece}}
											{set;@{get;~p}{get;~mv1};-}
											{set;~move_success;true}
											{set;~attack;true};
										1;
											{if;!=;w;{get;@{userid}chess_color};
												:x: You can not move your piece here!
												{return}
											}
											{set;@{get;~p}{get;~mv2};{get;~piece}}
											{set;@{get;~p}{get;~mv1};-}
											{set;~move_success;true}
											{set;~attack;true};
										2;
											{if;!=;b;{get;@{userid}chess_color};
												:x: You can not move your piece here!
												{return}
											}
											{set;@{get;~p}{get;~mv2};{get;~piece}}
											{set;@{get;~p}{get;~mv1};-}
											{set;~move_success;true}
											{set;~attack;true};
										:x:  FATAL ERROR! Please report to tag creator. `side_2 is out of bounds.`
										{return}
									}
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
							{switch;{get;~side_2};
								0;
									{set;@{get;~p}{get;~mv2};{get;~piece}}
									{set;@{get;~p}{get;~mv1};-}
									{set;~move_success;true}
									{set;~attack;true};
								1;
									{if;!=;w;{get;@{userid}chess_color};
										:x: You can not move your piece here!
										{return}
									}
									{set;@{get;~p}{get;~mv2};{get;~piece}}
									{set;@{get;~p}{get;~mv1};-}
									{set;~move_success;true}
									{set;~attack;true};
								2;
									{if;!=;b;{get;@{userid}chess_color};
										:x: You can not move your piece here!
										{return}
									}
									{set;@{get;~p}{get;~mv2};{get;~piece}}
									{set;@{get;~p}{get;~mv1};-}
									{set;~move_success;true}
									{set;~attack;true};
								:x:  FATAL ERROR! Please report to tag creator. `side_2 is out of bounds.`
								{return}
							}
						};
					B;
						{set;~hor;{math;-;{get;~hor1};{get;~ver1}}}
						{set;~ver;{math;-;{get;~hor2};{get;~ver2}}}
						{if;!=;{get;~hor};{get;~ver};
							:x: Invalid move! You can only move diagonally. {return}
						}
						{set;~i_h1;{get;~h1}}
						{set;~i_v1;{get;~v1}}
						{repeat;
							{void;
								{{if;>;{get;~h1};{get;~h2};de;in}crement;~i_h1}
								{{if;>;{get;~v1};{get;~v2};de;in}crement;~i_v1}
							}
							{if;!=;-;{get;@{get;~p}{get;~{get;~i_h1}}{get;~i_v1}};
								{set;~continue;0}
							};
							{math;-;{get;~ver1};{get;~ver2};1}
						}
						{if;==;0;{get;~continue};:x: You cannot move your piece here!
							{set;~continue;false}
							{return}
						}
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
							:x:  `side_2 is out of bounds.`
							{return}
						}
						{if;==;true;{get;@return};;
							{switch;{get;~move_success};
								1;{void};
								true;{void};
								:x: Invalid move!
								{return}
							}
							{if;==;true;{get;@return};;
								{set;~attack;true}
							}
						};
					N;
						{set;~hor;
							{switch;{get;~hor1};
								{math;+;{get;~hor2};1};1{set;~h_m;v};
								{math;+;{get;~hor2};2};2{set;~h_m;h};
								0
							}
						}
						{set;~ver;
							{switch;{get;~ver1};
								{math;+;{get;~ver2};2};1{set;~v_m;v};
								{math;+;{get;~ver2};1};2{set;~v_m;h};
								0
							}
						}
						{if;==;{get;~hor};{get;~ver};
							{if;==;0;{get;~hor};
								:x: Invalid move!
								{return}
							};
							:x: Invalid move!
							{return}
						}
						{set;~i_h;{get;~h2}}
						{set;~i_v;{get;~v2}}
						{if;!=;{get;~h_m};{get;~v_m};
							:x: FATAL ERROR! Please report to tag creator. `h_m and v_m does not match.`
							{return}
						}
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
							:x:  `side_2 is out of bounds.`
							{return}
						}
						{set;~attack;true};
					R;
						{set;~hor;{if;!=;{get;~hor1};{get;~hor2};true{set;~rook_move;h};false}}
						{set;~ver;{if;!=;{get;~ver1};{get;~ver2};true{set;~rook_move;v};false}}
						{if;{logic;&&;{get;~hor};{get;~ver}};
							:x: Invalid move! Rooks can only move horizontally or vertically, it cannot be both.
							{return};
							{void}
						}
						{switch;{get;~rook_move};
							h;
								{if;!=;{get;~v1};{get;~v2};
									:x: FATAL ERROR! `v1 and v2 do not match`
									{return}
								}
								{set;~i_h1;{get;~hor2}}
								{if;==;{math;-;{get;~hor1};{get;~hor2}};1;
									{set;~continue;true};
									{repeat;
										{void;
											{increment;~i_h1}
										}
										{if;!=;-;{get;@{get;~p}{get;~{get;~i_h1}}{get;~v1}};
											{set;~continue;false}
										};
										{math;-;{get;~hor1};{get;~hor2};1}
									}
								}
								{if;==;false;{get;~continue};:x: Invalid move!
									{return}
								}
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
									:x:  `side_2 is out of bounds.`
									{return}
								}
								{set;~attack;true};
							v;
								{if;!=;{get;~h1};{get;~h2};
									:x: FATAL ERROR! `h1 and h2 do not match`
									{return}
								}
								{set;~i_v1;{get;~ver2}}
								{if;==;{math;-;{get;~ver1};{get;~ver2}};1;
									{set;~continue;true};
									{repeat;
										{void;
											{increment;~i_v1}
										}
										{if;!=;-;{get;@{get;~p}{get;~{get;~h1}}{get;~i_v1}};
											{set;~continue;false};
										};
										{math;-;{get;~ver1};{get;~ver2};1}
									}
								}
								{if;==;false;{get;~continue};:x: Invalid move!
									{return}
								}
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
									:x:  `side_2 is out of bounds.`
									{return}
								}
								{set;~attack;true}
						}
						{if;==;true;{get;~move_success};
							{switch;{get;~mv1};
								a1;{set;@{get;~p}unmoved$R_a1;0};
								h1;{set;@{get;~p}unmoved$R_h1;0};
							}
						};
					:x:  FATAL ERROR! Please report to tag creator. `chess_color and piece does not match.`
					{return}
				};
			:x:  FATAL ERROR! Please report to tag creator. `chess_color is out of bounds.`
			{return}
		};
	board;
		{if;!=;1;{get;@{userid}chess_game};
			:x: You do not have an active chess game!;
		{set;~p;{get;@{userid}chess_instance}}
		**Move Number**: **__{get;@{get;~p}move}__** - **{username;{get;@{get;~p}p{if;==;w;{get;@{get;~p}tm};1;2}}}{get;@aph}s** turn to move
		{switch;{get;@{userid}chess_style};
			obsolete;
				{get;@chess_link0}{set;index0;1}{set;index1;8}{repeat;1;64;{get;@{get;~p}{get;~{get;index0}}{get;index1}}{if;==;8;{get;index0};{set;index0;1}{void;{decrement;index1}};{void;{increment;index0}}}}&tm={get;@{get;~p}tm}{if;==;m;{get;@{userid}chess_size};;&s={get;@{userid}chess_size}}&tt={regexreplace;{username;{get;@{get;~p}p2}};/[^a-zA-Z0-9]/g;}&ct={regexreplace;{username;{get;@{get;~p}p1}};/[^a-zA-Z0-9]/g;}{switch;{get;@{userid}chess_board};;;~plain;;&bp={get;@{userid}chess_board}}{switch;{get;@{userid}chess_board};;;alpha;;&ps={get;@{userid}chess_piece}}{switch;{get;@{userid}chess_coord};;&cm=o;nc;;&cm={get;@{userid}chess_coord}};
				{get;@chess_link1}{set;index0;1}{set;index1;1}{regexreplace;{repeat;1;64;{get;@{get;~p}{get;~{get;index0}}{get;index1}}{if;==;8;{get;index0};{set;index0;1}{void;{increment;index1}};{void;{increment;index0}}}};/-/g;_}&p={get;@{userid}chess_sizen}&s={get;@{userid}chess_piecen}&c={get;@{userid}chess_color_darkn}{get;@{userid}chess_color_lightn}{switch;{get;@{userid}chess_coordn};;&r=FFFFFF;nc;;o;&r=FFFFFF;&r=FFFFFF}{set;k;{if;&&;{if;!=;;{get;~{get;~p}1a};1;0};{if;!=;;{get;~{get;~p}1b};1;0};{get;~{get;~p}1a}Q{get;~{get;~p}1b}Q0Q0Q255A}{if;&&;{if;!=;;{get;~{get;~p}2a};1;0};{if;!=;;{get;~{get;~p}2b};1;0};{get;~{get;~p}2a}Q{get;~{get;~p}2b}{if;==;true;{get;~{get;~p}eat};Q255Q0Q0;Q0Q0Q255}}}{if;!=;;{get;k};&k={get;k}}&z={get;@{get;~p}tm}{if;==;b;{get;@{get;~p}tm};&f=1}
		}};
		{switch;{lower;{args;0}};
			forfeit;{void};
			quit;{void};
			stop;{void};
			end;{void};
			{regexreplace;
				{get;@help}
			;/\t+|^[\r\n]+/gm;}
			{return}
		}
		{if;==;true;{get;@return};;
			{switch;{get;@{userid}chess_game};
				0;
					:x: You do not have an active chess game!
					{return};
				1;
					**Quit your chess game!**{get;@nl}You have lost the game.;
					:x:  FATAL ERROR! Please report to tag creator. `chess_game is out of bounds.`
					{return}
			}
			{set;~en;{get;@{userid}en}}
			{set;@{userid}chess_game;0}
			{set;@{userid}chess_instance}
			{set;@{get;~en}chess_game;0}
			{set;@{get;~en}chess_instance}
		}
}
{if;==;true;{get;~attack};
	{set;~p;{get;@{userid}chess_instance}}
	{set;~{get;~p}1a;{get;~h1}}
	{set;~{get;~p}1b;{get;~v1}}
	{set;~{get;~p}2a;{get;~h2}}
	{set;~{get;~p}2b;{get;~v2}}
	{embed;
		{buildembed;
			author.icon_url:{useravatar};
			author.name:{username};
			color:000;
			description:{if;!=;-;{get;~piece2};{set;~{get;~p}eat;true}**Ate enemy {switch;{lower;{get;~piece2}};r;Rook;n;Knight;b;Bishop;q;Queen;k;King;p;Pawn} and moved;{if;==;true;{get;~passant};{set;~{get;~p}eat;true}**Ate enemy Pawn and moved;{set;~{get;~p}eat}**Moved}} {if;==;true;{get;~promote};Pawn;{switch;{lower;{get;~piece}};r;Rook;n;Knight;b;Bishop;q;Queen;k;King;p;Pawn}} from position `{get;~{get;~{get;~p}1a}}{get;~{get;~p}1b}` to `{get;~{get;~{get;~p}2a}}{get;~{get;~p}2b}`{if;==;true;{get;~promote};, and promoted Pawn to {switch;{lower;{get;~promote_piece}};r;Rook;n;Knight;b;Bishop;q;Queen;k;King;p;Pawn}}!** {if;==;k;{lower;{get;~piece2}};{newline}:tada: **Congratulations!  {username} has won the game!**{set;~en;{get;@{userid}en}}{set;@{userid}chess_game;0}{set;@{get;~en}chess_game;0}} [board](http://apronus.com/chess/diagram/stagram.php?d=P__BQKB_n___N_q_P_PP__P_bP___________p_____nb____ppp__pppr___k__r&p=37&s=1&c=8F604FFFCC99&r=FFFFFF&k=8Q4Q0Q0Q255A6Q2Q255Q0Q0&z=w)**;
			footer.icon_url:https://cdn.discordapp.com/emojis/432200723724369920.png;
			footer.text:White to move - Nitrome{get;@aph}s turn;
			image.url:http://apronus.com/chess/diagram/stagram.php?d=P__BQKB_n___N_q_P_PP__P_bP___________p_____nb____ppp__pppr___k__r&p=37&s=1&c=8F604FFFCC99&r=FFFFFF&k=8Q4Q0Q0Q255A6Q2Q255Q0Q0&z=w;
			thumbnail.url:http://apronus.com/chess/diagram/stagram.php?d=P__BQKB_n___N_R_P_PP__P_bP______q____p_____nb____ppp__pppr___k__r&p=37&s=1&c=8F604FFFCC99&r=FFFFFF&k=2Q1Q0Q0Q255A4Q2Q0Q0Q255&z=b;
			timestamp:{time};
			title:Move Number: 25;
		}
	}
	{set;@{userid}{get;~p}moves_{get;@{get;~p}{get;~mv1}};
		{math;+;0{get;@{userid}{get;~p}moves_{get;@{get;~p}{get;~mv1}};1}}
	}
	{set;@{get;~p}move;{math;+;0{get;@{get;~p}move};1}}
	{set;@{get;~p}tm;{if;==;w;{get;@{get;~p}tm};b;w}}
	**Move Number**: **__{get;@{get;~p}move}__** - **{username;{get;@{get;~p}p{if;==;w;{get;@{get;~p}tm};1;2}}}{get;@aph}s** turn to move
	{set;~en;{get;@{userid}en}}
	{switch;{get;@{get;~en}chess_style};
		obsolete;
			{get;@chess_link0}{set;index0;1}{set;index1;8}{repeat;1;64;{get;@{get;~p}{get;~{get;index0}}{get;index1}}{if;==;8;{get;index0};{set;index0;1}{void;{decrement;index1}};{void;{increment;index0}}}}&tm={get;@{get;~p}tm}{if;==;m;{get;@{get;~en}chess_size};;&s={get;@{get;~en}chess_size}}&tt={regexreplace;{username;{get;@{get;~p}p2}};/[^a-zA-Z0-9]/g;}&ct={regexreplace;{username;{get;@{get;~p}p1}};/[^a-zA-Z0-9]/g;}{switch;{get;@{get;~en}chess_board};;;~plain;;&bp={get;@{get;~en}chess_board}}{switch;{get;@{get;~en}chess_board};;;alpha;;&ps={get;@{get;~en}chess_piece}}{switch;{get;@{get;~en}chess_coord};;&cm=o;nc;;&cm={get;@{get;~en}chess_coord}};
			{get;@chess_link1}{set;index0;1}{set;index1;1}{regexreplace;{repeat;1;64;{get;@{get;~p}{get;~{get;index0}}{get;index1}}{if;==;8;{get;index0};{set;index0;1}{void;{increment;index1}};{void;{increment;index0}}}};/-/g;_}&p={get;@{get;~en}chess_sizen}&s={get;@{get;~en}chess_piecen}&c={get;@{get;~en}chess_color_darkn}{get;@{get;~en}chess_color_lightn}{switch;{get;@{get;~en}chess_coordn};;&r=FFFFFF;nc;;o;&r=FFFFFF;&r=FFFFFF}{set;k;{if;&&;{if;!=;;{get;~{get;~p}1a};1;0};{if;!=;;{get;~{get;~p}1b};1;0};{get;~{get;~p}1a}Q{get;~{get;~p}1b}Q0Q0Q255A}{if;&&;{if;!=;;{get;~{get;~p}2a};1;0};{if;!=;;{get;~{get;~p}2b};1;0};{get;~{get;~p}2a}Q{get;~{get;~p}2b}{if;==;true;{get;~{get;~p}eat};Q255Q0Q0;Q0Q0Q255}}}{if;!=;;{get;k};&k={get;k}}&z={get;@{get;~p}tm}{if;==;b;{get;@{get;~p}tm};&f=1}
	}
}
{if;==;true;{get;@perm_move};
	{set;@{get;~p}tm;{get;@{userid}chess_color}}
}
{if;==;true;{get;@always_move};
	{set;@{userid}chess_color;{get;@{get;~p}tm}}
}