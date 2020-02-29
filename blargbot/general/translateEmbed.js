{set;~input;{args}}
{set;~embed;[]}

{//; Usage: <field_name> <input_source>}
{fallback;}
{function;findAndAdd;
    {set;~item;{jget;{params;1};{params;0}}}
    {if;{get;~item};!=;{null};
        {push;~embed;{params;0}:{get;~item}}
    }
}


{//; Find the arguments and add them to the embed array}
{set;~embedArguments;title;description;url;color;timestamp;footer.icon_url;footer.text;thumbnail.url;image.url;author.name;author.url;author.icon_url}
{foreach;~argument;~embedArguments;
    {func.findAndAdd;{get;~argument};~input}
}

{//; Find fields and add them one by one}
{set;~fieldArguments;name;value;inline}
{foreach;~field;{jget;~input;fields};
    {foreach;~argument;~fieldArguments;
        {func.findAndAdd;{get;~argument};~input}
    }
}

{void;{send;{channelid};{jget;~input;content}a;{apply;embedbuild;{get;~embed}}}}