{lang;cs}
{set;~roles;
	430139559783694336;
	431254558585389057;
	436631492765155348;
	431104246910550036;
	432988119235821568;
	432986574070743040;
	436616971329601546;
	431909196808847361;
	432988217139003392;
	434434769825038347;
	434434674647891968;
	436617773171605504;
	434434812535635968;
	434434088997224488
}
{if;{time;X};<=;1525096800;
	{if;{logic;!;{get;@override}};
		{set;~time;1525096800}
		{set;~time;{abs;{floor;{math;-;{time;X};{get;~time}}}}}
		{set;~d;{floor;{math;/;{get;~time};86400}}}
		{set;~dh;{floor;{math;/;{math;%;{get;~time};86400};3600}}}
		{set;~h;{floor;{math;/;{get;~time};3600}}}
		{set;~m;{floor;{math;/;{math;%;{get;~time};3600};60}}}
		{set;~s;{floor;{math;%;{get;~time};60}}}
		:x: Karaoke event has not started yet! It will start in **{get;~h}h {get;~m}m {get;~s}s**
		{return}
	}
}
{if;{logic;!;{hasrole;{get;~roles}}};
	{if;{channelid};!=;439406126862172170;
		:x: Please use <#439406126862172170>!
		{return}
	}
}
{if;{logic;!;{isarray;{get;_queue}}};
	{set;_queue;[]}
}
{if;{logic;!;{isarray;{get;_singers}}};
	{set;_singers;[]}
}
{if;{logic;!;{isarray;{get;_next}}};
	{set;_next;[]}
}
{set;~user;{userid}}
{switch;{lower;{args;0}};
	start;
		{if;{logic;!;{hasrole;{get;~roles}}};
			**:x: You cannot use this command!**
			{return}
		}
		{set;~user;{regexreplace;{get;_queue;0};/(\d{17,18}) - .+/g;$1}}
		{set;~item;{regexreplace;{get;_queue;0};/\d{17,18} - (.+)/g;$1}}
		{void;{addrole;440495027756728321;{get;~user}}}
		{usermention;{get;~user}}'s turn is up! They're singing **{get;~item}**!{set;_{get;~user}length;{time;X}}{if;!=;;{get;_{get;~user}lyrics};{newline}Lyrics:```md{newline}{get;_{get;~user}lyrics}{set;_{get;~user}lyrics}```}
		{set;_pause;false};
	clear;
		{if;{logic;!;{hasrole;{get;~roles}}};
			**:x: You cannot use this command!**
			{return}
		}
		{set;_queue;[]}
		{set;_singers;[]}
		{set;_next;[]}
		{set;_pause;false}
		**The queue is now cleared!**;
	pause;
		{if;{logic;!;{hasrole;{get;~roles}}};
			**:x: You cannot use this command!**
			{return}
		}
		**The queue is paused!{set;_pause;true}**;
	add;
		{if;{logic;!;{get;@override}};
			:x: You cannot queue anymore!
			{return}
		}
		{if;{length;{get;_queue}};>=;25;
			**The queue is too large!** Please wait until other people are finished.
			{return}
		}
		{if;{indexof;{match;{join;{get;_queue};};/\d{17,18}/g};{get;~user}};!=;-1;
			**:x: You are already in the list!** Please do not queue more than once!
			{return}
		}
		{if;{argslength};<=;1;
			**:x: Please provide a song that you will play!** `{prefix}{commandname} add <song name>`
			{return}
		}
		{if;{length;{args;1;n}};>=;150;
			**:x: Your song name is too long!** Must be less than 150 characters.
			{return}
		}
		{push;{get;_queue};{userid} - {args;1;n}}
		{if;{indexof;{get;_singers};{get;~user}};==;-1;{push;{get;_singers};{userid}}}
		**{args;1;n}** has been added to the list at position `{math;-;{length;{get;_queue}};1}`.
		{void;{set;~time;1525185000}
		{set;~time;{abs;{floor;{math;-;{time;X};{get;~time}}}}}
		{set;~d;{floor;{math;/;{get;~time};86400}}}
		{set;~dh;{floor;{math;/;{math;%;{get;~time};86400};3600}}}
		{set;~h;{floor;{math;/;{get;~time};3600}}}
		{set;~m;{floor;{math;/;{math;%;{get;~time};3600};60}}}
		{set;~s;{floor;{math;%;{get;~time};60}}}}Karaoke event will be ending soon! You won't be able to queue anymore in **{get;~m}m {get;~s}s**
		{regexreplace;/\t/g;};
	remove;
		{if;{regexreplace;{get;_queue;0};/(\d{17,18}) - .+/g;$1};==;{get;~user};
			{set;~user;{regexreplace;{get;_queue;0};/(\d{17,18}) - .+/g;$1}}
			{set;~item;{regexreplace;{get;_queue;0};/\d{17,18} - (.+)/g;$1}}
			{void;{removerole;440495027756728321;{get;~user}}}
			{addreact;{send;{channelid};{username;{get;~user}}#{userdiscrim;{get;~user}} has finished singing **{get;~item}**! If you liked their singing, do a ?? reaction!{newline}{void;{set;~time;{get;_{get;~user}length}}
			{set;~time;{abs;{floor;{math;-;{time;X};{get;~time}}}}}
			{set;~m;{floor;{math;/;{math;%;{get;~time};3600};60}}}
			{set;~s;{floor;{math;%;{get;~time};60}}}}They sang for **{get;~m}m {get;~s}s**};??}
			{void;{push;{get;_next};{get;~user}}}
			{void;{shift;{get;_queue}}}
			{if;{length;{get;_queue}};<=;0;
				{timer;**The queue is empty!** Join the queue by doing `{prefix}{commandname} add [song name]`;15s}
				{return}
			}
			{if;{get;_pause};
				{timer;**The queue is currently paused!** Everyone will be able to speak in a few momets. Just rejoin.~;15s}
				{return}
			}
			{timer;
				{set;~user;{regexreplace;{get;_queue;0};/(\d{17,18}) - .+/g;$1}}
				{set;~item;{regexreplace;{get;_queue;0};/\d{17,18} - (.+)/g;$1}}
				{void;{addrole;440495027756728321;{get;~user}}}
				{usermention;{get;~user}}'s turn is up! They're singing **{get;~item}**!{set;_{get;~user}length;{time;X}}{if;!=;;{get;_{get;~user}lyrics};{newline}Lyrics:```prolog{newline}{get;_{get;~user}lyrics}{set;_{get;~user}lyrics}```}
				{return};
				15s
			}
		}
		{set;~index;{indexof;{match;{join;{get;_queue};{space}};/\d{17,18}/g};{get;~user}}}
		{if;{logic;!;{hasrole;{get;~roles}}};
			{if;{get;~index};==;-1;
				**:x: You are not in the queue!** Please do `{prefix}{commandname} add <song name>` to join the queue!
				{return};
				{set;~user;{regexreplace;{get;_queue;{get;~index}};/(\d{17,18}) - .+/g;$1}}
				{set;~item;{regexreplace;{get;_queue;{get;~index}};/\d{17,18} - (.+)/g;$1}}
				{void;{splice;{get;_queue};{get;~index};1}}
				**{username;{get;~user}}#{userdiscrim;{get;~user}} - {get;~item}** Has been removed from the list.
				{void;{splice;{get;_singers};{indexof;{get;_singers};{get;~user}};1}}
				{return}
			};
			{set;~n;{parseint;{args;1}}}
			{if;{argslength};<=;1;
				{if;{get;~index};==;-1;
					**:x: Please provide a valid number.**
					{return};
					{set;~user;{regexreplace;{get;_queue;{get;~index}};/(\d{17,18}) - .+/g;$1}}
					{set;~item;{regexreplace;{get;_queue;{get;~index}};/\d{17,18} - (.+)/g;$1}}
					{void;{splice;{get;_queue};{get;~index};1}}
					**{username;{get;~user}}#{userdiscrim;{get;~user}} - {get;~item}** has been removed from the list.
					{void;{splice;{get;_singers};{indexof;{get;_singers};{get;~user}};1}}
					{return}
				}
			}
			{if;==;NaN;{get;~n};
				**:x: Please provide a valid number.**
				{return};
				{set;~user;{regexreplace;{get;_queue;{get;~n}};/(\d{17,18}) - .+/g;$1}}
				{set;~item;{regexreplace;{get;_queue;{get;~n}};/\d{17,18} - (.+)/g;$1}}
				{void;{set;~i;{splice;{get;_queue};{get;~n};1}}}
				**{username;{get;~user}}#{userdiscrim;{get;~user}} - {get;~item}** has been removed from the list.
				{void;{splice;{get;_singers};{indexof;{get;_singers};{get;~user}};1}}
				{return}
			}
		};
	lyrics;
		Set the new lyrics for your next song!{set;_{get;~user}lyrics;{args;1;n}}{delete}{return};
	length;
		{set;~time;1525096800}
		{set;~time;{abs;{floor;{math;-;{time;X};{get;~time}}}}}
		{set;~d;{floor;{math;/;{get;~time};86400}}}
		{set;~dh;{floor;{math;/;{math;%;{get;~time};86400};3600}}}
		{set;~h;{floor;{math;/;{get;~time};3600}}}
		{set;~m;{floor;{math;/;{math;%;{get;~time};3600};60}}}
		{set;~s;{floor;{math;%;{get;~time};60}}}
		Karaoke event has been running for! **{get;~h}h {get;~m}m {get;~s}s**
		{void;{set;~time;1525096800}
		{if;{get;~time};<;{time;X};{void;{increment;~time;86400}}}
		{set;~time;{abs;{floor;{math;-;{time;X};{get;~time}}}}}
		{set;~d;{floor;{math;/;{get;~time};86400}}}
		{set;~dh;{floor;{math;/;{math;%;{get;~time};86400};3600}}}
		{set;~h;{floor;{math;/;{get;~time};3600}}}
		{set;~m;{floor;{math;/;{math;%;{get;~time};3600};60}}}
		{set;~s;{floor;{math;%;{get;~time};60}}}}It will end in **{get;~h}h {get;~m}m {get;~s}s**
		{regexreplace;/\t/g;};
	edit;
		{set;~index;{indexof;{match;{join;{get;_queue};{space}};/\d{17,18}/g};{get;~user}}}
		{if;{get;~index};==;-1;
			**:x: You are not in the queue!** Please do `{prefix}{commandname} add <song name>` to join the queue!
			{return}
		}
		{if;{argslength};<=;1;
			**:x: Please provide a song that you will play!** `{prefix}{commandname} edit <song name>`
			{return}
		}
		{if;{length;{args;1;n}};>=;150;
			**:x: Your song name is too long!** Must be less than 150 characters.
			{return}
		}
		{set;~user;{regexreplace;{get;_queue;{get;~index}};/(\d{17,18}) - .+/g;$1}}
		{void;{splice;{get;_queue};{get;~index};1;{get;~user} - {args;1;n}}}
		**{username;{get;~user}}#{userdiscrim;{get;~user}} - {args;1;n}** Has been edited from the list at position `{get;~index}`.
		{return};
	next;
		{if;{logic;!;{hasrole;{get;~roles}}};
			{if;{regexreplace;{get;_queue;0};/(\d{17,18}) - .+/g;$1};!=;{get;~user};
				**:x: You are not the current user singing!**
				{return}
			}
		}
		{set;~user;{regexreplace;{get;_queue;0};/(\d{17,18}) - .+/g;$1}}
		{set;~item;{regexreplace;{get;_queue;0};/\d{17,18} - (.+)/g;$1}}
		{void;{removerole;440495027756728321;{get;~user}}}
		{addreact;{send;{channelid};{username;{get;~user}}#{userdiscrim;{get;~user}} has finished singing **{get;~item}**! If you liked their singing, do a ?? reaction!{newline}{void;{set;~time;{get;_{get;~user}length}}
		{set;~time;{abs;{floor;{math;-;{time;X};{get;~time}}}}}
		{set;~m;{floor;{math;/;{math;%;{get;~time};3600};60}}}
		{set;~s;{floor;{math;%;{get;~time};60}}}}They sang for **{get;~m}m {get;~s}s**};??}
		{void;{push;{get;_next};{get;~user}}}
		{void;{shift;{get;_queue}}}
		{if;{length;{get;_queue}};<=;0;
			{timer;**The queue is empty!** Join the queue by doing `{prefix}{commandname} add [song name]`;15s}
			{return}
		}
		{if;{get;_pause};
			{timer;**The queue is currently paused!** Everyone will be able to speak in a few momets. Just rejoin.~;15s}
			{return}
		}
		{timer;
			{set;~user;{regexreplace;{get;_queue;0};/(\d{17,18}) - .+/g;$1}}
			{set;~item;{regexreplace;{get;_queue;0};/\d{17,18} - (.+)/g;$1}}
			{void;{addrole;440495027756728321;{get;~user}}}
			{usermention;{get;~user}}'s turn is up! They're singing **{get;~item}**!{set;_{get;~user}length;{time;X}}{if;!=;;{get;_{get;~user}lyrics};{newline}Lyrics:```md{newline}{get;_{get;~user}lyrics}{set;_{get;~user}lyrics}```}
			{return};
			15s
		};
	queue;
		Position - User - Song name
		{if;{length;{get;_queue}};<=;0;
			The queue is empty! Join the queue by doing `{prefix}{commandname} add [song name]`
			{regexreplace;/\t/g;}
			{return}
		}
		{for;~index;0;<;{length;{get;_queue}};
			`{get;~index}`. {set;~user;{regexreplace;{get;_queue;{get;~index}};/(^\d{17,18}) - .+/g;$1}}**{username;{get;~user}}#{userdiscrim;{get;~user}}** - {regexreplace;{get;_queue;{get;~index}};/\d{17,18} - (.+)/g;$1}{newline}
		}
		{regexreplace;/\t/g;};
	end;
		{if;{logic;!;{hasrole;{get;~roles}}};
			**:x: You cannot use this command!**
			{return}
		}
		***KARAOKE EVENT HAS ENDED!***
		{void;{foreach;~user;{get;_next};{set;~{get;~user}count;{math;+;0{get;~{get;~user}count};1}}}
		{set;~list;[]}
		{foreach;~user;{get;_next};
			{if;{indexof;{match;{join;{get;~list};{space}};/\d{17,18}/g};{get;~user}};==;-1;
				{push;{get;~list};{get;~{get;~user}count}({get;~user})}
			}
		}}
		TOP 10 SINGERS
		{sort;{get;~list};descending}
		{set;~c;0}{foreach;~user;{slice;{get;~list};0;10};{set;~count;{regexreplace;{get;~user};/(\d+)\(\d{17,18}\)/g;$1}}{set;~u;{regexreplace;{get;~user};/\d+\((\d{17,18})\)/g;$1}}`{increment;~c}`. {username;{get;~u}}#{userdiscrim;{get;~u}} - Sang **{get;~count}** times!{void;{addrole;{roleid;Special Idols};{get;~user}}}{newline}}
		These users have gotten the <@&{roleid;Special Idols}> role!
		{regexreplace;/\t/g;}
		{timer;{foreach;~user;{get;_next};{if;{logic;!;{hasrole;439094586250625025;{get;~user}}};{void;{addrole;439094586250625025;{get;~user}}}{usermention;{get;~user}},{space}}} HAVE RECIEVED THE <@&439094586250625025> role!;5s}
		{timer;{addreact;{send;{channelid};***PLEASE THANK <@128244037718114304> FOR STAYING UP ALMOST THROUGH THE WHOLE EVENT, RECORDING AND MANAGING THE EVENT!***};??};15s};
	np;
		{if;{length;{get;_queue}};<=;0;
			The queue is empty! Join the queue by doing `{prefix}{commandname} add [song name]`
			{regexreplace;/\t/g;}
			{return}
		}
		Current song playing: **{regexreplace;{get;_queue;0};/\d{17,18} - (.+)/g;$1}**
		Sang by: **{username;{regexreplace;{get;_queue;0};/(^\d{17,18}) - .+/g;$1}}#{userdiscrim;{regexreplace;{get;_queue;0};/(^\d{17,18}) - .+/g;$1}}**
		{regexreplace;/\t/g;};
	help;
		```prolog
		1. {prefix}{commandname} add <song name> -  Adds you to a queue with your song.
		2. {prefix}{commandname} remove - Removes you from the specified number in the queue.
		3. {prefix}{commandname} edit <new title> - Edits the queue with the new title.
		4. {prefix}{commandname} next - Next person in the queue will be able to sing. Do this when you are finished.
		5. {prefix}{commandname} queue - Queue of the current users who are up next.
		6. {prefix}{commandname} lyrics <lyrics here> - Pastes lyrics to your upcoming song.```
		{args;1;n}
		{regexreplace;/\t/g;};
		:x: The correct syntax is```prolog
		1. {prefix}{commandname} add <song name> -  Adds you to a queue with your song.
		2. {prefix}{commandname} remove - Removes you from the specified number in the queue.
		3. {prefix}{commandname} edit <new title> - Edits the queue with the new title.
		4. {prefix}{commandname} next - Next person in the queue will be able to sing. Do this when you are finished.
		5. {prefix}{commandname} queue - Queue of the current users who are up next.
		6. {prefix}{commandname} lyrics <lyrics here> - Pastes lyrics to your upcoming song.```
		{regexreplace;/\t/g;}
}
{regexreplace;/@(?=everyone|here)/gi;@{zws}}