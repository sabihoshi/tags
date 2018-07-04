{//; Documentation for Helper }
{if;{lower;{args;0}};==;docs;
	{embed;{embedbuild;
		title:Help Documentation;
		description:{clean;
			You can use this tag to customize your help command. You can set a few variables in order to manage the layout. :warning: By default, there is no `Custom` category for custom commands. You must add it manually by yourself. Example:
			```cs
				{lb}set{semi}_categories{semi}General{semi}NSFW{semi}Image{semi}Admin{semi}Custom{rb}
				{lb}set{semi}_Custom.commands{semi}test{semi}exec{semi}kill{semi}minigame{rb}
				{lb}exec{semi}helper{rb}
			```};
		fields.name:Category;
		fields.value:{clean;```prolog
			Usage: {lb}set{semi}_categories{semi}<categoryName...>{rb}
			Example: {lb}set{semi}_categories{semi}General{semi}NSFW{semi}Image{semi}Admin{rb}
			sets the categories when doing `{prefix}{commandname}`.
			```};
		fields.inline:true;
		fields.name:Category values;
		fields.value:`{clean;``prolog
			Usage: {lb}set{semi}_<categoryName>.commands{semi}<commandName>{rb}
			Example: {lb}set{semi}_General.commands{semi}avatar{semi}cah{semi}xkcd{rb}
			sets the commands of a specific category. this is case sensitive!
			```};
		fields.inline:true;
		fields.name:Commands;
		fields.value:{clean;```prolog
			Usage: {lb}set{semi}_command.<commandName>{semi}<description>{semi}[Aliases{semi}<alias...>]{semi}[Flags{semi}<flag...>]{semi}[Extra field{semi}<Field value>]{rb}
			Example:
				{lb}set{semi}_command.kill{semi}
				{zws}	**__Usage__**: {lb}prefix{rb}kill [@user]{semi}
				{zws}	Flags{semi}`-i` - Custom image for killing{semi}
				{zws}	Aliases{semi}stab, hunt
				{rb}
			set the info for your command. `Aliases` and `Flags` are case sensitive! `Aliases` will also in turn set the `command.commandName` for the aliases you provided. Separate by commas.
			```};
		fields.inline:true;
		color:#efff00
	}}
	{return}
}
{//; Default categories }
{set;~categories;General;NSFW;Image;Admin}
{set;~General.commands;avatar;brainfuck;decancer;define;dmerrors;donate;econ;emoji;emojify;feedback;help;info;insult;invite;mods;names;nato;personalprefix;ping;poll;remind;roles;roll;rr;shard;ship;spell;stats;status;syntax;tag;time;timer;timezone;todo;tokenify;uptime;user;version;voteban;warnings}
{//; Default values for categories }
{set;~NSFW.commands;danbooru;e621;rule34}
{set;~Image.commands;art;cah;caption;cat;clint;clippy;clyde;commit;delete;distort;free;pccheck;pixelate;retarded;shit;sonicsays;starvstheforcesof;thesearch;triggered;truth;xkcd}
{set;~Admin.commands;announce;ban;blacklist;ccommand;censor;changelog;editcommand;farewell;greet;hackban;kick;log;logs;modlog;mute;pardon;prefix;purge;reason;roleme;rvoteban;settings;tidy;timers;unban;unmute;warn}
{//; Default command values }
{set;~command.avatar;**__Usage__**: `avatar [id/name/mention]`
Gets a user's avatar;Flags;`-f` or `--format` - The file format. Can be 'jpg', 'png', 'webp', or 'gif'. Defaults to 'png', or 'gif' if it's an animated avatar.
`-s` or `--size` - The file size. Can be 128, 256, 512, 1024, or 2048. Defaults to 512.
}	{set;~command.brainfuck;**__Usage__**: `brainfuck <code>`
Executes brainfuck code.;Aliases;rainfuck, br;Flags;`-p` or `--pointers` - Shows a list of pointers after the execution.
`-i` or `--input` - Specifies the input for the , operator.
}	{set;~command.decancer;**__Usage__**: `decancer <user | text>`
Decancerify's the user's nickname/username, or the provided text, to simple ASCII.
}	{set;~command.define;**__Usage__**: `define <word>`
Gets the definition for the specified word. The word must be in english.
}	{set;~command.dmerrors;**__Usage__**: `dmerrors`
Toggles whether to DM you errors.
}	{set;~command.donate;**__Usage__**: `donate`
Gets you my donation information
}	{set;~command.econ;**__Usage__**: `econ <from> <to> <amount>`
Converts currency using recent rates.
}	{set;~command.emoji;**__Usage__**: `emoji <emoji> [size]`
Gives you a large version of an emoji. If size is specified and the emoji is not a custom emoji, the image will be that size.;Aliases;e;Flags;`-s` or `--svg` - Get the emote as an svg instead of a png.
}	{set;~command.emojify;**__Usage__**: `emojify <text>`
Gets emojis based on input.;Aliases;:speech_balloon:
}	{set;~command.feedback;**__Usage__**: `feedback <feedback>`
This command has three different functions for varying purposes. Please do not abuse it.

＊＊feedback＊＊ - give me feedback about the bot
＊＊suggest＊＊ - tell me something you want to be added or changed
＊＊report＊＊ - let me know about a bug you found
Thank you for your support. It means a lot to me!;Aliases;suggest, report
}	{set;~command.help;**__Usage__**: `help [command]`
Gets a list of command or specific command help.
}	{set;~command.info;**__Usage__**: `info`
Returns some info about me.
}	{set;~command.insult;**__Usage__**: `insult [name]`
Generates a random insult directed at the name supplied.
}	{set;~command.invite;**__Usage__**: `invite`
Gets you invite information.;Aliases;join
}	{set;~command.mods;**__Usage__**: `mods [online | o | away | a | dnd | d | offline]`
Gets a list of mods.
}	{set;~command.names;**__Usage__**: `names [user] [Flags]`
Returns the names that I've seen the specified user have in the past 30 days.;Flags;`-a` or `--all` - Gets all the names.
`-v` or `--verbose` - Gets more information about the retrieved names.
}	{set;~command.nato;**__Usage__**: `nato <text>`
Translates the given text into the NATO phonetic alphabet.
}	{set;~command.personalprefix;**__Usage__**: `personalprefix add|remove [prefix]`
Adds or removes a personal prefix.;Aliases;pprefix
}	{set;~command.ping;**__Usage__**: `ping`
Pong!
Find the command latency.
}	{set;~command.poll;**__Usage__**: `poll <question> [Flags]`
Creates a poll for the given question and duration. If no duration is given, defaults to 60 seconds. If emojis are given, they will be used as options for the poll.;Flags;`-t` or `--time` - How long before the poll expires, formatted as '1 day 2 hours 3 minutes and 4 seconds', '1d2h3m4s', or some other combination.
`-e` or `--emojis` - The emojis to apply to the poll.
`-d` or `--description` - The description of the poll.
`-c` or `--colour` - The colour of the poll (in HEX).
`-a` or `--announce` - If specified, it will make an announcement. Requires the proper permissions.
`-s` or `--strict` - If specified, only accept reactions that were in the initial list.
}	{set;~command.remind;**__Usage__**: `remind <text> -t <time>`
Reminds you about something after a period of time in a DM.;Aliases;remindme;Flags;`-t` or `--time` - The time before the user is to be reminded, formatted as '1 day 2 hours 3 minutes and 4 seconds', '1d2h3m4s', or some other combination.
`-c` or `--channel` - If set, this will notify the user in current channel instead of in a DM.
}	{set;~command.roles;**__Usage__**: `roles`
<p>Displays a list of roles and their IDs.</p>
}	{set;~command.roll;**__Usage__**: `roll [dice] [modifier]`
Rolls an amount of dice (ex. 1d20) and adds the modifier.
}	{set;~command.rr;**__Usage__**: `rr [bullets] [emote]`
Plays russian roulette with a specified number of bullets. If emote is specified, uses that specific emote.
}	{set;~command.shard;**__Usage__**: `shard <id>`
Gives you information about the current shard.
}	{set;~command.ship;**__Usage__**: `ship <user1> <user2>`
Gives you the ship name for two users.
}	{set;~command.spell;
**__Usage__**: `spell [name]`
Gives you a description for a D&D 5e spell.
}	{set;~command.stats;
**__Usage__**: `stats [c]`
Gives you some information about me
}	{set;~command.status;
**__Usage__**: `status <code> [cat | dog]`
Gets you an image of an HTTP status code.
}	{set;~command.syntax;
**__Usage__**: `syntax [command name]`
Gives you the 'syntax' for a command :wink:;Aliases;syntaxify
}	{set;~command.tag;
**__Usage__**: `tag [<name> | create | edit | delete | rename | flag | cooldown | raw | info | top | author | search | list | favorite | report | test | debug | help | docs]`
Tags are a system of public commands that anyone can create or run, using the BBTag language.
Subcommands:
<name>, create, edit, delete, rename, flag, cooldown, raw, info, top, author, search, list, favorite, report, test, debug, help, docs
For more information about a subcommand, do b!tag help <subcommand>
For more information about BBTag, visit https://blargbot.xyz/tags
By creating a tag, you acknowledge that you agree to the Terms of Service (https://blargbot.xyz/tags/tos);Aliases;t
}	{set;~command.timer;
**__Usage__**: `timer <time>`
Sets a timer for the provided amount of time, formatted as '1 day 2 hours 3 minutes and 4 seconds', '1d2h3m4s', or some other combination.;Aliases;stopwatch
}	{set;~command.time;
**__Usage__**: `time < <timezone> [ <timezone2> <time> ] | <user> >`
Tells you the current time in the specified timezone. If timezone2 and time are specified, converts the time from timezone to timezone2. Time must be formatted as hh:mm[AM/PM], and timezones must use  the timezone codes listed here: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones. Alternatively, tells you what time it is for a specified user if they've set their timezone code using the timezone command.
}	{set;~command.timezone;
**__Usage__**: `time [timezone]`
Sets or retrieves your timezone. Timezones must use  the timezone codes listed here: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
}	{set;~command.todo;
**__Usage__**: `todo [remove <item id> | add <item>]`
Access your todo list.
To add items, do todo add <item>.
To remove items, do todo remove <item id>, where item id is the number shown when you do todo by itself.
}	{set;~command.user;
**__Usage__**: `user [id/name/mention]`
Gets information about specified user
}	{set;~command.uptime;
**__Usage__**: `uptime`
Tells you how long I have been online.
}	{set;~command.version;
**__Usage__**: `version`
Tells you what version I am on
}	{set;~command.voteban;
**__Usage__**: `voteban [info <user> | <user> [reason]]`
Sign a petition to ban somebody, or check the status of a petition. If no arguments are provided, get the most signed petitions.;Aliases;pollban, vb, pb
}	{set;~command.warnings;
**__Usage__**: `warnings [user]`
Gets how many warnings you or a specified user has.
}	{set;~command.danbooru;
**__Usage__**: `danbooru <tags...>`
Gets three pictures from 'https://danbooru.donmai.us/' using given tags.
}	{set;~command.e621;
**__Usage__**: `e621 <tags...>`
Gets three pictures from 'https://e621.net/' using given tags.
}	{set;~command.rule34;
**__Usage__**: `rule34 <tags...>`
Gets three pictures from 'https://rule34.xxx/' using given tags.
}	{set;~command.art;
**__Usage__**: `art [user]`
Shows everyone a work of art.;Flags;`-I` or `--image` - A custom image.
}	{set;~command.cah;
**__Usage__**: `cah`
Generates a set of CAH cards.
}	{set;~command.caption;
**__Usage__**: `caption [url] [Flags]`
Captions an image. If url isn't provided, you must give an attachment.;Flags;`-t` or `--top` - The top caption.
`-b` or `--bottom` - The bottom caption.
`-f` or `--font` - The font to use (case insensitive). Use the command with the -l flag to view the available fonts. Defaults to impact.
`-l` or `--list` - Lists the available fonts.
}	{set;~command.cat;
**__Usage__**: `cat`
Gets a picture of a cat.
}	{set;~command.clint;
**__Usage__**: `clint [user]`
I don't even know, to be honest.;Flags;`-I` or `--image` - A custom image.
}	{set;~command.clippy;
**__Usage__**: `clippy <text>`
Clippy the paperclip is here to save the day!;Aliases;clippit, paperclip
}	{set;~command.clyde;
**__Usage__**: `clyde <text>`
Give everyone a message from Clyde.
}	{set;~command.commit;
**__Usage__**: `commit [number]`
Gets a random or specified blargbot commit.
}	{set;~command.delete;
**__Usage__**: `delete [text]`
Shows that you're about to delete something.
}	{set;~command.distort;
**__Usage__**: `distort [user]`
Turns an avatar into modern art.;Flags;`-I` or `--image` - A custom image.
}	{set;~command.free;
**__Usage__**: `free <caption> [Flags]`
Tells everyone what you got for free;Flags;`-b` or `--bottom` - The bottom caption.
}	{set;~command.pccheck;
**__Usage__**: `pccheck <text>`
Tells everyone a reason why they should get their PC checked. Template credits go to Ghosty#8204.
}	{set;~command.pixelate;
**__Usage__**: `pixelate [url] [Flags]`
Pixelates an image. If url isn't provided, you must give an attachment.;Flags;`-u` or `--user` - A user avatar instead of a url
`-s` or `--scale` - The amount to pixelate by (defaults to 64)
}	{set;~command.shit;
**__Usage__**: `shit <text> [Flags]`
Tells everyone what's shit.;Aliases;heck;Flags;`-p` or `--plural` - Whether or not the text is plural (use ARE instead of IS).
}	{set;~command.sonicsays;
**__Usage__**: `sonicsays <text>`
Sonic wants to share some words of wisdom.
}	{set;~command.starvstheforcesof;
**__Usage__**: `starvstheforcesof [user]`
WHO IS STAR BATTLING THIS EPISODE?;Aliases;svtfo;Flags;`-I` or `--image` - A custom image.
}	{set;~command.thesearch;
**__Usage__**: `thesearch [text]`
Tells everyone about the progress of the search for intelligent life.
}	{set;~command.triggered;
**__Usage__**: `triggered [user]`
Shows everyone how triggered you are.;Flags;`-i` or `--invert` - Inverts the image.
`-h` or `--horizontal` - Flips the image horizontally.
`-v` or `--vertical` - Flips the image vertically.
`-s` or `--sepia` - Applies a sepia filter.
`-b` or `--blur` - Applies a blur.
`-g` or `--greyscale` - Makes the image greyscale
`-I` or `--image` - A custom image.
}	{set;~command.truth;
**__Usage__**: `truth <text>`
Shows everyone what is written in the Scroll of Truth.;Aliases;scrolloftruth
}	{set;~command.xkcd;
**__Usage__**: `xkcd [number]`
Gets an xkcd comic. If a number is not specified, gets a random one.
}	{set;~command.ccommand;
**__Usage__**: `ccommand <command name> <command content>`
Creates a custom command, using the BBTag language.

Custom commands take precedent over all other commands. As such, you can use it to overwrite commands, or disable them entirely. If the command content is "null" (without the quotations), blargbot will have no output whatsoever, allowing you to disable any built-in command you wish. You cannot overwrite the 'ccommand' command. For more in-depth command customization, see the `editcommand` command.

**__Usage__**:
  **cc create <name> <content>** - creates a ccommand with given name and content
  **cc edit <name> <content>** - edits an existing ccommand with given content
  **cc set <name> <content>** - provides the functionality of `create` and `edit` in a single command
  **cc delete <name>** - deletes the ccommand with given name, provided that you own it
  **cc rename <ccommand1> <ccommand2>** - renames the ccommand by the name of `ccommand1` to `ccommand2`
  **cc flag <name> | <add|remove> <name> <Flags;> - Retrieves or sets the Flags; for a custom command. Flags; are added in the format `-x <name> <desc>`. For example,** `-f flag This is a flag!`
  **cc cooldown <name> [time]** - Sets the cooldown of a tag, in milliseconds. Cooldowns must be greater than 500ms.
  **cc raw <name>** - displays the raw code of a ccommand
  **cc setrole <name> [role names...]** - sets the roles required to execute the ccommand
  **cc import <tag> [name]** - imports a tag as a custom command, retaining all data such as author variables
  **cc help** - shows this message
  **cc sethelp <name> [help text]** - set the help message for a custom command
  **cc debug <name>** - executes the specified custom command and sends a file containing all the debug information
  **cc docs [topic]** - view help docuentation for BBTag, specific to ccommands

For more information about BBTag, visit https://blargbot.xyz/tags;Aliases;cc
}	{set;~command.censor;**__Usage__**: `censor help`
Creates message censorships.
Commands:
   ADD <text> [flags] - Adds a censor with for the provided text.
   REMOVE - Brings up a menu to remove a censor
   EXCEPTION <add | remove> [flags] - Adds or removes an exception.
   RULE [flags] - Sets the censorship rules.
   INFO - Displays information about censors.;Flags;`-R` or `--regex` - Add/Edit: If specified, parse as /regex/ rather than plaintext.
`-w` or `--weight` - Add/Edit: How many incidents the censor is worth.
`-r` or `--reason` - Add/Edit: A custom modlog reason. NOT BBTag compatible.
`-d` or `--deletemessage` - Add/Rule/Edit: The BBTag-compatible message to send after a message is deleted. Adds override rules.
`-k` or `--kickmessage` - Add/Rule/Edit: The BBTag-compatible message to send after a user is kicked. Adds override rules.
`-b` or `--banmessage` - Add/Rule/Edit: The BBTag-compatible message to send after a user is banned. Adds override rules.
`-u` or `--users` - Exception: A list of users that are exempt from censorship.
`-r` or `--roles` - Exception: A list of roles that are exempt from censorship.
`-c` or `--channels` - Exception: A list of channels that are exempt from censorship.
}	{set;~command.announce;
**__Usage__**: `announce < <text> | Flags; >`
Makes an annoucement to a configured role, or resets the announcement configuration.;Flags;`-r` or `--reset` - Resets the announcement settings
}	{set;~command.ban;
**__Usage__**: `ban <user> [days] [Flags]`
Bans a user, where days is the number of days to delete messages for (defaults to 1).
If mod-logging is enabled, the ban will be logged.;Flags;`-r` or `--reason` - The reason for the ban.
`-t` or `--time` - If provided, the user will be unbanned after the period of time. (softban)
}	{set;~command.blacklist;
**__Usage__**: `blacklist [channel]`
Blacklists the current channel, or the channel(s) that you mention. The bot will not respond until you do blacklist again.
}	{set;~command.changelog;
**__Usage__**: `changelog`
Sets the current channel as your guild's changelog channel. A message will be posted in this channel whenever there is an update. The bot requires the embed links permission for this.
}	{set;~command.farewell;
**__Usage__**: `farewell [message]`
Sets a farewell message for when users leave.;Flags;`-c` or `--channel` - The channel to put the farewell messages in.
`-r` or `--raw` - Gets the code from the currently-set greeting.
}	{set;~command.greet;
**__Usage__**: `greet [message]`
Sets a greeting for when users join. To disable it, simply type the command with no content.;Flags;`-c` or `--channel` - The channel to put the greeting in.
`-r` or `--raw` - Gets the code from the currently-set greeting.
}	{set;~command.hackban;
**__Usage__**: `hackban <user...> [days]`
Bans a user who isn't currently on your guild, where <user...> is a list of user IDs or mentions (separated by spaces) and days is the number of days to delete messages for (defaults to 1).
If mod-logging is enabled, the ban will be logged.;Flags;`-r` or `--reason` - The reason for the ban.
}	{set;~command.kick;
**__Usage__**: `kick <user> [Flags]`
Kicks a user.
If mod-logging is enabled, the kick will be logged.;Flags;`-r` or `--reason` - The reason for the kick.
}	{set;~command.log;
**__Usage__**: `log <list | enable <channel> <event name>... | disable <event name>... | ignore <users>... | track <users>...>`
Toggles logging for the specified events. Available events are:
- memberban - when a user gets banned
- memberunban - when a user gets unbanned
- memberjoin - when a user joins
- memberleave - when a user leaves
- messagedelete - when a message gets deleted
- messageupdate - when a message gets updated
- nameupdate - when a user changes their username
- avatarupdate - when a user changes their avatar
- nickupdate - when a user changes their nickname
- all - enables all of the events
`ignore` adds a list of users to ignore from logging. Useful for ignoring bots.
`track` removes users from the ignore list
}	{set;~command.logs;
**__Usage__**: `logs <number> [Flags]`
Creates a chatlog page for a specified channel, where `number` is the amount of lines to get. You can retrieve a maximum of 1000 logs.For more specific logs, you can specify Flags;.
For example, if you wanted to get 100 messages `stupid cat` deleted, you would do this:
`logs 100 --type delete --user stupid cat` If you want to use multiple of the same type, separate parameters with commas or chain them together. For example:
`logs 100 -CU -u stupid cat, dumb cat`;Flags;`-t` or `--type` - The type(s) of message. Value can be CREATE, UPDATE, and/or DELETE, separated by commas.
`-c` or `--channel` - The channel to retrieve logs from. Value can be a channel ID or a channel mention.
`-u` or `--user` - The user(s) to retrieve logs from. Value can be a username, nickname, mention, or ID. This uses the user lookup system.
`-C` or `--create` - Get message creates.
`-U` or `--update` - Get message updates.
`-D` or `--delete` - Get message deletes.
`-j` or `--json` - Returns the logs in a json file rather than on a webpage.
}	{set;~command.modlog;
**__Usage__**: `modlog [disable | clear [number to clear]]`
Enables the modlog and sets it to the current channel. Doing modlog disable will disable it. Doing modlog clear [number] will clear the specified number of cases from the modlog. Leaving number blank will clear all cases.When an admin does a moderation command (ban, unban, mute, unmute, and kick), the incident will be logged. The admin will then be encouraged to do reason <case number> <reason> to specify why the action took place.
Bans and unbans are logged regardless of whether the ban or unban commands are used.
}	{set;~command.mute;
**__Usage__**: `mute <user> [Flags]`
Gives the user a special muted role. On first run, this role will be created. The bot needs to be able to manage roles to create and assign the role, and manage channels to configure the role. You are able to manually configure the role without the bot, but the bot has to make it. Deleting the muted role causes it to be regenerated.
If the bot has permissions for it, this command will also voice-mute the user.
If mod-logging is enabled, the mute will be logged.
You can also specify a length of time the user should be muted for, using formats such as 1 hour 2 minutes or 1h2m.;Flags;`-r` or `--reason` - The reason for the mute.
`-t` or `--time` - The amount of time to mute for, formatted as '1 day 2 hours 3 minutes and 4 seconds', '1d2h3m4s', or some other combination.
}	{set;~command.pardon;
**__Usage__**: `pardon <user> [Flags]`
Pardons a user.
If mod-logging is enabled, the pardon will be logged.
This will not unban users.;Flags;`-r` or `--reason` - The reason for the pardon.
`-c` or `--count` - The number of warnings that will be removed.
}	{set;~command.prefix;
**__Usage__**: `prefix add|remove [prefix] [Flags]`
Sets the command prefix.;Flags;`-d` or `--default` - Sets the provided prefix as the default prefix for the guild.
}	{set;~command.purge;
**__Usage__**: `purge`
Purges messages made by me.
}	{set;~command.reason;
**__Usage__**: `reason <caseid | latest> <reason>`
Sets the reason for an action on the modlog.
}	{set;~command.roleme;
**__Usage__**: `roleme <list | add | remove | edit>`
A roleme is a system to automatically give/remove roles to a user when they say a specific catchphrase. You can make these catchphrases anything you want, case sensitive/insensitive, and only activate in specific channels. The roleme command has three subcommands:
list: lists all the rolemes active on the guild.
add: adds a roleme to the guild. Just follow the instructions, or use Flags;.
remove: returns a list of rolemes so you can choose one to remove.
edit: modifies a roleme using the provided Flags;Flags;`-a` or `--add` - Add: A list of roles to add in the roleme
`-r` or `--remove` - Add: A list of roles to remove in the roleme
`-p` or `--phrase` - Add: The phrase to respond to
`-C` or `--case` - Add: Whether the phrase is case sensitive
`-c` or `--channel` - Add: The channels the roleme should be in
`-m` or `--message` - Add: The BBTag-compatible message to output on activation
}	{set;~command.rvoteban;
**__Usage__**: `rvoteban (<user> | <Flags;>)`
Removes the votebans for a specific user, or removes all votebans completely.;Aliases;rpollban, removevoteban, removepollban, rvb, rpb;Flags;`-a` or `--all` - Removes all votebans
}	{set;~command.settings;
**__Usage__**: `settings [keys|help|set <key>]`
Gets or sets the settings for the current guild. Visit https://blargbot.xyz/commands/settings for key documentation.
}	{set;~command.tidy;
**__Usage__**: `tidy [amount] [Flags]`
Clears messages from chat. Defaults to 100.;Flags;`-b` or `--bots` - Remove messages from bots.
`-i` or `--invites` - Remove messages containing invites.
`-l` or `--links` - Remove messages containing links.
`-e` or `--embeds` - Remove messages containing embeds.
`-a` or `--attachments` - Remove messages containing attachments.
`-u` or `--user` - Removes messages from the users specified, separated by commas.
`-q` or `--query` - Removes messages that match the provided query. You can also use /regex/.
`-I` or `--invert` - Reverses the effects of all the flag filters.
}	{set;~command.timers;
**__Usage__**: `timers <[page] | cancel <ids...> | clear>`
Lists all the timers currently active here. You can also cancel any of them by using the cancel subcommand
}	{set;~command.unban;
**__Usage__**: `unban <userid> [Flags]`
Unbans a user.
If mod-logging is enabled, the unban will be logged.;Flags;`-r` or `--reason` - The reason for the unban.
}	{set;~command.unmute;
**__Usage__**: `unmute <user> [Flags]`
Unmutes a user.
If mod-logging is enabled, the unmute will be logged.;Flags;`-r` or `--reason` - The reason for the unmute.
}	{set;~command.warn;
**__Usage__**: `warn <user> [Flags]`
Issues a warning.
If mod-logging is enabled, the warning will be logged.
If kickat and banat have been set using the settings command, the target could potentially get banned or kicked.;Flags;`-r` or `--reason` - The reason for the warning.
`-c` or `--count` - The number of warnings that will be issued.
}
{//; Configure categories }
{if;{length;{get;_categories}};!=;0;
	{set;~categories;{get;_categories}}
}
{foreach;~category;~categories;
	{if;{length;{get;_{get;~category}.commands}};!=;0;
		{set;~{get;~category}.commands;{get;_{get;~category}.commands}}
	}
	{foreach;~command;~{get;~category}.commands;
		{if;{indexof;{get;~command.{get;~command}};Aliases};!=;-1;
			{foreach;~alias;{split;{get;~command.{get;~command};{math;+;{indexof;{get;~command.{get;~command}};Aliases};1}};,{space}};
				{set;~command.{get;~alias};{get;~command.{get;~command}}}
			}
		}
	}
}
{//; Default view for help }
{if;{argslength};==;0;
	{set;~fields;[]}
	{foreach;~category;~categories;
		{push;~fields;
			fields.name:{get;~category};
			fields.value:```css{newline}{join;~{get;~category}.commands;,{space}}```
		}
	}
	{push;~fields;
		fields.name:{zws};
		fields.value:For more information about commands, do `{prefix}{commandname} <commandname>` or visit <https://blargbot.xyz/commands>;
		color:#7289da
	}
	{embed;{apply;embedbuild;{get;~fields}}}
	{return}
}
{//; Build the embed for the command }
{set;~fields;[]}
{set;~command;{args;0}}
{//; Configure command }
{if;{length;{get;_command.{get;~command}}};!=;0;
	{set;~command.{get;~command};{get;_command.{get;~command}}}
}
{switch;true;
	{bool;{length;{get;_command.{get;~command}}};!=;0};{set;~varType;_};
	{bool;{length;{get;~command.{get;~command}}};!=;0};{set;~varType;~};
	{embed;{exec;err;No help found for `{get;~command}`}}{return}
}
{push;~fields;
	description:{get;~command.{get;~command};0}
}
{if;{indexof;{get;~command.{get;~command}};Aliases};!=;-1;
	{push;~fields;
		fields.name:Aliases;
		fields.value:{regexreplace;{foreach;~alias;{split;{get;~command.{get;~command};{math;+;{indexof;{get;~command.{get;~command}};Aliases};1}};,{space}};`{get;~alias}`,{space}};/,\s?$/;}
	}
}
{if;{indexof;{get;~command.{get;~command}};Flags};!=;-1;
	{push;~fields;
		fields.name:Flags;
		fields.value:{get;~command.{get;~command};{math;+;{indexof;{get;~command.{get;~command}};Flags};1}}
	}
}
{set;~color;
	{switch;true;
		{bool;{indexof;{get;~NSFW.commands};{get;~command}};!=;-1};#010101;
		{bool;{indexof;{get;~Admin.commands};{get;~command}};!=;-1};#ff0000;
			#efff00
	}
}
{push;~fields;
	title:Help for {get;~command};
	url:https://blargbot.xyz/commands#{get;~command};
	color:{get;~color}
}
{embed;{apply;embedbuild;{get;~fields}}}