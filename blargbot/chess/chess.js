{//; Checking if cc exists }
{if;{flagset;q};{return}}
{//; Function for errors }
{function;error;
	{embed;{embedbuild;
		author.name:{username}#{userdiscrim};
		author.icon_url:{useravatar};
		description:{params}{if;{flagset;d};```prolog{newline}{inject;{flag;d}```}};
		footer.icon_url:https://cdn.discordapp.com/emojis/432200723724369920.png;
		footer.text:Do {prefix}{commandname} help for more help.;
		timestamp:{time};
		color:red
	}}
}
{//; Make sure execution is in a cc }
{if;{logic;!;{iscc}};
	{func.error;
		{if;{execcc;chess;-q};==;`CCommand not found: chess`;
			This tag can only work in a custom command! Please do `{prefix}cc import chess` to use the tag.;
			Please use the command version of this tag instead! Do `{prefix}{commandname} help` for more info.
		}
	}
	{return}
}
{//; Function for the help menu in chess }
{function;chess.help;
	{embedbuild;
		title:Chess Help Menu;
		fields.name:{prefix}t chess theme;
		fields.value:Changes your chess style to the desired theme.{newline}Use without any arguments to get the help menu;
		fields.inline:true;
		fields.name:{prefix}t chess start <@user> [w|b];
		fields.value:Starts a match against user.{newline}If a color is chosen, that will be your color.;
		fields.inline:true;
		fields.name:{prefix}t chess move <pos1> <pos2>;
		fields.value:Moves the piece in `pos1` to `pos2`.{newline}For example you want to move the rook at `a1` to `a8`{newline}It will be `t!t chess move a1 a8`;
		fields.inline:true;
		fields.name:{prefix}t chess <forfeit|quit|stop|end>;
		fields.value:Terminate your current match and forfeit.;
		fields.inline:true;
		fields.name:{prefix}t chess stalemate;
		fields.value:Since the game cannot detect if a stalemate happens or not{newline}The two players must announce it is a stalemate.;
		fields.inline:true;
		fields.name:{prefix}t promote <position> <queen|knight|rook|bishop>;
		fields.value:Promotes a <:wp:432200723820970014> piece to the desired piece.;
		fields.inline:true;
		color:black;
		footer.text:Made by Kao#0001;
		footer.icon_url:{useravatar;246903976937783296};
		thumbnail.url:https://cdn.discordapp.com/emojis/432200723724369920.png;
		timestamp:{time}
	}
}
{if;{logic;||;{bool;{argslength};==;0};{bool;{lower;{args;0}};==;help}};
	{embed;{func.chess.help}}
	{return}
}
{//; Make sure default variables are set }
{function;default;
	{//; Global variables }
	{set;~p;{get;_{userid}chess.game}}
	{set;~en;{get;_{get;~p}chess.{switch;{get;_{userid}chess.color};w;b;b;w}}}
	{set;~tm;{get;_{get;~p}chess.{get;_{get;~p}chess.tm}}}
	{set;~tw;{get;_{get;~p}chess.{get;_{get;~p}chess.tw}}}
	{set;~1;a}{set;~a;1}{set;~3;c}{set;~c;3}{set;~4;d}{set;~d;4}{set;~5;e}{set;~e;5}{set;~2;b}{set;~b;2}{set;~6;f}{set;~f;6}{set;~7;g}{set;~g;7}{set;~8;h}{set;~h;8}
	{set;~move;{get;_{get;~p}chess.move}}
	{set;~loading;https://thighs.are-pretty.sexy/dc7978.gif}
	{//; Default values for users }
	{set;~users;{userid};{get;~en}}
	{foreach;~user;~users;
		{if;{logic;!;{regextest;{get;@{get;~user}chess.color.dark};/^(?:[a-f0-9]{3}|[a-f0-9]{6})$/i}};{set;@{get;~user}chess.color.dark;8F604F}}
		{if;{logic;!;{regextest;{get;@{get;~user}chess.color.light};/^(?:[a-f0-9]{3}|[a-f0-9]{6})$/i}};{set;@{get;~user}chess.color.light;FFCC99}}
		{if;{logic;!;{bool;["nc","oc"];includes;{get;@{get;~user}chess.coord}}};{set;@{get;~user}chess.coord;oc}}
		{if;{logic;!;{bool;["0","1","2"];includes;{get;@{get;~user}chess.piece}}};{set;@{get;~user}chess.piece;1}}
		{if;{logic;!;{bool;["21","27","37","49","65","87","115"];includes;{get;@{get;~user}chess.size}}};{set;@{get;~user}chess.size;37}}
	}
}
{//; Move number }
{function;move.count;
	{set;~n;{get;_{get;_{userid}chess.game}chess.move}}
	{get;~n}{switch;{substring;{get;~n};{math;-;{length;{get;~n}};2}};11;ᵗʰ;12;ᵗʰ;13;ᵗʰ;{switch;{substring;{get;~n};{math;-;{length;{get;~n}};1}};1;ˢᵗ;2;ⁿᵈ;3;ʳᵈ;ᵗʰ}}
}
{//; Functions for the chess link }
{function;chess.link;
	http://apronus.com/chess/diagram/stagram.php?d=P{for;~V;1;<=;8;{for;~H;1;<=;8;{get;_{get;~p}{get;~{get;~H}}{get;~V};0}}}&p={get;@{get;~tm}chess.size}&s={get;@{get;~tm}chess.piece}&c={get;@{get;~tm}chess.color.dark}{get;@{get;~tm}chess.color.light}{repeat;0;12}{switch;{get;@{get;~tm}chess.coord};nc;;&r=FFFFFF}{if;{logic;{flagset;o}};{if;{length;{get;_{get;~p}mark}};!=;0;&k;{foreach;~i;_{get;~p}mark;{}}}}&z={get;_{get;~p}chess.tm}{if;{get;_{get;~p}chess.tm};==;b;&f=1}
}
{function;txt64;
	&txt64={base64encode;{usernick;{get;~{params}}}}&txtfont64=QXZlbmlyLUJsYWNrT2JsaXF1ZQ&txtsize=18&txtfit=max&txtalign={switch;{params};tw;top;bottom}%2C%20center&txtclr=fff&txtshad=15&markalign=middle%2C%20center
}
{function;chess.image;
	{func.default}
	{set;~generate;https://sandbox-uploads.imgix.net/u/1535370388-f3185bdeef5792d8a212982660d6baa2?fit=crop&w=330&h=385&markalign=middle%2C%20center&mark64=}
	{get;~generate}{base64encode;{get;_{get;~p}old}}&ba=middle%2C%20center&markalpha=40&blend64={base64encode;{get;~generate}{base64encode;{func.chess.link}}{func.txt64;tw}}{func.txt64;tm}
}
{//; Link for the chess board }
{function;chess.board;
	{func.default}
	{embed;{embedbuild;
		author.name:{username;{get;~tw}}#{userdiscrim;{get;~tw}};
		author.icon_url:https://cdn.discordapp.com/emojis/{switch;{get;_{get;~p}chess.tw};w;432200723724369920;b;432200721820155924}.png;
		color:white;
		title:{func.move.count} Move;
		description:{params}{newline}**[Board]({func.chess.image})**;
		image.url:{func.chess.image};
		footer.text:{username;{get;~tm}}#{userdiscrim;{get;~tm}};
		footer.icon_url:https://cdn.discordapp.com/emojis/{switch;{get;_{get;~p}chess.tm};w;432200723724369920;b;432200721820155924}.png;
		timestamp:{time}
	}}
}
{//; For creating the history of the chess board }
{function;chess.history;
	{func.default}
	{if;{logic;!;{isarray;{get;_{get;~p}chess.history}}};{set;_{get;~p}chess.history;[]}}
	{//; 1, imgix, apronus, promotion, castle }
	{push;_{get;~p}chess.history;["{get;_{get;~p}chess.move}","{func.chess.image}","{func.chess.board}","{get;~promotion}","{get;~castle}","{for;~V;1;<=;8;{for;~H;1;<=;8;{get;_{get;~p}{get;~{get;~H}}{get;~V};0}}}"]}
}
{switch;{lower;{args;0}};
	board;
		{func.default}
		{func.chess.board};
	start;
		{//; Make sure you don't have an existing game }
		{if;{get;_{userid}chess.start};==;1;
			{func.error;You already have a chess game!}
			{return}
		}
		{//; Lookup for the opponent }
		{suppresslookup}
		{set;~enemy;{userid;{args;1;n}}}
		{if;{get;~enemy};==;;
			{func.error;Please provide a valid user!}
			{return}
		}
		{//; Make sure opponent doesn't have an existing game }
		{if;{get;_{get;~enemy}chess.start};==;1;
			{func.error;Your opponent already has a chess game!}
			{return}
		}
		{//; Setup game variables }
		{set;_{userid}chess.game;{base;{time;x};10;16}}
		{set;_{get;~enemy}chess.game;{get;_{userid}chess.game}}
		{set;~p;{get;_{userid}chess.game}}
		{set;_{get;~p}chess.move;1}
		{set;_{userid}chess.start;1}
		{set;_{get;~enemy}chess.start;1}
		{set;_{get;~p}chess.tm;w}
		{set;_{get;~p}chess.tw;b}
		{func.default}
		{//; Set board color }
		{set;_{userid}chess.color;w}
		{set;_{get;~enemy}chess.color;b}
		{set;_{get;~p}chess.w;{userid}}
		{set;_{get;~p}chess.b;{get;~enemy}}
		{//; White pieces }
		{set;_{get;~p}a1;["R"]}
		{set;_{get;~p}b1;N;a3;c3}
		{set;_{get;~p}c1;["B"]}
		{set;_{get;~p}d1;["Q"]}
		{set;_{get;~p}e1;["K"]}
		{set;_{get;~p}f1;["B"]}
		{set;_{get;~p}g1;N;f3;h3}
		{set;_{get;~p}h1;["R"]}
		{//; White Pawns }
		{for;~H;1;<=;8;
			{set;_{get;~p}{get;~{get;~H}}2;
				P;
				{get;~{get;~H}}3;
				{get;~{get;~H}}4
			}
		}
		{//; Black pieces }
		{set;_{get;~p}a8;["r"]}
		{set;_{get;~p}b8;n;a6;c6}
		{set;_{get;~p}c8;["b"]}
		{set;_{get;~p}d8;["q"]}
		{set;_{get;~p}e8;["k"]}
		{set;_{get;~p}f8;["b"]}
		{set;_{get;~p}g8;n;f6;h6}
		{set;_{get;~p}h8;["r"]}
		{//; Black Pawns }
		{for;~H;1;<=;8;
			{set;_{get;~p}{get;~{get;~H}}7;
				p;
				{get;~{get;~H}}6;
				{get;~{get;~H}}5
			}
		}
		{//; Empty pieces }
		{for;~V;3;<=;6;
			{for;~H;1;<=;8;
				{set;_{get;~p}{get;~{get;~H}}{get;~V};["_"]}
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
		{func.chess.board;**Game started!**};
	move;
		{if;{get;_{userid}chess.start};!=;1;
			{func.error;You don't have a game yet! Do `{prefix}{commandname} start @user [white|black]`}
			{return}
		}
		{func.default}
		{if;{userid};!=;{get;~tm};
			{func.error;It's not your turn yet! Please wait for your turn.}
			{return}
		}
		{if;{argslength};<;3;
			{func.error;Please provide a valid move!}
			{return}
		}
		{set;~mv1;{lower;{args;1}}}
		{set;~mv2;{lower;{args;2}}}
		{if;
			{logic;!;{logic;&&;
				{regextest;{get;~mv1};/^[a-h][1-8]$/i};
				{regextest;{get;~mv2};/^[a-h][1-8]$/i}
			}};
			{func.error;Please provide a valid move!}
			{return}
		}
		{switch;{get;_{get;~p}{get;~mv1};0};
			{switch;{get;_{get;~p}chess.tm};w;["r","n","b","q","k","p","_"];b;["R","N","B","Q","K","P","_"]};
				{func.error;Baka, that's not your piece!}
				{return}
		}
		{switch;{get;_{get;~p}{get;~mv2};0};
			{switch;{get;_{get;~p}chess.tm};w;["R","N","B","Q","K","P"];b;["r","n","b","q","k","p"]};
				{func.error;Baka, that's your pieces!}
				{return}
		}
		{//; Function for moving pieces }
		{function;chess.move;
			{func.default}
			{if;{logic;!;{bool;{slice;{get;_{get;~p}{get;~mv1}};1};includes;{get;~mv2}}};
				{func.error;That's an invalid move! {if;{length;{get;_{get;~p}{get;~mv1}}};>;1;Possible moves are `{join;{slice;{get;_{get;~p}{get;~mv1}};1};`, `}`}}
				{return}
			}
			{switch;{get;_{get;~p}chess.tm};
				w;
					{set;_{get;~p}chess.tm;b}
					{set;_{get;~p}chess.tw;w};
				b;
					{set;_{get;~p}chess.tm;w}
					{set;_{get;~p}chess.tw;b}
			}
			{set;_{get;~p}{get;~mv2};["{get;_{get;~p}{get;~mv1};0}"]}
			{set;_{get;~p}old;{func.chess.link;-o}}
			{set;_{get;~p}{get;~mv1};["_"]}
			{set;_{get;~p}{get;_{get;~p}chess.move}mark;{substring;{get;~mv1};0;1};{substring;{get;~mv1};1;2};0;0;255}
			{set;_{get;~p}{get;_{get;~p}chess.move}mark.2;{substring;{get;~mv1};0;1};{substring;{get;~mv1};1;2};0;0;255}
			{if;{switch;{get;_{get;~p}chess.tm};w;["r","n","b","q","k","p"];b;["R","N","B","Q","K","P"]};includes;{get;_{get;~p}{get;~mv2};0};

			{void;{increment;_{get;~p}chess.move}}
			{func.chess.board}
		}
		{function;promotion;
			{func.default}
			{//; Send the message to the channel }
			{set;~msgid;{send;{channelid};
				{embedbuild;
					author.name:{username;{get;~tm}}#{userdiscrim;{get;~tm}};
					author.icon_url:{useravatar;{get;~tm}};
					title:Pawn Promotion;
					description:{clean;
						React according to the piece you want to promote your pawn to.
						{switch;{get;_{get;~p}chess.tm};
							w;
								**Queen** <:wq:432200724437401610> | **Rook** <:wr:432200723531431938> | **Bishop** <:wb:432200723711787008> | **Cancel** <:chess_cross:436745175294017546>;
							b;
								**Queen** <:bq:432200723858456576> | **Rook** <:br:432200723451871233> | **Bishop** <:bb:432200721476222978> | **Cancel** <:chess_cross:436745175294017546>
						}
					};
					thumbnail.url:https://cdn.discordapp.com/emojis/{switch;{get;_{get;~p}chess.tm};w;432200723820970014;b;432200721853710336}.png
				}
			}}
			{set;~react;
				{switch;{get;_{get;~p}chess.tm};
					w;<:wq:432200724437401610> <:wr:432200723531431938> <:wb:432200723711787008>;
					b;<:bq:432200723858456576> <:br:432200723451871233> <:bb:432200721476222978>
				}
			}
			{//; Add the corresponding reactions to the message }
			{reactadd;{get;~msgid};{get;~react} <:chess_cross:436745175294017546>}
			{//; Wait until user reacts one of the emojis provided }
			{set;~reaction;
				{waitreaction;{get;~msgid};{userid;{get;~tm}};
					{get;~react} <:chess_cross:436745175294017546>
				}
			}
			{//; Get the content of the reaction }
			{switch;{get;~reaction;3};
				{switch;{get;_{get;~p}chess.tm};
					w;["<:wq:432200724437401610>","<:wr:432200723531431938>","<:wb:432200723711787008>"];
					b;["<:bq:432200723858456576>","<:br:432200723451871233>","<:bb:432200721476222978>"]
				};
					{set;~pr;_}
					{switch;{get;_{get;~p}chess.tm};
						w;
							{switch;{get;~reaction;3};
								<:wq:432200724437401610>;{set;~pr;Q};
								<:wr:432200723531431938>;{set;~pr;R};
								<:wb:432200723711787008>;{set;~pr;B}
							}
						b;
							{switch;{get;~reaction;3};
								<:bq:432200723858456576>;{set;~pr;q};
								<:br:432200723451871233>;{set;~pr;r};
								<:bb:432200721476222978>;{set;~pr;b}
							}
					}
					{switch;{get;_{get;~p}chess.tm};
						w;
							{set;_{get;~p}chess.tm;b}
							{set;_{get;~p}chess.tw;w};
						b;
							{set;_{get;~p}chess.tm;w}
							{set;_{get;~p}chess.tw;b}
					}
					{set;_{get;~p}{get;~mv2};["{get;~pr}"]}
					{set;_{get;~p}old;{func.chess.link;-o}}
					{set;_{get;~p}{get;~mv1};["_"]}
					{void;{increment;_{get;~p}chess.move}}
					{func.chess.board;Promoted the {switch;{get;_{get;~p}chess.tm};w;<:bp:432200721853710336>;b;<:wp:432200723820970014>} to {get;~reaction;3}};
				<:chess_cross:436745175294017546>;
					{func.chess.board;Move Cancelled.}
					{return};
					{func.chess.board;User took too long to respond!}
					{return}
			}
		}
		{//; Check if the move was valid }
		{func.default}
		{switch;{get;_{get;~p}{get;~mv1};0};
			_;{void};
			K;
				{switch;{get;~mv2};
					g1;
						{for;~H;5;>=;7;
							{if;{indexof;{get;_{get;~p}attacked.w};{get;~{get;~H}}1};!=;-1;
								{func.error;You cannot move the King into or from a check!}
								{return}
							}
						};
					b1;
						{for;~H;5;>=;2;-1;
							{if;{indexof;{get;_{get;~p}attacked.w};{get;~{get;~H}}1};!=;-1;
								{func.error;You cannot move the King into or from a check!}
								{return}
							}
						};
					{func.chess.move}
				};
			k;
				{switch;{get;~mv2};
					g8;
						{for;~H;5;>=;7;
							{if;{indexof;{get;_{get;~p}attacked.w};{get;~{get;~H}}8};!=;-1;
								{func.error;You cannot castle the King into or from a check!}
								{return}
							}
						};
					b8;
						{for;~H;5;>=;2;-1;
							{if;{indexof;{get;_{get;~p}attacked.w};{get;~{get;~H}}8};!=;-1;
								{func.error;You cannot move the King into or from a check!}
								{return}
							}
						};
					{func.chess.move}
				};
			P;
				{if;{substring;{get;~mv2};1};==;8;
					{func.promotion};
					{func.chess.move}
				};
			p;
				{if;{substring;{get;~mv2};1};==;1;
					{func.promotion};
					{func.chess.move}
				};
			["Q","R","N","B","q","r","n","b"];
				{func.chess.move}
		}
		{//; Refill the valid moves of the board }
		{for;~V;1;<=;8;
			{for;~H;1;<=;8;
				{func.default}
				{//; Reinitialize array }
				{set;_{get;~p}{get;~{get;~H}}{get;~V};["{get;_{get;~p}{get;~{get;~H}}{get;~V};0}"]}
				{//; Create the flipped version of the pieces }
				{switch;{get;_{get;~p}{get;~{get;~H}}{get;~V};0};
					["R","N","B","Q","K","P"];{set;~flip;["r","n","b","q","k","p","_"]};
					["r","n","b","q","k","p"];{set;~flip;["R","N","B","Q","K","P","_"]};
					{set;~flip}
				}
				{function;flip;
					{set;~piece;{get;_{get;~p}{get;~pos};0}}
					{if;{switch;{get;~piece};{get;~flip};true;false};
						{if;{get;~continue};
							{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~pos}}
							{if;{get;~piece};!=;_;{set;~continue;false}}
						};
						{set;~continue;false}
					}
				}
				{//; Refill for the Rook }
				{function;refill.rook;
					{//; Horizontally, Right }
					{set;~continue;true}
					{for;~i;{math;+;{get;~H};1};<=;8;
						{set;~pos;{get;~{get;~i}}{get;~V}}
						{func.flip}
					}
					{//; Horizontally, Left }
					{set;~continue;true}
					{for;~i;{math;-;{get;~H};1};>=;1;-1;
						{set;~pos;{get;~{get;~i}}{get;~V}}
						{func.flip}
					}
					{//; Vertically, Up }
					{set;~continue;true}
					{for;~i;{math;+;{get;~V};1};<=;8;
						{set;~pos;{get;~{get;~H}}{get;~i}}
						{func.flip}
					}
					{//; Vertically, Down }
					{set;~continue;true}
					{for;~i;{math;-;{get;~V};1};>=;1;-1;
						{set;~pos;{get;~{get;~H}}{get;~i}}
						{func.flip}
					}
				}
				{function;refill.bishop;
					{//; ↗, ↘, ↖, ↙ }
					{set;~o;+;+;+;-;-;+;-;-}
					{//; Make sure data pair is an empty spot }
					{while;{length;{get;~o}};!=;0;
						{set;~continue;true}
						{set;~o1;{shift;~o}}
						{set;~o2;{shift;~o}}
						{for;~i;1;<=;8;
							{set;~pos;{get;~{math;{get;~o1};{get;~H};{get;~i}}}{math;{get;~o2};{get;~V};{get;~i}}}
							{func.flip}
						}
					}
				}
				{switch;{get;_{get;~p}{get;~{get;~H}}{get;~V};0};
					["R","r"];
						{func.refill.rook};
					["N","n"];
						{//; Data pairs for valid Knight positions }
						{set;~hor;1;-1;1;-1;2;2;-2;-2}
						{set;~ver;2;2;-2;-2;1;-1;1;-1}
						{//; Make sure data pair is an empty spot }
						{for;~i;0;<;8;
							{set;~pos;{get;~{math;+;{get;~H};{get;~hor;{get;~i}}}}{math;+;{get;~V};{get;~ver;{get;~i}}}}
							{if;{switch;{get;_{get;~p}{get;~pos};0};{get;~flip};true;false};{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~pos}}}
						};
					["B","b"];
						{func.refill.bishop};
					["Q","q"];
						{func.refill.rook}
						{func.refill.bishop};
					["K","k"];
						{//; Data pairs for valid King positions }
						{set;~hor;-1;0;1;-1;1;-1;0;1}
						{set;~ver;1;1;1;0;0;-1;-1;-1}
						{for;~i;0;<;8;
							{set;~pos;{get;~{math;+;{get;~H};{get;~hor;{get;~i}}}}{math;+;{get;~V};{get;~ver;{get;~i}}}}
							{if;{get;~flip};includes;{get;_{get;~p}{get;~pos};0};{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~pos}}}
						};
					["P","p"];
						{set;~hor;-1;1}
						{if;{get;_{get;~p}{get;~{get;~H}}{get;~V};0};==;P;
							{set;~o;+}
							{set;~V.c;2}
							{set;~ver;1;1};
							{set;~o;-}
							{set;~V.c;7}
							{set;~ver;-1;-1}
						}
						{if;{get;_{get;~p}{get;~{get;~H}}{math;{get;~o};{get;~V};1};0};==;_;
							{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~{get;~H}}{math;{get;~o};{get;~V};1}}
							{if;{get;~V};==;{get;~V.c};
								{if;{get;_{get;~p}{get;~{get;~H}}{math;{get;~o};{get;~V};2};0};==;_;
									{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~{get;~H}}{math;{get;~o};{get;~V};2}}
								}
							}
						}
						{//; Data pairs for valid Pawn positions }
						{for;~i;0;<;2;
							{set;~pos;{get;~{math;+;{get;~H};{get;~hor;{get;~i}}}}{math;+;{get;~V};{get;~ver;{get;~i}}}}
							{if;{switch;{get;_{get;~p}{get;~pos};0};{get;~flip};{bool;{get;_{get;~p}{get;~pos};0};!=;_};false};{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~pos}}}
						}
				}
			}
		};
	link;
		{func.default}
		{func.chess.link};
	quit;
		{func.default}
		{set;_{userid}chess.start}
		{set;_{get;~en}chess.start}
		Quit game!;
	congregate;
		{clean;
			```prolog
			{func.default}{for;~V;1;<=;8;{for;~H;1;<=;8;{get;~{get;~H}}{get;~V} {slice;{get;_{get;~p}{get;~{get;~H}}{get;~V}};0}{newline}}}```
		};
	debug;
		{func.default}
		{inject;{args}};
	theme;
		{func.default}
		{if;{argslength};<;2;
			{embed;{embedbuild;
				title:{zws}{space;18}Chess Theme Styler;
				description:{regexreplace;
					```prolog
					{realpad;Piece;16;{space};left}
					{realpad;;12;{space};left} {if;{get;@{userid}chess.piece};==;1;➡;|} alpha [Default]
					{realpad;linares;12;{space};left} {switch;{get;@{userid}chess.piece};2;⬅;0;➡;|} merida {if;{get;@{userid}chess.piece};==;0;⬅}``````prolog
					{realpad;Sizes;16;{space};left}
					{realpad;Name;12;{space};left} | Description

					{realpad;21;12;{space};left} {if;{get;@{userid}chess.size};==;21;⬅;|} 21px sized board.
					{realpad;27;12;{space};left} {if;{get;@{userid}chess.size};==;27;⬅;|} 27px sized board.
					{realpad;[Default] 37;12;{space};left} {if;{get;@{userid}chess.size};==;37;⬅;|} 37px sized board.
					{realpad;49;12;{space};left} {if;{get;@{userid}chess.size};==;49;⬅;|} 49px sized board.
					{realpad;65;12;{space};left} {if;{get;@{userid}chess.size};==;65;⬅;|} 65px sized board.
					{realpad;87;12;{space};left} {if;{get;@{userid}chess.size};==;87;⬅;|} 87px sized board.
					{realpad;115;12;{space};left} {if;{get;@{userid}chess.size};==;115;⬅;|}  115px sized board.

					{realpad;dark [hex];12;{space};left} | Dark colored tiles.
					{realpad;light [hex];12;{space};left} | Light colored tiles.
					{realpad;leave blank for default.;28;{space};left}

					{realpad;[Default] oc;12;{space};left} {if;{get;@{userid}chess.coord};==;oc;⬅;|} Coordinates Outside.
					{realpad;nc;12;{space};left} {if;{get;@{userid}chess.coord};==;nc;⬅;|} No Coordinates.```
					Please do `{prefix}{commandname} theme <type>` in order to get that style.;/^\t+/gm;};
				footer.text:Do {prefix}{commandname} help for more help.;
				footer.icon_url:https://cdn.discordapp.com/emojis/432200723724369920.png?v=1;
				timestamp:{time}
			}}
			{return}
		}
		{set;~sizes;21;27;37;49;65;87;115}
		{switch;{lower;{args;1}};
			alpha;Successfully set piece style to alpha!{set;@{userid}chess.piece;1};
			linares;Successfully set piece style to linares!{set;@{userid}chess.piece;2};
			merida;Successfully set piecestyle to merida!{set;@{userid}chess.piece;0};
			{get;~sizes};Set chess board size to {parseint;{args;1}}px!{set;@{userid}chess.size;{parseint;{args;1}}};
			oc;Set chess coordinates to the outside of the board!{set;@{userid}chess.coord;oc};
			nc;Hidden chess coordinates!{set;@{userid}chess.coord;nc};
			light;
				{if;{argslength};<;3;
					{set;@{userid}chess.color.light;ffcc99}
					Reset light color to `{get;@{userid}chess.color.light}`
					{return}
				}
				{if;{regextest;{args;2};/^[A-Fa-f0-9]{6}$/};
					{set;@{userid}chess.color.light;{upper;{args;2}}}
					Set light color to `{get;@{userid}chess.color.light}`!;
					{func.error;Provide a valid hexcode!}
					{return}
				};
			dark;
				{if;{argslength};<;3;
					{set;@{userid}chess.color.dark;8F604F}Reset dark color to `{get;@{userid}chess.color.dark}`!
					{return}
				}
				{if;{regextest;{args;2};/^[A-Fa-f0-9]{6}$/};
					{set;@{userid}chess.color.dark;{upper;{args;2}}}Set dark color to `{get;@{userid}chess.color.dark}`!;
					{func.error;Provide a valid hexcode!}
					{return}
				};
				{func.error;Invalid theme!}
				{return}
		};
	{embed;{func.chess.help}}
}