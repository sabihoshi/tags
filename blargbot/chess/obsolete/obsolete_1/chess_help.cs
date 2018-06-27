{switch;{lower;{args;1}};;
	{regexreplace;```ruby
		`Chess Help Menu` ```
			
			**Commands:**
			1. `t!t chess theme` - Changes your chess style to the desired theme. Use without any arguments to get the help menu
			2. `t!t chess start <@user> [w|b]` - Starts a match against user. If a color is chosen, that will be your color.
			3. `t!t chess move <pos1> <pos2>` - Moves the piece in `pos1` to `pos2`, for example you want to move the rook at `a1` to `a8`, It will be `t!t chess move a1 a8`
			4. `t!t chess <forfeit|quit|stop|end>` - Terminate your current match and forfeit.
			5. `t!t chess stalemate` - Since the game cannot detect if a stalemate happens or not, the two players must announce it is a stalemate.
			6. `t!t promote <position> <queen|knight|rook|bishop>` - Promotes a Pawn piece to the desired piece.
			
			**Rules:**
			1. In order to win, you must eat the king of your opponent.

			>>> To learn how to create a tag, use 't!t cmd'
			>>> If you want the complete list, get the tagdocs here 'https://the-lazy-learner.github.io/tatsu-tags.html'
	;/\t/g;}
}