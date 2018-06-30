b!greet {set;~roles;
    437287008394805249;
    437291155239993374;
    437291974765182979;
    435128972209160192;
    437004403833176068;
    437240793502187521
}
{foreach;~role;{get;~roles};{if;{indexof;{get;_{userid}roles};{get;~role}};!=;-1;{if;{addrole;{get;~role}};{username}#{userdiscrim} was given back {rolename;{get;~role}}{newline}}}}
{set;~time;{usercreatedat;X}}
{set;~time;{floor;{math;-;{time;X};{get;~time}}}}
{set;~d;{floor;{math;/;{get;~time};86400}}}
{set;~dh;{floor;{math;/;{math;%;{get;~time};86400};3600}}}
{set;~h;{floor;{math;/;{get;~time};3600}}}
{set;~m;{floor;{math;/;{math;%;{get;~time};3600};60}}}
{set;~s;{floor;{math;%;{get;~time};60}}}
{void;{send;437879937400045568;{embed;{buildembed;
author.name:{username}#{userdiscrim} ({userid});
author.icon_url:{useravatar};
{if;{get;~time};<=;{math;*;60;60;24};
    description:**Account is less than 1 day old!**
};
thumbnail.url:{useravatar}
description:{userid};
color:{if;{get;~time};<=;{math;*;60;60;24};f00;0f0};
fields.name:Creation Date;
fields.value:{usercreatedat;YYYY/MM/DD HH:mm:ss};
fields.inline:false;
fields.name:Account Age;
fields.value:{get;~d}d {get;~dh}h {get;~m}m {get;~s}s;
fields.inline:false;
footer.text:{inguild}{switch;{substring;{inguild};{math;-;{length;{inguild}};2}};11;ᵗʰ;12;ᵗʰ;13;ᵗʰ;{switch;{substring;{inguild};{math;-;{length;{inguild}};1}};1;ˢᵗ;2;ⁿᵈ;3;ʳᵈ;ᵗʰ}} member;
timestamp:{time}}}}} -c #join_leave_log