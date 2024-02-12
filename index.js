let stocks = {
  Fruits: ["Strawberry", "Mango", "Kiwi", "Avacado", "Banana"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "cherries", "sprinkles"],
};

let is_shop_open = true;

const order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed! Sorry for inconvenience."));
    }
  });
};

order(2000, () => {
  console.log(`${stocks.Fruits[0]} was selected.`);
})
.then(() => {
    return order(0, ()=>{
        console.log("The production has been started!");
    })
})
.then(()=>{
    return order(3000, ()=>{
        console.log("The fruits has been chopped for delicious icecream.");
    })
})
.then(()=>{
    return order(1000, ()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added for that refreshing flavor. `);
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log("The machine has started. Be ready!!");

    })
})
.then(()=>{
    return order(2000,()=>{
        console.log(`Icecream is placed on ${stocks.holder[1]}. Almost there hold on!`);
    })
})
.then(()=>{
    return order(2000, ()=>{
        console.log(`Alot ${stocks.toppings[1]} and ${stocks.toppings[2]} were added as toppings, Yummmm MOUTHWATERING!`);
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Your delicious ICECREAM  is here!!! Enjoyy !!");                            
    })
})



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