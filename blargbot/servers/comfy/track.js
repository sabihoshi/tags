{//; Set roles for staff members }
{set;~roles;
	511770136118820865;
	510762236055126046;
	511846740274708503;
	511845517567983616
	510762918082510848;
	510824868158373898;
	510824617053782027;
	511137471954812960;
	510839583773294592
}

{//; Check for permissions }
{if;{logic;!;{hasrole;{get;~roles}}};{return}}
{switch;{lower;{args;0}};
	create;
		{//; Set the title }
		{void;{send;{channelid};Please give a Title for the release}}
		{set;~msgid;{pop;{waitmessage;{channelid};{userid};true;60}}}
		{if;{get;~msgid};==;Wait timed out after 60000;
			{void;{send;{channelid};Please respond faster. Timed out. {return}}}
		}
		{set;~title;{messagetext;{channelid};{get;~msgid}}}

		{//; Set the chapters }
		{void;{send;{channelid};How many chapters will {get;~title} be?}}
		{set;~msgid;{pop;{waitmessage;{channelid};{userid};true;60}}}
		{if;{get;~msgid};==;Wait timed out after 60000;
			{void;{send;{channelid};Please respond faster. Timed out. {return}}}
		}
		{set;~ch;{parseint;{messagetext;{channelid};{get;~msgid}}}}

		{//; Check if chapters is a valid number }
		{if;{get;~ch};==;NaN;Please provide a valid number. Please try again.{return}}

		{//; Set the description }
		{void;{send;{channelid};Please give a description for the release}}
		{set;~msgid;{pop;{waitmessage;{channelid};{userid};true;60}}}
		{if;{get;~msgid};==;Wait timed out after 60000;
			{void;{send;{channelid};Please respond faster. Timed out. {return}}}
		}
		{set;~description;{messagetext;{channelid};{get;~msgid}}}

		{//; Create the embed }
		{set;~embed;
			[
				"title:{get;~title}",
				"description:{get;~description}",
				"timestamp:{time}",
				"color:{color;blue}",
				"footer.text:Last updated",
				"author.icon_url:https://buttsare.sexy/099664.png",
				"author.name:Release in progress",
			]
		}

		{//; Add the fields }
		{for;~i;1;<=;{get;~ch};
			{push;~embed;
				fields.name:CH.{get;~i};
				fields.value:**In progress**{newline}
			}
		}
		{embed;{embedbuild;

		}}
	;delete;
	update
}