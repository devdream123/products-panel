export const calculateSumCannibalisedProds = (cannibalisedProdRevenueList) => {
  if(calculateSumCannibalisedProds && calculateSumCannibalisedProds.length > 0){
    let sum = 0;
    cannibalisedProdRevenueList.map(prod => {
      sum += prod.revenue; 
    });
    return sum;
  }
};