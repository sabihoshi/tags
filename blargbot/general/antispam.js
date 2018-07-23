{//; Function for muting }
{function;mute;
	{roleadd;{roleid;Muted}}
	{modlog;[Auto-mod] Mute;{userid};;Spamming;red}
}
{//; Instant mute when message is greater than 25 blank lines }
{if;{length;{regexmatch;{messagetext};/\n\r?(?=\n\r?)/g}};>=;25;
	{func.mute}
	{void;{delete}}
}
{lock;write;spam;
{//; Function for adding new items to the array }
{function;add;
	{set;~t;{time;x}}
	{set;{get;~t}message;{messagetext};{channelid};{messageid}}
	{push;{userid}filter;{get;~t}}
}
{//; Initialize the filter array }
{if;{logic;!;{isarray;{get;{userid}filter}}};
	{set;{userid}filter;[]}
	{func.add}
	{commit}
	{return}
}
{//; Make sure expired items are removed }
{foreach;~item;{userid}filter;
	{if;{get;~item};<;{math;-;{time;x};15000};{set;{shift;{userid}filter}message}}
}
{//; Initialize threshold, >= 100 is a mute }
{set;~threshold;0}
{//; Add 15 in the threshold count for every entry, 25 if more than 5 entires }
{void;{increment;~threshold;{math;*;{length;{get;{userid}filter}};{if;{length;{get;{userid}filter}};>=;5;25;15}}}}
{//; Add 45 if message is greater than 1500 chars }
{if;{length;{messagetext}};>=;1500;{increment;~threshold;45}}
{void;{foreach;~t;{userid}filter;
	{//; Add 45 if message is greater than 1500 chars }
	{if;{length;{get;{get;~t}message;0}};>=;1500;{increment;~threshold;45}}
	{//; Add 25 if message matches last message }
	{if;{get;{get;~t}message;0};==;{messagetext};{increment;~threshold;25}}
	{//; Add 25 if Non-ASCII characters exceed 50 }
	{if;{length;{regexmatch;{get;{get;~t}message;0};/[^\x00-\x7F]/g}};>=;25;{increment;~threshold;50}}
	{//; Add 25 if message is less than 5 seconds old }
	{if;{get;~item};<;{math;-;{time;x};5000};{increment;~threshold;25}}
	{//; Add 10 for every blank 5 newlines }
	{increment;~threshold;{math;*;{rounddown;{math;/;{length;{regexmatch;{get;{get;~t}message;0};/\n\r?(?=\n\r?)/g}};5}};10}}
}}
{//; If threshold is met, mute the user and delete all messages. Otherwise add message to the array }
{if;{get;~threshold};>=;100;
	{foreach;~item;{userid}filter;
		{void;{delete;{get;{get;~item}message;1};{get;{get;~item}message;2}}}
	}
	{void;{delete}}
	{func.mute}
}
{func.add}