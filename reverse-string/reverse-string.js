//inputs: 1 string
//outputs: 1 string
//process: 'never' => 'reven'
var reverseString = function(str) {
	var arr = [];
	//iterate through inputs str starting at last char and ending at first char
	for(var i = str.length - 1; i >= 0; i--) {
		//push element into arr
		arr.push(str[i]);
	}
	//join elements in array without commas into a string
	var revStr = arr.join('');
	//return string
	return revStr;
};

console.log(reverseString('blow'));
