let stocks = {
  Fruits: ["Strawberry", "Mango", "Kiwi", "Avacado", "Banana"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "cherries", "sprinkles"],
};


let is_shop_open = false;
const process = document.querySelector(".process");

function time(ms){
  return new Promise((resolve, reject)=>{
    if(is_shop_open){
      setTimeout(resolve, ms);
    }else{
      reject(console.log("Shop is closed!"))
    }
  })
}

async function kitchen(){
  try{
    await time(2000)
    process.innerHTML = `${stocks.Fruits[0]} was selected.`;

    await time(1000)
    process.innerHTML= "The production has been started!";

    await time(2000)
    process.innerHTML= "The fruits has been chopped for delicious icecream.";

    await time(2000)
    process.innerHTML= `${stocks.liquid[0]} and ${stocks.liquid[1]} are added for that refreshing flavor. `;

    await time(2000)
    process.innerHTML= "The machine has started. Be ready!!";

    await time(2000)
    process.innerHTML= `Icecream is placed on ${stocks.holder[1]}. Almost there hold on!`;

    await time(2000)
    process.innerHTML= `Alot ${stocks.toppings[1]} and ${stocks.toppings[2]} were added as toppings, Yummmm MOUTHWATERING!`;

    await time(2000)
    process.innerHTML= "Your delicious ICECREAM  is here!!! Enjoyy !!";                            



  }catch(error){
    console.log("Customer Left", error)
  }finally{
    await time(2000)
    process.innerHTML= "Day ended, Shop is closed";
  }
}
kitchen();
// const order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(
//         setTimeout(()=>{
//            process.innerHTML = "Our shop is closed! Sorry for inconvenience.";
//         },0))
//     }
//   });
// };

// //promise chain
// order(2000, () => {
//   process.innerHTML = `${stocks.Fruits[0]} was selected.`
// })
// .then(() => {
//     return order(1000, ()=>{
//        process.innerHTML= "The production has been started!";
//     })
// })
// .then(()=>{
//     return order(3000, ()=>{
//        process.innerHTML= "The fruits has been chopped for delicious icecream.";
//     })
// })
// .then(()=>{
//     return order(2000, ()=>{
//        process.innerHTML= `${stocks.liquid[0]} and ${stocks.liquid[1]} are added for that refreshing flavor. `;
//     })
// })
// .then(()=>{
//     return order(2000,()=>{
//        process.innerHTML= "The machine has started. Be ready!!";

//     })
// })
// .then(()=>{
//     return order(3000,()=>{
//        process.innerHTML= `Icecream is placed on ${stocks.holder[1]}. Almost there hold on!`;
//     })
// })
// .then(()=>{
//     return order(2000, ()=>{
//        process.innerHTML= `Alot ${stocks.toppings[1]} and ${stocks.toppings[2]} were added as toppings, Yummmm MOUTHWATERING!`;
//     })
// })
// .then(()=>{
//     return order(2000,()=>{
//        process.innerHTML= "Your delicious ICECREAM  is here!!! Enjoyy !!";                            
//     })
// })

// //error handling
// .catch(()=>{
//     process.innerHTML= `${stocks.Fruits[0]} was selected. Customer left!`;
// })

// .finally(()=>{
//     setTimeout(()=>{
//         process.innerHTML = "Day ended, Shop is closed.";
//     },2000)
// })


// let order = (Fruit_name, call_production) => {

//     setTimeout(()=> {
//         console.log(`${stocks.Fruits[Fruit_name]} was selected`);
//         call_production();

//     }, 2000)
// }
// let production = () => {
//     setTimeout(()=>{
//         console.log("The production has been started!");

//         setTimeout(()=>{
//             console.log("The fruits has been chopped for delicious icecream.");

//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added for that refreshing flavor. `);

//                 setTimeout(()=>{
//                     console.log("The machine has started. Be ready!!");

//                     setTimeout(()=>{
//                         console.log(`Icecream is placed on ${stocks.holder[1]}. Almost there hold on!`);

//                         setTimeout(()=>{
//                             console.log(`Alot ${stocks.toppings[1]} and ${stocks.toppings[2]} were added as toppings, Yummmm MOUTHWATERING!`);

//                             setTimeout(()=>{
//                                 console.log("Your delicious ICECREAM  is here!!! Enjoyy !!");
//                             }, 1000);
//                         }, 3000)
//                     }, 2000)
//                 }, 1000)
//             },1000)
//         }, 2000)
//     }, 0);
// }

// order(0, production);