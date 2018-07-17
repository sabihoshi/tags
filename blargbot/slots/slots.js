{//; Predict bet }
{set;~bet;
	{switch;true;
		{bool;{argslength};==;0};1;
		{bool;{parseint;{args;0}};==;NaN};1;
		{bool;{parseint;{args;0}};<=;0};1;
		{bool;{parseint;{args;0}};>=;500};500;
		{parseint;{args;0}}
	}
}
{//; Setup functions }
{function;fruit;{randchoose;🍌;🍒;🍐;🍈;🍇;🍊;🍉;🇱🇻;🍌;🍒;🔔;🇱🇻;7⃣;💎}}
{function;randomize;
	{for;~i;1;<=;3;{set;~fr{get;~i};{func.fruit};{func.fruit};{func.fruit}}}
	{clean;
		**[ 🎰 l SLOTS ]**
		{repeat;-;18}
		{join;{get;~fr1};{space}:{space}}
		{zws}
		{join;{get;~fr2};{space}:{space}} **<**
		{zws}
		{join;{get;~fr3};{space}:{space}}
		{repeat;-;18}
	}
}
{//; Roll the slots 5 times }
{set;~msg;{output;{func.randomize}}}
{repeat;{sleep;1s}{edit;{get;~msg};{func.randomize}};4}
{void;
{//; Calculate payout }
{set;~10;🍉🍉🍉;🍊🍊🍊;🍇🍇🍇;🍈🍈🍈;🍐🍐🍐}
{set;~75;7⃣7⃣7⃣;🔔🔔🔔}
{set;~f;{join;{get;~fr2};}}
{set;~pay;
	{switch;{get;~f};
		💎💎💎;1000;
		{get;~75};75;
		🇱🇻🇱🇻🇱🇻;30;
		{get;~10};10;
		🍒🍒🍒;3;
		🍌🍌🍌;1;
		{trim;
			{set;~3;🍐;🍈;🍇;🍊;🍉;🍒}
			{function;compare;{switch;{params};💎;50;7⃣;25;🔔;25;🇱🇻;10;{get;~3};3;🍒;1;🍌;0}}
			{switch;true;
				{bool;{get;~fr2;0};==;{get;~fr2;1}};{func.compare;{get;~fr2;0}};
				{bool;{get;~fr2;1};==;{get;~fr2;2}};{func.compare;{get;~fr2;1}};
				{bool;{get;~fr2;0};==;{get;~fr2;2}};{func.compare;{get;~fr2;2}};0
			}
		}
	}
}
{function;payout;
	{clean;
		| : : : {if;{get;~pay};!=;0;: **WIN** :;**LOST**} : : : |
		{zws}
		**{username}** used **{get;~bet}** credit(s) and {if;{get;~pay};==;0;lost everything.;won **{math;*;{get;~bet};{get;~pay}}** credits!}
	}
}}
{//; Output the final state of the slots }
{edit;{get;~msg};{messagetext;{get;~msg}}{newline}{func.payout}}