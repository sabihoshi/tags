{set;~p;{get;@{userid}chess_instance}}
{embed;
	{buildembed;
		author.icon_url:
			{useravatar};
		author.name:
			{usernick};
		color:
			f00;
		description:
			{args};
		footer.icon_url:
			https://cdn.discordapp.com/emojis/436745175294017546.png?v=1;
		footer.text:
			Invalid move!;
		thumbnail.url:
			http://apronus.com/chess/diagram/stagram.php?d=PRNBQKBNRPPPPPPPP________________________________pppppppprnbqkbnr&p=49&s=0&c=8F604FFFCC99&r=FFFFFF&z=w;
		timestamp:
			{time};
		title:
			{get;@{get;~p}move}{switch;{get;@{get;~p}move};11;ᵗʰ;12;ᵗʰ;13;ᵗʰ;{switch;{substring;{get;@{get;~p}move};{math;-;{length;{get;@{get;~p}move}};1}};1;ˢᵗ;2;ⁿᵈ;3;ʳᵈ;ᵗʰ}} Move;
	}
}