//D TASK:
function checkContent(s1, s2) {
  if (s1.length !== s2.length) {
    return false; // uzunliklar farqi bo'lsa agar, false
  }

  let count1 = {};
  let count2 = {};

  for (let i = 0; i < s1.length; i++) {
    let char = s1[i].toLowerCase();
    count1[char] = (count1[char] || 0) + 1;
  }

  for (let i = 0; i < s2.length; i++) {
    let char = s2[i].toLowerCase();
    count2[char] = (count2[char] || 0) + 1;
  }

  for (let char in count1) {
    if (count1[char] !== count2[char]) {
      return false;
    }
  }

  return true;
}

console.log(checkContent("mitgroup", "gmtiprou")); // true
console.log(checkContent("Hello", "Olelh")); // true
console.log(checkContent("Newyork", "Yokrnew")); // false

//Qo'shimcha:
function checkAccess(user) {
  if (user.role === "admin" && user.isActive === true) {
    return "Full access";
  } else if (user.role === "mentor" && user.isActive === true) {
    return "Limited access";
  } else {
    return "No access";
  }
}

let user1 = { name: "Justin", role: "admin", isActive: true };
let user2 = { name: "John", role: "mentor", isActive: true };
let user3 = { name: "Beck", role: "user", isActive: false };
let user4 = { name: "Mina", role: "admin", isActive: false };
let user5 = { name: "Martin", role: "mentor", isActive: false };

console.log(checkAccess(user1)); // Full access
console.log(checkAccess(user2)); // Limited access
console.log(checkAccess(user3)); // No access
console.log(checkAccess(user4)); // No access
console.log(checkAccess(user5)); // No access

//C TASK:
/*class Shop {
  constructor(non, osh, choy) {
    this.non = non; // non soni
    this.osh = osh; // osh soni
    this.choy = choy; // choy soni
  }

  qoldiq() {
    let vaqt = new Date();
    let soat = vaqt.getHours();
    let daqiqa = vaqt.getMinutes();
    console.log(
      `Hozir ${soat}:${daqiqa} da ${this.non} ta non, ${this.osh} ta osh va ${this.choy} ta choy mavjud`
    );
  }

  sotilish(nomi, son) {
    if (this[nomi] !== undefined && this[nomi] >= son) {
      this[nomi] -= son;
      console.log(`${son} ta ${nomi} sotildi`);
    } else {
      console.log(`Sotish mumkin emas: yetarli ${nomi} yo'q`);
    }
  }

  qabul(nomi, son) {
    if (this[nomi] !== undefined) {
      this[nomi] += son;
      console.log(`${son} ta ${nomi} qabul qilindi`);
    } else {
      console.log("Bunday mahsulot yoq");
    }
  }
}


// TEST
const shop = new Shop(4, 5, 2);

shop.qoldiq();
shop.sotilish("non", 3);
shop.qabul("choy", 4);
shop.qoldiq();
*/
//B-TASK:
/*
function counterA(matn) {
  let count = 0;
  for (let i = 0; i < matn.length; i++) {
    if (matn[i] >= "0" && matn[i] <= "9") {
      count++;
    }
  }
  return count;
}
console.log(counterA("ad2a54y79wet0sfgb9")); // 7

function counterB(matn) {
  let count = 0;
  for (let i = 0; i < matn.length; i++) {
    if (matn[i] >= "0" && matn[i] <= "9") {
      count++;
    }
  }
  return count;
}

console.log(counterB("dcf5gjh57k56jk43,45n44k")); // 11
*/
// DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng emas!", null);
//   } else {
//     const c = a % b;
//     callback(null, c);
//   }
// }

// // CALL
// qoldiqliBolish(7, 5, (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     console.log("data:", data);
//     console.log("MANTIQLAR...");
//   }
// });

//A TASK: 1-parametr harf, 2-parametr son
/*
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
*/
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
