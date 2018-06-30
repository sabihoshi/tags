b!snippet {//;Separating the flags}
{set;~valid_flags;flag1;flag2;flag3}
{set;~flags;{split;{args};-}}
{set;~index;0}
{repeat;
    {switch;{indexof;{get;~valid_flags};{substring;{get;~flags;{get;~index}};0;1}};
        0;
            {//;reason}
            {set;~reason;
                {substring;{get;~flags;{get;~index}};1}
            };
        1;
            {//;weight}
            {set;~weight;
                {substring;{get;~flags;{get;~index}};1}
            };
        2;
            {//;time}
            {set;~time;
                {substring;{get;~flags;{get;~index}};1}
            };
        {void}
    }
    {void;{increment;~index}};
    {length;{get;~flags}}
} -t Flag Parser (Customizable) -d This creates a command that parses flags by `flag1` `flag2` `flag3`