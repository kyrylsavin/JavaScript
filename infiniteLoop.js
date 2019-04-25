var i = 0;

while (true) {
	try {
		if (i < 2000) {
			console.log(i);
			i+=1;
		} else {
			throw SyntaxError("infinite loop");
		}
	} 
	catch (e) {
		if (e instanceof SyntaxError) {
			console.log(`Error name: ${e.message}`);
			break;
		}
	} 
}
		
