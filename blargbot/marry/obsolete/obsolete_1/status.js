b!t edit Status {if;==;info;{lower;{args;0}};
    {set;@{userid}info;{args;1;n}}{if;<;{argslength};2;:ok: | Cleared your info.;:ok: | Set your info.};
            {switch;{argslength};
                0;{set;@0;{userid}};
                5;{set;@0;{userid}};
                {set;@0;{userid;{args;0}}}
            }Relationship status of {username;{get;@0}}: **{if;==;1;{get;@{get;@0}status};Married;Single}**{if;!=;;{get;@{get;@0}info};{newline}Info: {get;@{get;@0}info}}{if;==;{get;@{get;@0}status};1;{newline}:wedding: | {randchoose;Happily;Is;Successfully;Bound and;Vowed and} {randchoose;wedded;married;together;coupled} {randchoose;with;to;together with} **{username;{get;@{get;@0}partner}}**}
}