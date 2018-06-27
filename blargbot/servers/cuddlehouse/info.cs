{if;{logic;||;{bool;{argslength};==;0};{bool;{lower;{args;0}};==;help}};
	{set;~embed;
		{embedbuild;
			author.icon_url:{useravatar};
			author.name:{username}#{userdiscrim};
			thumbnail.url:{guildicon};
			title:CuddleHouse Info Help;
			description:{clean;
				**{repeat;{zws}{space}{zws};4}`{prefix}{commandname} [@user]` - views your info or info of [@user] if specified..
				{repeat;{zws}{space}{zws};4}`{prefix}{commandname} set [flags]` - sets your info according to the flags. __Order does not matter__**
			};
			fields.name:Flags:;
			fields.value:{clean;
				**{repeat;{zws}{space}{zws};4}`Age:`
				  {repeat;{zws}{space}{zws};4}`Gender:`
				  {repeat;{zws}{space}{zws};4}`Height:`
				  {repeat;{zws}{space}{zws};4}`Weight:`
				  {repeat;{zws}{space}{zws};4}`Birthday:`
				  {repeat;{zws}{space}{zws};4}`Cuddles:`
				  {repeat;{zws}{space}{zws};4}`Spoon:`
				  {repeat;{zws}{space}{zws};4}`Location:`
				  {repeat;{zws}{space}{zws};4}`Description:`
				  {repeat;{zws}{space}{zws};4}`Image:` -
				  {repeat;{zws}{space}{zws};4}`Color:`
				  {repeat;{zws}{space}{zws};4}`Likes:` - Separate with commas
				  {repeat;{zws}{space}{zws};4}`Dislikes:` - Separate with commas**
			};
			fields.inline:true;
			fields.name:Examples:;
			fields.value:{clean;
				**{repeat;{zws}{space}{zws};4}`{prefix}{commandname} @Kao#0001` - Views the info of Kao#0001.```cs{newline}{prefix}{commandname} set
				Age: 16
				Gender: Male
				Height:	168cm
				Weight: 48kg
				Birthday: January 7, 2002
				Cuddles: Girls
				Spoon: Big Spoon
				Location: Philippines
				Description: I like cuddles under a blanket while raining outside.
				Color: Pink
				Likes: Stockings, Thigh highs, Uniforms, Skirts
				Dislikes: Lies, Broken promises, Loneliness 
				Image: https://cdn.discordapp.com/attachments/445300382441275393/459055323060240394/image_1-1.jpg```Will make a post in <#445286098323767296> of the info you set, according to the flags.**
			};
			fields.inline:true;
			footer.icon_url:{useravatar;246903976937783296};
			footer.text:Made by {username;246903976937783296}#{userdiscrim;246903976937783296};
			timestamp:{time};
			color:{exec;ecolor};
		}
	}
	{if;{logic;||;{bool;{channelid};==;445286098323767296};{bool;{channelid};==;445281586259427331}};
		{set;~message;{send;{channelid};{usermention}, DMed you the help! Please read it.}}
		{dm;{userid};{get;~embed}}
		{timer;{void;{delete;{get;~message}}};30s}
		{return}
	}
	{if;{channelid};==;445286025133293569;
		{void;{send;{channelid};{get;~embed}}}
		{return}
	}
	{void;{delete;{get;~message}}}
	{set;~message;{send;{channelid};{get;~embed}}}
	{timer;{void;{delete;{get;~message}}};60s}
	{return}
}
{delete}
{switch;{lower;{args;0}};
	set;
		{regexmatch;{args};
		{if;{flagset;g};{set;~g;{flag;g}}{execcc;gender}}
		{if;{flagset;l};{set;~L;{flag;l}}{execcc;location}}
		{if;{flagset;s};{set;~s;{flag;s}}{execcc;spoon}}
		{if;{get;_{userid}info};!=;;
			{void;{delete;445286098323767296;{get;_{userid}info}}}
		}
		{set;~embed;
			{embedbuild;
				thumbnail.url:{if;{flagset;i};{flag;i};{useravatar}};
				title:{username}'s Profile;
				description:{clean;
					{if;{flagset;d};{flag;d};Something about me!}
				};
				fields.name:Personal;
				fields.value:{clean;
					Gender: **{if;{get;_{userid}gender};!=;;{get;_{userid}gender};Other}**
					{if;{flagset;h};Height: **{flag;h}**}
					{if;{flagset;w};Weight: **{flag;w}**}
					{if;{flagset;b};Birthday: **{flag;b}**}
				};
				fields.inline:true;
				fields.name:Info;
				fields.value:{clean;
					Cuddles with: **{if;{flagset;c};{flag;c};None}**
					Spoon type: {if;{get;_{userid}spoon};!=;;**{get;_{userid}spoon}**}
					Location: **{if;{get;_{userid}location};!=;;{get;_{userid}location};Space}**
				};
				fields.inline:true;
				fields.name:Likes;
				fields.value:
					{if;{flagset;L};{set;~c;0}{foreach;~i;{split;{flag;L};,};{repeat;{zws}{space}{zws};4}{increment;~c}. **{clean;{get;~i}}**{newline}}};
				fields.inline:true;
				fields.name:Dislikes:;
				fields.value:
					{if;{flagset;D};{set;~c;0}{foreach;~i;{split;{flag;D};,};{repeat;{zws}{space}{zws};4}{increment;~c}. **{clean;{get;~i}}**{newline}}};
				fields.inline:true;
				footer.icon_url:{useravatar};
				footer.text:{username}#{userdiscrim};
				timestamp:{time};
				color:{if;{flagset;C};{if;{color;{flag;C}};!=;`Invalid color`;{color;{flag;C}};{exec;ecolor}};{exec;ecolor}}
			}
		}
		{void;{dm;{userid};Your <#445286098323767296> post was a success! Preview:;{get;~embed}}}
		{set;_{userid}info;{send;445286098323767296;{get;~embed}}}
}