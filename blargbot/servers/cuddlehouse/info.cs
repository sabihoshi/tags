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
				**{repeat;{zws}{space}{zws};4}`{prefix}{commandname} @Kao#0001` - Views the info of Kao#0001.```cs{newline}{prefix}{commandname} set Age: 16
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
{switch;true;
	{bool;{args;0};startswith;set};
		{set;~names;[]}
		{set;~values;[]}
		{void;{inject;{regexreplace;{args};/(\w+)\s?:\s?(.+)/g;{lb}push{semi}~names{semi}$1{rb}{lb}push{semi}~values{semi}$2{rb}}}}
		{for;~i;0;<;{length;{get;~names}};
			{switch;true;
				{bool;age;includes;{lower;{get;~names;{get;~i}}}};{set;~age;{get;~values;{get;~i}}};
				{bool;gender;includes;{lower;{get;~names;{get;~i}}}};{set;~g;{get;~values;{get;~i}}}{execcc;gender};
				{bool;height;includes;{lower;{get;~names;{get;~i}}}};{set;~height;{get;~values;{get;~i}}};
				{bool;weight;includes;{lower;{get;~names;{get;~i}}}};{set;~weight;{get;~values;{get;~i}}};
				{bool;birthday;includes;{lower;{get;~names;{get;~i}}}};{set;~birthday;{get;~values;{get;~i}}};
				{bool;cuddles with;includes;{lower;{get;~names;{get;~i}}}};{set;~cuddles;{get;~values;{get;~i}}};
				{bool;{lower;{get;~names;{get;~i}}};inclues;spoon};{set;~s;{get;~values;{get;~i}}}{execcc;spoon};
				{logic;||;{bool;country;includes;{lower;{get;~names;{get;~i}}};};{bool;location;inclues;{lower;{get;~names;{get;~i}}}}};{set;~L;{get;~values;{get;~i}}}{execcc;location};
				{bool;description;includes;{lower;{get;~names;{get;~i}}}};{set;~description;{get;~values;{get;~i}}};
				{bool;image link;includes;{lower;{get;~names;{get;~i}}}};{set;~image;{get;~values;{get;~i}}};
				{bool;color;includes;{lower;{get;~names;{get;~i}}}};{set;~color;{color;{get;~values;{get;~i}}}};
				{bool;likes;includes;{lower;{get;~names;{get;~i}}}};{set;~likes;{get;~values;{get;~i}}};
				{bool;dislikes;includes;{lower;{get;~names;{get;~i}}}};{set;~dislikes;{get;~values;{get;~i}}}
			}
		}
		{if;{get;_{userid}info};!=;;
			{void;{delete;445286098323767296;{get;_{userid}info}}}
		}
		{set;~embed;
			{embedbuild;
				thumbnail.url:{if;{get;~image};!=;;{get;~image};{useravatar}};
				title:{username}'s Profile;
				description:{clean;
					{if;{get;~description};!=;;{get;~description};Something about me.}
				}{newline}**[DM Me!](https://canary.discordapp.com/users/{userid})**;
				fields.name:Personal;
				fields.value:{clean;
					Gender: **{if;{get;_{userid}gender};!=;;{get;_{userid}gender};Other}**
					{if;{get;~height};!=;;Height: **{get;~height}**}
					{if;{get;~weight};!=;;Weight: **{get;~weight}**}
					{if;{get;~age};!=;;Age: **{get;~age}**}
					{if;{get;~birthday};!=;;Birthday: **{get;~birthday}**}
				};
				fields.inline:true;
				fields.name:Info;
				fields.value:{clean;
					Cuddles with: **{if;{get;~cuddles};!=;;{get;~cuddles};None}**
					Spoon type: {if;{get;_{userid}spoon};!=;;**{get;_{userid}spoon}**}
					Location: **{if;{get;_{userid}location};!=;;{get;_{userid}location};Space}**
				};
				fields.inline:true;
				fields.name:Likes;
				fields.value:
					{if;{get;~likes};!=;;{set;~c;0}{foreach;~i;{split;{get;~likes};,};{repeat;{zws}{space}{zws};4}{increment;~c}. **{clean;{get;~i}}**{newline}};Unspecified};
				fields.inline:true;
				fields.name:Dislikes:;
				fields.value:
					{if;{get;~dislikes};!=;;{set;~c;0}{foreach;~i;{split;{get;~dislikes};,};{repeat;{zws}{space}{zws};4}{increment;~c}. **{clean;{get;~i}}**{newline}};Unspecified};
				fields.inline:true;
				footer.icon_url:{useravatar};
				footer.text:{username}#{userdiscrim};
				timestamp:{time};
				color:{if;{get;~color};!=;;{if;{get;~color};!=;`Invalid color`;{get;~color};{exec;ecolor}};{exec;ecolor}}
			}
		}
		{void;{dm;{userid};Your <#445286098323767296> post was a success! Preview:;{get;~embed}}}
		{set;_{userid}info;{send;445286098323767296;{get;~embed}}}
}