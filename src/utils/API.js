// utils/API.js

import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {

    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};


// import axios from "axios";

// export default axios.create({
//   baseURL: "https://randomuser.me/api/",
//   responseType: "json"
// });

