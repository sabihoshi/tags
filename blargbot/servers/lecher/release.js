{set;~webhook;{flag;w}}
{set;~id;{shift;{regexmatch;{get;~webhook};/\d{17,20}/}}}
{set;~key;{shift;{regexmatch;{get;~webhook};/[\w-]+$/}}}

{set;~embed;["author.name:{username}", "author.icon_url:{useravatar}"]}

{function;getOrNull;
    {if;{get;{params;0}};==;{null};{params;1};{get;{params;0}}}
}

{//; Release details }
{set;~title;{flag;_}}
{set;~description;{flag;d}}
{set;~image;{flag;i}}

{//; Links }
{set;~twitter;{flag;t}}
{set;~e-hentai;{flag;e}}
{set;~nhentai;{flag;n}}

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
    }
]}}

{set;~embed;
    title:{get;~title};
    description:{foreach;~link;~links;[{jget;~link;emoji}]({get;~{jget;~link;name}}){space}};
    thumbnail.url:{get;~image};
    color:{func.getOrNull;{get;~color};#000000};

    fields.name:Description;
    fields.value:{get;~description};
    fields.inline:true
}

{webhook;{get;~id};{get;~key};{flag;c};{apply;embedbuild;{get;~embed}}}