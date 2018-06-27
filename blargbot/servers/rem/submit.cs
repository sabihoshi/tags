b!cc edit submit {trim;
{switch;{lower;{args;0}};
	cry;{void};
	cuddle;{void};
	hug;{void};
	kiss;{void};
	lewd;{void};
	lick;{void};
	nom;{void};
	nyan;{void};
	owo;{void};
	pat;{void};
	pout;{void};
	rem;{void};
	slap;{void};
	smug;{void};
	stare;{void};
	tickle;{void};
	triggered;{void};
	Please choose whether this link is `cry` | `cuddle` | `hug` | `kiss` | `lewd` | `lick` | `nom` | `nyan` | `owo` | `pat` | `pout` | `rem` | `slap` | `smug` | `stare` | `tickle` | `triggered`
	{return}
}
{if;
	<;
	{argslength};
	2;
	:x: Provide a link!
		{return}
}
{if;
	==;
	{lower;{args;1}};
	list;
	{get;@imagelist#{lower;{args;0}}}
		{return}
}
{if;
	includes;
	{args;1;n};
	{get;@imagelist#{lower;{args;0}}};
	:x: Link already added!
		{return}
}
{set;@imagelist#{lower;{args;0}};
	{get;@imagelist#{lower;{args;0}}}{newline}{userid} | {args;1;n}
}
🆗 | Added Link!
}