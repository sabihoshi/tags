{set;~r;{args;1}}{set;~c;{args;2;n}}{set;~i;{args;0}}
{while;{inject;{lb}regextest{semi}{get;{get;~i}}{semi}{get;~r}{rb}};
	{set;{get;~i};{exec;number;{inject;{inject;{lb}regexreplace{semi}{get;{get;~i}}{semi}{get;~r}{semi}{get;~c}{rb}}}}}
}