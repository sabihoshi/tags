Common: yen 12 
Uncommon: yen 20 
Rare: yen 1250 
Garbage: yen 6 .

Catch rate for items: 
Common: 34.85% 
Uncommon: 10% 
Rare: 0.15% 
Garbage: 55%

b!t edit fishy{set;f;{randint;1;10000}}{set;@l;{if;<=;{get;f};15;3;{if;<=;{get;f};1000;2;{if;<=;{get;f};3485;1;0}}}}{get;@l}🎣 | {if;>=;{get;@{userid}credits};10;**{username}, you caught:** {set;@{userid}catch;{switch;{get;@l};0;{randchoose;🛒;🔋;🔧;👞;📎};1;🐟;2;🐠3;{randchoose;🐙;🐬;🐋;🐳;🦀;🦐;🦑;🐢;🐊;🦈;🐧}}}{if;==;;{get;@{userid}fishcnt#{get;@{userid}catch}};{set;@{userid}fishcnt#{get;@{userid}catch};1};{increment;@{userid}fishcnt#{get;@{userid}catch}}}{get;@{userid}catch} **!** Paid 💴 **10** for casting.{set;@{userid}credits;{math;-;{get;@{userid}credits};10}};❌ | You have insufficient credits.}


b!t edit fishyrnd {void;{set;0;0}{set;1;0}{set;2;0}{set;3;0}{set;4;0}{repeat;{set;f;{randint;1;10000}}{set;@l;{if;<=;{get;f};15;{increment;3}3;{if;<=;{get;f};1000;{increment;2}2;{if;<=;{get;f};3485;{increment;1}1;{increment;0}0}}}}{increment;4};{if;==;0;{argslength};100;{if;==;NaN;{parseint;{args;0}};100;{args;0}}}}}Total of **{substring;{math;*;{math;/;100;{get;4}};{get;0}};0;6}**% > Garbage ({get;0}/{get;4})
Total of **{substring;{math;*;{math;/;100;{get;4}};{get;1}};0;6}**% > Common ({get;1}/{get;4})
Total of **{substring;{math;*;{math;/;100;{get;4}};{get;2}};0;6}**% > Uncommon ({get;2}/{get;4})
Total of **{substring;{math;*;{math;/;100;{get;4}};{get;3}};0;6}**% > Rare ({get;3}/{get;4})
{math;*;6;{get;0}} + {math;*;12;{get;1}} + {math;*;20;{get;2}} + {math;*;1250;{get;3}} = ¥ {math;+;{math;*;6;{get;0}};{math;*;12;{get;1}};{math;*;20;{get;2}};{math;*;1250;{get;3}}} / {math;*;10;{get;4}}
**{substring;{math;*;{math;/;100;{math;*;10;{get;4}}};{math;+;{math;*;6;{get;0}};{math;*;12;{get;1}};{math;*;20;{get;2}};{math;*;1250;{get;3}}}};0;8}**% Profit