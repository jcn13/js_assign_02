const value = process.argv
let newValue
let newArr = []
function values (array){
	for(let i = 2; i < array.length; i++){
		newValue = Number(array[i]) + 2
		newArr.push(newValue)
	}
}
values(value)
console.log(newArr)