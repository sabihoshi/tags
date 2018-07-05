{if;{logic;!;{iscc}};{return}}
{set;~names;[]}
{set;~values;[]}
{set;~extra.names;[]}
{set;~extra.values;[]}
{void;{inject;{regexreplace;{args};/([^:]+)\s*:\s*(.+)/g;{lb}push{semi}~names{semi}$1{rb}{lb}push{semi}~values{semi}$2{rb}}}}
{for;~i;0;<;{length;{get;~names}};
	{switch;{lower;{get;~names;{get;~i}}};
		age;{set;~age;{get;~values;{get;~i}}};
		gender;{set;~g;{get;~values;{get;~i}}}{execcc;gender};
		height;{set;~height;{get;~values;{get;~i}}};
		weight;{set;~weight;{get;~values;{get;~i}}};
		birthday;{set;~birthday;{get;~values;{get;~i}}};
		cuddles;{set;~cuddles;{get;~values;{get;~i}}};
		spoon;{set;~s;{get;~values;{get;~i}}}{execcc;spoon};
		location;{set;~L;{get;~values;{get;~i}}}{set;_{userid}location}{execcc;location};
		description;{set;~description;{get;~values;{get;~i}}};
		image;{if;{regextest;{get;~values;{get;~i}};/^https?:\/\/.+\.(?:jpe?g|png|gif)$/i};{set;~image;{get;~values;{get;~i}}}};
		color;{set;~color;{color;{get;~values;{get;~i}}}};
		likes;{set;~likes;{get;~values;{get;~i}}};
		dislikes;{set;~dislikes;{get;~values;{get;~i}}};
		{push;~extra.names;{get;~names;{get;~i}}}{push;~extra.values;{get;~values;{get;~i}}}
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
			{if;{get;~likes};!=;;{set;~c;0}{foreach;~i;{split;{get;~likes};,};{repeat;{zws}{space}{zws};4}{increment;~c}. **{trim;{clean;{get;~i}}}**{newline}};Unspecified};
		fields.inline:true;
		fields.name:Dislikes:;
		fields.value:
			{if;{get;~dislikes};!=;;{set;~c;0}{foreach;~i;{split;{get;~dislikes};,};{repeat;{zws}{space}{zws};4}{increment;~c}. **{trim;{clean;{get;~i}}}**{newline}};Unspecified};
		fields.inline:true;
		{if;{length;{get;~extra.names}};!=;0;fields.name:Extra Info};
		{if;{length;{get;~extra.names}};!=;0;fields.value:
			{for;~i;0;<;{length;{get;~extra.names}};{get;~extra.names;{get;~i}}: **{get;~extra.values;{get;~i}}**{newline}}
		};
		{if;{length;{get;~extra.names}};!=;0;fields.inline:true};
		footer.icon_url:{useravatar};
		footer.text:{username}#{userdiscrim};
		timestamp:{time};
		color:{if;{get;~color};!=;;{if;{get;~color};!=;`Invalid color`;{get;~color};{exec;ecolor}};{exec;ecolor}}
	}
}
{void;{dm;{userid};Your <#445286098323767296> post was a success! Preview:;{get;~embed}}}
{void;{roleremove;463626473899819010}}
{set;_{userid}info;{send;445286098323767296;{get;~embed}}}