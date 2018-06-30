b!t edit propose {if;==;{argslength};
    0;{set;@0;######};{set;@0;{userid;{args;0}}}{set;@{get;@0}marrystat;{if;>;{math;-;{time;x};{get;@2wk}};{round;{usercreatedat;x;{get;@0}}};1;0}}
}{set;@{userid}marrystat;{if;>;{math;-;{time;x};{get;@2wk}};{round;{usercreatedat;x;{userid}}};1;0}}{if;==;{get;@0};######;
    {set;@{userid}propelig;4};
    {set;@{userid}propelig;
        {if;==;{get;<@246903976937783296>};{userid};1;
        {if;!=;832961;{get;@scd};0;
        {if;==;1;{get;@{userid}bl};16;
        {if;==;1;{get;@{get;@0}bl};17;
        {if;==;1;{get;@{userid}status};15;
        {if;==;1;{get;@{get;@0}status};6;
        {if;==;1;{get;@{userid}proby};24;
        {if;==;1;{get;@{get;@0}proby};
            {if;==;{userid};{get;@{get;@0}propose};26;10};
        {if;==;{get;@0};{get;@{userid}propose};2;
        {if;==;1;{get;@{userid}proposed};3;
        {if;!=;18;{length;{get;@0}};5;
        {if;==;{userid};{userid;{args;0}};7;
        {if;==;0;{get;@{userid}marrystat};8;
        {if;==;0;{get;@{get;@0}marrystat};9;
        {if;==;1;{get;@{userid}${get;@0}};11;
        {if;==;1;{get;@{get;@0}${userid}};12;
        1}}}}}}}}}}}}}}}}}}{switch;{get;@{userid}propelig};
        0;❎ | **An error occurred!**;
        1;⛪ | {username} {aget;pre13} {username;{get;@0}}.
{username;{get;@0}}{aget;pre14}
            {set;@{userid}propose;{get;@0}}
            {set;@{get;@0}propose;{userid}}
            {set;@{userid}proposed;{if;==;{userid};{get;<@246903976937783296>};0;1}}
            {set;@{get;@0}proby;1};
        10;{get;@pre10} {username;{get;@{get;@0}propose}} {get;@pre23};
        24;{get;@pre24} {username;{get;@{userid}propose}} {get;@pre25};
        26;{get;@pre26}
{username;{get;@{get;@0}propose}} {get;@pre14};
        {get;@pre{get;@{userid}propelig}}}