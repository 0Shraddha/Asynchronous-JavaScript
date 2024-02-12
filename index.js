let order = (call_production) => {
    console.log("Call Production!");
call_production();
}
let production = () => {
    console.log("Order received!");
}

order(production);