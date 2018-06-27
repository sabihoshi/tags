{if;{iscc};
	{set;~p;{prefix}{commandname}};
	{set;~p;{prefix}t {commandname}}
}
{if;==;1;{get;@{userid}bl};
	{exec;merror;You are blacklisted!}
	{return}
}
{if;{argslength};<=;0;
	{embed;
		{buildembed;
			color:{exec;ecolor};
			title:Marriage Menu;
			description:
			Always prefix commands with `{get;~p}`.{newline;2}**1. `{get;~p} propose [user]` - Proposes to the user.{newline}2. `{get;~p} deny` - Denies the proposal.{newline}3. `{get;~p} cancel` - Cancels the proposal.{newline}4. `{get;~p} accept` - Accepts the marriage.{newline}5. `{get;~p} divorce` - Divorces a marriage.{newline}6. `{get;~p} status [user]` - Checks your status.{newline}If `user` is specified, it checks the status of that user.{newline}7. `{get;~p} status info [clear | new info]` putting{newline}in clear your info to empty, otherwise set info that can be seen in your status.**;
			footer.icon_url:{useravatar;246903976937783296};
			footer.text:Marriage made by Kao#0001;
			timestamp:{time}
		}
	}
	{return}
}
{switch;{lower;{args;0}};
	help;
		{embed;
			{buildembed;
				color:{exec;ecolor};
				title:Marriage Menu;
				description:
				Always prefix commands with `{get;~p}`.{newline;2}**1. `{get;~p} propose [user]` - Proposes to the user.{newline}2. `{get;~p} deny` - Denies the proposal.{newline}3. `{get;~p} cancel` - Cancels the proposal.{newline}4. `{get;~p} accept` - Accepts the marriage.{newline}5. `{get;~p} divorce` - Divorces a marriage.{newline}6. `{get;~p} status [user]` - Checks your status.{newline}If `user` is specified, it checks the status of that user.{newline}7. `{get;~p} status info [clear | new info]` putting{newline}in clear your info to empty, otherwise set info that can be seen in your status.**;
				footer.icon_url:{useravatar;246903976937783296};
				footer.text:Marriage made by Kao#0001;
				timestamp:{time}
			}
		};
	status;
		{if;==;info;{lower;{args;1}};
			{if;>=;2;{argslength};
				{exec;merror;Not a valid info. To clear your info, do `{get;~p} status info clear`.}
				{return}
			}
			{if;==;clear;{lower;{args;2}};
				🆗 | Cleared your info{set;@{userid}info};
				🆗 | Set your info.{set;@{userid}info;{args;2;n}}
			}
			{return}
		}
		{set;~user;{if;{argslength};<=;1;{userid};{userid;{args;1}}}}
		{embed;
			{buildembed;
				author.name:{username;{get;~user}}#{userdiscrim;{get;~user}};
				author.icon_url:{useravatar;{get;~user}};
				color:{exec;ecolor;{get;~user}};
				title:Relationship status: {if;==;1;{get;@{get;~user}status};Married;Single};
				{set;~partner;{get;@{get;~user}partner}}
				description:
					{if;!=;;{get;@{get;~user}info};Info: {get;@{get;~user}info}{newline}}{if;==;{get;@{get;~user}status};1;
						{if;{username;{get;~partner};quiet};==;{get;~partner};
							**Your partner is not in this server!**;
							:wedding: | {randchoose;Happily;Is;Successfully;Bound and;Vowed and} {set;a;{randchoose;wedded;married;together;coupled}}{get;a} {randchoose;with;{if;==;together;{get;a};{randchoose;along;with};to};together with} **{set;~name;{regexreplace;{username;{get;~partner}};/(\*|_|~)/igm;\$1}#{userdiscrim;{get;~partner}} {if;!=;{username;{get;~partner}};{usernick;{get;~partner}};({regexreplace;{usernick;{get;~partner}};/(\*|_|~)/igm;\$1})}}{get;~name}**
						}
					};
				{if;{username;{get;~partner};quiet};==;{get;~partner};{void};
					{if;==;{get;@{get;~user}status};1;
						{void;
							{set;~mark;
								{base64encode;
									{randchoose;
										https://i.ytimg.com/vi/7zF92nCmh50/maxresdefault.jpg;
										https://i.ytimg.com/vi/s9OjNkjD1V0/maxresdefault.jpg;
										https://quotespics.net/wp-content/uploads/2017/01/cartoon-love-images_-152.jpg;
										https://i.ytimg.com/vi/qUCQzD9dt3o/maxresdefault.jpg;
										http://goboiano.com/wp-content/uploads/2017/04/Your-Lie-in-April.jpg;
										http://senpai-knows.com/wp-content/uploads/2016/06/Akihito-and-Mirai.jpeg;
										http://cdn.playbuzz.com/cdn/f9841551-22a5-4d55-9e19-59b0dc1f9464/8c4feb55-6ee7-4772-b069-a2a1c437dbc8_560_420.jpg;
										https://i.ytimg.com/vi/LHkP8hBJzbQ/maxresdefault.jpg
									}
								}
							}
							{set;~txt;
								{base64encode;
									{username;{get;~user}} ❤ {username;{get;~partner}}
								}
							}
						}
						image.url:https://assets.imgix.net/unsplash/umbrella.jpg?markscale=100&markpad=0&markalign=center%2Cmiddle&fit=crop&h={if;{length;{get;~name}};>;7;{math;+;100;{math;*;3;{math;-;{length;{get;~name}};7}}};100}&w={if;{length;{get;~name}};>;7;{math;+;256;{math;*;10;{math;-;{length;{get;~name}};7}}};256}&txtfit=max&txtsize=100&txtalign=center%2Cmiddle&txtclr=fff&txtshad=10&markalpha=100&blur=15&txtfont64=QXZlbmlyLUJsYWNr&txt64={get;~txt}&mark64={get;~mark}
					}
				};
				timestamp:{time}
			}
		};
	divorce;
		{if;!=;1;{get;@{userid}status};
			{exec;merror;You are not married.}
			{return}
		}
		{set;~user;{get;@{userid}partner}}
		{if;>=;1;{argslength};
			{embed;
				{buildembed;
					author.name:{username}#{userdiscrim};
					author.icon_url:{useravatar};
					color:red;
					title:Divorce statement;
					description:💔 | This will divorce you and **{username;{get;~user}}#{userdiscrim;{get;~user}}**. __You will not be able to marry this user again.__ Are you sure? Type `{get;~p} divorce accept`.;
					timestamp:{time}
				}
			}
			{return}
		}
		{if;!=;accept;{lower;{args;1}};
			{exec;merror;That is not a recognized response. Type `{get;~p} divorce accept` to continue with the divorce.}
			{return}
		}
		{set;@{userid}_{get;~user};1}
		{set;@{get;~user}_{userid};1}
		{set;@{userid}proposed;0}
		{set;@{userid}propose;0}
		{set;@{userid}status;0}
		{set;@{userid}proby;0}
		{set;@{userid}partner;0}
		{set;@{get;~user}proposed;0}
		{set;@{get;~user}propose;0}
		{set;@{get;~user}status;0}
		{set;@{get;~user}proby;0}
		{set;@{get;~user}partner;0}
		{embed;
			{buildembed;
				author.name:{username}#{userdiscrim};
				author.icon_url:{useravatar};
				color:red;
				title:Divorce statement;
				description:💔 | {username} and {username;{get;~user}} have divorced.;
				timestamp:{time}
			}
		};
	propose;
		{if;<=;{argslength};1;
			{exec;merror;Please provide a user!}
			{return}
		}
		{set;~user;{userid;{args;1}}}
		{if;==;{userjoinedat;x;{get;~user};quiet};{get;~user};
			{exec;merror;Provide a valid user!}
			{return}
		}
		{if;==;true;{userisbot;{get;~user}};
			{exec;merror;You cannot marry bots!}
			{return}
		}
		{if;==;1;{get;@{userid}bl};
			{exec;merror;You are blacklisted!}
			{return}
		}
		{if;==;1;{get;@{get;~user}bl};
			{exec;merror;User you proposed to is blacklisted!}
			{return}
		}
		{if;==;1;{get;@{userid}status};
			{exec;merror;You are already married!}
			{return}
		}
		{if;==;1;{get;@{get;~user}status};
			{exec;merror;This user is already married!}
			{return}
		}
		{if;==;1;{get;@{userid}proposed};
			{if;==;{get;~user};{get;@{userid}propose};
				{exec;merror;You have already proposed to **{username;{get;@{userid}propose}}#{userdiscrim;{get;@{userid}propose}}**!{newline}**{username;{get;@{userid}propose}}#{userdiscrim;{get;@{userid}propose}}**, to accept type `{get;~p} accept`.}
				{exec;merror;You cannot propose two times, do `{get;~p} cancel` to remove your previous proposal.}
			}
			{return}
		}
		{if;==;1;{get;@{get;~user}proposed};
			{exec;merror;This user has already proposed to {if;==;{userid};{get;@{get;~user}propose};you. To accept type `{get;~p} accept`.;**{username;{get;@{get;~user}propose}}#{userdiscrim;{get;@{get;~user}propose}}**}}
			{return}
		}
		{if;==;1;{get;@{userid}proby};
			{exec;merror;You have already been proposed by **{username;{get;@{userid}propose}}#{userdiscrim;{get;@{userid}propose}}**, to {if;==;{get;@{userid};propose};{get;~user};accept type `{get;~p} accept`.;deny their proposal type `{get;~p} deny`.}}
			{return}
		}
		{if;==;1;{get;@{get;~user}proby};
			{if;==;{get;@{get;~user}propose};{userid};
				{exec;merror;You have already proposed to **{username;{get;@{get;~user}propose}}#{userdiscrim;{get;@{get;~user}propose}}**{newline}**{username;{get;@{get;~user}propose}}#{userdiscrim;{get;@{get;~user}propose}}**, to accept type `{get;~p} accept`.};
				{exec;merror;This user has already been proposed by **{username;{get;@{get;~user}propose}}#{userdiscrim;{get;@{get;~user}propose}}** and has not answered yet.}
			}
			{return}
		}
		{if;==;{userid};{get;~user};
			{if;{userid};!=;246903976937783296;
				{exec;merror;You cannot marry yourself!}
				{return}
			}
		}
		{if;==;1;{get;@{userid}_{get;~user}};
			{exec;merror;You have divorced with this person before!}
			{return}
		}
		{if;==;1;{get;@{get;~user}_{userid}};
			{exec;merror;This person has divorced with you before!}
			{return}
		}
		{embed;
			{buildembed;
				author.name:{username}#{userdiscrim};
				author.icon_url:{useravatar};
				color:{exec;ecolor};
				title:Proposal on Marriage;
				description:⛪ | **{username}#{userdiscrim}**, you have proposed to **{username;{get;~user}}#{userdiscrim;{get;~user}}**.{newline}**{username;{get;~user}}#{userdiscrim;{get;~user}}**, to accept type `{get;~p} accept`.;
				timestamp:{time}
			}
		}
		{set;@{userid}propose;{get;~user}}
		{set;@{get;~user}propose;{userid}}
		{set;@{userid}proposed;1}
		{set;@{get;~user}proposed;0}
		{set;@{userid}proby;0}
		{set;@{get;~user}proby;1};
	cancel;
		{if;==;1;{get;@{userid}status};
			{exec;merror;You are already married!}
			{return}
		}
		{set;~user;{get;@{userid}propose}}
		{set;@{get;~user}proposed;0}
		{set;@{userid}proposed;0}
		{set;@{get;~user}proby;0}
		{set;@{userid}proby;0}
		{set;@{get;~user}propose}
		{set;@{userid}propose}
		{embed;
			{buildembed;
				author.name:{username}#{userdiscrim};
				author.icon_url:{useravatar};
				color:red;
				title:Proposal cancelled!;
				description:💔 | {username}, You have cancelled the proposal to **{username;{get;~user}}#{userdiscrim;{get;~user}}**!;
				timestamp:{time}
			}
		};
	deny;
		{if;==;1;{get;@{userid}status};
			{exec;merror;You are already married!}
			{return}
		}
		{if;==;1;{get;@{userid}proposed};
			{exec;merror;You can not answer your own proposal!}
			{return}
		}
		{if;!=;1;{get;@{userid}proby};
			{exec;merror;No one has proposed to you yet! Propose by doing `{get;~p} propose [user]`.}
			{return}
		}
		{set;~user;{get;@{userid}propose}}
		{set;@{userid}proposed;0}
		{set;@{get;~user}proposed;0}
		{set;@{userid}proby;0}
		{set;@{get;~user}proby;0}
		{set;@{get;~user}propose}
		{set;@{userid}propose}
		{embed;
			{buildembed;
				author.name:{username}#{userdiscrim};
				author.icon_url:{useravatar};
				color:red;
				title:Proposal denied!;
				description:💔 | {username}, you have denied the proposal with **{username;{get;~user}}#{userdiscrim;{get;~user}}**!;
				timestamp:{time}
			}
		};
	accept;
		{if;==;1;{get;@{userid}status};
			{exec;merror;You are already married!}
			{return}
		}
		{if;==;1;{get;@{userid}proposed};
			{exec;merror;You can not answer your own proposal!}
			{return}
		}
		{if;!=;1;{get;@{userid}proby};
			{exec;merror;No one has proposed to you yet! Propose by doing `{get;~p} propose [user]`.}
			{return}
		}
		{set;~user;{get;@{userid}propose}}
		{set;@{userid}status;1}
		{set;@{userid}partner;{get;~user}}
		{set;@{userid}proby;0}
		{set;@{userid}proposed;0}
		{set;@{get;~user}status;1}
		{set;@{get;~user}partner;{userid}}
		{set;@{get;~user}proby;0}
		{set;@{get;~user}proposed;0}
		{embed;
			{buildembed;
				author.name:{username}#{userdiscrim};
				author.icon_url:{useravatar};
				color:{exec;ecolor};
				title:Congraulations on marriage!;
				description:💒 | {username}, you are now successfully wed with **{username;{get;~user}}#{userdiscrim;{get;~user}}**!;
				timestamp:{time}
			}
		};
		{exec;merror;That is not a valid command! do `{get;~p} help` for more info.}
}