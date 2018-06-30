b!t edit leaderboards {void;{if;!=;{get;@{userid}ocredits};{get;@{userid}credits};{exec;ldchk}{set;@{userid}ocredits;{get;@{userid}credits}}}{set;@0;{regexreplace;{get;@ldboard};/(\d+#)(\d{1,18})/g;$2}}{set;mx;{length;{get;@0}}}{set;maxpg;{ceil;{math;/;{get;mx};10}}}{set;pg;
	{if;==;0;{argslength};1;
	{if;==;NaN;{parseint;{args;0}};1;
	{if;>;{args;0};{get;maxpg};{get;maxpg};
	{if;==;0;{floor;{args;0}};1;
	{abs;{floor;{args;0}}}
}}}}}{set;mg;{math;*;10;{math;-;{get;pg};1}}}
{set;@1;{slice;{get;@0};{math;+;0;{get;mg}};{math;+;1;{get;mg}}}}
{set;@2;{slice;{get;@0};{math;+;1;{get;mg}};{math;+;2;{get;mg}}}}
{set;@3;{slice;{get;@0};{math;+;2;{get;mg}};{math;+;3;{get;mg}}}}
{set;@4;{slice;{get;@0};{math;+;3;{get;mg}};{math;+;4;{get;mg}}}}
{set;@5;{slice;{get;@0};{math;+;4;{get;mg}};{math;+;5;{get;mg}}}}
{set;@6;{slice;{get;@0};{math;+;5;{get;mg}};{math;+;6;{get;mg}}}}
{set;@7;{slice;{get;@0};{math;+;6;{get;mg}};{math;+;7;{get;mg}}}}
{set;@8;{slice;{get;@0};{math;+;7;{get;mg}};{math;+;8;{get;mg}}}}
{set;@9;{slice;{get;@0};{math;+;8;{get;mg}};{math;+;9;{get;mg}}}}
{set;@10;{slice;{get;@0};{math;+;9;{get;mg}};{math;+;10;{get;mg}}}}{set;@id;{if;==;1;{get;@{userid}admin};1;0}}}```py
📋 Rank | Name                  

{trim;{if;==;1;{length;{get;@1}};{if;>=;17;{length;{userid;{get;@1}}};{pad;right;{space;9};[{math;+;1;{get;mg}}]}> #{username;{get;@1}} {if;==;1;{get;@id};({userid;{get;@1}})}
{space;2}Credits: {get;@{userid;{get;@1}}credits}}}
{if;==;1;{length;{get;@2}};{if;>=;17;{length;{userid;{get;@2}}};{pad;right;{space;9};[{math;+;2;{get;mg}}]}> #{username;{get;@2}} {if;==;1;{get;@id};({userid;{get;@2}})}
{space;2}Credits: {get;@{userid;{get;@2}}credits}}}
{if;==;1;{length;{get;@3}};{if;>=;17;{length;{userid;{get;@3}}};{pad;right;{space;9};[{math;+;3;{get;mg}}]}> #{username;{get;@3}} {if;==;1;{get;@id};({userid;{get;@3}})}
{space;2}Credits: {get;@{userid;{get;@3}}credits}}}                     
{if;==;1;{length;{get;@4}};{if;>=;17;{length;{userid;{get;@4}}};{pad;right;{space;9};[{math;+;4;{get;mg}}]}> #{username;{get;@4}} {if;==;1;{get;@id};({userid;{get;@4}})}
{space;2}Credits: {get;@{userid;{get;@4}}credits}}}
{if;==;1;{length;{get;@5}};{if;>=;17;{length;{userid;{get;@5}}};{pad;right;{space;9};[{math;+;5;{get;mg}}]}> #{username;{get;@5}} {if;==;1;{get;@id};({userid;{get;@5}})}
{space;2}Credits: {get;@{userid;{get;@5}}credits}}}
{if;==;1;{length;{get;@6}};{if;>=;17;{length;{userid;{get;@6}}};{pad;right;{space;9};[{math;+;6;{get;mg}}]}> #{username;{get;@6}} {if;==;1;{get;@id};({userid;{get;@6}})}
{space;2}Credits: {get;@{userid;{get;@6}}credits}}}
{if;==;1;{length;{get;@7}};{if;>=;17;{length;{userid;{get;@7}}};{pad;right;{space;9};[{math;+;7;{get;mg}}]}> #{username;{get;@7}} {if;==;1;{get;@id};({userid;{get;@7}})}
{space;2}Credits: {get;@{userid;{get;@7}}credits}}}
{if;==;1;{length;{get;@8}};{if;>=;17;{length;{userid;{get;@8}}};{pad;right;{space;9};[{math;+;8;{get;mg}}]}> #{username;{get;@8}} {if;==;1;{get;@id};({userid;{get;@8}})}
{space;2}Credits: {get;@{userid;{get;@8}}credits}}}                      
{if;==;1;{length;{get;@9}};{if;>=;17;{length;{userid;{get;@9}}};{pad;right;{space;9};[{math;+;9;{get;mg}}]}> #{username;{get;@9}} {if;==;1;{get;@id};({userid;{get;@9}})}
{space;2}Credits: {get;@{userid;{get;@9}}credits}}}
{if;==;1;{length;{get;@10}};{if;>=;17;{length;{userid;{get;@10}}};{pad;right;{space;9};[{math;+;10;{get;mg}}]}> #{username;{get;@10}} {if;==;1;{get;@id};({userid;{get;@10}})}
{space;2}Credits: {get;@{userid;{get;@10}}credits}}}}
                        
-------------------------------------
# Your Credits: {get;@{userid}credits}
😐 Rank: {math;+;1;{indexof;{get;@0};{userid}}}/{get;mx}```