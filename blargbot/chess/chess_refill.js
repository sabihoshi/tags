{if;{get;~key};!=;{get;@chess.key};
	{func.error;Please run this tag in a cc! Do `{prefix}cc import chess chess` to continue.}
	{return}
}
{func.default}
{//; Assign variables for horizontal and vertical positions }
{set;~0;{substring;{args};0;1}}
{set;~1;{substring;{args};1;2}}
{//; Reinitialize array }
{set;_{get;~p}{args};[{get;_{get;~p}{args};0}]}
{function;refill.rook;
	{//; Horizontally, Right }
	{set;~continue;true}
	{for;~H;{math;+;{get;~{get;~0}};1};<=;8;
		{if;{get;_{get;~p}{get;~H}{get;~1};0};==;_;
			{if;{get;~continue};{push;_{get;~p}{args};{get;~H}{get;~1}}};
			{set;~continue;false}
		}
	}
	{//; Horizontally, Left }
	{set;~continue;true}
	{for;~H;{math;-;{get;~{get;~0}};1};>=;1;-1;
		{if;{get;_{get;~p}{get;~H}{get;~1};0};==;_;
			{if;{get;~continue};{push;_{get;~p}{args};{get;~H}{get;~1}}};
			{set;~continue;false}
		}
	}
	{//; Vertically, Up }
	{set;~continue;true}
	{for;~V;{math;+;{get;~{get;~2}};1};<=;8;
		{if;{get;_{get;~p}{get;~V}{get;~1};0};==;_;
			{if;{get;~continue};{push;_{get;~p}{args};{get;~V}{get;~1}}};
			{set;~continue;false}
		}
	}
	{//; Vertically, Down }
	{set;~continue;true}
	{for;~V;{math;-;{get;~{get;~2}};1};>=;1;
		{if;{get;_{get;~p}{get;~V}{get;~1};0};==;_;
			{if;{get;~continue};{push;_{get;~p}{args};{get;~V}{get;~1}}};
			{set;~continue;false}
		}
	}
}
{function;refill.bishop;
	{//; Right, Up }
	{set;~continue;true}
	{for;~i;1;<=;8;
		{set;~pos;{math;+;{get;~0};{get;~i}}{math;+;{get;~1};{get;~i}}}
		{if;{get;_{get;~p}{get;~pos};0};==;_;
			{if;{get;~continue};{push;_{get;~p}{args};{get;~pos}}};
			{set;~continue;false}
		}
	}
	{//; Right, Down }
	{set;~continue;true}
	{for;~i;1;<=;8;
		{set;~pos;{math;+;{get;~0};{get;~i}}{math;-;{get;~1};{get;~i}}}
		{if;{get;_{get;~p}{get;~pos};0};==;_;
			{if;{get;~continue};{push;_{get;~p}{args};{get;~pos}}};
			{set;~continue;false}
		}
	}
	{//; Left, Up }
	{set;~continue;true}
	{for;~i;1;<=;8;
		{set;~pos;{math;-;{get;~0};{get;~i}}{math;+;{get;~1};{get;~i}}}
		{if;{get;_{get;~p}{get;~pos};0};==;_;
			{if;{get;~continue};{push;_{get;~p}{args};{get;~pos}}};
			{set;~continue;false}
		}
	}
	{//; Left, Down }
	{set;~continue;true}
	{for;~i;1;<=;8;
		{set;~pos;{math;-;{get;~0};{get;~i}}{math;-;{get;~1};{get;~i}}}
		{if;{get;_{get;~p}{get;~pos};0};==;_;
			{if;{get;~continue};{push;_{get;~p}{args};{get;~pos}}};
			{set;~continue;false}
		}
	}
}
{switch;{get;_{get;~p}{args};0};
	_;{void};
	["R","r"];
		{func.refill.rook};
	["N","n"];
		{//; Data pairs for valid Knight positions }
		{set;~V;2;2;-2;-2;1;-1;1;-1}
		{set;~H;1;-1;1;-1;2;2;-2;-2}
		{//; Make sure data pair is an empty spot }
		{for;~i;0;<;8;
			{set;~pos;{get;~{math;+;{get;~0};{get;~V;{get;~i}}}}{math;+;{get;~1};{get;~H;{get;~i}}}}
			{if;{get;_{get;~p}{get;~pos};==;_;{push;_{get;~p}args;{get;~pos}}}}
		};
	["B","b"];
		{func.refill.bishop};
	["Q","q"];
		{func.refill.rook}
		{func.refill.bishop};
	["K","k"];
		{//; Data pairs for valid King positions }
		{set;~V;1;1;1;0;0;-1;-1;-1}
		{set;~H;-1;0;1;-1;1;-1;0;1}
		{for;~i;0;<;8;
			{set;~pos;{get;~{math;+;{get;~0};{get;~V;{get;~i}}}}{math;+;{get;~1};{get;~H;{get;~i}}}}
			{if;{get;_{get;~p}{get;~pos};==;_;{push;_{get;~p}args;{get;~pos}}}}
		}
	P;
		{if;{get;_{get;~p}{get;~0}{math;+;{get;~1};1}};==;_;
			{push;_{get;~p}args;{get;~0}{math;+;{get;~1};1}}
			{if;{logic;!;{get;_{get;~p}{args}.moved}};
				{if;{get;_{get;~p}{get;~0}{math;+;{get;~1};2}};==;_;
					{push;_{get;~p}args;{get;~0}{math;+;{get;~1};2}}
				}
			}
		};
	p;
		{if;{get;_{get;~p}{get;~0}{math;-;{get;~1};1}};==;_;
			{push;_{get;~p}args;{get;~0}{math;-;{get;~1};1}}
			{if;{logic;!;{get;_{get;~p}{args}.moved}};
				{if;{get;_{get;~p}{get;~0}{math;-;{get;~1};2}};==;_;
					{push;_{get;~p}args;{get;~0}{math;-;{get;~1};2}}
				}
			}
		}
}