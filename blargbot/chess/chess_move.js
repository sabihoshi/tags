{if;{get;~key};!=;{get;@chess.key};
	{func.error;Please run this tag in a cc! Do `{prefix}cc import chess chess` to continue.}
	{return}
}
{if;{get;_{userid}chess.start};!=;1;
	{func.error;You don't have a game yet! Do `{prefix}{commandname} start @user [white|black]`
	{return}
}}
{if;{argslength};<;3;
	{func.error;Please provide a valid move!
	{return}
}}
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
		{if;{get;_{userid}chess.color};==;b;{func.error;Baka, that's not your piece!}}
		{return};
	["r","n","b","q","k","p"];
		{if;{get;_{userid}chess.color};==;w;{func.error;Baka, that's not your piece!}}
		{return}
}
{switch;{get;_{get;~p}{get;~mv1};1};
	["R","N","B","Q","K","P"];
		{if;{get;_{userid}chess.color};==;w;{func.error;Baka, that's your pieces!}}
		{return};
	["r","n","b","q","k","p"];
		{if;{get;_{userid}chess.color};==;w;{func.error;Baka, that's your pieces!}}
		{return}
}
{function;chess.move;
	{if;{logic;!;{bool;{slice;{get;_{get;~p}{get;~mv1}};1};includes;{get;~mv2}}};
		{func.error;That's an invalid move! Possible moves are `{join;{slice;{get;_{get;~p}{get;~mv1}};1};`, `}`}
		{return}
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
				React according to the piece you want to promote your pcawn to.
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
{switch;{get;_{get;~p}{get;~mv1};0};
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
{set;_{get;~p}{get;~mv2};{get;_{get;~p}{get;~mv1};0}}
{set;_{get;~p}{get;~mv1};_}
{//; Refill the valid moves of the board }
{for;~V;1;<=;8;
	{for;~H;1;<=;8;
		{exec;chess_refill;{get;~{get;~H}}{get;~V}}
	}
}