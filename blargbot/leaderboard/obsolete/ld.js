b!t edit ld ```py
📋 Rank | Name                  

{trim;{if;<=;17;{length;{userid;{get;@1}}};{if;!=;;{get;@1};[{math;+;1;{get;mg}}]     > #{username;{get;@1}} {if;==;1;{get;@id};({userid;{get;@1}})}
            Credits: {get;@{userid;{get;@1}}credits}}}
{if;<=;17;{length;{userid;{get;@2}}};{if;!=;;{get;@2};[{math;+;2;{get;mg}}]     > #{username;{get;@2}} {if;==;1;{get;@id};({userid;{get;@2}})}
            Credits: {get;@{userid;{get;@2}}credits}}}
{if;<=;17;{length;{userid;{get;@3}}};{if;!=;;{get;@3};[{math;+;3;{get;mg}}]     > #{username;{get;@3}} {if;==;1;{get;@id};({userid;{get;@3}})}
            Credits: {get;@{userid;{get;@3}}credits}}}                     
{if;<=;17;{length;{userid;{get;@4}}};{if;!=;;{get;@4};[{math;+;4;{get;mg}}]     > #{username;{get;@4}} {if;==;1;{get;@id};({userid;{get;@4}})}
            Credits: {get;@{userid;{get;@4}}credits}}}
{if;<=;17;{length;{userid;{get;@5}}};{if;!=;;{get;@5};[{math;+;5;{get;mg}}]     > #{username;{get;@5}} {if;==;1;{get;@id};({userid;{get;@5}})}
            Credits: {get;@{userid;{get;@5}}credits}}}
{if;<=;17;{length;{userid;{get;@6}}};{if;!=;;{get;@6};[{math;+;6;{get;mg}}]     > #{username;{get;@6}} {if;==;1;{get;@id};({userid;{get;@6}})}
            Credits: {get;@{userid;{get;@6}}credits}}}
{if;<=;17;{length;{userid;{get;@7}}};{if;!=;;{get;@7};[{math;+;7;{get;mg}}]     > #{username;{get;@7}} {if;==;1;{get;@id};({userid;{get;@7}})}
            Credits: {get;@{userid;{get;@7}}credits}}}
{if;<=;17;{length;{userid;{get;@8}}};{if;!=;;{get;@8};[{math;+;8;{get;mg}}]     > #{username;{get;@8}} {if;==;1;{get;@id};({userid;{get;@8}})}
            Credits: {get;@{userid;{get;@8}}credits}}}                      
{if;<=;17;{length;{userid;{get;@9}}};{if;!=;;{get;@9};[{math;+;9;{get;mg}}]     > #{username;{get;@9}} {if;==;1;{get;@id};({userid;{get;@9}})}
            Credits: {get;@{userid;{get;@9}}credits}}}
{if;<=;17;{length;{userid;{get;@10}}};{if;!=;;{get;@10};[{math;+;10;{get;mg}}]     > #{username;{get;@10}} {if;==;1;{get;@id};({userid;{get;@10}})}
            Credits: {get;@{userid;{get;@10}}credits}}}}
                        
-------------------------------------
# Your Credits: {get;@{userid}credits}
😐 Rank: {math;+;1;{indexof;{get;@0};{userid}}}/{get;mx}```