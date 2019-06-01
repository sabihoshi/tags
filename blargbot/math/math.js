{void;
{//; A function where it will recursively call itself as long as the regex provided is true. }
{function;whileregex;
    {set;~o;{increment;~s}}
    {set;~check;[]}
    {set;~i;{params;0}}{set;~c;{params;1}}{set;~r;{slice;{paramsarray};2}}
    {foreach;~regex;~r;
        {void;{increment;~loops}}
        {push;~check;{lb}regextest{semi}{lb}get{semi}{lb}get{semi}~i{rb}{rb}{semi}{get;~regex}{rb}}
    }
    {if;{inject;{lb}logic{semi}||{semi}{join;{get;~check};{semi}}{rb}};
    {while;{inject;{lb}logic{semi}||{semi}{join;{get;~check};{semi}}{rb}};
        {void;{increment;~loops}}
        {foreach;~regex;~r;
            {void;{increment;~loops}}
            {set;{get;~i};{trim;
                {func.exponent;
                    {inject;
                        {lb}regexreplace{semi}{get;{get;~i}}{semi}{get;~regex}{semi}{get;~c}{rb}
                    }
                }
            }}
            {func.debug}
            {set;~s;{get;~o}}
        }
    }}
}

{//; A function to retroactively recursively call the regexes provided and apply the replace rule. }
{function;whileregexinject;
    {set;~o;{increment;~s}}
    {set;~check;[]}
    {set;~i;{params;0}}{set;~c;{params;1}}{set;~r;{slice;{paramsarray};2}}
    {join;{get;~r}}
    {foreach;~regex;~r;
        {void;{increment;~loops}}
        {push;~check;{lb}regextest{semi}{lb}get{semi}{lb}get{semi}~i{rb}{rb}{semi}{get;~regex}{rb}}
    }
    {if;{inject;{lb}logic{semi}||{semi}{join;{get;~check};{semi}}{rb}};
    {while;{inject;{lb}logic{semi}||{semi}{join;{get;~check};{semi}}{rb}};
        {void;{increment;~loops}}
        {foreach;~regex;~r;
            {void;{increment;~loops}}
            {set;{get;~i};{trim;
                {func.exponent;
                    {inject;{inject;
                        {lb}regexreplace{semi}{get;{get;~i}}{semi}{get;~regex}{semi}{get;~c}{rb}
                    }}
                }
            }}
            {func.debug}
            {set;~s;{get;~o}}
        }
    }}
}

{//; A function to fix exponents as changed by JavaScript. }
{function;exponent;{trim;
    {inject;
        {regexreplace;{params};/(?:(\d+)\.\d*|\.?(\d+))e(([-+])?\d+)/g;
            {lb}realpad{semi}$1$2{semi}{lb}math{semi}+{semi}0$3{semi}1{rb}{semi}0{semi}{lb}if{semi}$4{semi}=={semi}-{semi}left{semi}right{rb}{rb}
        }
    }
}}

{//; A function for debug logging. }
{function;debug;
    {void;{increment;~s}}
    {if;{get;~last};!=;{get;~f};
        {push;~debug;{repeat;​{space}​;{math;-;2;{length;{get;~s}}}}{get;~s}: {if;{flagset;d};{func.flip;{get;~f}};{get;~f}}}
        {set;~last;{get;~f}}
    }
}

{//; A function to flip the delimiters. }
{function;flip;{trim;
    {set;~output;{regexreplace;{params};/\./g;$DOT$}}
    {set;~output;{regexreplace;{get;~output};/,/g;.}}
    {set;~output;{regexreplace;{get;~output};/\$DOT\$/g;,}}
    {get;~output}
}}

{//; Make sure to disable other subtags. }
{if;{regextest;{args};/argsarray|argslength|commandname|iscc|lb|rb|semi|zws|abs|args|base|base64decode|base64encode|bool|brainfuck|capitalize|choose|clean|color|\/\/|commit|debug|decrement|delete|embed|embedbuild|emoji|fallback|file|for|function|get|hash|htmldecode|htmlencode|if|increment|indexof|length|lock|logic|lower|math|max|md5|min|newline|numformat|pad|parsefloat|parseint|randchoose|randint|randstr|realpad|regexreplace|regexsplit|regextest|repeat|replace|request|return|reverse|rollback|round|rounddown|roundup|set|shuffle|sleep|space|substring|switch|throw|time|trim|unindent|upper|uridecode|uriencode|void|while|apply|concat|filter|foreach|isarray|join|jsonset|pop|push|regexmatch|shift|slice|sort|splice|split|dump|exec|execcc|flag|flagset|inject|lang|modlog|nsfw|output|pardon|prefix|quiet|reason|subtagexists|suppresslookup|timer|waitmessage|waitreaction|warn|warnings|ban|channelcategories|channelcategory|channelid|channeliscategory|channelisnsfw|channelistext|channelisvoice|channelname|channelpos|channels|channeltype|dm|edit|emojis|guildbans|guildcreatedat|guildicon|guildid|guildmembers|guildname|guildownerid|guildsize|isstaff|json|jsonget|jsonstringify|kick|messageattachments|messageedittime|messageembeds|messageid|messagesender|messagetext|messagetime|randuser|reactadd|reactlist|reactremove|reactremoveall|roleadd|rolecolor|rolecreate|roledelete|roleid|rolemembers|rolemention|rolename|roleremove|roles|rolesetcolor|rolesetmentionable|rolesetname|rolesize|send|slowmode|unban|useravatar|usercreatedat|userdiscrim|usergame|usergametype|userhasrole|userid|userisbot|userjoinedat|usermention|username|usernick|userroles|usersetnick|userstatus|usertimezone|webhook/g};
    {return;false}
}

{//; Initialization }
{set;~debug;[]}
{set;~f;{flag;_}}
{set;~last;{get;~f}}
{set;~loops;0}

{//; Use point or comma for decimals. }
{if;{flagset;d};
    {set;~f;{func.flip;{get;~f}}}
}

{//; Convert variables }
{if;{flagset;n};
    {set;~vars;{split;{flag;n};,}}
    {foreach;~var;~vars;
        {set;~f;{inject;{regexreplace;{trim;{get;~var}};/([A-Z])=([+-]?(?:\d+\.\d*|\.?\d+))/g;{lb}regexreplace{semi}{get;~f}{semi}/$1/g{semi}$2{rb}}}}
    }
    {set;~s;-1}
    {func.debug}
}

{while;{logic;&&;{logic;!;{regextest;{get;~f};/^[+-]?(?:\d+\.\d*|\.?\d+)$|NaN|`(?:Not a number|Too many loops)`/}};{bool;{get;~lastEval};!=;{get;~f}}};
    {set;~lastEval;{get;~f}}
    {void;{increment;~loops}}
    {set;~s;0}
    {//; 1: Spaces, newlines, and commas. }
    {set;~f;{regexreplace;{get;~f};/[\s,]/g;}}
    {func.debug}

    {//; 2: Words conversion. }
    {set;~f;{regexreplace;{get;~f};/plus|add/ig;+}}
    {set;~f;{regexreplace;{get;~f};/minus|subtract/ig;-}}
    {set;~f;{regexreplace;{get;~f};/divided?(?:by|)/ig;/}}
    {set;~f;{regexreplace;{get;~f};/multipl(?:y|ied)(?:by|)/ig;/}}
    {set;~f;{regexreplace;{get;~f};/mod(?:ulo)/ig;%}}
    {func.debug}

    {//; 3: Resolve [%*/^+=](x) -> [%*/^+=]x}
    {set;~f;{regexreplace;{get;~f};/([%*/^+=])\(([+-]?(?:\d+\.\d*|\.?\d+))\)/g;$1$2}}
    {func.debug}

    {//; 4: Resolve x) -> x, (x -> x }
    {set;~f;{regexreplace;{get;~f};/^[(]*([+-]?(?:\d+\.\d*|\.?\d+))[)]*$/g;$1}}
    {func.debug}

    {//; 5: Resolve (x) -> x }
    {set;~f;{regexreplace;{get;~f};/\(([+-]?(?:\d+\.\d*|\.?\d+))\)/g;$1}}
    {func.debug}

    {//; 6-7: Fix sign convention. }
    {func.whileregex;~f;+;/--|\+\+/g}
    {func.whileregex;~f;-;/-\+|\+-/g}

    {//; 8: Exponents }
    {set;~f;{func.exponent;{get;~f}}}
    {func.debug}

    {//; 9: Convert constants. }
    {set;~f;{regexreplace;{get;~f};/(?:Math\.|)PI/ig;3.141592653589793}}
    {set;~f;{regexreplace;{get;~f};/(?:Math\.|)E/ig;2.718281828459045}}
    {func.debug}

    {//; 10: Math.sqrt(x)
     //      Math.cbrt(x)
     //      Math.root(x,y)
     //      Math.pow(x,y) }
    {set;~f;{regexreplace;{get;~f};/(?:Math\.|)Sqrt\((-?(?:\d+\.\d*|\.?\d+))\)/ig;(($1)^(0.5))}}
    {set;~f;{regexreplace;{get;~f};/(?:Math\.|)Cbrt\((-?(?:\d+\.\d*|\.?\d+))\)/ig;(($1)^(0.3333333333333333))}}
    {set;~f;{regexreplace;{get;~f};/(?:Math\.|)Root\(([+-]?(?:\d+\.\d*|\.?\d+)),([+-]?(?:\d+\.\d*|\.?\d+))\)/ig;(($1)^(1/$2))}}
    {set;~f;{regexreplace;{get;~f};/(?:Math\.|)Pow\(([+-]?(?:\d+\.\d*|\.?\d+)),([+-]?(?:\d+\.\d*|\.?\d+))\)/ig;(($1)^($2))}}
    {func.debug}

    {//; 11: Resolve missing * in operations. }
    {func.whileregex;~f;$1$3*$2$4;
        /(\d)(\()|(\))(\d)/g
    }
    {func.whileregex;~f;($1*$2);
        /(\d+\.\d*|\.?\d+)\((-?(?:\d+\.\d*|\.?\d+))\)/g;
        /\((-?(?:\d+\.\d*|\.?\d+))\)(\d+\.\d*|\.?\d+)/g;
        /\((-?(?:\d+\.\d*|\.?\d+))\)\((-?(?:\d+\.\d*|\.?\d+))\)/g
    }

    {//; 12: Solve %, *, /, ^ }
    {func.whileregexinject;~f;
        {lb}lb{rb}math{lb}semi{rb}$2{lb}semi{rb}$1{lb}semi{rb}$3{lb}rb{rb};
        /(\d+\.\d*|\.?\d+)([%*/^])([+-]?(?:\d+\.\d*|\.?\d+))/g;
        /\((-?(?:\d+\.\d*|\.?\d+))\)([%*/^])\(([+-]?(?:\d+\.\d*|\.?\d+))\)/g;
        /\((-?(?:\d+\.\d*|\.?\d+))\)([%*/^])([+-]?(?:\d+\.\d*|\.?\d+))/g;
        /(\d+\.\d*|\.?\d+)([%*/^])\(([+-]?(?:\d+\.\d*|\.?\d+))\)/g
    }

    {//; 13: Solve +, - }
    {func.whileregexinject;~f;
        $1({lb}lb{rb}math{lb}semi{rb}$3{lb}semi{rb}$2{lb}semi{rb}$4{lb}rb{rb});
        /(^|[^%*/^])(-?(?:\d+\.\d*|\.?\d+))([+-])(-?(?:\d+\.\d*|\.?\d+))(?=(?![%*/^])|$)/g;
        /(^|[^%*/^])\((-?(?:\d+\.\d*|\.?\d+))\)([+-])\((-?(?:\d+\.\d*|\.?\d+))\)/g;
        /(^|[^%*/^])\((-?(?:\d+\.\d*|\.?\d+))\)([+-])(-?(?:\d+\.\d*|\.?\d+))(?=(?![%*/^])|$)/g;
        /(^|[^%*/^])(-?(?:\d+\.\d*|\.?\d+))([+-])\((-?(?:\d+\.\d*|\.?\d+))\)(?=(?![%*/^])|$)/g
    }
}
{if;{logic;||;{logic;!;{regextest;{get;~f};/^[+-]?(?:\d+\.\d*|\.?\d+)$|NaN|`(?:Not a number|Too many loops)`/}};{bool;{parsefloat;{get;~f}};==;NaN}};
    {set;~result;`Invalid expression`};
    {set;~result;{parsefloat;{get;~f}}}
}}
{if;{flagset;v};
    ```cs{newline}{clean;{join;{get;~debug};{newline}}}{newline;2} A: {if;{flagset;d};{func.flip;{get;~result}};{get;~result}}{newline}Repeats: {get;~loops}```;
    {if;{flagset;d};{func.flip;{get;~result}};{get;~result}}
}