import axios from "axios";
import postEntry from "../../components/assets/entryMarkup";

export const fetchData = async ({ commit }) => {
  const res = await axios.get("http://localhost:8080/entries/normalized");
  commit("setData", res.data);
};

export const addRow = ({ commit }) => {
  commit("addRowMutation");
};

export const removeRow = ({ commit }) => {
  commit("removeRowMutation");
};

export const sendData = ({ commit, state }) => {
  axios
    .post("http://localhost:8080/entries/create", {
      entryData: JSON.stringify(new postEntry(state.tableData))
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export const changeColValue = ({ commit }, columnData) => {
  commit("changeColValueMutation", columnData);
};
