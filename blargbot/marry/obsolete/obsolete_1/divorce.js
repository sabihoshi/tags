b!t edit divorce {exec;marset1}{set;@{userid}time;{time;x}}{set;@{userid}omarrmath;{get;@{userid}marrmath}}{set;@{userid}smarrmath;{if;>=;{get;@{userid}time};{get;@{userid}omarrmath};1;0}}{set;@{userid}refmath;{math;-;{get;@{userid}marrmath};{get;@{userid}time}}}{set;@{userid}divelig;
    {if;!=;1;{get;@{userid}status};3;
    {if;==;0;{get;@{userid}smarrmath};2;
    {if;==;accept;{lower;{args;0}};1;4}}}
}{if;==;1;{get;@{userid}divelig};{exec;marset}}{switch;{get;@{userid}divelig};
    2;{get;@diver1}{set;YYYY;{math;-;{abs;{time;YYYY;{get;@{userid}refmath};x}};1970}}{set;MM;{abs;{time;MM;{get;@{userid}refmath};x}}}{set;DD;{abs;{time;DD;{get;@{userid}refmath};x}}}{set;H;{abs;{time;H;{get;@{userid}refmath};x}}}{set;mm;{abs;{time;mm;{get;@{userid}refmath};x}}}{set;ss;{abs;{time;ss;{get;@{userid}refmath};x}}} {if;!=;0;{get;YYYY};**{get;YYYY}** year{if;>;{get;YYYY};1;s},} {if;!=;0;{get;MM};**{get;MM}** month{if;>;{get;MM};1;s},} {if;!=;0;{get;DD};**{get;DD}** day{if;>;{get;DD};1;s},} {if;!=;0;{get;H};**{get;H}** hour{if;>;{get;H};1;s},} {if;!=;0;{get;mm};**{get;mm}** minute{if;>;{get;mm};1;s}, and} **{get;ss}** second{if;>;{get;YYYY};1;s}.;
    3;{get;@diver2};
    4;{get;@divm1};
    1;{get;@diver3} **{username;{get;@{userid}partner}}** {get;@diver4}
    {set;@{userid}${get;@{userid}partner};1}
    {set;@{get;@{userid}partner}status;0}
    {set;@{get;@{userid}partner}partner;0}
    {set;@{userid}status;0}
    {set;@{userid}partner;0};
    :negative_squared_cross_mark: | An error occurred!
}