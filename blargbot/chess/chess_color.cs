{lang;cs}
{//;
	Credits to Allen Miquel#8168
	For parts of the code
	(217786078067818497)
}
{set;~eColor;[]}
{set;~roles;{roles;{get;@{get;~p}p{if;==;w;{get;@{get;~p}tm};1;2}}}}
{foreach;~color;{get;~roles};
  {if;{rolecolor;{get;~color}};!=;000000;
	{push;{get;~eColor};{rolecolor;{get;~color}}}
  }
}
{if;{length;{get;~eColor}};==;0;
  {set;~eColor;{if;==;w;{get;@{get;~p}tm};fff;000}}
}
{get;~eColor;0}