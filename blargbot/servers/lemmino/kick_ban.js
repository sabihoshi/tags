b!cc create kick {if;{argslength};==;0;{return}}
{set;~user;{userid;{flag;_}}}
{if;{kick;{get;~user};{flag;r}};==;Success;{set;_{get;~user}kicked;true}}
b!cc create ban {if;{argslength};==;0;{return}}
{set;~user;{userid;{flag;_}}}
{if;{ban;{get;~user};{flag;r}};==;Success;{set;_{get;~user}kicked;true}}```