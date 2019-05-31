{func;NextChar;
    {set;~pos;{math;+;0{get;~pos};1}}
    {if;{get;~pos};>=;{length;{get;~stream}};
        {set;~currentChar;\0};
        {set;~currentChar;{get;~stream;{get;~pos}}}
    }
}
{func;IsDigit;
    {bool;{parseint;{params}};!=;NaN}
}
{func;NextToken;
    {//; Skip whitespace }
    {while;{get;~currentChar};==;{space};{func.NextChar}}

    {//; Special characters }
    {switch;{get;~currentChar};
        \0;
            {set;~currentToken;Token.EOF}
            {return;false};
         +;
            {set;~currentToken;Token.Add}
            {return;false};
         -;
            {set;~currentToken;Token.Subtract}
            {return;false}
    }

    {//; Numbers }
    {if;{logic;||;{func.IsDigit;{get;~char}};{bool;{get;~char};==;.}};
        {set;~haveDecimalPoint;false}
        {while;{logic;||;{func.IsDigit;{get;~char}};{logic;!;{logic;&&;{get;~haveDecimalPoint}};{bool;{get;~currentChar};==;.}}};
            {set;~sb;{get;~sb}{get;~currentChar}}
            {set;~haveDecimalPoint;{bool;{get;~currentChar};==;.}}
            {func.NextChar}
        }

        {set;~number;{parsefloat;{get;~sb}}}
        {set;~currentToken;Token.Number}
        {return;false}
    }
    {throw;InvalidDataException: Unexpected character: {get;~currentChar}}
}

{//; Make sure to split the stream into individual characters }
{set;~stream;{split;{args};}}
{set;~currentChar;{func.NextToken}}