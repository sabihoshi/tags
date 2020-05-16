{set;~webhook;{flag;w}}
{set;~id;{shift;{regexmatch;{get;~webhook};/\d{17,20}/}}}
{set;~key;{shift;{regexmatch;{get;~webhook};/[\w-]+$/}}}

{set;~embed;author.name:{username};author.icon_url:{useravatar}}

{function;getOrNull;
    {if;{get;{params;0}};==;{null};{params;1};{get;{params;0}}}
}

{function;getLinks;
    {filter;~link;~links;{bool;{get;~{jget;~link;name}};!=;{null}}}
}

{//; Usage: [question] [variable] }
{function;prompt;
    {if;{get;{params;1}};==;{null};
        {send;{channelid};{params;0};}
    }
}

{//; Usage: [array] [variable] [fieldName] }
{function;pushIfNotEmpty;
    {if;{get;{params;1}};!=;{null};
        {push;{params;0};{params;2}:{get;{params;1}}}
    }
}

{//; Release details }
{set;~title;{flag;_}}
{set;~author;{flag;a}}
{set;~description;{flag;d}}
{set;~image;{flag;i}}
{set;~subtitle;{flag;s}}
{set;~color;{color;{flag;c}}}

{//; Links }
{set;~twitter;{flag;t}}
{set;~e-hentai;{flag;e}}
{set;~exhentai;{flag;E}}
{set;~nhentai;{flag;n}}
{set;~mangadex;{flag;m}}
{set;~pixiv;{flag;p}}

{set;~flags;{j;[
    {
        "flag": "_",
        "variable": "title",
        "isRequired": true
    },
    {
        "flag": "a",
        "variable": "author",
        "isRequired": false
    },
    {
        "flag": "d",
        "variable": "description",
        "isRequired": false
    },
    {
        "flag": "i",
        "variable": "image",
        "isRequired": false
    },
    {
        "flag": "s",
        "variable": "subtitle",
        "isRequired": false
    },
    {
        "flag": "c",
        "variable": "color",
        "isRequired": false
    }
]}}

{set;~links;{j;[
    {
        "name": "twitter",
        "emoji": "<:Twitter:682246371079880730>",
        "link": "twitter.com"
    },
    {
        "name": "e-hentai",
        "emoji": "<:EHentai:682301919200673811>",
        "link": "e-hentai.org"
    },
    {
        "name": "exhentai",
        "emoji": "<:SadPanda:688248903648149548>",
        "link": "exhentai.org"
    },
    {
        "name": "nhentai",
        "emoji": "<:Nhentai:682301919158730771>",
        "link": "nhentai.net"
    },
    {
        "name": "mangadex",
        "emoji": "<:MangaDex:682246635593400364>",
        "link": "mangadex.org"
    },
    {
        "name": "pixiv",
        "emoji": "<:pixiv:704276974855520266>",
        "link": "pixiv.net"
    }
]}}

{set;~embed;
    author.name:{get;~author};
    title:{get;~title};
    description:{get;~subtitle}{newline}{foreach;~link;{func.getLinks};[{jget;~link;emoji}]({get;~{jget;~link;name}}){space}};
    color:{func.getOrNull;{get;~color};000000};
}

{func.pushIfNotEmpty;~embed;~image;thumbnail.url}

{if;{get;~description};!=;{null};
    {push;~embed;
        fields.name:Description;
        fields.value:{get;~description};
        fields.inline:true
    }
}

{if;{get;~webhook};==;{null};
    {embed;{apply;embedbuild;{get;~embed}}};
    {webhook;{get;~id};{get;~key};{flag;C};{apply;embedbuild;{get;~embed}}}
}