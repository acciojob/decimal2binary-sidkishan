function decimalToBinary(num) {
	let temp = "";
	while(num != 0){
		temp += num % 2
		num = Math.floor(num / 2)
	}
	return Number(temp.split("").reverse().join(""));
}
module.exports = decimalToBinary;
