{lang;rb}
{//;Name of the leaderboard array.}
{set;~leaderboard;@ldboard}

{//;Name of the currency. NOTE: The leaderboards has @{userid}`~credit_name` as default. So, if you were to update the credits of someone, you will neet to do {set;@{userid}credits;100} in order to avoid errors.}
{set;~credit_name;credits}

{//;Get the leaderboars only}
	{//;Setting this to 1 will remove items from the leaderboard when the user is not found.}
	{set;~del_obsolete;1}

	{set;~exec;1}
	{exec;ldmodule;{lower;{args}}}


{//;Update the leaderboards only. This is useful if you do not want your code to be slowed down by using {void} on the whole thing as a workaround}
	{set;~exec;1}
	{exec;ldupdate}