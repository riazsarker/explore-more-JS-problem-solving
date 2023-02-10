function oilPrice(dieselLiters, petrolLiters, octaneLiters) {
    const dieselPrice = 114 * dieselLiters;
    const petrolPrice = 130 * petrolLiters;
    const octanePrice = 135 * octaneLiters;
  
    return dieselPrice + petrolPrice + octanePrice;
  }
  
  const dieselLiters = 5;
  const petrolLiters = 3;
  const octaneLiters = 2;
  
  const totalCost = oilPrice(dieselLiters, petrolLiters, octaneLiters);
  
  console.log(`The total cost is: ${totalCost} rupees.`);

  