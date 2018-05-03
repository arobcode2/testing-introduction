//inputs: 1 string
//outputs: 1 string (character)
//process: 'aabb' => {a: 2, b: 2}
//					0123
function firstNonRepeatChar(str) {
	//create object
	var obj = {};
	//create counter
	var count = 0;
	//create array
	var arr = [];
	//iterate through the string
	for (var i = 0; i < str.length; i++) {
		//add each element as a key and each value as the count of each char
		obj[str[i]] = count;
	}
	//iterate through object
		//if value of key is equal to 1
			//push key into array
	//return 1st element in array
	return obj;
}

console.log(firstNonRepeatChar('aabb'));

//'aabb' => ['a', 'a', 'b', 'b']
//'apple' => unique characters = {a: , p: , l: , e: } - 'apple'
