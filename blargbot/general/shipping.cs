b!t edit shipping {if;<;{argslenth};2;
	:x: Please provide two users!{return}}{void;
{set;n;
	{switch;{lower;{args;2}};
		nick;nickname;
		nickname;nickname;
		username
	}
}
{set;r0;{randint;0;1}}
{set;r1;
	{if;==;0;{get;r};1;0}
}
{set;u0;{userid;{args;{get;r0}}}}
{set;u1;{userid;{args;{get;r1}}}}
{set;0;
	{ceil;{math;/;
		{length;{{get;n};{get;u0}}};2}
	}
}
{set;1;
	{ceil;{math;/;
		{length;{{get;n};{get;u1}}};2}
	}
}
{set;1l;
	{length;{{get;n};{get;u1}}}
}
{set;sn;
	{substring;
		{{get;n};{get;u0}};
		0;{get;0}
	}{substring;
		{{get;n};{get;u1}};
		{get;1};{get;1l}
	}
}
{set;lc0;{aget;s{get;u0}#{get;u1}}}
{set;lc1;{aget;s{get;u1}#{get;u0}}}
{set;rc;{randint;0;100}}
{set;c;
	{switch;;
		{get;lc0};{get;rc};
		{get;lc1};{get;rc};
		{if;!=;{get;lc0};{get;lc1};
			{if;>=;{get;lc0};{get;lc1};
				{get;lc0};
				{get;lc1}
			};
			{get;lc0}
		}
	}
}
{set;@s{get;u0}#{get;u1};
	{get;c}
}
{set;@s{get;u1}#{get;u0};
	{get;c}
}}{randchoose;Happy;Lovely;Merry} Shipping!
Ship name: **{get;sn}**
Compatibility: **{get;c}%** {switch;{get;c};
	0;The worst!;
	100;Perfect!;
	99;Almost There!;
	Pretty {if;>=;{get;c};50;Good;Bad}
}