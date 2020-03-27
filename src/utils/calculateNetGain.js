export const calculateNetGain = (selectedProdRev, currentProdRev, sumCanProdRevenue) => {
  const result = selectedProdRev - currentProdRev - sumCanProdRevenue;
  return result;
};