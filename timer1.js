const clock = function (ring) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, ring);
}


const myArgv = process.argv.slice(2)
for (let element of myArgv) {
  clock(parseInt(element)* 1000)
} //[10,9,8,15,30]

//eliminating the first two elements of process.argv
//loop thru the rest of process.argv
//clock function expects parameter; 


//setting the timeout to a variable that can be changed 
//Use a callback 
//process.argv  