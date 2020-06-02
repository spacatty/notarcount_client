const createLocalData = data => {
  let FD = [];
  data.forEach(client => {
    client.totalExpense =
      client.translatorCost +
      client.notariusCost +
      client.courierCost +
      client.seller +
      courier.manager;
    client.revenueAmount = client.totalAmount - client.totalExpense;
    FD.push(client);
  });
  return FD;
};

const createTotalData = data => {
  let TI = 0,
    TE = 0,
    TR = 0,
    TD = 0;
  data.forEach(client => {
    TI += client.totalAmount;
    TE += client.totalExpense;
    TR += client.revenueAmount;
    TD += client.documentsCount;
  });
  return [
    {
      totalIncome: TI,
      totalExpense: TE,
      totalCount: TR,
      documentsCount: TD
    }
  ];
};

class postEntry {
  constructor(data) {
    this.firstData = createLocalData(data);
    this.totalData = createTotalData(data);
  }
}

export default postEntry;
