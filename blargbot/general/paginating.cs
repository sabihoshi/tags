b!t edit paginating ```js
{lb}if{semi}=={semi}
  {semi}
  {lb}get{semi}@page{rb}{semi}
    {lb}set{semi}@page{semi}1{rb}
{rb}
{lb}if{semi}>{semi}
  {lb}get{semi}@{lb}get{semi}@page{rb}list{rb}<New content>{semi}
  1900{semi}
    {lb}increment{semi}@page{rb}
{rb}
{lb}set{semi}@{lb}get{semi}@page{rb}list{semi}
  {lb}get{semi}@{lb}get{semi}@page{rb}list{rb} <New content>
{rb}```