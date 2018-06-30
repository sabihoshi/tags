!snippet submit {//;Set the number here, can be any number.}
{set;~n;{inguild}}
{//;Gives the appropriate suffix for the number. Additional thanks to Vex#3110 for the suffixes.}
{get;~n}{switch;{substring;{get;~n};{math;-;{length;{get;~n}};2}};11;ᵗʰ;12;ᵗʰ;13;ᵗʰ;{switch;{substring;{get;~n};{math;-;{length;{get;~n}};1}};1;ˢᵗ;2;ⁿᵈ;3;ʳᵈ;ᵗʰ}} -t Ordinal Numbers -d This snippet will put the correct suffix to the number specified.