{//;

	===== Notes =====
	Missing features
	- En Passant
	- Checks
	- Checkmates
	- Undo
	- History

	Changelog
	12/26/2018
	- Add changelog
 }
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
	{set;~p;{jget;_{userid}chess;game}}
	{set;~en;{jget;_{get;~p}chess;{switch;{jget;_{userid}chess;color};w;b;b;w}}}
	{set;~tm;{jget;_{get;~p}chess;{jget;_{get;~p}chess;tm}}}
	{set;~tw;{jget;_{get;~p}chess;{jget;_{get;~p}chess;tw}}}
	{set;~1;a}{set;~a;1}{set;~3;c}{set;~c;3}{set;~4;d}{set;~d;4}{set;~5;e}{set;~e;5}{set;~2;b}{set;~b;2}{set;~6;f}{set;~f;6}{set;~7;g}{set;~g;7}{set;~8;h}{set;~h;8}
	{set;~move;{jget;_{get;~p}chess;move}}
	{set;~loading;https://thighs.are-pretty.sexy/dc7978.gif}
	{//; Default values for users }
	{set;~users;{userid};{get;~en}}
	{foreach;~user;~users;
		{if;{logic;!;{regextest;{jget;@{get;~user}chess;color.dark};/^(?:[a-f0-9]{3}|[a-f0-9]{6})$/i}};{jset;@{get;~user}chess;color.dark;8F604F;create}}
		{if;{logic;!;{regextest;{jget;@{get;~user}chess;color.light};/^(?:[a-f0-9]{3}|[a-f0-9]{6})$/i}};{jset;@{get;~user}chess;color.light;FFCC99;create}}
		{if;{logic;!;{bool;["nc","oc"];includes;{jget;@{get;~user}chess;coord}}};{jset;@{get;~user}chess;coord;oc;create}}
		{if;{logic;!;{bool;["0","1","2"];includes;{jget;@{get;~user}chess;piece}}};{jset;@{get;~user}chess;piece;1;create}}
		{if;{logic;!;{bool;["21","27","37","49","65","87","115"];includes;{jget;@{get;~user}chess;size}}};{jset;@{get;~user}chess;size;37;create}}
	}
}
{//; Move number }
{function;move.count;
	{set;~n;{jget;_{get;_{userid}chess;game}chess;move}}
	{get;~n}{switch;{substring;{get;~n};{math;-;{length;{get;~n}};2}};11;ᵗʰ;12;ᵗʰ;13;ᵗʰ;{switch;{substring;{get;~n};{math;-;{length;{get;~n}};1}};1;ˢᵗ;2;ⁿᵈ;3;ʳᵈ;ᵗʰ}}
}
{//; Functions for the chess link }
{function;chess.link;
	http://apronus.com/chess/diagram/stagram.php?d=P{for;~V;1;<=;8;{for;~H;1;<=;8;{jget;_{get;~p}chess;pieces.{get;~{get;~H}}{get;~V}.0}}}&p={jget;@{get;~tm}chess;size}&s={jget;@{get;~tm}chess;piece}&c={jget;@{get;~tm}chess;color.dark}{jget;@{get;~tm}chess;color.light}{repeat;0;12}{switch;{jget;@{get;~tm}chess;coord};nc;;&r=FFFFFF}&z={jget;_{get;~p}chess;tm}{if;{jget;_{get;~p}chess;tm};==;b;&f=1}
}
{function;txt64;
	&txt64={base64encode;{usernick;{get;~{params}}}}&txtfont64={base64encode;Avenir-black}&txtsize=18&txtfit=max&txtalign={switch;{params};tw;top;bottom}%2C%20center&txtclr=fff&txtshad=15&markalign=middle%2C%20center
}
{function;chess.image;
	{func.default}
	{//; Base image }
	{set;~generate;https://sandbox-uploads.imgix.net/u/1535370388-f3185bdeef5792d8a212982660d6baa2?fit=crop&w=330&h=385&markalign=middle%2C%20center&mark64=}
	{//; Add the past state to the image }
	{get;~generate}{base64encode;{jget;_{get;~p}chess;old}}&ba=middle%2C%20center&markalpha=40&blend64={base64encode;{get;~generate}{base64encode;{func.chess.link}}{func.txt64;tw}}{func.txt64;tm}
}
{//; Link for the chess board }
{function;chess.board;
	{func.default}
	{embed;{embedbuild;
		author.name:{username;{get;~tw}}#{userdiscrim;{get;~tw}};
		author.icon_url:https://cdn.discordapp.com/emojis/{switch;{jget;_{get;~p}chess;tw};w;432200723724369920;b;432200721820155924}.png;
		color:white;
		title:{func.move.count} Move;
		description:{params}{newline}**[Board]({func.chess.image})**;
		image.url:{func.chess.image};
		footer.text:{username;{get;~tm}}#{userdiscrim;{get;~tm}};
		footer.icon_url:https://cdn.discordapp.com/emojis/{switch;{jget;_{get;~p}chess;tm};w;432200723724369920;b;432200721820155924}.png;
		timestamp:{time}
	}}
}
{//; For creating the history of the chess board }
{function;chess.history;
	{func.default}
	{//; Initialize history array }
	{if;{logic;!;{isarray;{jget;_{get;~p}chess;history}}};{jset;_{get;~p}chess;history;[];create}}
	{//; Add to the end of the array }
	{set;~pos;{math;+;{length;{jget;_{get;~p}chess;history}};1}}
	{//; Begin to create history }
	{set;~history;tm;tw;promotion;castle;passant;mark}
	{foreach;~item;~history;
		{jset;_{get;~p}chess;history.{get;~pos}.{get;~item};{if;{get;~{get;~item}};==;;false;{get;~{get;~item}}};create}
	}
	{jset;_{get;~p}chess;history.{get;~pos}.pieces;{for;~V;1;<=;8;{for;~H;1;<=;8;{jget;_{get;~p}chess;pieces.{get;~p}{get;~{get;~H}}{get;~V};0}}};create}
}
{switch;{lower;{args;0}};
	board;
		{func.default}
		{func.chess.board};
	start;
		{//; Make sure you don't have an existing game }
		{if;{jget;_{userid}chess;start};==;1;
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
		{if;{jget;_{get;~enemy}chess;start};==;1;
			{func.error;Your opponent already has a chess game!}
			{return}
		}
		{//; Setup game variables }
		{jset;_{userid}chess;game;{base;{time;x};10;16};create}
		{jset;_{get;~enemy}chess;game;{jget;_{userid}chess;game};create}
		{set;~p;{jget;_{userid}chess;game}}
		{func.default}
		{set;_{get;~p}chess;
			{json;
				{
					"chess": {
						"move": "0",
						"start": "1",
						"tm": "w",
						"tw": "b",
						"w": "",
						"b": ""
					},
					"attacked": {
						"w": ["a6", "c6", "f6", "h6", "a6", "a5", "b6", "b5", "c6", "c5", "d6", "d5", "e6", "e5", "f6", "f5", "g6", "g5", "h6", "h5"],
						"b": ["a3", "c3", "f3", "h3", "a3", "a4", "b3", "b4", "c3", "c4", "d3", "d4", "e3", "e4", "f3", "f4", "g3", "g4", "h3", "h4"]
					},
					"pieces": {
						"a1": ["R"], "b1": ["N", "a3", "c3"], "c1": ["B"], "d1": ["Q"], "e1": ["K"], "f1": ["B"], "g1": ["N", "f3", "h3"], "h1": ["R"], "a2": ["P", "a3", "a4"], "b2": ["P", "b3", "b4"], "c2": ["P", "c3", "c4"], "d2": ["P", "d3", "d4"], "e2": ["P", "e3", "e4"], "f2": ["P", "f3", "f4"], "g2": ["P", "g3", "g4"], "h2": ["P", "h3", "h4"], "a3": ["_"], "b3": ["_"], "c3": ["_"], "d3": ["_"], "e3": ["_"], "f3": ["_"], "g3": ["_"], "h3": ["_"], "a4": ["_"], "b4": ["_"], "c4": ["_"], "d4": ["_"], "e4": ["_"], "f4": ["_"], "g4": ["_"], "h4": ["_"], "a5": ["_"], "b5": ["_"], "c5": ["_"], "d5": ["_"], "e5": ["_"], "f5": ["_"], "g5": ["_"], "h5": ["_"], "a6": ["_"], "b6": ["_"], "c6": ["_"], "d6": ["_"], "e6": ["_"], "f6": ["_"], "g6": ["_"], "h6": ["_"], "a7": ["p", "a6", "a5"], "b7": ["p", "b6", "b5"], "c7": ["p", "c6", "c5"], "d7": ["p", "d6", "d5"], "e7": ["p", "e6", "e5"], "f7": ["p", "f6", "f5"], "g7": ["p", "g6", "g5"], "h7": ["p", "h6", "h5"], "a8": ["r"], "b8": ["n", "a6", "c6"], "c8": ["b"], "d8": ["q"], "e8": ["k"], "f8": ["b"], "g8": ["n", "f6", "h6"], "h8": ["r"]
					},
					"history": [
						{
							"chess": {
							"tm": "w",
							"tw": "b",
							"mark": []
							},
							"pieces": "RNBQKBNRPPPPPPPP________________________________pppppppprnbqkbnr"
						}
					]
				}
			}
		}
		{jsonset;_{get;~p}chess;w;{userid};create}
		{jsonset;_{get;~p}chess;b;{get;~enemy};create}
		{//; Output the board }
		{func.chess.board;**Game started!**};
	move;
		{if;{jget;_{userid}chess;start};!=;1;
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
		{switch;{jget;_{get;~p}chess;pieces.{get;~mv1}.0};
			{switch;{jget;_{get;~p}chess;tm};w;["r","n","b","q","k","p","_"];b;["R","N","B","Q","K","P","_"]};
				{func.error;Baka, that's not your piece!}
				{return}
		}
		{switch;{jget;_{get;~p}chess;pieces.{get;~mv2}.0};
			{switch;{jget;_{get;~p}chess;tm};w;["R","N","B","Q","K","P"];b;["r","n","b","q","k","p"]};
				{func.error;Baka, that's your pieces!}
				{return}
		}
		{//; Refill the valid moves of the board }
		{function;chess.refill;
			{for;~V;1;<=;8;
				{for;~H;1;<=;8;
					{func.default}
					{//; Raw of current position }
					{set;~position;pieces.{get;~{get;~H}}{get;~V}}
					{set;~position.length;{length;{jget;_{get;~p}chess;{get;~position}}}}
					{//; Reinitialize array }
					{jset;_{get;~p}chess;{get;~position};["{jget;_{get;~p}chess;{get;~position}.0}"]}
					{//; Create the flipped version of the pieces }
					{switch;{jget;_{get;~p}chess;{get;~position}.0};
						["R","N","B","Q","K","P"];{set;~flip;["r","n","b","q","k","p","_"]};
						["r","n","b","q","k","p"];{set;~flip;["R","N","B","Q","K","P","_"]};
						{set;~flip}
					}
					{//; Function for adding the valid position to the end of the array }
					{function;flip;
						{set;~piece;{jget;_{get;~p}chess;pieces.{get;~pos}.0}}
						{if;{switch;{get;~piece};{get;~flip};true;false};
							{if;{get;~continue};
								{jset;_{get;~p}chess;{get;~position}.{get;~position.length};{get;~pos}}
								{if;{get;~piece};!=;_;{set;~continue;false}}
							};
							{set;~continue;false}
						}
					}
					{//; Refill for the Rook }
					{function;refill.rook;
						{//; ➡ }
						{set;~continue;true}
						{for;~i;{math;+;{get;~H};1};<=;8;
							{set;~pos;{get;~{get;~i}}{get;~V}}
							{func.flip}
						}
						{//; ⬅ }
						{set;~continue;true}
						{for;~i;{math;-;{get;~H};1};>=;1;-1;
							{set;~pos;{get;~{get;~i}}{get;~V}}
							{func.flip}
						}
						{//; ⬆ }
						{set;~continue;true}
						{for;~i;{math;+;{get;~V};1};<=;8;
							{set;~pos;{get;~{get;~H}}{get;~i}}
							{func.flip}
						}
						{//; ⬇ }
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
					{switch;{jget;_{get;~p}chess;{get;~position};0};
						["R","r"];
							{func.refill.rook};
						["N","n"];
							{//; Data pairs for valid Knight positions }
							{set;~hor;1;-1;1;-1;2;2;-2;-2}
							{set;~ver;2;2;-2;-2;1;-1;1;-1}
							{//; Make sure data pair is an empty spot }
							{for;~i;0;<;8;
								{set;~pos;{get;~{math;+;{get;~H};{get;~hor;{get;~i}}}}{math;+;{get;~V};{get;~ver;{get;~i}}}}
								{if;{switch;{jget;_{get;~p}chess;pieces.{get;~pos}.0};{get;~flip};true;false};
									{jset;_{get;~p}chess;{get;~position}.{get;~position.length};{get;~pos}}
								}
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
								{if;{get;~flip};includes;{jget;_{get;~p}chess;pieces.{get;~pos}.0};
									{jset;_{get;~p}chess;{get;~position}.{get;~position.length};{get;~pos}}
								}
							};
						["P","p"];
							{set;~hor;-1;1}
							{//; Make sure data pair for color is correct }
							{if;{jget;_{get;~p}chess;{get;~position}.0};==;P;
								{set;~o;+}
								{set;~V.c;2}
								{set;~ver;1;1};
								{set;~o;-}
								{set;~V.c;7}
								{set;~ver;-1;-1}
							}
							{//; Math for horizontal positions }
							{set;~oV1;{math;{get;~o};{get;~V};1}}
							{set;~oV2;{math;{get;~o};{get;~V};2}}
							{//; Check if positions are valid moves }
							{if;{get;_{get;~p}{get;~{get;~H}}{get;~oV1};0};==;_;
								{jset;_{get;~p}chess;{get;~position}.{get;~positionlength};{get;~{get;~H}}{get;~oV1}}
								{if;{get;~V};==;{get;~V.c};
									{if;{jget;_{get;~p}chess;pieces.{get;~{get;~H}}{get;~oV2}.0};==;_;
										{jset;_{get;~p}chess;{get;~position}.{get;~positionlength};
											{get;~{get;~H}}{get;~oV2}
										}
									}
								}
							}
							{//; Data pairs for valid Pawn positions }
							{for;~i;0;<;2;
								{set;~pos;{get;~{math;+;{get;~H};{get;~hor;{get;~i}}}}{math;+;{get;~V};{get;~ver;{get;~i}}}}
								{if;{switch;{jget;_{get;~p}chess;pieces.{get;~pos}.0};{get;~flip};{bool;{jget;_{get;~p}chess;pieces.{get;~pos}.0};!=;_};false};
									{jset;_{get;~p}chess;{get;~position}.{get;~position.length};{get;~pos}}
								}
							}
					}
				}
			}
		}
		{//; Function for moving pieces }
		{function;chess.move;
			{func.default}
			{if;{logic;!;{bool;{slice;{jget;_{get;~p}chess;pieces.{get;~mv1}};1};includes;{get;~mv2}}};
				{func.error;That's an invalid move! {if;{length;{get;_{get;~p}{get;~mv1}}};>;1;Possible moves are `{join;{slice;{jget;_{get;~p}chess;pieces.{get;~mv1}};1};`, `}`}}
				{return}
			}
			{//; Move the piece }
			{set;~chess.{get;~mv2};{jget;_{get;~p}chess;pieces.{get;~mv1}.0}}
			{jset;_{get;~p}chess;pieces.{get;~mv2};["{jget;_{get;~p}chess;pieces.{get;~mv1}.0}"]}

			{//; Generate new moves }
			{func.chess.refill}

			{//; Aggregate all the valid moves each color can do }
			{func.default}
			{jset;_{get;~p}chess;attacked.w;
				[{for;~V;1;<=;8;{for;~H;1;<=;8;{get;~{get;~H}}{get;~V}{jget;_{get;~p}chess;pieces.{get;~{get;~H}}{get;~V}}}}]
			}
			{jset;_{get;~p}chess;attacked.w;
				[{for;~V;1;<=;8;{for;~H;1;<=;8;{get;~{get;~H}}{get;~V}{jget;_{get;~p}chess;pieces.{get;~{get;~H}}{get;~V}}}}]
			}

			{//; Find the King }
			{func.default}
			{for;~V;1;<=;8;{for;~H;1;<=;8;
				{set;~p;{jget;_{get;~p}chess;pieces.{get;~{get;~H}}{get;~V}.0}}
				{if;{get;~p};==;K;
					{set;~w.k;{get;~{get;~H}}{get;~V}}
				}
				{if;{get;~p};==;k;
					{set;~b.k;{get;~{get;~H}}{get;~V}}
				}
			}}

			{//; See if in check }
			{switch;{jget;_{get;~p}chess;tm};
				w;
					{if;}
				b;


			}

			{//; Change the piece to move }
			{switch;{jget;_{get;~p}chess;tm};
				w;
					{jset;_{get;~p}chess;tm;b}
					{jset;_{get;~p}chess;tw;w};
				b;
					{jset;_{get;~p}chess;tm;w}
					{jset;_{get;~p}chess;tw;b}
			}
			{//; Set old image }
			{jset;_{get;~p}chess;old;{func.chess.link;-o}}
			{jset;_{get;~p}chess;pieces.{get;~mv1};["_"]}
			{jset;_{get;~p}chess;mark.0;["{substring;{get;~mv1};0;1}","{substring;{get;~mv1};1;2}","0","0","255"]}
			{jset;_{get;~p}chess;mark.1;["{substring;{get;~mv2};0;1}","{substring;{get;~mv2};1;2}",{if;{switch;{jget;_{get;~p}chess;tm};w;["r","n","b","q","k","p"];b;["R","N","B","Q","K","P"]};includes;{jget;_{get;~p}chess;pieces.{get;~mv2}.0};"255","0","0";"0","0","255"}]}
			{jset;_{get;~p}chess;move;{math;+;{jget;_{get;~p}chess;move};1}}
			{func.chess.refill}
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
						{switch;{jget;_{get;~p}chess;tm};
							w;
								**Queen** <:wq:432200724437401610> | **Rook** <:wr:432200723531431938> | **Bishop** <:wb:432200723711787008> | **Cancel** <:chess_cross:436745175294017546>;
							b;
								**Queen** <:bq:432200723858456576> | **Rook** <:br:432200723451871233> | **Bishop** <:bb:432200721476222978> | **Cancel** <:chess_cross:436745175294017546>
						}
					};
					thumbnail.url:https://cdn.discordapp.com/emojis/{switch;{jget;_{get;~p}chess;tm};w;432200723820970014;b;432200721853710336}.png
				}
			}}
			{set;~react;
				{switch;{jget;_{get;~p}chess;tm};
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
				{switch;{jget;_{get;~p}chess;tm};
					w;["<:wq:432200724437401610>","<:wr:432200723531431938>","<:wb:432200723711787008>"];
					b;["<:bq:432200723858456576>","<:br:432200723451871233>","<:bb:432200721476222978>"]
				};
					{set;~pr;_}
					{switch;{jget;_{get;~p}chess;tm};
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
					{switch;{jget;_{get;~p}chess;tm};
						w;
							{jset;_{get;~p}chess;tm;b}
							{jset;_{get;~p}chess;tw;w};
						b;
							{jset;_{get;~p}chess;tm;w}
							{jset;_{get;~p}chess;tw;b}
					}
					{jset;_{get;~p}chess;pieces.{get;~mv2};["{get;~pr}"]}
					{jset;_{get;~p}chess;old;{func.chess.link;-o}}
					{jset;_{get;~p}chess;pieces.{get;~mv1};["_"]}
					{jset;_{get;~p}chess;move;{math;+;{jget;_{get;~p}chess;move};1}}
					{func.chess.board;Promoted the {switch;{jget;_{get;~p}chess;tm};w;<:bp:432200721853710336>;b;<:wp:432200723820970014>} to {get;~reaction;3}};
				<:chess_cross:436745175294017546>;
					{func.chess.board;Move Cancelled.}
					{return};
					{func.chess.board;User took too long to respond!}
					{return}
			}
		}
		{//; Aggregate all the valid moves each color can do }
		{func.default}
		{jset;_{get;~p}chess;attacked.w;
			[{for;~V;1;<=;8;{for;~H;1;<=;8;{get;~{get;~H}}{get;~V}{jget;_{get;~p}chess;pieces.{get;~{get;~H}}{get;~V}}}}]
		}
		{//; Find the King }
		{func.default}
		{for;~V;1;<=;8;{for;~H;1;<=;8;
			{set;~p;{jget;_{get;~p}chess;pieces.{get;~{get;~H}}{get;~V}.0}}
			{if;{get;~p};==;K;
				{set;~w.k;{get;~{get;~H}}{get;~V}}
			}
			{if;{get;~p};==;k;
				{set;~b.k;{get;~{get;~H}}{get;~V}}
			}
		}}
		{//; Check if the move was valid }
		{func.default}
		{switch;{jget;_{get;~p}chess;pieces.{get;~mv1}.0};
			_;{void};
			K;
				{switch;{get;~mv2};
					g1;
						{//; Castling }
						{for;~H;5;>=;7;
							{if;{indexof;{get;_{get;~p}attacked.w};{get;~{get;~H}}1};!=;-1;
								{func.error;You cannot move the King into or from a check!}
								{return}
							}
						};
					b1;
					{//; Castling }
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
						{//; Castling }
						{for;~H;5;>=;7;
							{if;{indexof;{get;_{get;~p}attacked.w};{get;~{get;~H}}8};!=;-1;
								{func.error;You cannot castle the King into or from a check!}
								{return}
							}
						};
					b8;
						{//; Castling }
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
			{func.default}{for;~V;1;<=;8;{for;~H;1;<=;8;{get;~{get;~H}}{get;~V} {jget;_{get;~p}chess;pieces.{get;~{get;~H}}{get;~V}}{newline}}}```
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
					{realpad;;12;{space};left} {if;{jget;@{userid}chess;piece};==;1;➡;|} alpha [Default]
					{realpad;linares;12;{space};left} {switch;{jget;@{userid}chess;piece};2;⬅;0;➡;|} merida {if;{jget;@{userid}chess;piece};==;0;⬅}``````prolog
					{realpad;Sizes;16;{space};left}
					{realpad;Name;12;{space};left} | Description

					{realpad;21;12;{space};left} {if;{jget;@{userid}chess;size};==;21;⬅;|} 21px sized board.
					{realpad;27;12;{space};left} {if;{jget;@{userid}chess;size};==;27;⬅;|} 27px sized board.
					{realpad;[Default] 37;12;{space};left} {if;{jget;@{userid}chess;size};==;37;⬅;|} 37px sized board.
					{realpad;49;12;{space};left} {if;{jget;@{userid}chess;size};==;49;⬅;|} 49px sized board.
					{realpad;65;12;{space};left} {if;{jget;@{userid}chess;size};==;65;⬅;|} 65px sized board.
					{realpad;87;12;{space};left} {if;{jget;@{userid}chess;size};==;87;⬅;|} 87px sized board.
					{realpad;115;12;{space};left} {if;{jget;@{userid}chess;size};==;115;⬅;|}  115px sized board.

					{realpad;dark [hex];12;{space};left} | Dark colored tiles.
					{realpad;light [hex];12;{space};left} | Light colored tiles.
					{realpad;leave blank for default.;28;{space};left}

					{realpad;[Default] oc;12;{space};left} {if;{jget;@{userid}chess;coord};==;oc;⬅;|} Coordinates Outside.
					{realpad;nc;12;{space};left} {if;{jget;@{userid}chess;coord};==;nc;⬅;|} No Coordinates.```
					Please do `{prefix}{commandname} theme <type>` in order to get that style.;/^\t+/gm;};
				footer.text:Do {prefix}{commandname} help for more help.;
				footer.icon_url:https://cdn.discordapp.com/emojis/432200723724369920.png?v=1;
				timestamp:{time}
			}}
			{return}
		}
		{set;~sizes;21;27;37;49;65;87;115}
		{switch;{lower;{args;1}};
			alpha;Successfully set piece style to alpha!{jset;@{userid}chess;piece;1;create};
			linares;Successfully set piece style to linares!{jset;@{userid}chess;piece;2;create};
			merida;Successfully set piecestyle to merida!{jset;@{userid}chess;piece;0;create};
			{get;~sizes};Set chess board size to {parseint;{args;1}}px!{jset;@{userid}chess;size;{parseint;{args;1}};create};
			oc;Set chess coordinates to the outside of the board!{jset;@{userid}chess;coord;oc;create};
			nc;Hidden chess coordinates!{jset;@{userid}chess;coord;nc;create};
			light;
				{if;{argslength};<;3;
					{jset;@{userid}chess;color.light;ffcc99;create}
					Reset light color to `{jget;@{userid}chess;color.light}`
					{return}
				}
				{if;{regextest;{args;2};/^[A-Fa-f0-9]{6}$/};
					{jset;@{userid}chess;color.light;{upper;{args;2}};create}
					Set light color to `{jget;@{userid}chess;color.light}`!;
					{func.error;Provide a valid hexcode!}
					{return}
				};
			dark;
				{if;{argslength};<;3;
					{jset;@{userid}chess;color.dark;8F604F;create}
					Reset dark color to `{jget;@{userid}chess;color.dark}`!
					{return}
				}
				{if;{regextest;{args;2};/^[A-Fa-f0-9]{6}$/};
					{jset;@{userid}chess;color.dark;{upper;{args;2}};create}
					Set dark color to `{jget;@{userid}chess;color.dark}`!;
					{func.error;Provide a valid hexcode!}
					{return}
				};
				{func.error;Invalid theme!}
				{return}
		};
	{embed;{func.chess.help}}
}