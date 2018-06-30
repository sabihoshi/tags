{lang;cs}
{set;~roles;
	430139559783694336;
	436631492765155348;
	431254558585389057;
	431104246910550036;
	431909196808847361
}
{set;~override;
	148962557749755905;
	329085256181219328;
	226497798399459339
}
{switch;{argslength};
	0;
		{push;{get;~roles};436616971329601546;432986574070743040;432988119235821568;434434812535635968;436616971329601546;434434674647891968;434434769825038347;432988217139003392;434434088997224488}
		{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
			{set;~message;{send;{channelid};Syntax is `{prefix}{commandname} @user <add|remove|ban|unban> <anime|soft|aidoru>` or `{prefix}{commandname} @user <mute|unmute> <anime|soft|general> [time]`}}
			{timer;{void;{delete}{delete;{get;~message}}};5m};
			{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
			{timer;{void;{delete}{delete;{get;~message}}};30s}
		}
		{return};
	1;
		{push;{get;~roles};436616971329601546;432986574070743040;432988119235821568;434434812535635968;436616971329601546;434434674647891968;434434769825038347;432988217139003392;434434088997224488}
		{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
			{set;~message;{send;{channelid};:x: Correct syntax is `{prefix}{commandname} @user <add|remove|ban|unban> <anime|soft|aidoru>` or `{prefix}{commandname} @user <mute|unmute> <anime|soft|general> [time]`}}
			{timer;{void;{delete}{delete;{get;~message}}};5m};
			{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
			{timer;{void;{delete}{delete;{get;~message}}};30s}
		}
		{return}
}
{switch;{lower;{args;0}};
	rape;
		{execcc;isadmin}
		{exec;rape;{args;1;n}}
		{return};
	pee;
		{execcc;isadmin}
		{username} peed all over {args;1;n} <a:goldenshower:438045847192862720><a:goldenshower:438045847192862720><a:goldenshower:438045847192862720>
		{return};
	slave;
		{execcc;isadmin}
		{exec;slave;{args;1;n}}
		{return}
}
{switch;{lower;{args;1}};
	add;
		{switch;{lower;{args;2}};
			anime;
				{push;{get;~roles};436616971329601546}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{if;{hasrole;437004403833176068;{get;~user}};
						{set;~message;{send;{channelid};**{usernick;{get;~user}}** is banned from getting this role!}};
						{if;{addrole;436616996994416640;{get;~user}};
							{set;~message;{send;{channelid};Gave role to **{usernick;{get;~user}}**!}};
							{set;~message;{send;{channelid};Failed to give role for **{usernick;{get;~user}}**!}}
						}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
			soft;
				{push;{get;~roles};432986574070743040}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{if;{hasrole;435128972209160192;{get;~user}};
						{set;~message;{send;{channelid};**{usernick;{get;~user}}** is banned from getting this role!}};
						{if;{addrole;432954818806415363;{get;~user}};
							{set;~message;{send;{channelid};Gave role to **{usernick;{get;~user}}**!}};
							{set;~message;{send;{channelid};Failed to give role for **{usernick;{get;~user}}**!}}
						}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
			aidoru;
				{push;{get;~roles};432986574070743040}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{if;{hasrole;435128972209160192;{get;~user}};
						{set;~message;{send;{channelid};**{usernick;{get;~user}}** is banned from getting this role!}};
						{if;{addrole;436682423821008897;{get;~user}};
							{set;~message;{send;{channelid};Gave role to **{usernick;{get;~user}}**!}};
							{set;~message;{send;{channelid};Failed to give role for **{usernick;{get;~user}}**!}}
						}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
				{push;{get;~roles};436616971329601546;432986574070743040;432988119235821568;434434812535635968;436616971329601546;434434674647891968;434434769825038347;432988217139003392;434434088997224488}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{set;~message;{send;{channelid};:x: Correct syntax is `{prefix}{commandname} @user <add|remove|ban|unban> <anime|soft|aidoru>`}};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				}
		};
	remove;
		{switch;{lower;{args;2}};
			anime;
				{push;{get;~roles};436616971329601546}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{if;{removerole;436616996994416640;{get;~user}};
						{set;~message;{send;{channelid};Removed role from **{usernick;{get;~user}}**!}};
						{set;~message;{send;{channelid};Failed to remove role for **{usernick;{get;~user}}**!}}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
			soft;
				{push;{get;~roles};432986574070743040}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{if;{removerole;432954818806415363;{get;~user}};
						{set;~message;{send;{channelid};Removed role from **{usernick;{get;~user}}**!}};
						{set;~message;{send;{channelid};Failed to remove role for **{usernick;{get;~user}}**!}}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
			aidoru;
				{push;{get;~roles};432986574070743040}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{if;{removerole;436682423821008897;{get;~user}};
						{set;~message;{send;{channelid};Removed role from **{usernick;{get;~user}}**!}};
						{set;~message;{send;{channelid};Failed to remove role for **{usernick;{get;~user}}**!}}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
				{push;{get;~roles};436616971329601546;432986574070743040;432988119235821568;434434812535635968;436616971329601546;434434674647891968;434434769825038347;432988217139003392;434434088997224488}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{set;~message;{send;{channelid};:x: Correct syntax is `{prefix}{commandname} @user <add|remove|ban|unban> <anime|soft|aidoru>`}};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				}
		};
	ban;
		{switch;{lower;{args;2}};
			anime;
				{push;{get;~roles};436616971329601546}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{set;_{get;~user}animeban;true}
					{if;{logic;||;{removerole;436616996994416640;{get;~user}};{addrole;437004403833176068;{get;~user}}};
						{modlog;Banned in anime;{get;~user};{userid};;#cc0000}
						{set;~message;{send;{channelid};Removed role and banned **{usernick;{get;~user}}**!}};
						{set;~message;{send;{channelid};Failed to remove role for **{usernick;{get;~user}}**!}}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
			soft;
				{push;{get;~roles};432986574070743040}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{set;_{get;~user}softban;true}
					{if;{logic;||;{removerole;432954818806415363;{get;~user}};{addrole;435128972209160192;{get;~user}}};
						{modlog;Banned in soft;{get;~user};{userid};;#cc0000}
						{set;~message;{send;{channelid};Removed role and banned **{usernick;{get;~user}}**!}};
						{set;~message;{send;{channelid};Failed to remove role for **{usernick;{get;~user}}**!}}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
				{push;{get;~roles};436616971329601546;432986574070743040;432988119235821568;434434812535635968;436616971329601546;434434674647891968;434434769825038347;432988217139003392;434434088997224488}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{set;~message;{send;{channelid};:x: Correct syntax is `{prefix}{commandname} @user <add|remove|ban|unban> <anime|soft|aidoru>`}};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				}
		};
	banime;
		{push;{get;~roles};436616971329601546}
		{set;~user;{userid;{args;0}}}
		{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
			{set;_{get;~user}animeban;true}
			{if;{logic;||;{removerole;436616996994416640;{get;~user}};{addrole;437004403833176068;{get;~user}}};
				{modlog;Banned in anime;{get;~user};{userid};;#cc0000}
				{set;~message;{send;{channelid};Removed role and banned **{usernick;{get;~user}}**!}};
				{set;~message;{send;{channelid};Failed to remove role for **{usernick;{get;~user}}**!}}
			};
			{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
		};
	unban;
		{switch;{lower;{args;2}};
			anime;
				{push;{get;~roles};436616971329601546}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{set;_{get;~user}animeban;false}
					{if;{removerole;437004403833176068;{get;~user}};
						{modlog;Unbanned in anime;{get;~user};{userid};;#009933}
						{set;~message;{send;{channelid};Unbanned **{usernick;{get;~user}}**!}};
						{set;~message;{send;{channelid};Failed to unban **{usernick;{get;~user}}**!}}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
			soft;
				{push;{get;~roles};432986574070743040}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{set;_{get;~user}softban;false}
					{if;{removerole;435128972209160192;{get;~user}};
						{modlog;Unbanned in anime;{get;~user};{userid};;#009933}
						{set;~message;{send;{channelid};Ubanned **{usernick;{get;~user}}**!}};
						{set;~message;{send;{channelid};Failed to unban **{usernick;{get;~user}}**!}}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
				{push;{get;~roles};436616971329601546;432986574070743040;432988119235821568;434434812535635968;436616971329601546;434434674647891968;434434769825038347;432988217139003392;434434088997224488}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{set;~message;{send;{channelid};:x: Correct syntax is `{prefix}{commandname} @user <add|remove|ban|unban> <anime|soft|aidoru>`}};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				}
		};
	mute;
		{push;{get;~roles};434434812535635968}
		{set;~timer;{parseint;{args;3}}}
		{switch;{lower;{args;2}};
			anime;
				{push;{get;~roles};436616971329601546;436617773171605504}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{if;{addrole;437291974765182979;{get;~user}};
						{modlog;Mute in anime;{get;~user};{userid};;#ff5050}
						{set;~message;{send;{channelid};Muted **{usernick;{get;~user}}**! {if;{get;~timer};!=;NaN;They will be unmuted in {get;~timer} minute(s).}}}
						{if;{get;~timer};!=;NaN;{timer;{if;{removerole;437291974765182979;{get;~user}};{modlog;Auto-unmute;{get;~user};{userid};Auto-unmute in anime after {get;~timer} minutes.;#ff5050}};{get;~timer}m}};
						{set;~message;{send;{channelid};Failed to mute **{usernick;{get;~user}}**!}}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
			soft;
				{push;{get;~roles};432986574070743040;434434674647891968}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{if;{addrole;437291155239993374;{get;~user}};
						{modlog;Mute in soft;{get;~user};{userid};;#ff5050}
						{set;~message;{send;{channelid};Muted **{usernick;{get;~user}}**! {if;{get;~timer};!=;NaN;They will be unmuted in {get;~timer} minute(s).}}}
						{if;{get;~timer};!=;NaN;{timer;{if;{removerole;437291155239993374;{get;~user}};{modlog;Auto-unmute;#ff5050}};{get;~timer}m}};
						{set;~message;{send;{channelid};Failed to mute **{usernick;{get;~user}}**!}}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
			general;
				{push;{get;~roles};432988119235821568;434434769825038347}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{if;{addrole;437287008394805249;{get;~user}};
						{modlog;Mute in general;{get;~user};{userid};;#ff5050}
						{set;~message;{send;{channelid};Muted **{usernick;{get;~user}}**! {if;{get;~timer};!=;NaN;They will be unmuted in {get;~timer} minute(s).}}}
						{if;{get;~timer};!=;NaN;{timer;{if;{removerole;437287008394805249;{get;~user}};{modlog;Auto-unmute;{get;~user};{userid};Auto-unmute in general after {get;~timer} minutes.;#ff5050}};{get;~timer}m}};
						{set;~message;{send;{channelid};Failed to mute **{usernick;{get;~user}}**!}}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
				{push;{get;~roles};436616971329601546;432986574070743040;432988119235821568;434434812535635968;436616971329601546;434434674647891968;434434769825038347;432988217139003392;434434088997224488}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{set;~message;{send;{channelid};:x: Correct syntax is `{prefix}{commandname} @user <mute|unmute> <anime|soft|general> [time]`}};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				}
		};
	unmute;
		{push;{get;~roles};434434812535635968}
		{switch;{lower;{args;2}};
			anime;
				{push;{get;~roles};436616971329601546;436617773171605504}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{if;{removerole;437291974765182979;{get;~user}};
						{modlog;Unmute in anime;{get;~user};{userid};;#009933}
						{set;~message;{send;{channelid};Unmuted **{usernick;{get;~user}}**!}};
						{set;~message;{send;{channelid};Failed to unmute **{usernick;{get;~user}}**!}}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
			soft;
				{push;{get;~roles};432986574070743040;434434674647891968}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{if;{removerole;437291155239993374;{get;~user}};
						{modlog;Unmute in soft;{get;~user};{userid};;#009933}
						{set;~message;{send;{channelid};Unmuted **{usernick;{get;~user}}**!}};
						{set;~message;{send;{channelid};Failed to unmute **{usernick;{get;~user}}**!}}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
			general;
				{push;{get;~roles};432988119235821568;434434769825038347}
				{set;~user;{userid;{args;0}}}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{if;{removerole;437287008394805249;{get;~user}};
						{modlog;Unmute in general;{get;~user};{userid};;#009933}
						{set;~message;{send;{channelid};Unmuted **{usernick;{get;~user}}**!}};
						{set;~message;{send;{channelid};Failed to unmute **{usernick;{get;~user}}**!}}
					};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				};
				{push;{get;~roles};436616971329601546;432986574070743040;432988119235821568;434434812535635968;436616971329601546;434434674647891968;434434769825038347;432988217139003392;434434088997224488}
				{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
					{set;~message;{send;{channelid};:x: Correct syntax is `{prefix}{commandname} @user <mute|unmute> <anime|soft|general> [time]`}};
					{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
				}
		};
		{push;{get;~roles};436616971329601546;432986574070743040;432988119235821568;434434812535635968;436616971329601546;434434674647891968;434434769825038347;432988217139003392;434434088997224488}
		{if;{logic;||;{hasrole;{get;~roles}};{bool;{get;~override};includes;{userid}}};
			{set;~message;{send;{channelid};:x: Correct syntax is `{prefix}{commandname} @user <add|remove|ban|unban> <anime|soft|aidoru>` or `{prefix}{commandname} @user <mute|unmute> <anime|soft|general> [time]`}};
			{set;~message;{send;{channelid};:x: You do not have sufficient permissions!}}
		}
}
{timer;{void;{delete}{delete;{get;~message}}};5m}