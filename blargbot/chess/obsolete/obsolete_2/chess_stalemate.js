{lang;js}
{set;~p;{aget;~{userid}chess_instance}}
{if;!=;1;{aget;~{userid}chess_game};:x: You don not have an active chess game!;
{if;!=;1;{aget;~{get;~p}stalemate_in};Stalemate announced! <@{get;~{userid}en}>, please do `t!t chess stalemate` to confirm it.{aset;~{get;~p}stalemate_in;1}{aset;~{get;~p}stalemate_an;{userid}};
{if;==;{userid};{aget;~{get;~p}stalemate_en};:x: Your opponent must confirm the stalemate. <@{get;~{userid}en}>, please do `t!t chess stalemate` to confirm it.;**Stalemate!** Nobody has won.
{aset;~{userid}game;0}{aset;~{aget;~{userid}en}game;0}
}}}