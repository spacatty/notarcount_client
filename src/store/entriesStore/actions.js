import axios from 'axios'

export const  fetchData = async ({ commit }) => {
  const res = await axios.get('http://localhost:8080/entries/normalized')
  commit('setData', res.data)
};


