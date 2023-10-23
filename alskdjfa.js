const DAYS = 6;
const LIMIT = 30;
let studentreport = [11, 42, 33, 64, 29, 37, 44];

for (let number = 0; number < studentreport; number++ ) {
    if (studentreport[number] >= 30){
        console.log(studentreport[number])
    }
}

let q = 0;
while (q < studentreport.length) {
    if (studentreport[q] >= 30){
        console.log(studentreport[q])
    }
    q++
}

studentreport.forEach(function (item) {
    if (item > LIMIT) {
        console.log(item);
    }
});

for (let i in studentReport) {
    if (studentreport[i] < LIMIT) {
      console.log(studentreport[i]);
    }
  }

  for (let i = 1; i <= n; i++ ) {
	let nextday = new Date();
	nextday.setDate(today.getDate() + i);
	let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
	item = document.createElement("li"); // list item
	item.textContent = nextdaystring;
	output[0].appendChild(item);
}

