const userInputOrder = prompt(
  "Enter your Order here",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const userInfor = userInputOrder.split(",");
console.table(userInfor);

function checkingForFlavor(userInfor) {
  const flavorObj = {};

  for (let i = 0; i < userInfor.length; i++) {
    flavorObj[userInfor[i]] = (flavorObj[userInfor[i]] || 0) + 1;
  }
  return flavorObj;
}
console.table(checkingForFlavor(userInfor));
