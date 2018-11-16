{set;~user;{args}}
{exec;kaolib}
{set;~list.username;[]}
{set;~list.usernick;[]}
{set;~username;{username;{get;~user}}}
{set;~usernick;{usernick;{get;~user}}}
{set;~username.normalized;{func.kl_normalize;{get;~username}}}
{if;{get;~usernick};!=;{username;{get;~user}};
	{set;~usernick.normalized;{func.kl_normalize;{get;~usernick}}}
}
{for;~j;0;<;{length;{get;_banned}};
	{set;~banned.username;{jget;_banned;{get;~j}.1}}
	{set;~banned.userid;{jget;_banned;{get;~j}.0}}
	{if;{logic;||;{bool;{lower;{get;~banned.username}};includes;{lower;{get;~username}}};{bool;{lower;{get;~banned.username}};includes;{lower;{get;~username.normalized}}}};
		{push;~list.username;{get;~banned.username} ({get;~banned.userid})};
		{if;{logic;||;{bool;{lower;{get;~username}};includes;{lower;{get;~banned.username}}};{bool;{lower;{get;~username.normalized}};includes;{lower;{get;~banned.username}}}};
			{push;~list.username;{get;~banned.username} ({get;~banned.userid})}
		}
	}
	{if;{get;~usernick};!=;{username;{get;~user}};
		{if;{logic;||;{bool;{lower;{get;~usernick}};includes;{lower;{get;~banned.username}}};{bool;{lower;{get;~usernick.normalized}};includes;{lower;{get;~banned.username}}}};
			{push;~list.usernick;{get;~banned.username} ({get;~banned.userid})};
			{if;{lower;{get;~banned.username}};includes;{lower;{get;~usernick.normalized}};
				{push;~list.usernick;{get;~banned.username} ({get;~banned.userid})}
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