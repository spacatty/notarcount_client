import emptyEntry from "../../components/assets/emptyEntry";

export const setData = (state, data) => {
  state.appData = data.appData;
  state.appData.arrayOfWeeks.reverse();
};

export const addRowMutation = state => {
  const rowIndex = state.tableData.length + 1;
  const actualRow = emptyEntry(`Партнёр ${rowIndex}`);
  state.tableData = [
    ...state.tableData.slice(0, rowIndex),
    actualRow,
    ...state.tableData.slice(rowIndex)
  ];
};

export const removeRowMutation = state => {
  const index = state.tableData.length;
  state.tableData = [...state.tableData.slice(0, index - 1)];
};

export const clearTable = state => {
  state.tableData = [];
};

export const changeColValueMutation = (state, columnData) => {
  state.tableData[columnData.rowIndex][columnData.colName] =
    columnData.newValue;
};
