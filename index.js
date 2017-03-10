
function iterativeLog(array) {
  //for (var i = 0; i < array.length; i ++)
    array.forEach(element => {  // part is basically a variable you set that will become each element in the array when run
      //var elementToString = element.toString()
      //console.log(`$${array.indexOf(elementToString)}: ${element}`)
      console.log(`${array.indexOf(element)}: ${element}`)
    })
}

function iterate(callback) {
  var array = ["x", "y", "z"]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
