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
{if;{get;@execmodule};
	:x: Please room this tag in an {lb}exec{rb}!
		{return}
}
{if;==;;{get;var_name};
	:x: Please provide a variable name!
		{return}
}
{switch;{lower;{get;operation}};
	backup;
		{if;==;;{get;var_name};
			:x: Please specify a variable! Do `{prefix}t backup help` for more help.
				{return}
		}
		{if;==;;{get;{get;var_name}};
			:x: Variable is empty! Terminating...
				{return}
		}
		{if;==;;{get;description};
			{set;description;None}
		}
		{if;==;NaN;{parseint;{get;@back#cnt}};
			{set;cnt;1};
			{void;{increment;@back#cnt}}
		}
		{if;==;1;{get;overwrite};
			{if;{get;@back#latest};
				{set;
					{get;@latest_bckup};
					{get;{get;var_name}}
				};
				{set;~name;{base;{time;x};16}}
				{set;@back#{get;~name};
					{get;{get;var_name}}
				}
				{set;@back_var#{get;~name};
					{get;var_name}
				}
				{set;@back#list;
					{get;@back#list}{newline}{pad;right;{space;5}{get;@back#cnt}.} {get;~name} | {get;description}
				{set;@latest_bckup;{get;~name}}
				{set;@back#latest;true}
				}
			};
			{set;~name;{base;{time;x};16}}
			{set;@back#{get;~name};
				{get;{get;var_name}}
			}
			{set;@back_var#{get;~name};
				{get;var_name}
			}
			{set;@back#list;
				{get;@back#list}{newline}{pad;right;{space;5}{get;@back#cnt}.} {get;~name} | {get;description}
			{set;@latest_bckup;{get;~name}}
			}
			{set;@back#latest;true}
		}
	restore;
		{if;==;;{get;back_name};
			:x: Please provide a variable!
				{return}
		}
		{if;==;;{get;@back#{get;back_name}};
			:x: Variable seems to be empty!
				{return}
		}
		{if;!=;;{get;new_var};
			{set;{get;new_var};
				{get;@back#{get;back_name}}
			};
			{if;==;;{get;@back_var#{get;back_name}};
				:x: This variable doesn't look like it has a variable saved in it! add {lb}set{semi}new_var{semi}`name`{rb} to your code to add a new variable name.
			{set;{get;@back_var#{get;back_name}}
				
	delete;
		:x: That's not a recognized function!
			{return}
}