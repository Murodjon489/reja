//A TASK: 1-parametr harf, 2-parametr son
function countLetter(letter, word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(countLetter("e", "engineer")); // kutilgan javob : 3
console.log(countLetter("n", "engineer")); // kutilgan javob : 2
console.log(countLetter("x", "engineer")); // kutilgan javob : 0

console.log("----------------------------");

function CountLetter(letter, word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(CountLetter("e", "energy")); // kutilgan javob : 2
console.log(CountLetter("n", "energy")); // kutilgan javob : 1
console.log(CountLetter("x", "energy")); // kutilgan javob : 0

/* 21 DARS: CALLBACK function
console.log("Jack Ma maslahatlari");

const list = [
  "yaxshi talaba bo'ling", // 0-20
  "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
  "o'zingizga ishlashni boshlang", // 30-40
  "siz kuchli bo'lgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yo'q endi", // 60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else callback(null, list[5]);
  setTimeout(function () {
    callback(null, list[5]);
  }, 5000);
}

console.log("passed here 0");
maslahatBering(45, (err, data) => {
  if (err) console.log("ERROR:", err);
  else console.log("javob:", data);
});
console.log("passed here 1");
*/

/*22 DARS: ASYNC function
console.log("Jack Ma maslahatlari");

const list = [
  "yaxshi talaba bo'ling", // 0-20
  "to'gri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

async function maslahatBering(a) {
  if (typeof a != "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
}

//call via, then/catch
//console.log("passed here 0");
//maslahatBering(65)
//  .then((data) => {
//    console.log("javob:", data);
//  })
//  .catch((err) => {
//    console.log("ERROR:", err);
//  });
//console.log("passed here 1");

//async/await
//async function run() {
 // let javob = await maslahatBering(65);
 // console.log(javob);
 // javob = await maslahatBering(31);
 // console.log(javob);
 // javob = await maslahatBering(41);
 // console.log(javob);
//}
run();
*/

/*function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else
    setInterval(function () {
      callback(null, list[5]);
    }, 5000);
}

console.log("passed here 0");
maslahatBering(70, (err, data) => {
  if (err) console.log("ERROR", err);
  else {
    console.log(data);
  }
});
console.log("passed here 1");
*/
