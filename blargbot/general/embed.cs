{//;Set the Raw Display Language to #CSHARP (SEE I'M USING IT TITAN!):}
{lang;csharp}

{//;Set the Embed's color. If the user's name is not colored, pick a random one:}
{set;~eColor;[]}
{set;~roles;{roles;{userid}}}
{foreach;~color;{get;~roles};
  {if;{rolecolor;{get;~color}};!=;000000;
    {push;{get;~eColor};{rolecolor;{get;~color}}}
  }
}
{if;{length;{get;~eColor}};==;0;
  {set;~eColor;{randstr;0123456789abcdef;6}}
}

{//;Help message if no arguments, displaying the correct Prefix depending on Tag or CC usage:}
{if;{iscc};==;true;
  {set;~prefixCN;{prefix}{commandname}};
  {set;~prefixCN;{prefix}t {commandname}}
}
{if;{argslength};==;0;
  {set;~eArgs;
__**Usage Example**__:
{space;3}`{get;~prefixCN} Test Text! -d -t -n`
{zws}
__**Flags**__:
{space;3}`-d` - Deletes invoking Message.
{space;3}`-i` - Add an Image (requires Link).
{space;3}`-p` - Add a Thumbnail (requires Link).
{space;3}`-c` - Custom Embed Color (HEX or Name).
{space;3}`-t` - Include a TimeStamp.
{space;3}`-n` - Remove User Name.
{space;3}`-j` - Return the JSON build instead.
{zws}
__**Use it as a Custom Command**__:
```{prefix}cc set embed {lb}exec{semi}embed{semi}{lb}args{rb}{rb}```
  }
  {set;~aName;{usernick} - Help};
  {set;~aName;{usernick}}
  {//;Find, execute and remove valid Flags:}
  {set;~eArgs;{regexreplace;{args};/\-d|\-t|\-n|\-j/g;}}
  {set;~flags;i;p;c}
  {foreach;~i;~flags;{if;{flagset;{get;~i}};{set;~eArgs;{replace;{get;~eArgs};-{get;~i} {flag;{get;~i}};}}}}
}
{//;Display the Embed:}
{set;~r;{buildembed;
    color:{if;{flagset;c};{flag;c};{get;~eColor;0}};
    author.name:{get;~aName};
    author.url:https://canary.discordapp.com/users/{userid};
    author.icon_url:{useravatar};
    description:{get;~eArgs};
    {if;{flagset;p};thumbnail.url:{flag;p}};
    {if;{flagset;i};image.url:{flag;i}};
    {if;{flagset;t};timestamp:{time}}
}}{if;{flagset;j};{get;~r};{embed;{get;~r}}}

plz t edit test56 {set;~eArgs;{args}}{set;~flags;i;p;c;d;t;n;j}
{foreach;~i;~flags;{if;{flagset;{get;~i}};{set;~eArgs;{replace;{get;~eArgs};-{get;~i} {flag;{get;~i}};}}{get;~eArgs}{newline}}}