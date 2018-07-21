{trim;{suppresslookup}
{set;~user;{userid;{args}}}
{if;{get;~user};==;;false{return;false}}
{if;{guildownerid};==;{userid};true{return;false}}
{if;{guildownerid};==;{get;~user};false{return;false}}
{bool;{indexof;{roles};{shift;{roles;{userid}}}};>;{indexof;{roles};{shift;{roles;{get;~user}}}}}}