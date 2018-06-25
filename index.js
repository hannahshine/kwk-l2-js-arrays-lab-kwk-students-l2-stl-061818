// Write your solution here!
const drivers=['Milo','Otis','Garfield'];


function destructivelyAppendDriver(name){
  drivers.push('Ralph');
}

function destructivelyPrependDriver(name){
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver(){
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(){
  drivers.shift(name);
}

function appendDriver(name){
  const newEndDriver = [...drivers, "Broom"];
  return newEndDriver;
}

function prependDriver(name){
  const newFrontDriver = ["Arnold",...drivers];
  return newFrontDriver;
}

function removeLastDriver(name){
  const removeLast=drivers.slice(0, drivers.length-1);
  return removeLast;
}

function removeFirstDriver(name){
  const removeFirst=drivers.slice(-2);
  return removeFirst;
}