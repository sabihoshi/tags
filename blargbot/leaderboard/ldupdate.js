{if;!=;1;{get;~exec};
	:x: Do `{prefix}t raw leaderboard` for help!
	{return}
}
{if;==;;{get;~credit_name};
	:x: Do `{prefix}t raw leaderboard` for help! {throw;No credit name}
	{return}
}
{if;==;;{get;~leaderboard};
	:x: Do `{prefix}t raw leaderboard` for help! {throw;No leaderboard name}
	{return}
}

{//;Checks if the array exists}
{if;!=;true;
	{isarray;{get;{get;~leaderboard}}};
	{set;{get;~leaderboard};[]}
}
{if;==;{get;@{userid}o{get;~credit_name}};{get;@{userid}{get;~credit_name}};
	{return};
	{set;@{userid}o{get;~credit_name};{get;@{userid}{get;~credit_name}}}
	{//;Makes an array including only the userids}
	{set;~top;
		{regexreplace;
			{get;{get;~leaderboard}};
				/(?:(?:\w|`)+#)(\d{1,18})/g;
				$1
		}
	}
	
	{//;Pads credits with 20 zeroes at the left. Example is 00000000000000321577#246903976937783296}
	{set;~nw;
		{realpad;0{get;@{userid}{get;~credit_name}};20;0;left}#{userid}
	}
	
	{//;Checks if your {userid} is in {get;~top}. If it is not, it will push {get;~nw}, otherwise it will replace your old data with the new one.}
	{if;==;-1;{indexof;{get;~top};{userid}};
		{push;{get;~leaderboard};
			{get;~nw}
		};
		{splice;
			{get;~leaderboard};
			{indexof;{get;~top};{userid}};1;
			{get;~nw}
		}
	}
	{sort;{get;{get;~leaderboard}};descending}
}