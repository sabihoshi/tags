{set;~webhook;{flag;w}}
{set;~id;{shift;{regexmatch;{get;~webhook};/\d{17,20}/}}}
{set;~key;{shift;{regexmatch;{get;~webhook};/[\w-]+$/}}}

{set;~embed;["author.name:{username}", "author.icon_url:{useravatar}"]}

{set;~flags;{j;[
    {"flag": "t", "key": "title"},
    {"flag": "d", "key": "description"},
    {"flag": "i", "key": "thumbnail.url"}
]}}
{foreach;~flag;~flags;
    {if;{flagset;{jget;~flag;flag}};
        {push;~embed;{jget;~flag;key}:{flag;{jget;~flag;flag}}}
    }
}

"[<:Twitter:682246371079880730>](https://twitter.com/kami_shun0505) [<:EHentai:682301919200673811>](https://e-hentai.org/g/1503018/2db137502d/) [<:Nhentai:682301919158730771>](https://nhentai.net/g/288477/)"

{delete}
{webhook;{get;~id};{get;~key};{flag;_};{apply;embedbuild;{get;~embed}}}