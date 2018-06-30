b!t edit companion {if;==;0;{length;
	{get;@{userid}petdata}};
		{if;==;;{args};
			{if;{get;{userid}welcome};
				❎ | Please provide a valid name for your home!
					{return};
				{trim;
					**Welcome to the Companion Suite!**
					The world needs a new companion tamer! To become one, you need to name your companion home first.
					This will be where you companions live! Do `{prefix}t companion <name>` to build your new home!				
				}
					{return}
			};
			{set;~shop;
					{regexreplace;{args};/shop$|\n/im;}}
				{set;@{userid}shopn;
					{get;~shop}}
			{trim;
				**{get;~shop} shop is now open!**
				The world is dangerous for companions! Choose one of 		these three gifts
				🎁 | 🎁 | 🎁
				`{prefix}t companion gift <1/2/3>`
				{set;@{userid}rare;{randint;1;3}}
						{return}
			}
		}
}

{if;==;;
	{args};
		{trim;
			**[💮 l **{get;@{userid}shopn} Shop**]**
			
			Companion: {get;{get;@{userid}companion}#type} ({get;{get;@{userid}companion}#type})
			Name: {get;{get;@{userid}companion}#name}
			Gender: {get;{get;@{userid}companion}#sex}

			{get;{get;@{userid}companion}#lvl}
			{get;{get;@{userid}companion}#hp}
			{get;{get;@{userid}companion}#dmg}
			{get;{get;@{userid}companion}#mana}


	{return}
}

{switch;{args;0};
		gift;{if;==;
			{args;1};
			{get;@{userid}rare};
				Rare;
				{switch;{args;1};
					1;
					2;
					3;
				}
	}
}




												
	500/500				500/500								
		🐤							🐉		

		500/500		500/500								
			🐤					🐉				

	500/500				500/500							
		🐤							🐉		
												
													