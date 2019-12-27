{//; Use: <array> <start> <length> }
{function;sliceReversed;
	{set;~reversed;{params;0}}
	{reverse;{get;~reversed}}
    {reverse;{slice;{get;~reversed};{params;1};{math;+;{params;1};{params;2}}}}
}

{//; Use: <array> <start> <length> <step> }
{function;getBlockReversed;
	{set;~array;{params;0}}
	{set;~start;{params;1}}
	{set;~length;{params;2}}
	{set;~step;{params;3}}
	{set;~result;[]}
	{//; Apply is used here as a workaround to .SelectMany(), so you don't have a 2d array suddenly. }
	{for;~i;0;<;{math;*;{get;~length};{get;~step}};{get;~step};
		{void;{apply;push;~result;{func.sliceReversed;{get;~array};{get;~i};{get;~step}}}}
	}
	{get;~result}
}

{if;{argslength};==;0;
	{set;~user;{userid}};
	{suppresslookup}
	{set;~user;{userid;{args;0}}}
	{if;{get;~user};==;;{usermention}, please provide a valid user!{return}}
}
{if;{length;{get;_{get;~user}warn.log}};==;0;User does not have any logs.{return}}
{//; eColor snippet by Allen Miquel#8168 }
{set;~eColor;[]}
{set;~roles;{get;~user}}
{foreach;~color;{get;~roles};{if;{rolecolor;{get;~color}};!=;000000;{push;{get;~eColor};{rolecolor;{get;~color}}}}}
{if;{length;{get;~eColor}};==;0;{set;~eColor;peach}}


{//; There is a warn for every 9 items in the array. }
{set;~skip;9}
{//; Set the array here }
{set;~arr;{get;_{get;~user}warn.log}}
{//; Set max items per page }
{set;~items;5}
{//; Make sure args is a valid number }
{set;~p;{if;{argslength};==;0;1;{parseint;{args;0}}}}
{//; Calculate the max page }
{set;~maxp;{ceil;{math;/;{length;{get;~arr}};{get;~skip};{get;~items}}}}
{//; Make sure args doesn't exceed max pages }
{if;{get;~p};>=;{get;~maxp};{set;~p;{get;~maxp}}}
{//; Make sure args isn't a negative }
{if;{get;~p};<=;0;{set;~p;1}}
{function;list;
	{set;~embed;
		author.name:{username;{get;~user}}#{userdiscrim;{get;~user}} ({userid;{get;~user}});
		author.icon_url:{useravatar;{get;~user}};
		color:{get;~eColor;0}
	}
	{//; Set the start and end of the slice }
	{set;~s;{math;*;{math;-;{get;~p};1};{get;~items}}}
    {set;~test;{func.getBlockReversed;{get;_{get;~user}warn.log};{get;~s};{get;~items};{get;~skip}}}
	{//; Output of the array }
	{apply;push;~embed;
        {get;~test}
	}
	{apply;embedbuild;{get;~embed}}
}

{set;~msgid;{send;{channelid};{func.list}}}
{reactadd;{get;~msgid};⬅➡}
{repeat;
	{//; Make sure only applicabl emojis work }
	{set;~reaction;{waitreaction;{get;~msgid};{userid};{switch;{get;~p};1;➡;{get;~maxp};⬅;⬅➡};true;300}}
	{//; Remove emojis added by user }
	{reactremove;{get;~msgid};⬅➡}
	{//; Determine whether to add or decrease page }
	{switch;{get;~reaction;3};
		⬅;{void;{decrement;~p}};
		➡;{void;{increment;~p}}
	}
	{//; Output the resulting page }
	{edit;{get;~msgid};{func.list}};
	10
}
{//; Remove all emojis when waitreaction limit is reached }
{reactremove;{get;~msgid};{reactlist;{get;~msgid};{reactlist;{get;~msgid}}}}
{return}