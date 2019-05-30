{//;
  The output for the leaderboard
  Edit this to change the output of the leaderboard
}
{function;LeaderboardStyling;
```prolog
{clean;
  📋 Rank | Name
  --------------------
  {foreach;~$item;{slice;{get;~$leaderboard};{get;~$s};{get;~$e}};
    {func.GetVariables;{get;~$item}}
    {increment;~$s}. {username;{get;~$user}}#{userdiscrim;{get;~$user}}
    {repeat;​{space};5}Gold: {get;~$amount}{newline}
  }--------------------
  Rank: {get;~$ranking}
  Page {get;~$curr_page}/{get;~$last_page}
}```
}

{//; Execute the helper and get required functions }
{exec;leaderboard_helper}

{//;
  Generate a fake leaderboard
  Your leaderboard must be an array of ["amount", "userid"]
  As seen below, adding yourself to the array goes like {push;~myLeaderboard;["1000","{userid}"]}
}
{set;~myLeaderboard;[]}
{repeat;
  {push;~myLeaderboard;["{randint;0;1000000}","{randuser}"]};
  99
}
{//; Add yourself to the leaderboard }
{push;~myLeaderboard;["{randint;0;1000000}","{userid}"]}

{//; Sort the leaderboard }
{sort;~myLeaderboard;descending}

{//; Set the arguments }
{set;~page; {if;{argslength};>;0;{parseint;{args;0}};1}}
{set;~items;{if;{argslength};>;1;{parseint;{args;1}};10}}

{//;
  Arguments: <array> [page] [items]
  Show the leaderboard with pagination.
  items will be the amount of items shown per page. Defaults to 0.
  page will be the page that will show in the leaderboard. Defaults to 10.
  You can edit this to how you want it to look like.
}
{func.GetLeaderboard;{get;~myLeaderboard};{get;~page};{get;~items}}