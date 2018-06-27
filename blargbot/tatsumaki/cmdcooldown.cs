b!t test {set;@cmd#cooldown;**Cooldown with Timer**

For this module, you need to set the time in ms (1 second is 1000) and the key. Using different keys will enable you to use different timers in a single tag. You can also do `{lb}userid{rb}key` if it's specific per user. the last part of the tag is the time remaining. You may edit or remove that part as you wish. The most important part is `{lb}if{semi}=={semi}0{semi}{lb}get{semi}chk{rb}{semi}COOLDOWN IN EFFECT{semi}TAG CONTENT{rb}`.

```js
{lb}set{semi}delay{semi}`TIME_IN_MS`{rb}{lb}set{semi}key{semi}`KEY_OF_COOLDOWN`{rb}{lb}set{semi}time{semi}{lb}time{semi}x{semi}now{rb}{rb}{lb}set{semi}chk{semi}{lb}if{semi}>={semi}{lb}get{semi}time{rb}{semi}0{lb}get{semi}@{lb}get{semi}key{rb}math{rb}{semi}1{semi}0{rb}{rb}{lb}set{semi}@{lb}get{semi}key{rb}math{semi}{lb}if{semi}=={semi}1{semi}{lb}get{semi}chk{rb}{semi}{lb}math{semi}+{semi}{lb}get{semi}time{rb}{semi}{lb}get{semi}delay{rb}{rb}{semi}{lb}get{semi}@{lb}get{semi}key{rb}math{rb}{rb}{rb}

Optional:
{lb}set{semi}ref{semi}{lb}math{semi}-{semi}{lb}get{semi}@{lb}get{semi}key{rb}math{rb}{semi}{lb}get{semi}time{rb}{rb}{rb}{lb}if{semi}=={semi}0{semi}{lb}get{semi}chk{rb}{semi}🆙 | **{lb}username{rb}, please wait {lb}time{semi}HH{semi}{lb}get{semi}ref{rb}{semi}GMT{rb} hours, {lb}abs{semi}{lb}time{semi}mm{semi}{lb}get{semi}ref{rb}{semi}GMT{rb}{rb} minutes and {lb}abs{semi}{lb}time{semi}ss{semi}{lb}get{semi}ref{rb}{semi}GMT{rb}{rb} seconds.**{semi}`CONTENT OF YOUR TAG`{rb}```}