{func;time;
	{//;Your time in Seconds to show the Time "Since":}
	{set;~time;{params}}
	{//;Find out the Absolute difference in seconds between the Current Time and the Specified Time:}
	{set;~time;{abs;{floor;{math;-;{get;~time};{time;X}}}}}
	{//;Parse Time to Days:}
	{set;~d;{floor;{math;/;{get;~time};86400}}}
	{//;Parse Remaining Hours in Days:}
	{set;~dh;{floor;{math;/;{math;%;{get;~time};86400};3600}}}
	{//;Parse Time to Hours:}
	{set;~h;{floor;{math;/;{get;~time};3600}}}
	{//;Parse Time to Minutes:}
	{set;~m;{floor;{math;/;{math;%;{get;~time};3600};60}}}
	{//;Parse Time to Seconds:}
	{set;~s;{floor;{math;%;{get;~time};60}}}
	**{get;~d}**d **{get;~dh}**h **{get;~m}**m **{get;~s}**s
}
{func;color;
	{//; Initialize our Arrays of colors and roles the user is a part of }
	{set;~eColor;[]}
	{set;~roles;{roles;{params}}}
	{//; Check each one of the user's roles from Highest priority to Lowest to make sure they aren't Discord's default color.  }
	{foreach;~color;{get;~roles};
		{if;{rolecolor;{get;~color}};!=;000000;
			{push;{get;~eColor};{rolecolor;{get;~color}}}
		}
	}
	{//; If array is empty, use default color }
	{if;{length;{get;~eColor}};==;0;
		{set;~eColor;blue}
	}
	{get;~eColor;0}
}
{func;user;
	{set;~user;{params}}
	{embedbuild;
		author.icon_url:{useravatar;{get;~user}};
		author.name:{username;{get;~user}}#{userdiscrim} {if;{username;{get;~user}};!=;{usernick;{get;~user}};({usernick;{get;~user}})};
		thumbnail.url:{useravatar;{get;~user}};
		fields.name:Joined;
		fields.value:{userjoinedat;MMMM DD, YYYY HH:mm:ss;{get;~user}}{newline}{trim;{func.time;{userjoinedat;X;{get;~user}}}};
		fields.inline:true;
		fields.name:User ID;
		fields.value:{userid;{get;~user}};
		fields.inline:true;
		fields.name:Created;
		fields.value:{usercreatedat;MMMM DD, YYYY HH:mm:ss;{get;~user}}{newline}{trim;{func.time;{usercreatedat;X;{get;~user}}}};
		fields.inline:true;
		fields.name:Is a bot;
		fields.value:{if;{userisbot};<:chess_check:436745175025319938>;<:chess_cross:436745175294017546>};
		fields.inline:true;
		fields.name:Roles;
		fields.value:{zws}{foreach;~role;{roles;{get;~user}};<@&{get;~role}>{space}};
		fields.inline:false;
		footer.icon_url:https://cdn.discordapp.com/emojis/{switch;{userstatus;{get;~user}};online;475634656746930177;idle;475634656893730816;dnd;475634656738410503;offline;475634657170554891}.png;
		footer.text:User {indexof;{guildmembers};{get;~user}}/{math;-;{length;{guildmembers}};1};
		color:{func.color;{get;~user}}
	}
}
{switch;{lower;{args;0}};
	help;{void};
	list;
		{//; Set the array here }
		{set;~arr;{guildmembers}}
		{//; Set max items per page }
		{set;~items;15}
		{//; Make sure args is a valid number }
		{set;~p;{if;{argslength};==;1;1;{parseint;{args;1}}}}
		{//; Calculate the max page }
		{set;~maxp;{ceil;{math;/;{length;{get;~arr}};{get;~items}}}}
		{//; Make sure args doesn't exceed max pages }
		{if;{get;~p};>=;{get;~maxp};{set;~p;{get;~maxp}}}
		{//; Make sure args isn't a negative }
		{if;{get;~p};<=;0;{set;~p;1}}
		{function;list;
			{//; Set the start and end of the slice }
			{set;~s;{math;*;{math;-;{get;~p};1};{get;~items}}}
			{set;~e;{math;+;{get;~s};{get;~items}}}
			{//; Output of the array }
			{embedbuild;
				description:
					{clean;
						{set;~c;{math;-;{get;~s};1}}
						{repeat;`;3}prolog
						Guild Members:
						--------------------
						{foreach;~user;{slice;{get;~arr};{get;~s};{get;~e}};
							{realpad;{increment;~c};6;{space};left}. {username;{get;~user}}#{userdiscrim;{get;~user}}{newline}
						}--------------------
						Page {get;~p}/{get;~maxp}{repeat;`;3}
					};
				footer.text:Do {prefix}{if;{logic;!;{iscc}};t{space}}{commandname} help for more commands;
				footer.icon_url:{guildicon};
				timestamp:{time}
			}
		}
		{set;~msgid;{output;{embed;{func.list}}}}
		{reactadd;{get;~msgid};⬅➡}
		{repeat;
			{//; Make sure only applicable emojis work }
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
		{reactremove;{get;~msgid};{reactlist;{get;~msgid};{reactlist;{get;~msgid}}}};
	{if;{argslength};==;0;
		{embed;{func.user;{userid}}};
		{set;~user;{parseint;{abs;{args;0}}}}
		{if;{get;~user};==;NaN;
			{suppresslookup}
			{set;~user;{userid;{args}}}
			{if;{get;~user};==;;
				{embed;{exec;err;<:chess_cross:436745175294017546> Please provide a valid user!}}
				{return}
			};
			{set;~users;{guildmembers}}
			{set;~user;{get;~users;{get;~user}}}
		}
		{embed;{func.user;{get;~user}}}
		{return}
	}
}