{lang;cs}
{set;~user;{userid;{args;1}}}
{if;==;{if;==;{get;@admin};{userid};{void};{userid}};{get;~user};:x: You cannot play against yourself!{return}}
{if;==;1;{get;@{get;~user}bl};:x: This user is blacklisted or is a bot!{return}}
{if;==;1;{get;@{get;~user}chess_game};:x: User is still playing a game!{return}}
{if;==;1;{get;@{userid}chess_game};:x: You are still playing a game! Do `{prefix}t chess quit`{return}}
{set;@{userid}chess_instance;{base;{time;x};10;16}}
{exec;chess_initialize}
{set;~p;{get;@{userid}chess_instance}}
{set;@{userid}en;{get;~user}}
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
{set;~index0;1}{set;~index1;3}{repeat;{set;@{get;~p}{get;~{get;~index0}}{get;~index1};-}{if;==;8;{get;~index0};{set;~index0;1}{void;{increment;~index1}};{void;{increment;~index0}}};32}
{for;~index;1;<=;8;{set;@{get;~p}{get;~{get;~index}}7;p}}
{for;~index;1;<=;8;{set;@{get;~p}{get;~{get;~index}}2;P}}
{for;~index;1;<=;8;{set;@{get;~p}unmoved$p_{get;~{get;~index}}7;1}}
{for;~index;1;<=;8;{set;@{get;~p}unmoved$P_{get;~{get;~index}}2;1}}
{for;~index;1;<=;8;{set;@{get;~p}passant$p_{get;~{get;~index}}5;0}}
{for;~index;1;<=;8;{set;@{get;~p}passant$P_{get;~{get;~index}}4;0}}
**Chess game started with {username;{get;@{userid}en}}!** Instance: `{get;~p}`.{get;@nl}
{set;@{userid}chess_color;
	{switch;{args;2};
		w;w;
		white;w;
		b;b;
		black;b;
		r;{randchoice;w;b};
		random;{randchoice;w;b};
		{randchoice;w;b}
	}
}
{if;==;-1;{get;@{userid}chess_color};
	:x:  FATAL ERROR! Please report to tag creator. `chess_color is out of bounds.`
	{return}
}
**Game Started as {if;==;w;{get;@{userid}chess_color};White;Black}!**
{set;~p;{get;@{userid}chess_instance}} 
**Move Number**: **__{get;@{get;~p}move}__** - **{username;{get;@{get;~p}p{if;==;w;{get;@{get;~p}tm};1;2}}}{get;@aph}s** turn to move
{exec;chess_board;{args}}