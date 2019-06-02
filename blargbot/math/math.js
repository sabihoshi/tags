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

{//; A function to fix exponents as changed by evil JavaScript. }
{function;exponent;{trim;
    {inject;
        {regexreplace;{params};/(?:(\d+)\.(\d*)|\.?(\d+))e([-+])?(\d+)/g;
            {lb}set{semi}~nano{semi}{lb}bool{semi}$4{semi}=={semi}-{rb}{rb}{lb}set{semi}~original{semi}$&{rb}{lb}set{semi}~temp{semi}{lb}if{semi}{lb}get{semi}~nano{rb}{semi}{lb}repeat{semi}0{semi}$5{rb}$1$2$3{semi}$1$2$3{lb}repeat{semi}0{semi}$5{rb}{rb}{rb}{lb}if{semi}{lb}logic{semi}&&{semi}{lb}get{semi}~nano{rb}{semi}{lb}regextest{semi}{lb}get{semi}~temp{rb}{semi}/^[+-]?\d*$/{rb}{rb}{semi}{lb}join{semi}{lb}concat{semi}{lb}slice{semi}{lb}split{semi}{lb}get{semi}~temp{rb}{semi}{rb}{semi}0{semi}1{rb}{semi}.{semi}{lb}slice{semi}{lb}split{semi}{lb}get{semi}~temp{rb}{semi}{rb}{semi}1{rb}{rb}{semi}{rb}{semi}{lb}get{semi}~temp{rb}{rb}
        }
    }
}}

{//; A function for debug logging. }
{function;debug;
    {void;{increment;~s}}
    {if;{get;~last_{get;~depth}};!=;{get;~f_{get;~depth}};
        {push;~debug_{get;~depth};{repeat;​{space}​;{math;-;2;{length;{get;~s}}}}{get;~s}: {if;{flagset;d};{func.flip;{get;~f_{get;~depth}}};{get;~f_{get;~depth}}}}
        {set;~last_{get;~depth};{get;~f_{get;~depth}}}
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
{if;{regextest;{args};/argsarray|argslength|commandname|iscc|lb|rb|semi|zws|abs|args|base|base64decode|base64encode|bool|brainfuck|capitalize|choose|clean|color|\/\/|commit|debug|decrement|delete|embed|embedbuild|emoji|fallback|file|for|function|get|hash|htmldecode|htmlencode|if|increment|indexof|length|lock|logic|lower|math|max|md5|min|newline|numformat|pad|parsefloat|parseint|randchoose|randint|randstr|realpad|regexreplace|regexsplit|regextest|repeat|replace|request|return|reverse|rollback|round|rounddown|roundup|set|shuffle|sleep|space|substring|switch|throw|trim|unindent|upper|uridecode|uriencode|void|while|apply|concat|filter|foreach|isarray|join|jsonset|pop|push|regexmatch|shift|slice|sort|splice|split|dump|exec|execcc|flag|flagset|inject|lang|modlog|nsfw|output|pardon|prefix|quiet|reason|subtagexists|suppresslookup|timer|waitmessage|waitreaction|warn|warnings|ban|channelcategories|channelcategory|channelid|channeliscategory|channelisnsfw|channelistext|channelisvoice|channelname|channelpos|channels|channeltype|dm|edit|emojis|guildbans|guildcreatedat|guildicon|guildid|guildmembers|guildname|guildownerid|guildsize|isstaff|json|jsonget|jsonstringify|kick|messageattachments|messageedittime|messageembeds|messageid|messagesender|messagetext|messagetime|randuser|reactadd|reactlist|reactremove|reactremoveall|roleadd|rolecolor|rolecreate|roledelete|roleid|rolemembers|rolemention|rolename|roleremove|roles|rolesetcolor|rolesetmentionable|rolesetname|rolesize|send|slowmode|unban|useravatar|usercreatedat|userdiscrim|usergame|usergametype|userhasrole|userid|userisbot|userjoinedat|usermention|username|usernick|userroles|usersetnick|userstatus|usertimezone|webhook/g};
    {return;false}
}

{//; Initialization }
{if;{get;~depth};==;;{set;~depth;0}}
{if;{get;~inputs};==;;{set;~inputs;[]}}
{if;{get;~debugs};==;;{set;~debugs;[]}}
{set;~debug_{get;~depth};[]}
{push;~inputs;{args}}
{set;~f_{get;~depth};{trim;{regexreplace;{args};/^(.*?)(?:\s+-[vnd=].*|$)$/i;$1}}}
{set;~last_{get;~depth};{get;~f_{get;~depth}}}
{set;~loops;0}

{//; Convert variables }
{if;{flagset;n};
    {set;~vars;{split;{flag;n};|}}
    {foreach;~var;~vars;
        {set;~f_{get;~depth};{inject;{regexreplace;{trim;{get;~var}};/([A-Z])=(.+)/g;{lb}regexreplace{semi}{get;~f_{get;~depth}}{semi}/$1/g{semi}($2){rb}}}}
    }
    {set;~s;-1}
    {func.debug}
}

{//; Use point or comma for decimals. }
{if;{flagset;d};
    {set;~f_{get;~depth};{func.flip;{get;~f_{get;~depth}}}}
}

{//; Calculate equality }
{if;{flagset;=};
    {set;~equal_{get;~depth};{trim;
        {void;{increment;~depth}}
        {set;~input;{regexreplace;{args};/^(?:.*?\s+)-=(.+?)(?:\s+-[vnd].*|$)/i;$1}{space}{if;{flagset;d};-d}{space}{if;{flagset;n};-n {flag;n}}}
        {exec;math;{get;~input}}
        {void;{decrement;~depth}}
    }}
}

{while;{logic;&&;{logic;!;{regextest;{get;~f_{get;~depth}};/^[+-]?(?:\d+\.\d*|\.?\d+)$|NaN|`(?:Not a number|Too many loops)`/}};{bool;{get;~lastEval_{get;~depth}};!=;{get;~f_{get;~depth}}}};
    {set;~lastEval_{get;~depth};{get;~f_{get;~depth}}}
    {void;{increment;~loops}}
    {set;~s;0}

    {//; 1: Spaces, newlines, and commas. }
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/[\s,]/g;}}
    {func.debug}

    {//; 2: Words conversion. }
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/plus|add/ig;+}}
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/minus|subtract/ig;-}}
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/divided?(?:by|)/ig;/}}
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/multipl(?:y|ied)(?:by|)|times?/ig;*}}
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/(?:to|)(?:the|)powerof|raised(?:to|by|)/ig;^}}
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/mod(?:ulo)/ig;%}}
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/factor(?:ial|)(?:of|by|)/ig;!}}
    {func.debug}

    {//; 2-3: Fix sign convention. }
    {func.whileregex;~f_{get;~depth};+;/--|\+\+/g}
    {func.whileregex;~f_{get;~depth};-;/-\+|\+-/g}

    {//; 4: Exponents }
    {set;~f_{get;~depth};{func.exponent;{get;~f_{get;~depth}}}}
    {func.debug}

    {//; 5: Convert constants. }
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/(?:Math\.|)PI/ig;3.141592653589793}}
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/(?:Math\.|)E/ig;2.718281828459045}}
    {func.debug}

    {//; 6: Math.sqrt(x)
     //     Math.cbrt(x)
     //     Math.root(x,y)
     //     Math.pow(x,y) }
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/(?:Math\.|)Sqrt\((-?(?:\d+\.\d*|\.?\d+))\)/ig;(($1)^(0.5))}}
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/(?:Math\.|)Cbrt\((-?(?:\d+\.\d*|\.?\d+))\)/ig;(($1)^(0.3333333333333333))}}
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/(?:Math\.|)Root\(([+-]?(?:\d+\.\d*|\.?\d+))\|([+-]?(?:\d+\.\d*|\.?\d+))\)/ig;(($1)^(1/$2))}}
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/(?:Math\.|)Pow\(([+-]?(?:\d+\.\d*|\.?\d+))\|([+-]?(?:\d+\.\d*|\.?\d+))\)/ig;(($1)^($2))}}
    {func.debug}

    {//; 7: Solve x! }
    {func.whileregexinject;~f_{get;~depth};
        {lb}lb{rb}set{lb}semi{rb}~output{lb}semi{rb}1{lb}rb{rb}{lb}lb{rb}set{lb}semi{rb}~continue{lb}semi{rb}true{lb}rb{rb}{lb}lb{rb}set{lb}semi{rb}~i{lb}semi{rb}{lb}lb{rb}math{lb}semi{rb}+{lb}semi{rb}$1{lb}semi{rb}1{lb}rb{rb}{lb}rb{rb}{lb}lb{rb}while{lb}semi{rb}{lb}lb{rb}get{lb}semi{rb}~continue{lb}rb{rb}{lb}semi{rb}{lb}lb{rb}void{lb}semi{rb}{lb}lb{rb}increment{lb}semi{rb}~loops{lb}rb{rb}{lb}rb{rb}{lb}lb{rb}set{lb}semi{rb}~output{lb}semi{rb}{lb}lb{rb}math{lb}semi{rb}*{lb}semi{rb}{lb}lb{rb}get{lb}semi{rb}~output{lb}rb{rb}{lb}semi{rb}{lb}lb{rb}decrement{lb}semi{rb}~i{lb}rb{rb}{lb}rb{rb}{lb}rb{rb}{lb}lb{rb}if{lb}semi{rb}{lb}lb{rb}get{lb}semi{rb}~output{lb}rb{rb}{lb}semi{rb}=={lb}semi{rb}Infinity{lb}semi{rb}{lb}lb{rb}set{lb}semi{rb}~continue{lb}semi{rb}false{lb}rb{rb}{lb}rb{rb}{lb}lb{rb}if{lb}semi{rb}{lb}lb{rb}get{lb}semi{rb}~i{lb}rb{rb}{lb}semi{rb}<={lb}semi{rb}1{lb}semi{rb}{lb}lb{rb}set{lb}semi{rb}~continue{lb}semi{rb}false{lb}rb{rb}{lb}rb{rb}{lb}rb{rb}{lb}lb{rb}get{lb}semi{rb}~output{lb}rb{rb};
        /(\d+\.\d*|\.?\d+)!/g
    }

    {//; 8: Solve ^ }
    {func.whileregexinject;~f_{get;~depth};
        {lb}lb{rb}math{lb}semi{rb}^{lb}semi{rb}$1{lb}semi{rb}$3{lb}rb{rb};
        /(\d+\.\d*|\.?\d+)(\^|\*\*)([+-]?(?:\d+\.\d*|\.?\d+))(?!.*(\d+\.\d*|\.?\d+)(\^|\*\*)([+-]?(?:\d+\.\d*|\.?\d+)))/g;
        /\((-?(?:\d+\.\d*|\.?\d+))\)(\^|\*\*)\(([+-]?(?:\d+\.\d*|\.?\d+))\)(?!.*\((-?(?:\d+\.\d*|\.?\d+))\)(\^|\*\*)\(([+-]?(?:\d+\.\d*|\.?\d+))\))/g;
        /\((-?(?:\d+\.\d*|\.?\d+))\)(\^|\*\*)([+-]?(?:\d+\.\d*|\.?\d+))(?!.*\((-?(?:\d+\.\d*|\.?\d+))\)(\^|\*\*)([+-]?(?:\d+\.\d*|\.?\d+)))/g;
        /(\d+\.\d*|\.?\d+)(\^|\*\*)\(([+-]?(?:\d+\.\d*|\.?\d+))\)(?!.*(\d+\.\d*|\.?\d+)(\^|\*\*)\(([+-]?(?:\d+\.\d*|\.?\d+))\))/g
    }


    {//; 9: Solve %, *, /, ^ }
    {func.whileregexinject;~f_{get;~depth};
        {lb}lb{rb}math{lb}semi{rb}$2{lb}semi{rb}$1{lb}semi{rb}$3{lb}rb{rb};
        /(\d+\.\d*|\.?\d+)([%*/])([+-]?(?:\d+\.\d*|\.?\d+))/g;
        /\((-?(?:\d+\.\d*|\.?\d+))\)([%*/])\(([+-]?(?:\d+\.\d*|\.?\d+))\)/g;
        /\((-?(?:\d+\.\d*|\.?\d+))\)([%*/])([+-]?(?:\d+\.\d*|\.?\d+))/g;
        /(\d+\.\d*|\.?\d+)([%*/])\(([+-]?(?:\d+\.\d*|\.?\d+))\)/g
    }

    {//; 10-11: Resolve missing * in operations. }
    {func.whileregex;~f_{get;~depth};$1$3*$2$4;
        /(\d)(\()|(\))(\d)/g
    }
    {func.whileregex;~f_{get;~depth};($1*$2);
        /(\d+\.\d*|\.?\d+)\((-?(?:\d+\.\d*|\.?\d+))\)/g;
        /\((-?(?:\d+\.\d*|\.?\d+))\)(\d+\.\d*|\.?\d+)/g;
        /\((-?(?:\d+\.\d*|\.?\d+))\)\((-?(?:\d+\.\d*|\.?\d+))\)/g
    }

    {//; 12: Resolve (x) -> x }
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/\(([+-]?)(\d+\.\d*|\.?\d+)\)/g;$1$2}}
    {func.debug}

    {//; 13: Resolve [%*/^+-](x) -> [%*/^+-]x}
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/([%*/^+-])\(([+-]?(?:\d+\.\d*|\.?\d+))\)/g;$1$2}}
    {func.debug}

    {//; 14: Resolve x) -> x, (x -> x }
    {set;~f_{get;~depth};{regexreplace;{get;~f_{get;~depth}};/^[(]*([+-]?(?:\d+\.\d*|\.?\d+))[)]*$/g;$1}}
    {func.debug}

    {//; 15: Solve +, - }
    {func.whileregexinject;~f_{get;~depth};
        $1({lb}lb{rb}math{lb}semi{rb}$3{lb}semi{rb}$2{lb}semi{rb}$4{lb}rb{rb});
        /(^|[+-])(-?(?:\d+\.\d*|\.?\d+))([+-])(-?(?:\d+\.\d*|\.?\d+))(?=[+-]|$)/g;
        /(^|[+-])\((-?(?:\d+\.\d*|\.?\d+))\)([+-])\((-?(?:\d+\.\d*|\.?\d+))\)/g;
        /(^|[+-])\((-?(?:\d+\.\d*|\.?\d+))\)([+-])(-?(?:\d+\.\d*|\.?\d+))(?=[+-]|$)/g;
        /(^|[+-])(-?(?:\d+\.\d*|\.?\d+))([+-])\((-?(?:\d+\.\d*|\.?\d+))\)(?=[+-]|$)/g;
        /()\(([+-]?(?:\d+\.\d*|\.?\d+))([+-])([+-]?(?:\d+\.\d*|\.?\d+))\)/g
    }
}
{if;{logic;!;{regextest;{get;~f_{get;~depth}};/^[+-]?(?:\d+\.\d*|\.?\d+)(?:e(([-+])?\d+)|)$|Infinity/}};
    {set;~result;`Invalid expression`};
    {if;{flagset;=};
        {if;{flagset;d};{set;~equal_{get;~depth};{func.flip;{get;~equal_{get;~depth}}}}}
        {set;~result;{trim;
            {logic;||;
                {bool;==;
                    {if;{regextest;{get;~f_{get;~depth}};/Infinity/};Infinity;{func.exponent;{get;~f_{get;~depth}}}};
                    {get;~equal_{get;~depth}}
                };
                {bool;==;
                    {if;{regextest;{get;~f_{get;~depth}};/Infinity/};Infinity;{parsefloat;{func.exponent;{get;~f_{get;~depth}}}}};
                    {get;~equal_{get;~depth}}
                }
            }
        }};
        {set;~result;{if;{regextest;{get;~f_{get;~depth}};/Infinity/};Infinity;{parsefloat;{func.exponent;{get;~f_{get;~depth}}}}}}
    }
    {push;~debugs;{trim;
        ```cs{newline}{clean;{join;{get;~debug_{get;~depth}};{newline}}}{newline;2} A: {if;{logic;&&;{flagset;d};{logic;!;{flagset;=}}};{func.flip;{get;~result}};{get;~result}}{newline}Repeats: {get;~loops}```
    }}
}}{if;{flagset;v};
    {join;{get;~debugs};};
    {if;{logic;&&;{flagset;d};{logic;!;{flagset;=}}};{func.flip;{get;~result}};{get;~result}}
}