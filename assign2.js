const value = process.argv
function values (array){
	console.log(`index : value`)
	for(let i = 2; i < array.length; i++){
		console.log(`${i-2}: ${array[i]}`)
	}
}
values(value)