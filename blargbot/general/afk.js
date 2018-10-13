b!snippet submit {if;{get;_{userid}afk};==;true;
	{setnick;{get;_{userid}nickname}}
	{set;_{userid}afk;false};
	{set;_{userid}nickname;{usernick}}
	{set;_{userid}afk;true}
	{setnick;[AFK] {substring;{usernick};0;26}}
}

{//; Everything autoresponse code }
{set;~output;[]}
{if;{get;_{userid}afk};==;true;
	{setnick;{get;_{userid}nickname}}
	{set;_{userid}afk;false}
	{push;~output;Welcome back.}
}
{foreach;~u;{regexmatch;{messagetext};/<@!?\d{17,18}>/g};
	{suppresslookup}
	{set;~user;{userid;{get;~u};quiet}}
	{if;{get;~user};!=;;
		{if;{get;_{get;~user}afk};==;true;
			{push;~output;{usernick;{get;~user}} is AFK!}
		}
	}
}
{if;{length;{get;~output}};!=;0;{send;{channelid};{usermention}, {foreach;~message;~output;{get;~message}{newline}}}} -t AFK (w/AFK Reminders) -d This cc will make it so that you can do `b!afk` in order to make yourself in AFK mode. While in AFK, anyone who mentions you will be reminded that you're AFK and when you chat again, it will automatically be removed. -c