// ==== Promise ====

// let AhmedKaRishta = new Promise((resolve, reject) => {
//   let AhmedKiJob = false;
//   let AhmedKiGari = true;
//   let AhmedKaApnaGhar = true;
//   let AhmedKiSalary = 50;

//   if (AhmedKiJob && AhmedKaApnaGhar) {
//     resolve("Ahmed ka Rishta Pakka");
//   } else if (AhmedKiSalary >= 50) {
//     // Aunty Rishta Dhoond rahi hai
//     setTimeout(() => {
//       resolve("Mil Gaya");
//     }, 5000);
//   } else {
//     reject("Agli Dhundo");
//   }
// });

// AhmedKaRishta.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });
// console.log(AhmedKaRishta);

// let abc = (a, b) => {
//   return new Promise((resolve, reject) => {
//     if (a == b) {
//       setTimeout(() => {
//         resolve("Success");
//       }, 5000);
//     } else {
//       reject("Error");
//     }
//   });
// };

// let xyz = async () => {
//   await abc(10, 10)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   console.log("XYZ");
// };

// xyz();