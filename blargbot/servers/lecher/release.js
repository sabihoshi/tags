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

{//; Release details }
{set;~title;{flag;_}}
{set;~author;{flag;a}}
{set;~description;{flag;d}}
{set;~image;{flag;i}}

{//; Links }
{set;~twitter;{flag;t}}
{set;~e-hentai;{flag;e}}
{set;~nhentai;{flag;n}}
{set;~mangadex;{flag;m}}

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
        "name": "nhentai",
        "emoji": "<:Nhentai:682301919158730771>",
        "link": "nhentai.net"
    },
    {
        "name": "mangadex",
        "emoji": "<:MangaDex:682246635593400364>",
        "link": "mangadex.org"
    }
]}}

{set;~embed;
    author.name:{get;~author};
    title:{get;~title};
    description:{newline}{foreach;~link;{func.getLinks};[{jget;~link;emoji}]({get;~{jget;~link;name}}){space}};
    thumbnail.url:{get;~image};
    color:{func.getOrNull;{get;~color};#000000};
}
{if;{get;~description};!=;{null};
    {push;~embed;
        fields.name:Description;
        fields.value:{get;~description};
        fields.inline:true
    }
}

{if;{get;~webhook};==;{null};
    {embed;{apply;embedbuild;{get;~embed}}};
    {webhook;{get;~id};{get;~key};{flag;c};{apply;embedbuild;{get;~embed}}}
}