{lang;js}
{embed;{embedbuild;
	title:Chess Help Menu;
	fields.name:{prefix}t chess theme;
	fields.value:Changes your chess style to the desired theme.{newline}Use without any arguments to get the help menu;
	fields.inline:true;
	fields.name:{prefix}t chess start <@user> [w|b];
	fields.value:Starts a match against user.{newline}If a color is chosen, that will be your color.;
	fields.inline:true;
	fields.name:{prefix}t chess move <pos1> <pos2>;
	fields.value:Moves the piece in `pos1` to `pos2`.{newline}For example you want to move the rook at `a1` to `a8`{newline}It will be `t!t chess move a1 a8`;
	fields.inline:true;
	fields.name:{prefix}t chess <forfeit|quit|stop|end>;
	fields.value:Terminate your current match and forfeit.;
	fields.inline:true;
	fields.name:{prefix}t chess stalemate;
	fields.value:Since the game cannot detect if a stalemate happens or not{newline}The two players must announce it is a stalemate.;
	fields.inline:true;
	fields.name:{prefix}t promote <position> <queen|knight|rook|bishop>;
	fields.value:Promotes a <:wp:432200723820970014> piece to the desired piece.;
	fields.inline:true;
	color:black;
	footer.text:Made by Kao#0001;
	footer.icon_url:{useravatar;246903976937783296};
	thumbnail.url:https://cdn.discordapp.com/emojis/432200723724369920.png;
	timestamp:{time}
}}