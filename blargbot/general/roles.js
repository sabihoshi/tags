{//; Set the array here }
{set;~arr;{roles}}
{//; Set max items per page }
{set;~items;25}
{//; Make sure args is a valid number }
{set;~p;{if;{argslength};==;0;1;{parseint;{args;0}}}}
{//; Calculate the max page }
{set;~maxp;{ceil;{math;/;{length;{roles}};{get;~items}}}}
{//; Make sure args doesn't exceed max pages }
{if;{get;~p};>=;{get;~maxp};{set;~p;{get;~maxp}}}
{//; Make sure args isn't a negative }
{if;{get;~p};<=;0;{set;~p;1}}
{function;list;
	{//; Set the start and end of the slice }
	{set;~s;{math;*;{math;-;{get;~p};1};{get;~items}}}
	{set;~e;{math;+;{get;~s};{get;~items}}}
	{//; Output of the array }
	{clean;
		{repeat;`;3}prolog
		{foreach;~role;{slice;{get;~arr};{get;~s};{get;~e}};
			{get;~role} {rolename;{get;~role}}{newline}
		}--------------------
		Page {get;~p}/{get;~maxp}{repeat;`;3}
	}
}
{set;~msgid;{output;{func.list}}}
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