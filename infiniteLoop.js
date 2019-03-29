let counter = 0;

while (true) {
	try {
		if (counter > 10000) throw "loop overflow";
	}
	catch (e) {
		console.log(e);	
		break;
	}
	console.log(counter);
	counter++;
}
