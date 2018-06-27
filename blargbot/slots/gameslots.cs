b!t edit gameslots {fallback;}{set;@bet;{if;==;0;{argslength};1;{abs;{floor;{args;0}}}}}{set;@scheck;{if;>;{get;@bet};{get;@sll};{get;@sll};{if;<;{get;@bet};1;1;{get;@bet}}}}{if;<;{get;@{userid}credits};{get;@scheck};**❎ | {username}, {get;@sl2}**;{set;@fr1;{randchoose;🍌;🍒;🍐;🍈;🍇;🍊;🍉;🇱🇻;🍌;🍒;🔔;🇱🇻;7⃣;💎}}{set;@fr2;{randchoose;🍌;🍒;🍐;🍈;🍇;🍊;🍉;🍌;🍒;🔔;🇱🇻;7⃣;💎}}{set;@fr3;{randchoose;🍌;🍒;🍐;🍈;🍇;🍊;🍉;🍌;🍒;🔔;🇱🇻;7⃣;💎}}{exec;Kaoftw}{set;@fruit;{get;@fr1}{get;@fr2}{get;@fr3}}{set;@pay;{switch;{get;@fruit};💎💎💎;3000;7⃣7⃣7⃣;75;🔔🔔🔔;75;🇱🇻🇱🇻🇱🇻;30;🍉🍉🍉;10;🍊🍊🍊;10;🍇🍇🍇;10;🍈🍈🍈;10;🍐🍐🍐;10;🍒🍒🍒;3;🍌🍌🍌;1;{switch;{get;@fruit};💎💎{get;@fr3};20;{get;@fr1}💎💎;20;💎{get;@fr2}💎;20;🇱🇻🇱🇻{get;@fr3};10;{get;@fr1}🇱🇻🇱🇻;10;🇱🇻{get;@fr2}🇱🇻;10;🍒🍒{get;@fr3};1;{get;@fr1}🍒🍒;1;🍒{get;@fr2}🍒;1;NaN}}}{set;@cfr1;{switch;{get;@fr1};🍌;1;🍒;2;🔔;3;{get;@fr1}}}{set;@cfr2;{switch;{get;@fr2};🍌;4;🍒;5;🔔;6;{get;@fr2}}}{set;@cfr3;{switch;{get;@fr3};🍌;7;🍒;8;🔔;9;{get;@fr3}}}{set;@cpay;{if;!=;NaN;{get;@pay};{get;@pay};{if;==;{get;@cfr1};{get;@cfr2};3;{if;==;{get;@cfr2};{get;@cfr3};3;{if;==;{get;@cfr1};{get;@cfr3};3;0}}}}}{get;@sl1}
{get;@frs1}

{get;@fr1}{space;2}:{space;2}{get;@fr2}{space;2}:{space;2}{get;@fr3} <

{get;@frs2}
------------------
| : : : {if;>;{get;@cpay};0;: **WIN** :;**LOST**} : : : |
{exec;gameslots2}}