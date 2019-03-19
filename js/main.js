var button = document.getElementById("submit_button");

button.addEventListener("click", function(){
	var data = new Object();
	var input = document.getElementsByTagName("input");
	
	for (i in input) {
		try {
			if (input[i].getAttribute("type") == "radio" || 
				input[i].getAttribute("type") == "checkbox" )
				data[input[i].getAttribute("value")] = input[i].checked;
			else {
				data[input[i].getAttribute("name")] = input[i].value;
			}
		}
		catch (e) {
			break;
		}
	}
	console.log(data);
});
