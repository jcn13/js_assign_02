const rec = process.argv
let myArr = []
function values (array, value){
	array = myArr
	myArr.push(Number(value))
	console.log(myArr)
}
values(rec[2], rec[3])