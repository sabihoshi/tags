b!cc edit promote {set;{userid}timemath;0}{delete}{if;==;;{args};
	❎ | **{username}, Please provide a valid promotion!**
		{return}
}
{if;<;
	{math;-;
		{time;x};
			{get;2wk}
		};
	{round;{usercreatedat;x;{userid}}};
		❎ | **{username}, your account isn't old enough to promote!**
			{return}
}
			{//;Not being used right now
				{if;1;<;
					{length;
						{regexreplace;
							{regexreplace;
								{args};
								/https?:\/\/(?:www)?(?:\S+)?|www.(?:\S+)?|discord(?:\S+)?|(?:\S+).com|(?:\S+).org|(?:\S+).net|(?:\S+).moe|(?:\S+).xyz/igm;
								1
							};
							/\s/gm;
						}
					};
					❎ | **{username}, You put too much links!**
						{return}
				}
			}
{void;
	{set;{userid}time;
		{time;x}
	}
	{set;{userid}otimemath;
		{get;{userid}timemath}
	}
	{set;{userid}timemath;
		{math;+;
			{get;{userid}time};
			{get;@1d}
		}
	}
	{set;{userid}stimemath;
		{if;>=;
			{get;{userid}time};
			{get;{userid}otimemath};
				1;0
		}
	}
	{set;{userid}timemath;
		{if;==;1;
			{get;{userid}stimemath};
				{get;{userid}timemath};
				{get;{userid}otimemath}
		}
	}
	{set;~refmath;
		{math;-;
			{get;{userid}otimemath};
			{get;{userid}time}
		}
	}
}
{if;==;1;{get;{userid}stimemath};
	{set;~m;
		📰 | **{username}#{userdiscrim}** ({userid}){newline}{args}
	}
	{set;~m0;
		{regexreplace;{get;~m};/`/igm;`​}
	}
	{if;==;1;
		{get;{userid}prset};
			{delete;
				{get;@promotech};
				{get;{userid}promote}
			}
	}
	{timer;
		{set;{userid}promote;
			{send;{get;@promotech};
				{get;~m}
			}
		}
		;5s
	}
	{set;{userid}prset;1}
	{dm;{userid};
		✅ | Sent ```{get;~m0}``` To <#{get;@promotech}>.
	};
	{set;H;{abs;{time;H;{get;~refmath};x;GMT}}}
	{set;mm;{abs;{time;mm;{get;~refmath};x;GMT}}}
	{set;ss;{abs;{time;ss;{get;~refmath};x;GMT}}} 
	❎ | {username}, please wait {if;!=;0;{get;H};**{get;H}** hour{if;>;{get;H};1;s},} {if;!=;0;{get;mm};**{get;mm}** minute{if;>;{get;mm};1;s}, and} **{get;ss}** second{if;>;{get;ss};1;s}.
}
Message ID: {get;{userid}promote}