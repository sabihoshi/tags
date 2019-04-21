{//;
	Arguments: <array>
	Removes invalid items in the array.
	Must be a leaderboard array.
}
{function;RemoveInvalidUsers;
	{//; Parameter cleaning }
	{if;{bool;{paramslength};!=;1};
		{throw;InvalidArgumentException}
		{return;false}
	}

	{//; Make sure array is valid}
	{set;~$leaderboard;{params;0}}
	{if;{logic;!;{isarray;{get;~$leaderboard}}};
		{throw;InvalidArrayException}
		{return;false}
	}

	{//; Filter the array to include only valid items }
	{filter;~$i;~$leaderboard;
		{set;~$a;{get;~$i}}
		{logic;&&;
			{regextest;{get;~$a;0};/^\d+$/};
			{bool;{userid;{get;~$a;1};quiet};!=;};
			{bool;{length;{get;~$a}};==;2}
		}
	}
}

{//;
	Arguments: <array>
	Removes users who have left in the guild.
	Must be a leaderboard array.
}
{function;RemoveLeftUsers;
	{//; Parameter cleaning }
	{if;{bool;{paramslength};!=;1};
		{throw;InvalidArgumentException}
		{return;false}
	}

	{//; Make sure array is valid}
	{set;~$leaderboard;{params;0}}
	{if;{logic;!;{isarray;{get;~$leaderboard}}};
		{throw;InvalidArrayException}
		{return;false}
	}

	{//; Filter the array to include only valid items }
	{filter;~$i;~$leaderboard;
		{set;~$a;{get;~$i}}
		{bool;{userjoinedat;;{get;~$a;1};quiet};!=;`User not in guild`}
	}
}

{//;
	Arguments: <array> [userid(s)]
	Providing userid(s) will remove the duplicates of that specific userid(s) only.
	Must be a leaderboard array.
}
{function;RemoveDuplicateUsers;
	{//; Parameter cleaning }
	{if;{logic;||;{bool;{paramslength};>;2};{bool;{paramslength};<;1}};
		{throw;InvalidArgumentException}
		{return;false}
	}

	{//; Make sure array is valid}
	{set;~$leaderboard;{params;0}}
	{if;{logic;!;{isarray;{get;~$leaderboard}}};
		{throw;InvalidArrayException}
		{return;false}
	}

	{//; Set ~userid to only valid IDs }
	{if;{paramslength};>;1;
		{//; Check if argument is an array or not, and filter each item }
		{if;{isarray;{params;1}};
			{set;~$ids;
				{filter;~$user;{params;1};{bool;{userid;{get;~$user};quiet};!=;}}
			};
			{set;~$ids;{userid;{params;1};quiet}}
		}
		{if;{length;{get;~$userid}};==;0;
			{throw;InvalidUserException}
			{return;false}
		};
		{//; Set default values for the IDs and duplicate indexes }
		{set;~$ids;[]}
		{set;~$dupes;[]}
	}

	{//; Find all the duplicate IDs and set their value to empty }
	{void;{filter;~$i;~$leaderboard;
		false
		{set;~$a;{get;~$i}}
		{if;{indexof;{get;~$ids};{get;~$a;0}};==;-1;
			{if;{paramslength};==;1;{push;~$ids;{get;~$a;0}}};
			{splice;~$leaderboard;{indexof;{get;~$leaderboard};{get;~$i}};}
		}
	}}

	{//; Sort array by descending and remove the empty values from the end }
	{sort;~$leaderboard;descending}
	{void;{splice;~$leaderboard;
		{math;-;{length;{get;~$leaderboard}};{length;{get;~$dupes}}};
		{length;{get;~$dupes}}
	}}

	{slice;{get;~$leaderboard};0}
}

{//;
	Arguments: <array>
	Cleans the leaderboard array.
	This applies: RemoveInvalidUsers, RemoveLeftUsers, RemoveDuplicateUsers
}
{function;CleanLeaderboard;
	{//; Parameter cleaning }
	{if;{bool;{paramslength};!=;1};
		{throw;InvalidArgumentException}
		{return;false}
	}

	{//; Make sure array is valid}
	{set;~$leaderboard;{params;0}}
	{if;{logic;!;{isarray;{get;~$leaderboard}}};
		{throw;InvalidArrayException}
		{return;false}
	}

	{set;~$leaderboard;{func.RemoveInvalidUsers;{get;~$leaderboard}}}
	{set;~$leaderboard;{func.RemoveLeftUsers;{get;~$leaderboard}}}
	{set;~$leaderboard;{func.RemoveDuplicateUsers;{get;~$leaderboard}}}

	{slice;{get;~$leaderboard};0}
}

{//;
	Gets the appropriate variables for the LeaderboardStyling
}
{function;GetVariables;
	{set;~$a;{params;0}}
	{set;~$amount;{get;~$a;0}}
	{set;~$user;{get;~$a;1}}
	{set;~$ranking;{if;{get;~$rank};==;-1;Not ranked;{math;+;{get;~$rank}}}}
}

{//;
	Arguments: <array>
	Gets the IDs of the leaderboard array
}
{function;GetUsers;
	{//; Parameter cleaning }
	{if;{bool;{paramslength};!=;1};
		{throw;InvalidArgumentException}
		{return;false}
	}

	{//; Make sure array is valid}
	{set;~$leaderboard;{params;0}}
	{if;{logic;!;{isarray;{get;~$leaderboard}}};
		{throw;InvalidArrayException}
		{return;false}
	}

	{//; Filter the array and get only the IDs }
	{set;~$ids;[]}
	{void;{filter;~$i;~$leaderboard;
		false
		{set;~$a;{get;~$i}}
		{set;~$id;{userid;{get;~$a;1};quiet}}
		{if;{get;~$id};!=;;{push;~$ids;{get;~$id}}}
	}}
	{slice;{get;~$ids};0}
}

{//;
	Arguments: <array> [page] [items]
	Show the leaderboard with pagination.
	items will be the amount of items shown per page. Defaults to 0.
	page will be the page that will show in the leaderboard. Defaults to 10.
	You can edit this to how you want it to look like.
}
{function;GetLeaderboard;
	{//; Parameter cleaning }
	{if;{logic;||;{bool;{paramslength};>;3};{bool;{paramslength};<;1}};
		{throw;InvalidArgumentException}
		{return;false}
	}

	{//; Make sure args is a valid number }
	{set;~$curr_page;{if;{paramslength};<;2;1;{parseint;{params;1}}}}
	{if;{get;~$curr_page};==;NaN;
		{throw;InvalidArgumentException}
		{return;false}
	}

	{//; Make sure items is a valid number }
	{set;~$items;{if;{paramslength};<;3;10;{parseint;{params;2}}}}
	{if;{get;~$items};==;NaN;
		{throw;InvalidArgumentException}
		{return;false}
	}

	{//; Set the array here }
	{set;~$leaderboard;{func.RemoveInvalidUsers;{params;0}}}

	{//; Find the rank of the user }
	{set;~$rank;{indexof;{func.GetUsers;{get;~$leaderboard}};{userid}}}

	{//; Calculate the max page }
	{set;~$last_page;{ceil;{math;/;{length;{get;~$leaderboard}};{get;~$items}}}}

	{//; Make sure args doesn't exceed max pages }
	{if;{get;~$curr_page};>=;{get;~$last_page};{set;~$curr_page;{get;~$last_page}}}

	{//; Make sure args isn't a negative }
	{if;{get;~$curr_page};<=;0;{set;~$curr_page;1}}

	{//; Set the start and end of the slice }
	{function;GetSlice;
		{set;~$s;{math;*;{math;-;{get;~$curr_page};1};{get;~$items}}}
		{set;~$e;{math;+;{get;~$s};{get;~$items}}}
	}
	{func.GetSlice}

	{//; Output the leaderboard }
	{set;~$msgid;{output;{func.LeaderboardStyling}}}


	{//; Add emojis }
	{reactadd;{get;~$msgid};⏮⬅➡⏭}
	{repeat;
		{//; Make sure only applicable emojis work }
		{set;~$reaction;{waitreaction;{get;~$msgid};{userid};{switch;{get;~$curr_page};1;➡⏭;{get;~$last_page};⏮⬅;⏮⬅➡⏭};true;300}}

		{//; Determine whether to add or decrease page }
		{switch;{get;~$reaction;3};
			⬅;{void;{decrement;~$curr_page}};
			➡;{void;{increment;~$curr_page}};
			⏮;{set;~$curr_page;1};
			⏭;{set;~$curr_page;{get;~$last_page}}
		}

		{func.GetSlice}

		{//; Output the resulting page }
		{edit;{get;~$msgid};{func.LeaderboardStyling}}

		{//; Remove or add emojis by user }
		{reactremove;{get;~$msgid};{get;~$reaction;3}};
		10
	}
	{//; Remove all emojis when waitreaction limit is reached }
	{reactremoveall;{get;~$msgid}}
}