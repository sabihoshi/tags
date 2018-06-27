b!cc edit lewdpls {if;==;{userid};{get;@kao};
```diff
Page {if;==;{argslength};0;0;{args;0}}/{get;@nsfwpg}
{get;@nsfwppl{if;==;{argslength};0;0;{args;0}}}```;{void;{if;==;{hasrole;308687999997181953};true;{removerole;308687999997181953}{set;@s;-};{addrole;308687999997181953}{set;@s;+}}}{if;>=;{length;{get;@nsfwppl{get;@nsfwpg}}{newline}{get;@s} {userid} | {username}#{userdiscrim}};1969;{void;{increment;@nsfwpg}}}{set;@nsfwppl{get;@nsfwpg};{get;@nsfwppl{get;@nsfwpg}}{newline}{get;@s} {userid} | {username}#{userdiscrim}}}{delete}