

function PrintNumber(number) {

  if(number < 0) {
    console.log("number is less than zero");
    return;
  }

  for(let i = 0; i <= number; i++) {
    console.log(i);
  }
}

//PrintNumber(15);

function GetAverage(a, b, c) {
  let avg = (a+b+c)/3;
  return avg;
}

let avg = GetAverage(15, 15, 100);
console.log(`Average is : ${avg}`);