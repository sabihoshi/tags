{lang;js}
{switch;{lower;{args;1}};;
	{regexreplace;```ruby
		`Chess Help Menu` ```
			
			**Commands:**
			1. `{prefix}t chess theme` - Changes your chess style to the desired theme. Use without any arguments to get the help menu
			2. `{prefix}t chess start <@user> [w|b]` - Starts a match against user. If a color is chosen, that will be your color.
			3. `{prefix}t chess move <pos1> <pos2>` - Moves the piece in `pos1` to `pos2`, for example you want to move the rook at `a1` to `a8`, It will be `t!t chess move a1 a8`
			4. `{prefix}t chess <forfeit|quit|stop|end>` - Terminate your current match and forfeit.
			5. `{prefix}t chess stalemate` - Since the game cannot detect if a stalemate happens or not, the two players must announce it is a stalemate.
			6. `{prefix}t promote <position> <queen|knight|rook|bishop>` - Promotes a Pawn piece to the desired piece.
	;/\t/g;}
}