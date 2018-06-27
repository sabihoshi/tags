b!greet {void;{set;~time;{usercreatedat;X}}
{set;~time;{floor;{math;-;{time;X};{get;~time}}}}
{set;~d;{floor;{math;/;{get;~time};86400}}}
{set;~dh;{floor;{math;/;{math;%;{get;~time};86400};3600}}}
{set;~h;{floor;{math;/;{get;~time};3600}}}
{set;~m;{floor;{math;/;{math;%;{get;~time};3600};60}}}
{set;~s;{floor;{math;%;{get;~time};60}}}}
{embed;{buildembed;
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
footer.text:{inguild}{switch;{inguild};11;ᵗʰ;12;ᵗʰ;13;ᵗʰ;{switch;{substring;{inguild};{math;-;{length;{inguild}};1}};1;ˢᵗ;2;ⁿᵈ;3;ʳᵈ;ᵗʰ}} member;
timestamp:{time}}} -c #logs