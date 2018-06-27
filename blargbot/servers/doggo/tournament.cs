{if;{logic;||;{bool;{channelid};==;446308090351190017};{bool;{channelid};==;432992341083553792}};
{set;~join;join;apply;participate}
{set;~leave;leave;exit;quit}
{switch;{lower;{args;0}};
	{get;~join};
		{if;{get;@{userid}tournament_join};==;true;
			{exec;embed;<:chess_cross:436745175294017546> **You already are participating!** -c red};
			{exec;embed;<:wk:432200723724369920> **You are now participating!**}
			{if;{get;@{userid}tournament_embed};!=;;{delete;446270094440398848;{get;@{userid}tournament_embed}}}
			{set;@{userid}tournament_embed;{send;446270094440398848;{exec;embed;<:wk:432200723724369920> **{username}#{userdiscrim}** ({userid}) -j}}}
			{set;@{userid}tournament_join;true}
		};
	{get;~leave};
		{if;{get;@{userid}tournament_join};==;true;
			{edit;446270094440398848;{get;@{userid}tournament_embed};{exec;embed;**LEFT** {newline}<:wk:432200723724369920> **{username}#{userdiscrim}** ({userid}) -c red -j}}
			{set;@{userid}tournament_join;false}
			{exec;embed;<:wk:432200723724369920> **You have left the tournament!**};
			{exec;embed;<:chess_cross:436745175294017546> **You are not currently participating! Do `{prefix}{commandname} join` to join.** -c red}
		};
	{exec;embed;<:wk:432200723724369920> To participate in chess, do `{prefix}{commandname} join`. }
}}