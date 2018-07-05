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
{//; Make sure user has enough credits }
{//; {if;{get;@{userid}credits};<;{get;~bet};
	:x: | **{username}, you do not have enough credits to make this bet! Do `{prefix}{if;{logic;!;{iscc}};t{space}}{commandname} daily` to get more credits.**
	{return}
} }
{//; Setup functions }
{function;fruit;{randchoose;🍌;🍒;🍐;🍈;🍇;🍊;🍉;🇱🇻;🍌;🍒;🔔;🇱🇻;7⃣;💎}}
{function;randomize;
	{for;~i;1;<=;3;{set;~fr{get;~i};{func.fruit};{func.fruit};{func.fruit}}}
	{clean;
		**[ 🎰 l SLOTS ]**
		{repeat;-;18}
		{join;{get;~fr1};{space}:{space}}
		{zws}
		{join;{get;~fr2};{space}:{space}}
		{zws}
		{join;{get;~fr3};{space}:{space}}
		{repeat;-;18}
	}
}
{//; Determine whether to do animation if it's a cc }
{if;{iscc};
	{set;~msg;{send;{channelid};{func.randomize}}}
	{repeat;{sleep;1s}{edit;{get;~msg};{func.randomize}};4};
	{func.randomize}
}
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
		{switch;true;
			{regextest;{get;~f};/^(?:(💎)(💎).|(💎).(💎)|.(💎)(💎))$/};20;
			{regextest;{get;~f};/^(?:(🇱🇻)(🇱🇻).|(🇱🇻).(🇱🇻)|.(🇱🇻)(🇱🇻))$/};10;
			{regextest;{get;~f};/^(?:(🍐)(🍐).|(🍐).(🍐)|.(🍐)(🍐))$/};3;
			{regextest;{get;~f};/^(?:(🍈)(🍈).|(🍈).(🍈)|.(🍈)(🍈))$/};3;
			{regextest;{get;~f};/^(?:(🍇)(🍇).|(🍇).(🍇)|.(🍇)(🍇))$/};3;
			{regextest;{get;~f};/^(?:(🍊)(🍊).|(🍊).(🍊)|.(🍊)(🍊))$/};3;
			{regextest;{get;~f};/^(?:(🍉)(🍉).|(🍉).(🍉)|.(🍉)(🍉))$/};3;
			{regextest;{get;~f};/^(?:(🍒)(🍒).|(🍒).(🍒)|.(🍒)(🍒))$/};1;
			0
		}
	}
}
{function;payout;
	{clean;
		| : : : {if;{get;~pay};!=;0;: **WIN** :;**LOST**} : : : |
		{zws}
		**{username}** used **{get;~bet}** credit(s) and {if;{get;~pay};==;0;lost everything.;won **{math;*;{get;~bet};{get;~pay}}** credits!}
	}
}
{if;{iscc};
	{edit;{get;~msg};{messagetext;{get;~msg}}{newline}{func.payout}};
	{func.payout}
}