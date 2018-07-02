b!snippet submit {//; Send the message to the channel }
{set;~msgid;{send;{channelid};React :white_check_mark: to accept, or :negative_squared_cross_mark: to cancel.}}
{//; Add the corresponding reactions to the message }
{reactadd;{get;~msgid};:white_check_mark::negative_squared_cross_mark:}
{//; Wait until user reacts one of the emojis provided }
{void;
	{waitreaction;{get;~msgid};{userid};
		:white_check_mark::negative_squared_cross_mark:;
		{set;~reaction;{reaction}}
	}
}
{//; Get the content of the reaction }
{switch;{get;~reaction};
	:white_check_mark:;
		Trade has succeeded! {//; User reacted check };
	:negative_squared_cross_mark:;
		Trade cancelled. {//; User reacted cross };
		Trade has timed out. {//; User didn't react and timed out }
} -t Confirmation message (Reactions) -d This snippet uses `{waitreaction}` and `{reactadd}` in order to make a confirmation message.