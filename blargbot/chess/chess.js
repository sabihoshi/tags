{function;error;
	{embed;{embedbuild;
		author.name:{username}#{userdiscrim};
		author.icon_url:{useravatar};
		description:{params};
		footer.icon_url:https://cdn.discordapp.com/emojis/432200723724369920.png;
		footer.text:Do {prefix}{if;{logic;!;{iscc}};t{space}}{commandname} help for more help.;
		timestamp:{time};
		color:red
	}}
}
{//; Make sure default variables are set }
{function;default;
	{//; Global variables }
	{set;~p;{get;_{userid}chess.game}}
	{set;~en;{get;_{get;~p}chess.{if;{get;_{userid}chess.color};==;w;b;w}}}
	{set;~tm;{get;_{get;~p}chess.{get;_{get;~p}chess.tm}}}
	{set;~tw;{get;_{get;~p}chess.{get;_{get;~p}chess.tw}}}
	{set;~1;a}{set;~a;1}{set;~3;c}{set;~c;3}{set;~4;d}{set;~d;4}{set;~5;e}{set;~e;5}{set;~2;b}{set;~b;2}{set;~6;f}{set;~f;6}{set;~7;g}{set;~g;7}{set;~8;h}{set;~h;8}
	{//; Default values for users }
	{set;~users;{userid};{get;~en}}
	{foreach;~user;~users;
		{if;{logic;!;{regextest;{get;@{get;~user}chess.color.dark};/^(?:[a-f0-9]{lb}3{rb}|[a-f0-9]{lb}6{rb})$/i}};{set;@{get;~user}chess.color.dark;8F604F}}
		{if;{logic;!;{regextest;{get;@{get;~user}chess.color.light};/^(?:[a-f0-9]{lb}3{rb}|[a-f0-9]{lb}6{rb})$/i}};{set;@{get;~user}chess.color.light;FFCC99}}
		{if;{logic;!;{bool;["nc","o"];includes;{get;@{get;~user}chess.coord}}};{set;@{get;~user}chess.coord;o}}
		{if;{logic;!;{bool;["0","1","2"];includes;{get;@{get;~user}chess.piece}}};{set;@{get;~user}chess.coord;1}}
		{if;{logic;!;{bool;["21","27","37","49","65","87","115"];includes;{get;@{get;~user}chess.size}}};{set;@{get;~user}chess.size;37}}
	}
}
{//; Move number }
{function;move.count;
	{set;~n;{get;_{get;_{userid}chess.game}chess.move}}
	{get;~n}{switch;{substring;{get;~n};{math;-;{length;{get;~n}};2}};11;ᵗʰ;12;ᵗʰ;13;ᵗʰ;{switch;{substring;{get;~n};{math;-;{length;{get;~n}};1}};1;ˢᵗ;2;ⁿᵈ;3;ʳᵈ;ᵗʰ}}
}
{function;chess.link;
	http://apronus.com/chess/diagram/stagram.php?d=P{for;~V;1;<=;8;{for;~H;1;<=;8;{get;_{get;~p}{get;~{get;~H}}{get;~V};0}}}&p={get;@{get;~tm}chess.size}&s={get;@{get;~tm}chess.piece}&c={get;@{get;~tm}chess.color.dark}{get;@{get;~tm}chess.color.light}{repeat;0;12}{switch;{get;@{get;~tm}chess.coord};nc;;&r=FFFFFF}{set;~k;{if;{logic;&&;{bool;{get;~Va};!=;};{bool;{get;~Vb};!=;}};{get;~Va}Q{get;~Vb}Q0Q0Q255A}{if;{logic;&&;{bool;{get;~2a};!=;};{bool;{get;~2b};!=;}};{get;~2a}Q{get;~2b}{if;==;true;{get;~{get;~p}eat};Q255Q0Q0;Q0Q0Q255}}}{if;!=;;{get;~k};&k={get;~k}}&z={get;_{get;~p}chess.tm}{if;{get;_{get;~p}chess.tm};==;b;&f=1}
}
{//; Link for the chess board }
{function;chess.board;
	{func.default}
	{embed;{embedbuild;
		author.name:{username;{get;~tw}}#{userdiscrim;{get;~tw}};
		author.icon_url:https://cdn.discordapp.com/emojis/{if;{get;_{get;~p}chess.tw};==;w;432200723724369920;432200721820155924}.png;
		color:white;
		title:{func.move.count} Move;
		description:{params}{newline}**[Board]({func.chess.link})**;
		image.url:{func.chess.link};
		footer.text:{username;{get;~tm}}#{userdiscrim;{get;~tm}};
		footer.icon_url:https://cdn.discordapp.com/emojis/{if;{get;_{get;~p}chess.tm};==;w;432200723724369920;432200721820155924}.png;
		timestamp:{time}
	}}
}
{function;chess.history;
	{set;~p;{get;_{userid}chess.game}}
	{if;{logic;!;{isarray;{get;_{get;~p}chess.history}}};{set;_{get;~p}chess.history;[]}}
	{push;_{get;~p}chess.history;{func.chess.board}}
}
{function;chess.refill;
	{//; Refill the valid moves of the board }
	{for;~V;1;<=;8;
		{for;~H;1;<=;8;
			{func.default}
			{//; Reinitialize array }
			{set;_{get;~p}{get;~{get;~H}}{get;~V};["{get;_{get;~p}{get;~{get;~H}}{get;~V};0}"]}
			{function;refill.rook;
				{//; Horizontally, Right }
				{set;~continue;true}
				{for;~i;{math;+;{get;~H};1};<=;8;
					{if;{get;_{get;~p}{get;~{get;~i}}{get;~V};0};==;_;
						{if;{get;~continue};{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~{get;~i}}{get;~V}}};
						{set;~continue;false}
					}
				}
				{//; Horizontally, Left }
				{set;~continue;true}
				{for;~i;{math;-;{get;~H};1};>=;1;-1;
					{if;{get;_{get;~p}{get;~{get;~i}}{get;~V};0};==;_;
						{if;{get;~continue};{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~{get;~i}}{get;~V}}};
						{set;~continue;false}
					}
				}
				{//; Vertically, Up }
				{set;~continue;true}
				{for;~i;{math;+;{get;~V};1};<=;8;
					{if;{get;_{get;~p}{get;~{get;~H}}{get;~i};0};==;_;
						{if;{get;~continue};{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~{get;~H}}{get;~i}}};
						{set;~continue;false}
					}
				}
				{//; Vertically, Down }
				{set;~continue;true}
				{for;~i;{math;-;{get;~V};1};>=;1;-1;
					{if;{get;_{get;~p}{get;~{get;~H}}{get;~i};0};==;_;
						{if;{get;~continue};{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~{get;~H}}{get;~i}}};
						{set;~continue;false}
					}
				}
			}
			{function;refill.bishop;
				{//; Right, Up }
				{set;~continue;true}
				{for;~i;1;<=;8;
					{set;~pos;{get;~{math;+;{get;~H};{get;~i}}}{math;+;{get;~V};{get;~i}}}
					{if;{get;_{get;~p}{get;~pos};0};==;_;
						{if;{get;~continue};{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~pos}}};
						{set;~continue;false}
					}
				}
				{//; Right, Down }
				{set;~continue;true}
				{for;~i;1;<=;8;
					{set;~pos;{get;~{math;+;{get;~H};{get;~i}}}{math;-;{get;~V};{get;~i}}}
					{if;{get;_{get;~p}{get;~pos};0};==;_;
						{if;{get;~continue};{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~pos}}};
						{set;~continue;false}
					}
				}
				{//; Left, Up }
				{set;~continue;true}
				{for;~i;1;<=;8;
					{set;~pos;{get;~{math;+;{get;~H};{get;~i}}}{math;+;{get;~V};{get;~i}}}
					{if;{get;_{get;~p}{get;~pos};0};==;_;
						{if;{get;~continue};{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~pos}}};
						{set;~continue;false}
					}
				}
				{//; Left, Down }
				{set;~continue;true}
				{for;~i;1;<=;8;
					{set;~pos;{get;~{math;+;{get;~H};{get;~i}}}{math;-;{get;~V};{get;~i}}}
					{if;{get;_{get;~p}{get;~pos};0};==;_;
						{if;{get;~continue};{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~pos}}};
						{set;~continue;false}
					}
				}
			}
			{switch;{get;_{get;~p}{get;~{get;~H}}{get;~V};0};
				_;
					{void};
				["R","r"];
					{func.refill.rook};
				["N","n"];
					{//; Data pairs for valid Knight positions }
					{set;~Hor;1;-1;1;-1;2;2;-2;-2}
					{set;~Ver;2;2;-2;-2;1;-1;1;-1}
					{//; Make sure data pair is an empty spot }
					{for;~i;0;<;8;
						{set;~pos;{get;~{math;+;{get;~H};{get;~Hor;{get;~i}}}}{math;+;{get;~V};{get;~Ver;{get;~i}}}}
						{if;{get;_{get;~p}{get;~pos}};==;_;{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~pos}}}
					};
				["B","b"];
					{func.refill.bishop};
				["Q","q"];
					{func.refill.rook}
					{func.refill.bishop};
				["K","k"];
					{//; Data pairs for valid King positions }
					{set;~Hor;-1;0;1;-1;1;-1;0;1}
					{set;~Ver;1;1;1;0;0;-1;-1;-1}
					{for;~i;0;<;8;
						{set;~pos;{get;~{math;+;{get;~H};{get;~Hor;{get;~i}}}}{math;+;{get;~V};{get;~Ver;{get;~i}}}}
						{if;{get;_{get;~p}{get;~pos}};==;_;{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~pos}}}
					};
				P;
					{if;{get;_{get;~p}{get;~{get;~H}}{math;+;{get;~V};1}};==;_;
						{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~{get;~H}}{math;+;{get;~V};1}}
						{if;{get;_{get;~p}{get;~{get;~H}}{get;~V}.moved};!=;true;
							{if;{get;_{get;~p}{get;~{get;~H}}{math;+;{get;~V};2}};==;_;
								{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~{get;~H}}{math;+;{get;~V};2}}
							}
						}
					};
				p;
					{if;{get;_{get;~p}{get;~{get;~H}}{math;-;{get;~V};1}};==;_;
						{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~{get;~H}}{math;-;{get;~V};1}}
						{if;{get;_{get;~p}{get;~{get;~H}}{get;~V}.moved};!=;true;
							{if;{get;_{get;~p}{get;~{get;~H}}{math;-;{get;~V};2}};==;_;
								{push;_{get;~p}{get;~{get;~H}}{get;~V};{get;~{get;~H}}{math;-;{get;~V};2}}
							}
						}
					}
			}
		}
	}
}
{if;{argslength};==;0;
	{exec;chess_help}
	{return}
}
{switch;{lower;{args;0}};
	help;{exec;chess_help;{args}};
	start;
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
		{set;_{get;~p}a8;r}
		{set;_{get;~p}b8;n;a6;c6}
		{set;_{get;~p}c8;b}
		{set;_{get;~p}d8;q}
		{set;_{get;~p}e8;k}
		{set;_{get;~p}f8;b}
		{set;_{get;~p}g8;n;f6;h6}
		{set;_{get;~p}h8;r}
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
		{func.chess.board;**Game started!**};
	board;
		{func.chess.board};
	move;
		{if;{get;_{userid}chess.start};!=;1;
			{func.error;You don't have a game yet! Do `{prefix}{commandname} start @user [white|black]`}
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
			["R","N","B","Q","K","P"];
				{if;{get;_{userid}chess.color};==;b;
					{func.error;Baka, that's not your piece!}
					{return}
				};
			["r","n","b","q","k","p"];
				{if;{get;_{userid}chess.color};==;w;
					{func.error;Baka, that's not your piece!}
					{return}
				}
		}
		{switch;{get;_{get;~p}{get;~mv2};0};
			["R","N","B","Q","K","P"];
				{if;{get;_{userid}chess.color};==;w;
					{func.error;Baka, that's your pieces!}
					{return}
				}
				;
			["r","n","b","q","k","p"];
				{if;{get;_{userid}chess.color};==;w;
					{func.error;Baka, that's your pieces!}
					{return}
				}
		}
		{//; Function for moving pieces }
		{function;chess.move;
			{if;{logic;!;{bool;{slice;{get;_{get;~p}{get;~mv1}};1};includes;{get;~mv2}}};
				{func.error;That's an invalid move! Possible moves are `{join;{slice;{get;_{get;~p}{get;~mv1}};1};`, `}`}
				{return};
				{func.default}
				{set;_{get;~p}{get;~mv2};{get;_{get;~p}{get;~mv1};0}}
				{set;_{get;~p}{get;~mv1};_}
				{if;{get;_{get;~p}chess.tm};==;w;
					{set;_{get;~p}chess.tm;b}
					{set;_{get;~p}chess.tw;w};
					{set;_{get;~p}chess.tm;w}
					{set;_{get;~p}chess.tw;b}
				}
			}
		}
		{function;promotion;
			{//; Send the message to the channel }
			{set;~msgid;{send;{channelid};
				{embedbuild;
					author.name:{username}#{userdiscrim};
					author.icon_url:{useravatar};
					title:Pawn Promotion;
					description:{clean;
						React according to the piece you want to promote your pawn to.
						{switch;{get;_{userid}chess.color};
							w;
								<:wq:432200724437401610> <:wr:432200723531431938> <:wb:432200723711787008>;
							b;
								<:bq:432200723858456576> <:br:432200723451871233> <:bb:432200721476222978>
						}
					};
					thumbnail.url:https://cdn.discordapp.com/emojis/{if;{get;_{userid}chess.color};==;w;432200723820970014;432200721853710336}.png
				}
			}}
			{//; Add the corresponding reactions to the message }
			{reactadd;{get;~msgid};🇶 🇷 🇧 ❎}
			{//; Wait until user reacts one of the emojis provided }
			{set;~reaction;
				{waitreaction;{get;~msgid};{userid};
					🇶 🇷 🇧 ❎
				}
			}
			{//; Get the content of the reaction }
			{switch;{get;~reaction;3};
				["🇶","🇷","🇧"];
					Promoted the {if;{get;_{userid}chess.color};==;w;<:wp:432200723820970014> to {switch;{get;~reaction;3};🇶;<:wq:432200724437401610>;🇷;<:wr:432200723531431938>;🇧;<:wb:432200723711787008>};<:bp:432200721853710336> to {switch;{get;~reaction;3};🇶;<:bq:432200723858456576>;🇷;<:br:432200723451871233>;🇧;<:bb:432200721476222978>}};
				❎;
					Move Cancelled.
					{return};
					User took too long to respond!
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
		{func.chess.refill}
		{func.chess.board};
	quit;
		{func.default}
		{set;_{userid}chess.start}
		{set;_{get;~en}chess.start}
		Quit game!;
	congregate;
		{clean;
			```prolog
			{func.default}{for;~V;1;<=;8;{for;~H;1;<=;8;{slice;{get;_{get;~p}{get;~{get;~H}}{get;~V}};0}{newline}}}```
		};
	refill;
		{func.default}
		{func.chess.refill};
	{exec;chess_help;{args}}
}