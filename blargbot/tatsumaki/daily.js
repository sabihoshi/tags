{set;@{userid}credits;0{get;@{userid}credits}}
{set;@{userid}time;{time;x}}
{set;@{userid}otimemath;{get;@{userid}timemath}}
{set;@{userid}timemath;{math;+;{get;@{userid}time};{get;@1d}}}
{set;@{userid}stimemath;{if;>=;{get;@{userid}time};{get;@{userid}otimemath};1;0}}
{set;@{userid}timemath;{if;==;1;{get;@{userid}stimemath};{get;@{userid}timemath};{get;@{userid}otimemath}}}
{set;@{userid}refmath;{math;-;{get;@{userid}otimemath};{get;@{userid}time}}}
{if;!=;1;{get;@{userid}stimemath};🏧 | **{username}, your daily 💴 credits refreshes in {time;HH;{get;@{userid}refmath};x} hours, {abs;{time;mm;{get;@{userid}refmath};x}} minutes and {abs;{time;ss;{get;@{userid}refmath};x}} seconds.**;{set;@udail;{randint;300;600}}{set;@{userid}credits;{if;!=;1;{get;@{userid}stimemath};{get;@{userid}credits};{math;+;{get;@{userid}credits};{get;@udail}}}}🏧 | **{username}, you received your 💴 {get;@udail}{exec;ldchk} daily credits!**
Total credits: **{get;@{userid}credits}**}