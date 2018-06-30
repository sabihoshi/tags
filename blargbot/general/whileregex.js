{set;~r;{args;1}}{set;~c;{args;2;n}}{set;~i;{args;0}}
{while;{inject;{lb}regextest{semi}{get;{get;~i}}{semi}{get;~r}{rb}};
	{set;{get;~i};{inject;{lb}regexreplace{semi}{get;{get;~i}}{semi}{get;~r}{semi}{get;~c}{rb}}}
}