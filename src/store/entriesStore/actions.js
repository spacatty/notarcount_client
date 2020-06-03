import axios from "axios";
import API from "./assets/api";
import { Loading } from "quasar";

export const fetchData = ({ commit }) => {
  Loading.show();
  axios
    .get(API.getEnreies)
    .then(res => {
      commit("setData", res.data);
      Loading.hide();
    })
    .catch(err => {
      commit("throwError", err);
    });
};

export const addRow = ({ commit }) => {
  commit("addRowMutation");
};

export const removeRow = ({ commit }) => {
  commit("removeRowMutation");
};

export const sendData = ({ commit, dispatch, state }) => {
  if (state.tableData.length > 0) {
    commit("prepareData");
  axios
    .post(API.registerEntries, {
      entryData: state.preparedData
    })
    .then(res => {
      commit("regEntry", res);
      dispatch("fetchData");
    })
    .catch(err => commit("throwError", err));
  } else {
    commit("throwEmptyWarning")
  }
};

export const changeColValue = ({ commit }, columnData) => {
  commit("changeColValueMutation", columnData);
};
