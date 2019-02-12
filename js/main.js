//task 1
var seconds = 234245645335;

var hoursSeconds = (seconds - seconds%3600);
var secondsCurrent = (seconds - hoursSeconds)%60;
var minutesSeconds = (seconds - hoursSeconds - secondsCurrent)

console.log('Hours: ' + hoursSeconds/3600);
console.log('Minutes: ' + minutesSeconds/60);
console.log('Seconds: ' + secondsCurrent);

//task 2
var str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.";
var arr = [];
for (var i = 0; i < str.length; i++) {
	if (str[i] == 'a') { 
		arr.push(i);
	}
}
console.log(arr); 