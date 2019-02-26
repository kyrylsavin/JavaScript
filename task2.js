function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}

function morzeDecode(text) {
	if (arguments.length == 0 || arguments.length > 1) throw "Разрешается один параметр в виде строки";

	let arr = text.split(" "), result = "";			
	const MORZE = {".-":"А", "-...":"Б", ".--":"В", "--.":"Г", "-..":"Д", ".":"Е", "..-..":"Є", "...-":"Ж", "--..":"З", 
				   "-.--":"И", ".---":"Й", "-.-":"К", ".-..":"Л", "--":"М", "-.":"Н", "---":"О", ".--.":"П", ".-.":"Р", 
				   "...":"С", "-":"Т", "..-":"У", "..-.":"Ф", "....":"Х", "-.-.":"Ц", "---.":"Ч", "----":"Ш", "--.-":"Щ", 
				   "-..-":"Ь", "..--":"Ю", "Я":".-.-"};
	for (i in arr) {
		result += MORZE[arr[i]];
		}
	return result;
}
