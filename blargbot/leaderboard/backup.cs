{if;==;help;{lower;{args;0}};
	**__Variable backup and restore system:__**
**1.** You must run this tag in an `{lb}exec{rb}`
**2.** The arguments used are {lb}exec{semi}<varlist|backup|restore|delete> var_name [-o] [description|backup_name]{rb}
	**2.1.** {lb}exec{semi}backup var_name [-o] description{rb}
	**2.2.** {lb}exec{semi}restore var_name backup_name{rb}
	**2.3.** {lb}exec{semi}delete backup_name{rb}
	**2.4.** {lb}exec{semi}varlist{rb}
**3.** The variable type you're using must be specified if there's any.
**4.** The `-o` flag specifies if the latest backup gets overwritten instead.
**5.** `backup_name` __will only be__ used when restoring. backups are automatically named.
**6.** `description` __will only be__ used when making a backup. This is only optional.
**7.** The tag will always output messages. If you don't want a message outputted when you do a backup (like a regular backup system), do a {lb}void{rb}.
	{return}
}
{if;{get;@exec};
    {if;!=;1;{get;@{userid}admin};
        :x: Please run this tag in an `{lb}exec{rb}`. Do `{prefix}t backup help` for more help.
            {return}
    }
}
{if;==;;{args};
	:x: Please provide enough arguments! Do `{prefix}t backup help` for more help.
		{return}
}
{switch;{lower;{args;0}};
	varlist;
		```js
{if;==;;{get;@varlist};Empty;{get;@varlistname}}```
	backup;
		{if;<;{argslength};2;
			:x: Please provide enough arguments! Do `{prefix}t backup help` for more help.
			{return}
		}
		{if;==;;{get;{args;1}};
			:x: Variable is empty! Terminating...
				{return};
			{set;~var;{args;1}}
		}
		{if;==;-o;{lower;{args;2}};
			{if;==;;{get;@latestbak#{get;~var}};
				{set;~name;{base;{time;x};16}}
				{set;@bak#{get;~name};{get;{get;~var}}}
				{set;~desc;
					{if;<;{argslength};4;
						Empty;
						{regexreplace;{args;3;n};/`/gm;`​}
					}
				}
				{if;==;;{get;@varlistname};
					{set;@varlistnamecnt;1}
					{set;@varlistname;
						{pad;right;{space;4};{get;@varlistnamecount}.} {pad;right;{space;16};{get;~name}} | {get;~desc}
					};
					{void;{increment;{get;@varlistnamecnt}}}
					{set;@varlistname;
						{get;@varlistname}{newline}{pad;right;{space;4};{get;@varlistnamecount}.} {pad;right;{space;15};{get;~name}} | {get;~desc}
					}
				}
				**Made a backup named `{get;~name}` from `{get;~var}`.**;
				{set;@bak#{get;@latestbak#{get;~var}};{get;{get;~var}}}
			**Overwritten the backup named `{get;@latestbak#{get;~var}}` from `{get;~var}`.**
			};
			{set;~name;{base;{time;x};16}}
			{set;@bak#{get;~name};{get;{get;~var}}}
			{set;~desc;
				{if;<;{argslength};3;
					Empty;
					{regexreplace;{args;2;n};/`/gm;`​}
				}
			}
			{set;@latestbak#{get;~var};{get;~name}}
			{if;==;;{get;@varlistname};
				{set;@varlistnamecnt;1}
				{set;@varlistname;
					{pad;right;{space;4};{get;@varlistnamecount}.} {pad;right;{space;16};{get;~name}} | {get;~desc}
				};
				{void;{increment;{get;@varlistnamecnt}}}
				{set;@varlistname;
					{get;@varlistname}{newline}{pad;right;{space;4};{get;@varlistnamecount}.} {pad;right;{space;15};{get;~name}} | {get;~desc}
				}
			}
			**Made a backup named `{get;~name}` from `{get;~var}`.**
		}
	restore;
		{if;<;{argslength};3;
			{switch;{argslength};
				0;:x: Please provide enough arguments! Do `{prefix}t backup help` for more help.;
				1;:x: Please provide a var_name! Do `{prefix}t backup help` for more help.;
				2;:x: Please provide a backup_name! Do `{prefix}t backup help` for more help.
			}
				{return}
		}
		{if;==;;{get;@bak#{args;2}};
			:x: Backup is empty!
				{return}
		}
		{set;{args;1};{get;@bak#{args;2}}}
		Restored backup `{args;2}` to `{args;1}`.;
	Wrong arguments! Do `{prefix}t backup help` for more help.
		{return}
}