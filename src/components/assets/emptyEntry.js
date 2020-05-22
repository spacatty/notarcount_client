const emptyEntry = (index, partner) => {
  return {
    id: index,
    partnerName: partner,
    documentsCount: 0,
    notariusCost: 0,
    translatorCost: 0,
    courierCost: 0,
    manager: 0,
    seller: 0,
  };
};

export default emptyEntry;
