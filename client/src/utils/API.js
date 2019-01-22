import axios from "axios";

export default {
  // Gets all shinbay
  getAdmin: function () {
    return axios.get("/api/shinbay");
  },
  // Gets the shindata with the given id
  getShindata: function (id) {
    return axios.get("/api/shinbay/" + id);
  },
  // Deletes the shindata with the given id
  deleteShindata: function (id) {
    return axios.delete("/api/shinbay/" + id);
  },
  // Saves a shindata to the database
  saveShindata: function (shindataData) {
    return axios.post("/api/shinbay", shindataData);
  },
  // Edit a shindata to the database
  editShindata: function (shindataData) {
    return axios.put("/api/shinbay/" + shindataData._id, shindataData);
  }
};
