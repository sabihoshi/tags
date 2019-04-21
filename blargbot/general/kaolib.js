{void;{//; Credits to stupid cat#8160 for the base for libraries }
{if;{argslength};>;0;
  {if;{args;0};==;none;
    {set;~kl_prefix;};
    {set;~kl_prefix;{args;0}}
  };
  {set;~kl_prefix;kl_}
}
{func;_//;
  {//; Usage: {func._//;name;params;description} }
  {if;{commandname};==;kaolib;
    {if;{get;~kl_docs};==;;{set;~kl_docs;[]}}
    {if;{get;~kl_funcs};==;;{set;~kl_funcs;[]}}
    {push;~kl_docs;
<h4 id="{params;0}"><a href="#{params;0}">🔗</a> func.{get;~kl_prefix}{params;0}</h4>
> `{if;{isarray;{params;1}};{join;{params;1};` `};{params;1}}`

{params;2;n}
    }
    {push;~kl_funcs;{regexreplace;{params;0};/[^\w_]/g;}}
  }
}
{func._//;normalize;<string>;Removes accents from `string`.}
{func;{get;~kl_prefix}normalize;{void;{set;~string;{params}}
{set;~map;





["[҉̴̵̶̷̸̡̢̧̨̛̩̣̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̌̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗͛͘͜͟͢͝͞͠͡]",





"À|Á|Â|Ã|Ä|Å|Ấ|Ắ|Ẳ|Ẵ|Ặ|Ầ|Ằ|Ȃ|Ā|Ă|Ą|Ǎ|Ǻ|A̋|Ȁ|A̧|𝐀|𝐴|𝑨|𝖠|𝗔|𝘈|𝘼|𝒜|𝓐|𝔄|𝕬|𝔸|𝙰|Ⓐ|🄐|🅐|🄰|🅰|Ａ|ᴀ|🇦|Ⓐ|Α|₳|ᴀ|Ꭺ|Ǟ|ᗩ|Ä|Ḁ|Ａ|卂|Ă|Ꮧ|Ɐ|Δ|ค|Ⓐ|Ꮬ|Ꭿ|Ą|Д|Ɑ|ꍏ|ᴬ|Λ|ƛ|ᕱ|Թ|ﾑ","Æ|Ǽ","Ç|Ḉ|Ć|Ĉ|Ċ|Č|C̆|Č̣|𝐂|𝐶|𝑪|𝖢|𝗖|𝘊|𝘾|𝒞|𝓒|ℭ|𝕮|ℂ|𝙲|Ⓒ|🄒|🅒|🄲|🅲|Ｃ|ᴄ|🇨|Ⓒ|¢|₵|ᴄ|Ꮯ|Ƈ|ᑕ|Ċ|Ḉ|Ｃ|匚|Č|ፈ|Ɔ|Ć|૮|Σ|Ⓒ|Ꮸ|ℂ|Ϲ|ꉓ|ᶜ|ㄈ|Ƈ|꒝|८|Շ|ᄃ","È|É|Ê|Ë|Ế|Ḗ|Ề|Ḕ|Ḝ|Ȇ|Ē|Ĕ|Ė|Ę|Ě|E̋|Ȅ|Ê̌|Ȩ|Ɛ̧|𝐄|𝐸|𝑬|𝖤|𝗘|𝘌|𝙀|ℰ|𝓔|𝔈|𝕰|𝔼|𝙴|Ⓔ|🄔|🅔|🄴|🅴|Ｅ|ᴇ|🇪|Ⓔ|Є|Ɇ|ᴇ|Ꭼ|Ɛ|Ệ|Ḕ|Ｅ|Ε|乇|Ĕ|Ꮛ|Ǝ|€|ᗴ|Ⓔ|℮|Ǝ|Ξ|Ҽ|ꍟ|ᴱ|Ɛ|Є|ꂅ|૯|Ȝ|Ē","Ì|Í|Î|Ï|Ḯ|Ȋ|Ĩ|Ī|Ĭ|Į|İ|Ǐ|I̋|Ȉ|I̧|Ɨ̧|𝐈|𝐼|𝑰|𝖨|𝗜|𝘐|𝙄|ℐ|𝓘|ℑ|𝕴|𝕀|𝙸|Ⓘ|🄘|🅘|🄸|🅸|Ｉ|Ɪ|🇮|Ⓘ|Ι|Ł|Ɪ|Ꭵ|Í|Ɨ|Ï|Ḭ|Ｉ|丨|Ĩ|I|Ɨ|เ|Ⓘ|ℹ|Î|ꀤ|ᴵ|Ɩ|ɿ|ﾉ","Ð|Ď|Đ|Ḑ|𝐃|𝐷|𝑫|𝖣|𝗗|𝘋|𝘿|𝒟|𝓓|𝔇|𝕯|𝔻|𝙳|Ⓓ|🄓|🅓|🄳|🅳|Ｄ|ᴅ|🇩|Ⓓ|∂|Đ|ᴅ|Ꭰ|Ɖ|ᗪ|Ď|Ḋ|Ｄ|Ď|Ꮄ|๔|Ⓓ|ᗬ|ᕍ|Ժ|ꀸ|ᴰ|Ð|Ɗ|ძ|Ժ|り|໓","Ñ|Ń|Ņ|Ň|N̆|Ǹ|𝐍|𝑁|𝑵|𝖭|𝗡|𝘕|𝙉|𝒩|𝓝|𝔑|𝕹|ℕ|𝙽|Ⓝ|🄝|🅝|🄽|🅽|Ｎ|ɴ|🇳|Ⓝ|И|₦|ɴ|Ꮑ|Ռ|ᑎ|Ń|Ṇ|Ｎ|Η|几|Ń|Ň|ɳ|ภ|Ⓝ|Ɲ|Ŋ|И|Ղ|ꈤ|ᴺ|Л|Ɲ|Ո|Ռ|刀|ຖ","Ò|Ó|Ô|Õ|Ö|Ø|Ố|Ṍ|Ṓ|Ȏ|Ō|Ŏ|Ő|Ơ|Ǒ|Ǿ|Ồ|Ṑ|Ȍ|O̧|𝐎|𝑂|𝑶|𝖮|𝗢|𝘖|𝙊|𝒪|𝓞|𝔒|𝕺|𝕆|𝙾|Ⓞ|🄞|🅞|🄾|🅾|Ｏ|ᴏ|🇴|Ⓞ|Σ|Ø|ᴏ|Ꮎ|Օ|Ö|Ṏ|Ｏ|ㄖ|Ő|Ꭷ|ᗝ|๏|Ⓞ|Ñ|Ơ|Ø|Ф|ꂦ|ᴼ|Ơ|Ծ|૦|の|⊕|໐","Ù|Ú|Û|Ü|Ũ|Ū|Ŭ|Ů|Ű|Ų|Ȗ|Ư|Ǔ|Ǖ|Ǘ|Ǚ|Ǜ|Ứ|Ṹ|Ừ|Ȕ|U̧|𝐔|𝑈|𝑼|𝖴|𝗨|𝘜|𝙐|𝒰|𝓤|𝔘|𝖀|𝕌|𝚄|Ⓤ|🄤|🅤|🅄|🆄|Ｕ|ᴜ|🇺|Ⓤ|Υ|Ʉ|ᴜ|Ʊ|ᑌ|Ü|Ṳ|Ｕ|ㄩ|Ú|Ꮼ|Ữ|Μ|ย|Ⓤ|Ʈ|Ų|Ц|Մ|ꀎ|ᵁ|Ʋ|Մ|ひ|น","Ý|Ŷ|Ÿ|Y̆|Ỳ|Y̌|𝐘|𝑌|𝒀|𝖸|𝗬|𝘠|𝙔|𝒴|𝓨|𝔜|𝖄|𝕐|𝚈|Ⓨ|🄨|🅨|🅈|🆈|Ｙ|ʏ|🇾|Ⓨ|У|Ɏ|ʏ|Ꮍ|Ч|Ÿ|Ẏ|Ｙ|Ү|ㄚ|Ŷ|Ꭹ|ʎ|¥|ყ|Ƴ|Ⓨ|ℵ|ჯ|У|Վ|ꌩ|ᵞ|Ϥ|Վ|ﾘ|Ψ|ฯ","à|á|â|ã|ä|å|ấ|ắ|ẳ|ẵ|ặ|ầ|ằ|ȃ|ā|ă|ą|ǎ|ǻ|a̋|ȁ|a̧|𝐚|𝑎|𝒂|𝖺|𝗮|𝘢|𝙖|𝒶|𝓪|𝔞|𝖆|𝕒|𝚊|ⓐ|⒜|ᵃ|ⓐ|α|₳|ᴀ|ꭺ|ǟ|ᗩ|ä|ḁ|ａ|卂|ă|ꮧ|ɐ|δ|ค|ⓐ|ꮬ|ꭿ|ą|д|ɑ|ꍏ|ᴬ|λ|ƛ|ᕱ|թ|ﾑ","æ|ǽ","ç|ḉ|ć|ĉ|ċ|č|c̆|č̣|𝐜|𝑐|𝒄|𝖼|𝗰|𝘤|𝙘|𝒸|𝓬|𝔠|𝖈|𝕔|𝚌|ⓒ|⒞|ᶜ|ⓒ|¢|₵|ᴄ|ꮯ|ƈ|ᑕ|ċ|ḉ|ｃ|匚|č|ፈ|ɔ|ć|૮|ς|ⓒ|ꮸ|ℂ|ϲ|ꉓ|ᶜ|ㄈ|ƈ|꒝|८|շ|ᄃ","è|é|ê|ë|ế|ḗ|ề|ḕ|ḝ|ȇ|ē|ĕ|ė|ę|ě|e̋|ȅ|ê̌|ȩ|ɛ̧|𝐞|𝑒|𝒆|𝖾|𝗲|𝘦|𝙚|ℯ|𝓮|𝔢|𝖊|𝕖|𝚎|ⓔ|⒠|ᵉ|ⓔ|є|ɇ|ᴇ|ꭼ|ɛ|ệ|ḕ|ｅ|ε|乇|ĕ|ꮛ|ǝ|€|ᗴ|ⓔ|℮|ǝ|ξ|ҽ|ꍟ|ᴱ|ɛ|є|ꂅ|૯|ȝ|ē","ì|í|î|ï|ḯ|ȋ|ĩ|ī|ĭ|į|ı|ǐ|i̋|ȉ|i̧|ɨ̧|𝐢|𝑖|𝒊|𝗂|𝗶|𝘪|𝙞|𝒾|𝓲|𝔦|𝖎|𝕚|𝚒|ⓘ|⒤|ⁱ|ⓘ|ι|ł|ɪ|ꭵ|í|ɨ|ï|ḭ|ｉ|丨|ĩ|ı|ɨ|เ|ⓘ|ℹ|î|ꀤ|ᴵ|ɩ|ɿ|ﾉ|!","ð|ď|đ|ḑ|𝐝|𝑑|𝒅|𝖽|𝗱|𝘥|𝙙|𝒹|𝓭|𝔡|𝖉|𝕕|𝚍|ⓓ|⒟|ᵈ|ⓓ|∂|đ|ᴅ|ꭰ|ɖ|ᗪ|ď|ḋ|ｄ|ď|ꮄ|๔|ⓓ|ᗬ|ᕍ|ժ|ꀸ|ᴰ|ð|ɗ|ძ|ժ|り|໓","ñ|ń|ņ|ň|ŉ|n̆|ǹ|𝐧|𝑛|𝒏|𝗇|𝗻|𝘯|𝙣|𝓃|𝓷|𝔫|𝖓|𝕟|𝚗|ⓝ|⒩|ⁿ|ⓝ|и|₦|ɴ|ꮑ|ռ|ᑎ|ń|ṇ|ｎ|η|几|ń|ň|ɳ|ภ|ⓝ|ɲ|ŋ|и|ղ|ꈤ|ᴺ|л|ɲ|ո|ռ|刀|ຖ","ò|ó|ô|õ|ö|ø|ố|ṍ|ṓ|ȏ|ō|ŏ|ő|ơ|ǒ|ǿ|ồ|ṑ|ȍ|o̧|𝐨|𝑜|𝒐|𝗈|𝗼|𝘰|𝙤|ℴ|𝓸|𝔬|𝖔|𝕠|𝚘|ⓞ|⒪|ᵒ|ⓞ|σ|ø|ᴏ|ꮎ|օ|ö|ṏ|ｏ|ㄖ|ő|ꭷ|ᗝ|๏|ⓞ|ñ|ơ|ø|ф|ꂦ|ᴼ|ơ|ծ|૦|の|⊕|໐","ù|ú|û|ü|ũ|ū|ŭ|ů|ű|ų|ȗ|ư|ǔ|ǖ|ǘ|ǚ|ǜ|ứ|ṹ|ừ|ȕ|u̧|𝐮|𝑢|𝒖|𝗎|𝘂|𝘶|𝙪|𝓊|𝓾|𝔲|𝖚|𝕦|𝚞|ⓤ|⒰|ᵘ|ⓤ|υ|ʉ|ᴜ|ʊ|ᑌ|ü|ṳ|ｕ|ㄩ|ú|ꮼ|ữ|µ|ย|ⓤ|ʈ|ų|ц|մ|ꀎ|ᵁ|ʋ|մ|ひ|น","ý|ÿ|ŷ|y̆|ỳ|y̌|𝐲|𝑦|𝒚|𝗒|𝘆|𝘺|𝙮|𝓎|𝔂|𝔶|𝖞|𝕪|𝚢|ⓨ|⒴|ʸ|ⓨ|у|ɏ|ʏ|ꮍ|ч|ÿ|ẏ|ｙ|ү|ㄚ|ŷ|ꭹ|ʎ|¥|ყ|ƴ|ⓨ|ℵ|ჯ|у|վ|ꌩ|ᵞ|ϥ|վ|ﾘ|ψ|ฯ","Ĝ|Ǵ|Ğ|Ġ|Ģ|Ǧ|𝐆|𝐺|𝑮|𝖦|𝗚|𝘎|𝙂|𝒢|𝓖|𝔊|𝕲|𝔾|𝙶|Ⓖ|🄖|🅖|🄶|🅶|Ｇ|ɢ|🇬|Ⓖ|₲|ɢ|Ꮆ|Ġ|Ḡ|Ｇ|Ğ|Ƃ|Ǥ|Ɠ|ﻮ|Ⓖ|ℊ|Ց|ꁅ|ᴳ|Ɠ|૭|Գ|ム|ງ","ĝ|ǵ|ğ|ġ|ģ|ǧ|𝐠|𝑔|𝒈|𝗀|𝗴|𝘨|𝙜|ℊ|𝓰|𝔤|𝖌|𝕘|𝚐|ⓖ|⒢|ᵍ|ⓖ|₲|ɢ|ꮆ|ġ|ḡ|ｇ|ğ|ƃ|ǥ|ɠ|ﻮ|ⓖ|ℊ|ց|ꁅ|ᴳ|ɠ|૭|գ|ム|ງ","Ĥ|Ħ|Ḫ|Ȟ|Ḩ|𝐇|𝐻|𝑯|𝖧|𝗛|𝘏|𝙃|ℋ|𝓗|ℌ|𝕳|ℍ|𝙷|Ⓗ|🄗|🅗|🄷|🅷|Ｈ|ʜ|🇭|Ⓗ|Н|Ⱨ|ʜ|Ɦ|ᕼ|Ḧ|Ｈ|卄|Ĥ|Ꮒ|Ɥ|Ħ|Ђ|Ⓗ|ዞ|Ᏺ|ɧ|ℍ|Հ|ꃅ|ᴴ|Ӈ|♅|Һ|ん","ĥ|ħ|ḫ|ȟ|ḩ|𝐡|ℎ|𝒉|𝗁|𝗵|𝘩|𝙝|𝒽|𝓱|𝔥|𝖍|𝕙|𝚑|ⓗ|⒣|ʰ|ⓗ|н|ⱨ|ʜ|ɦ|ᕼ|ḧ|ｈ|卄|ĥ|ꮒ|ɥ|ħ|ђ|ⓗ|ዞ|ᏺ|ɧ|ℍ|հ|ꃅ|ᴴ|ӈ|♅|һ|ん","Ĳ","ĳ","Ĵ|J̌|𝐉|𝐽|𝑱|𝖩|𝗝|𝘑|𝙅|𝒥|𝓙|𝔍|𝕵|𝕁|𝙹|Ⓙ|🄙|🅙|🄹|🅹|Ｊ|ᴊ|🇯|Ⓙ|נ|ᴊ|Ʝ|ᒍ|Ｊ|ﾌ|Ĵ|Ꮰ|ɾ|ᒎ|ן|Ⓙ|Ꭻ|Ꮷ|Յ|ꀭ|ᴶ|ʆ|Ϳ|ว","ĵ|ǰ|𝐣|𝑗|𝒋|𝗃|𝗷|𝘫|𝙟|𝒿|𝓳|𝔧|𝖏|𝕛|𝚓|ⓙ|⒥|ʲ|ⓙ|נ|ᴊ|ʝ|ᒍ|ｊ|ﾌ|ĵ|ꮰ|ɾ|ᒎ|ן|ⓙ|ꭻ|ꮷ|յ|ꀭ|ᴶ|ʆ|ϳ|ว","Ķ|Ḱ|K̆|Ǩ|𝐊|𝐾|𝑲|𝖪|𝗞|𝘒|𝙆|𝒦|𝓚|𝔎|𝕶|𝕂|𝙺|Ⓚ|🄚|🅚|🄺|🅺|Ｋ|ᴋ|🇰|Ⓚ|К|₭|ᴋ|Ꮶ|Ḳ|Ḳ|Ｋ|Ҝ|Ķ|Ʞ|Ҡ|ᛕ|ĸ|Ⓚ|Ƙ|Ƙ|ꀘ|ᴷ|Қ|К|Қ|ズ|Κ","ķ|ḱ|k̆|ǩ|𝐤|𝑘|𝒌|𝗄|𝗸|𝘬|𝙠|𝓀|𝓴|𝔨|𝖐|𝕜|𝚔|ⓚ|⒦|ᵏ|ⓚ|к|₭|ᴋ|ꮶ|ḳ|ḳ|ｋ|ҝ|ķ|ʞ|ҡ|ᛕ|ĸ|ⓚ|ƙ|ƙ|ꀘ|ᴷ|қ|к|қ|ズ|κ","Ĺ|Ļ|Ľ|Ŀ|𝐋|𝐿|𝑳|𝖫|𝗟|𝘓|𝙇|ℒ|𝓛|𝔏|𝕷|𝕃|𝙻|Ⓛ|🄛|🅛|🄻|🅻|Ｌ|ʟ|🇱|Ⓛ|ℓ|Ⱡ|ʟ|Ꮮ|ᒪ|Ŀ|Ḷ|Ｌ|ㄥ|Ĺ|Ꮭ|Ł|Ⓛ|Ꮁ|Ӏ|꒒|ᴸ|Լ|Լ|Ն|ʅ|ﾚ","ĺ|ļ|ľ|ŀ|ł|ł|𝐥|𝑙|𝒍|𝗅|𝗹|𝘭|𝙡|𝓁|𝓵|𝔩|𝖑|𝕝|𝚕|ⓛ|⒧|ˡ|ⓛ|ℓ|ⱡ|ʟ|ꮮ|ᒪ|ŀ|ḷ|ｌ|ㄥ|ĺ|ꮭ|ł|ⓛ|ꮁ|ӏ|꒒|ᴸ|լ|լ|ն|ʅ|ﾚ","Ḿ|M̆|M̌|M̧|𝐌|𝑀|𝑴|𝖬|𝗠|𝘔|𝙈|ℳ|𝓜|𝔐|𝕸|𝕄|𝙼|Ⓜ|🄜|🅜|🄼|🅼|Ｍ|ᴍ|🇲|Ⓜ|М|₥|ᴍ|ʍ|ᗰ|Ṃ|Ṁ|Ｍ|爪|М|Ꮇ|Ɯ|Μ|Ɱ|๓|Ⓜ|ℳ|ꎭ|ᴹ|௱|ო|ﾶ","ḿ|m̆|m̌|m̧|𝐦|𝑚|𝒎|𝗆|𝗺|𝘮|𝙢|𝓂|𝓶|𝔪|𝖒|𝕞|𝚖|ⓜ|⒨|ᵐ|ⓜ|м|₥|ᴍ|ʍ|ᗰ|ṃ|ṁ|ｍ|爪|м|ꮇ|ɯ|μ|ɱ|๓|ⓜ|ℳ|ꎭ|ᴹ|௱|ო|ﾶ","Œ","œ","P̆|Ṕ|P̌|𝐏|𝑃|𝑷|𝖯|𝗣|𝘗|𝙋|𝒫|𝓟|𝔓|𝕻|ℙ|𝙿|Ⓟ|🄟|🅟|🄿|🅿|Ｐ|ᴘ|🇵|Ⓟ|Ρ|₱|ᴘ|Ꮲ|Ք|ᑭ|Ṗ|Ṗ|Ｐ|卩|Р|Ꭾ|Ƥ|ק|Ⓟ|⋆|℘|ᖘ|ᴾ|Þ|Ꮅ|Ƿ|ｱ","p̆|ṕ|p̌|𝐩|𝑝|𝒑|𝗉|𝗽|𝘱|𝙥|𝓅|𝓹|𝔭|𝖕|𝕡|𝚙|ⓟ|⒫|ᵖ|ⓟ|ρ|₱|ᴘ|ꮲ|ք|ᑭ|ṗ|ṗ|ｐ|卩|р|ꭾ|ƥ|ק|ⓟ|⋆|℘|ᖘ|ᴾ|þ|ꮅ|ƿ|ｱ","Ŕ|Ŗ|Ř|R̆|Ȓ|Ȑ|Ř̩|Ř̩|𝐑|𝑅|𝑹|𝖱|𝗥|𝘙|𝙍|ℛ|𝓡|ℜ|𝕽|ℝ|𝚁|Ⓡ|🄡|🅡|🅁|🆁|Ｒ|Ʀ|🇷|Ⓡ|Я|Ɽ|Ʀ|Ꮢ|ᖇ|Ŕ|Ṙ|Ｒ|尺|Ŕ|ɹ|Ř|૨|Г|Ⓡ|ɸ|ཞ|Я|ꋪ|ᴿ|Ʀ|Ր","ŕ|ŗ|ř|r̆|ȓ|ȑ|ř̩|𝐫|𝑟|𝒓|𝗋|𝗿|𝘳|𝙧|𝓇|𝓻|𝔯|𝖗|𝕣|𝚛|ⓡ|⒭|ʳ|ⓡ|я|ɽ|ʀ|ꮢ|ᖇ|ŕ|ṙ|ｒ|尺|ŕ|ɹ|ř|૨|г|ⓡ|ɸ|ཞ|я|ꋪ|ᴿ|ʀ|ր","Ś|Ŝ|Ş|Ș|Š|Ṥ|Ṧ|𝐒|𝑆|𝑺|𝖲|𝗦|𝘚|𝙎|𝒮|𝓢|𝔖|𝕾|𝕊|𝚂|Ⓢ|🄢|🅢|🅂|🆂|Ｓ|ꜱ|🇸|Ⓢ|Ѕ|₴|Ֆ|ᔕ|Ṩ|Ṡ|Ｓ|ᴤ|丂|Ś|Ꮥ|Ş|ร|Ⓢ|ℛ|ʂ|Ƨ|Տ|ꌗ|ˢ|ら|Š","ś|ŝ|ș|ş|š|ſ|ṥ|ṧ|𝐬|𝑠|𝒔|𝗌|𝘀|𝘴|𝙨|𝓈|𝓼|𝔰|𝖘|𝕤|𝚜|ⓢ|⒮|ˢ|ⓢ|ѕ|₴|ֆ|ᔕ|ṩ|ṡ|ｓ|ᴤ|丂|ś|ꮥ|ş|ร|ⓢ|ℛ|ʂ|ƨ|տ|ꌗ|ˢ|ら|š","Ţ|Ț|Ť|Ŧ|T̆|𝐓|𝑇|𝑻|𝖳|𝗧|𝘛|𝙏|𝒯|𝓣|𝔗|𝕿|𝕋|𝚃|Ⓣ|🄣|🅣|🅃|🆃|Ｔ|ᴛ|🇹|Ⓣ|Т|₮|ᴛ|Ꮖ|T̈|Ṯ|Ｔ|ㄒ|Ť|Ꮦ|Ʇ|Ƭ|丅|Ⓣ|ຮ|Ɬ|✞|Γ|Ե|꓄|ᵀ|Ƭ|Ϯ|ｲ|†","ţ|ț|ť|ŧ|t̆|𝐭|𝑡|𝒕|𝗍|𝘁|𝘵|𝙩|𝓉|𝓽|𝔱|𝖙|𝕥|𝚝|ⓣ|⒯|ᵗ|ⓣ|т|₮|ᴛ|ꮖ|ẗ|ṯ|ｔ|ㄒ|ť|ꮦ|ʇ|ƭ|丅|ⓣ|ຮ|ɬ|✞|γ|ե|꓄|ᵀ|ƭ|ϯ|ｲ|†","V̆|V̌|𝐕|𝑉|𝑽|𝖵|𝗩|𝘝|𝙑|𝒱|𝓥|𝔙|𝖁|𝕍|𝚅|Ⓥ|🄥|🅥|🅅|🆅|Ｖ|ᴠ|🇻|Ⓥ|Ν|ᴠ|Ꮙ|Ʋ|ᐯ|Ṿ|Ṽ|Ｖ|Ʌ|Ѵ|ש|Ⓥ|Ʉ|ᙈ|۷|Θ|ᵛ|Ɣ|ע|√|∀|ง","v̆|v̌|𝐯|𝑣|𝒗|𝗏|𝘃|𝘷|𝙫|𝓋|𝓿|𝔳|𝖛|𝕧|𝚟|ⓥ|⒱|ᵛ|ⓥ|ν|ᴠ|ꮙ|ʋ|ᐯ|ṿ|ṽ|ｖ|ʌ|ѵ|ש|ⓥ|ʉ|ᙈ|۷|ϑ|ᵛ|ɣ|ע|√|∀|ง","Ŵ|Ẃ|Ẁ|W̌|𝐖|𝑊|𝑾|𝖶|𝗪|𝘞|𝙒|𝒲|𝓦|𝔚|𝖂|𝕎|𝚆|Ⓦ|🄦|🅦|🅆|🆆|Ｗ|ᴡ|🇼|Ⓦ|Ω|₩|ᴡ|Ꮃ|Ա|ᗯ|Ẅ|Ẇ|Ｗ|山|Ŵ|Ꮗ|ฬ|Ⓦ|ΩΙ|Ꮤ|Щ|ꅏ|ᵂ|Ɯ|ຟ","ŵ|ẃ|ẁ|w̌|𝐰|𝑤|𝒘|𝗐|𝘄|𝘸|𝙬|𝓌|𝔀|𝔴|𝖜|𝕨|𝚠|ⓦ|⒲|ʷ|ⓦ|ω|₩|ᴡ|ꮃ|ա|ᗯ|ẅ|ẇ|ｗ|山|ŵ|ꮗ|ฬ|ⓦ|ῳ|ꮤ|щ|ꅏ|ᵂ|ɯ|ຟ","X̆|X́|X̌|X̧|𝐗|𝑋|𝑿|𝖷|𝗫|𝘟|𝙓|𝒳|𝓧|𝔛|𝖃|𝕏|𝚇|Ⓧ|🄧|🅧|🅇|🆇|Ｘ|🇽|Ⓧ|Χ|Ӿ|Х|᙭|Ẍ|Ẍ|Ｘ|ᴥ|乂|Ж|ጀ|א|ץ|Ⓧ|Ҳ|✘|×|ꊼ|ˣ|Ҳ|Ճ|ﾒ","x̆|x́|x̌|x̧|𝐱|𝑥|𝒙|𝗑|𝘅|𝘹|𝙭|𝓍|𝔁|𝔵|𝖝|𝕩|𝚡|ⓧ|⒳|ˣ|ⓧ|χ|ӿ|х|᙭|ẍ|ẍ|ｘ|ᴥ|乂|ж|ጀ|א|ץ|ⓧ|ҳ|✘|×|ꊼ|ˣ|ҳ|ճ|ﾒ","Ź|Ż|Ž|Z̧|𝐙|𝑍|𝒁|𝖹|𝗭|𝘡|𝙕|𝒵|𝓩|ℨ|𝖅|ℤ|𝚉|Ⓩ|🄩|🅩|🅉|🆉|Ｚ|ᴢ|🇿|Ⓩ|Ⱬ|ᴢ|Ꮓ|ʐ|ᘔ|Ẓ|Ẓ|Ｚ|乙|Ź|ፚ|Ž|Ƶ|Ⓩ|Y̊|ʑ|Հ|ꁴ|ᶻ|Ẕ|Ȥ|ຊ","ź|ż|ž|z̧|𝐳|𝑧|𝒛|𝗓|𝘇|𝘻|𝙯|𝓏|𝔃|𝔷|𝖟|𝕫|𝚣|ⓩ|⒵|ᶻ|ⓩ|ⱬ|ᴢ|ꮓ|ʐ|ᘔ|ẓ|ẓ|ｚ|乙|ź|ፚ|ž|ƶ|ⓩ|ẙ|ʑ|հ|ꁴ|ᶻ|ẕ|ȥ|ຊ","ƒ|f̌|𝐟|𝑓|𝒇|𝖿|𝗳|𝘧|𝙛|𝒻|𝓯|𝔣|𝖋|𝕗|𝚏|ⓕ|⒡|ᶠ|ⓕ|₣|ғ|ʄ|ᖴ|ḟ|ｆ|ᴈ|千|ŧ|ꭶ|ɟ|ƒ|ⓕ|ℱ|ﾓ|ꎇ|ᶠ|ƒ|ꊰ|բ|ｷ","Þ","þ","Ѓ","ѓ","Ќ","ќ","B̌|B̧|𝐁|𝐵|𝑩|𝖡|𝗕|𝘉|𝘽|ℬ|𝓑|𝔅|𝕭|𝔹|𝙱|Ⓑ|🄑|🅑|🄱|🅱|Ｂ|ʙ|🇧|Ⓑ|В|฿|ʙ|ɮ|ᗷ|Ḅ|Ḃ|Ｂ|乃|Β|Ᏸ|Ɓ|๒|Ⓑ|ℬ|ც|Б|Ҍ|ꌃ|ᴮ|Ϧ|Ɓ|Յ|๖","b̌|b̧|𝐛|𝑏|𝒃|𝖻|𝗯|𝘣|𝙗|𝒷|𝓫|𝔟|𝖇|𝕓|𝚋|ⓑ|⒝|ᵇ|ⓑ|в|฿|ʙ|ɮ|ᗷ|ḅ|ḃ|ｂ|乃|β|ᏸ|ɓ|๒|ⓑ|ℬ|ც|б|ҍ|ꌃ|ᴮ|ϧ|ɓ|յ|ß|๖","F̌|𝐅|𝐹|𝑭|𝖥|𝗙|𝘍|𝙁|ℱ|𝓕|𝔉|𝕱|𝔽|𝙵|Ⓕ|🄕|🅕|🄵|🅵|Ｆ|ꜰ|🇫|Ⓕ|₣|Ғ|ʄ|ᖴ|Ḟ|Ｆ|ᴈ|千|Ŧ|Ꭶ|ɟ|Ƒ|Ⓕ|ℱ|ﾓ|ꎇ|ᶠ|Ƒ|ꊰ|Բ|ｷ","Q̌|Q̧|𝐐|𝑄|𝑸|𝖰|𝗤|𝘘|𝙌|𝒬|𝓠|𝔔|𝕼|ℚ|𝚀|Ⓠ|🄠|🅠|🅀|🆀|Ｑ|🇶|Ⓠ|Ǫ|Զ|ᑫ|Ｑ|ᴓ|Ɋ|Ꭴ|Ω|Φ|Ợ|Ⓠ|ᑬ|Ǫ|ꆰ|ᵟ|Ҩ|Ƣ|Գ|Ҩ|ゐ|๑","q̌|q̧|𝐪|𝑞|𝒒|𝗊|𝗾|𝘲|𝙦|𝓆|𝓺|𝔮|𝖖|𝕢|𝚚|ⓠ|⒬|ⓠ|ǫ|զ|ᑫ|ｑ|ᴓ|ɋ|ꭴ|ω|φ|ợ|ⓠ|ᑬ|ǫ|ꆰ|ᵟ|ҩ|ƣ|գ|ҩ|ゐ|๑","𝟎|𝟢|𝟬|𝟘|𝟶|⓪|⓿|０|⁰|₀","𝟏|𝟣|𝟭|𝟙|𝟷|①|❶|⑴|¹|₁","𝟐|𝟤|𝟮|𝟚|𝟸|②|❷|⑵|²|₂","𝟑|𝟥|𝟯|𝟛|𝟹|③|❸|⑶|³|₃","𝟒|𝟦|𝟰|𝟜|𝟺|④|❹|⑷|⁴|₄","𝟓|𝟧|𝟱|𝟝|𝟻|⑤|❺|⑸|⁵|₅","𝟔|𝟨|𝟲|𝟞|𝟼|⑥|❻|⑹|⁶|₆","𝟕|𝟩|𝟳|𝟟|𝟽|⑦|❼|⑺|⁷|₇","𝟖|𝟪|𝟴|𝟠|𝟾|⑧|❽|⑻|⁸|₈","𝟗|𝟫|𝟵|𝟡|𝟿|⑨|❾|⑼|⁹|₉"]}
{set;~convert;["","A","AE","C","E","I","D","N","O","U","Y","a","ae","c","e","i","d","n","o","u","y","G","g","H","h","IJ","ij","J","j","K","k","L","l","M","m","OE","oe","P","p","R","r","S","s","T","t","V","v","W","w","X","x","Z","z","f","TH","th","Г","г","К","к","B","b","F","Q","q","0","1","2","3","4","5","6","7","8","9"]}
{for;~i;0;<;{length;{get;~map}};
    {set;~regex;/(?:{get;~map;{get;~i}})/g}
    {set;~ch;{get;~convert;{get;~i}}}
    {set;~string;{apply;regexreplace;{get;~string};{get;~regex};{get;~ch}}}
}}{get;~string}}

{func._//;indexer;["<array>", "<start>", "[stop]", "[step]"];Applies an indexer to `array`.}
{func;{get;~kl_prefix}indexer;
	{if;{paramslength};<;2;
		{throw;InvalidArgumentException: There is no overload that takes in {paramslength} arguments.}
		{return;false}
	}
	{if;{logic;!;{isarray;{params;0}}};
		{throw;InvalidArrayException}
		{return;false};
		{set;~arr;{params;0}}
	}
	{set;~args;[]}
	{foreach;~arg;{slice;{paramsarray};1};
		{set;~buffer;{parseint;{get;~arg}}}
		{if;{get;~buffer};==;NaN;
			{throw;InvalidArgumentException: There is no overload that takes in a string.}
			{return;false}
		}
		{push;~args;{get;~arg}}
	}
	{if;{logic;||;
		{bool;{length;{get;~arr}};<=;{get;~args;0}};
		{bool;{length;{get;~arr}};<;{get;~args;1}}};
		{throw;IndexOutOfRangeException}
		{return;false}
	}
	{switch;{length;{get;~args}};
		1;{slice;{get;~arr};{get;~args;0}};
		2;{slice;{get;~arr};{get;~args;0};{get;~args;1}};
		3;
			{set;~arr_buffer;[]}
			{if;{get;~args;0};<;{get;~args;1};
				{set;~ope;<};
				{set;~ope;>}
			}
			{for;~i;{get;~args;0};<;{get;~args;1};{get;~args;2};
				{if;{get;~i};<;0;
					{push;~arr_buffer;{math;+;{length;{get;~arr}};{get;~i}}};
					{push;~arr_buffer;{get;~arr;{get;~i}}}
				}
			}
			{get;~arr_buffer}
	}
}
}{if;{commandname};==;kaolib;
Welcome to **Kaolib** - a collection of useful functions for BBTag.
Credits to **stupid cat#8160** for library template.

For full documentation, please visit: {dump;
# Kaolib
> A BBTag library full of HelpfulShit:tm:
Welcome to **Kaolib** - a collection of useful functions for BBTag. Using it is simple:
```cs
{lb}exec{semi}kaolib{rb}
```

By default, functions are prefixed with `kl_`. Provide an argument into the exec to change the prefix. Setting the prefix to `none` will disable the prefix altogether. For example:
```cs
{lb}exec{semi}kaolib{semi}meow_{rb}
{lb}func.meow_function{rb}
```

This module uses some temp variables for functions. All variables are prefixed with `kl_` to avoid conflicting.
<br>Credits to **stupid cat#8160** for library template.

### Contents
{sort;~kl_funcs}
{foreach;~kl_func;~kl_funcs;
- [🔗](#{get;~kl_func}) {get;~kl_func}{newline}
}

### Functions

{sort;~kl_docs}{join;~kl_docs;{newline;2}------------------------{newline;2}}
}
{return}}