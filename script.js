function decimalToBinary(num) {
	let temp = "";
	while(num != 0){
		temp += num % 2
		num = Math.floor(num / 2)
	}
	console.log(temp.split("").reverse().join(""));
}
module.exports = decimalToBinary;
