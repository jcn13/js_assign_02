const value = process.argv
let newArray = []
function values (array){
	for(let i = 2; i < array.length; i++){
		newArray[i-2] = Number(array[i]) + 2
	}
}
values(value)
console.log(newArray)