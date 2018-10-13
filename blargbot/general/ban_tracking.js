{set;~user;{args}}
{set;~list.username;[]}
{set;~list.usernick;[]}
{set;~usernames;{for;~i;0;<;{length;{get;_banned}};["{lower;{jget;_banned;{get;~i}.1}}","{get;~i}"]{newline}}}
{regexreplace;{get;~usernames};/\["(.*?{lower;{username;{get;~user}}}.*?)","(\d+)"\/igm];
}
{for;~i;0;<;{length;{get;_banned}};
	{if;{lower;{jget;_banned;{get;~i}.1}};includes;{lower;{username;{get;~user}}};
		{push;~list.username;{jget;_banned;{get;~i}.1} ({jget;_banned;{get;~i}.0})};
		{if;{lower;{username;{get;~user}}};includes;{lower;{jget;_banned;{get;~i}.1}};
			{push;~list.username;{jget;_banned;{get;~i}.1} ({jget;_banned;{get;~i}.0})}
		}
	}
	{if;{usernick;{get;~user}};!=;{username;{get;~user}};
		{if;{usernick;{get;~user}};includes;{lower;{jget;_banned;{get;~i}.1}};
			{push;~list.usernick;{jget;_banned;{get;~i}.1} ({jget;_banned;{get;~i}.0})};
			{if;{lower;{jget;_banned;{get;~i}.1}};includes;{usernick;{get;~user}};
				{push;~list.usernick;{jget;_banned;{get;~i}.1} ({jget;_banned;{get;~i}.0})}
			}
		}
	}
}
{if;{logic;||;{bool;{length;{get;~list.username}};!=;0};{bool;{length;{get;~list.usernick}};!=;0}};
	{set;~embed;
		author.name:{username}#{userdiscrim} {if;{username};!=;{usernick};[{usernick}]} ({userid});
		author.icon_url:{useravatar};
		title:Potential alt;
		color:red;
		timestamp:{time};
		footer.text:Ban this user?;
		thumbnail.url:{useravatar};
		description:User has matched bans:
	}
	{if;{length;{get;~list.username}};!=;0;
		{push;~embed;
			fields.name:Username;
			fields.value:{join;{get;~list.username};{newline}};
			fields.inline:true
		}
	}
	{if;{length;{get;~list.usernick}};!=;0;
		{push;~embed;
			fields.name:Usernick;
			fields.value:{join;{get;~list.usernick};{newline}};
			fields.inline:true
		}
	}
    {set;~messageid;{send;490988354834399232;{apply;embedbuild;{get;~embed}}}}
    {reactadd;490988354834399232;{get;~messageid};<:banhammer:326431867047772160> <:chess_cross:436745175294017546>}
    {set;~user;{get;~user}}
    {set;~users;{concat;{rolemembers;323852677782175744};{rolemembers;323852878630354946};["246903976937783296"]}}
    {set;~reaction;{waitreaction;{get;~messageid};{get;~users};<:banhammer:326431867047772160> <:chess_cross:436745175294017546>;600}}
    {if;{get;~reaction;3};==;<:banhammer:326431867047772160>;
		{if;{logic;!;{ban;{get;~user};0;Alt-account.{newline}Issed by {usermention};;noperms}};
			{exec;embed;Ban failed! -c red}
		}
    }
	{reactremoveall;490988354834399232;{get;~messageid}}
}