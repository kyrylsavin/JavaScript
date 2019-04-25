//2
var str="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at";
var arr = new Array();

for (i = 0; i < str.length; i++) {
	if (str[i] == "a") {
		arr.push(i);
	}
}
console.log(arr);

//1

var seconds = 234245645335;

var hours = Math.floor(seconds/3600);
var minutes = Math.floor((seconds - hours*3600)/60);
var seconds = (seconds - (hours*3600))%60;

console.log(`${hours}:${minutes}:${seconds}`);
