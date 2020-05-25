import emptyEntry from "../../components/assets/emptyEntry";
import postEntry from "./assets/entryMarkup";
import { Notify } from "quasar";

export const setData = (state, data) => {
  state.appData = data.appData;
  state.appData.arrayOfWeeks.reverse();
  Notify.create({
    message: "Приятного просмотра!",
    type: "positive"
  });
};

export const addRowMutation = state => {
  const rowIndex = state.tableData.length + 1;
  const actualRow = emptyEntry(`>`);
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

export const changeColValueMutation = (state, columnData) => {
  columnData.colName === "partnerName"
    ? (state.tableData[columnData.rowIndex][columnData.colName] =
        columnData.newValue)
    : (state.tableData[columnData.rowIndex][columnData.colName] = parseInt(
        columnData.newValue
      ));
};

export const prepareData = state => {
  Notify.create({
    message: "Сохраняем...",
    type: "warning",
    position: "top-right"
  });
  state.preparedData = new postEntry(state.tableData);
};

export const regEntry = state => {
  Notify.create({
    message: "Сохранили! ;)",
    type: "positive",
    position: "top-right"
  });
  (state.prepareData = null), (state.tableData = []);
  state.appData = [];
};

export const throwError = data => {
  Notify.create({
    message: `Лёша, смотри! ${data}`,
    type: "negative",
    timeout: 1000000
  });
  throw data;
};

export const throwEmptyWarning = () => {
  Notify.create({
    message: "А отчёт-то пустенький...",
    type: "warning"
  });
};
