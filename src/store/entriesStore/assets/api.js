const API = {
  getEnreies: process.env.DEV
    ? "http://localhost:8080/entries/normalized"
    : "/entries/normalized",
  registerEntries: process.env.DEV
    ? "http://localhost:8080/entries/create"
    : "/entries/create"
};

export default API;
