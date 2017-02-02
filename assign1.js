const rec = process.argv
function values (array, value){
	array = []
	array.push(Number(value))
	console.log(array)
}
values(rec[2], rec[3])