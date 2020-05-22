const emptyEntry = partner => {
  return {
    partnerName: partner,
    documentsCount: 0,
    notariusCost: 0,
    translatorCost: 0,
    courierCost: 0,
    revenueAmount: 0,
    totalAmount: 0,
    manager: 0,
    seller: 0
  };
};

export default emptyEntry;
