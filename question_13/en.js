// For each product passing through customs, 18% VAT (Value Added Tax), 20% SCT (Special Consumption Tax), 10% Customs Duty, 5% Environmental Tax and 2% Stamp Duty are collected. Using these rates, the tax fees for each tax type must be calculated based on the customs price and the total sales price must be found by including these taxes. Create a function that performs this operation and returns this price where the function is called.

function calculateTotalPrice(customsPrice) {
  const VAT_RATE = 0.18;
  const SCT_RATE = 0.2;
  const CUSTOMS_DUTY_RATE = 0.1;
  const ENVIRONMENTAL_TAX_RATE = 0.05;
  const STAMP_TAX_RATE = 0.02;

  let vatAmount = customsPrice * VAT_RATE;
  let sctAmount = customsPrice * SCT_RATE;
  let customsDutyAmount = customsPrice * CUSTOMS_DUTY_RATE;
  let environmentalTaxAmount = customsPrice * ENVIRONMENTAL_TAX_RATE;
  let stampTaxAmount = customsPrice * STAMP_TAX_RATE;

  let totalPrice =
    customsPrice +
    vatAmount +
    sctAmount +
    customsDutyAmount +
    environmentalTaxAmount +
    stampTaxAmount;

  return totalPrice;
}

const customsPrice = parseInt(prompt("Enter the Customs Price of the Product"));
const salePrice = calculateTotalPrice(customsPrice);
console.log("Total Price:", salePrice.toFixed(2));
