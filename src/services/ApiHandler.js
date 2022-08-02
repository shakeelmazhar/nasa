import axios from "axios";
import { apiHeaders } from "../constants/ApiConstants";


// Generalized API calling method
export const apiRequest = async ({path, method, params, auth_token}) => {
  return new Promise(async (resolve, reject) => {
    options = {
      url: path,
      headers: {
        "Content-Type": apiHeaders.application_json,
        ...(auth_token && {'Authorization': auth_token})
      },
      method: method,
      timeout: apiHeaders.timeOut,
      ...(params && { data: JSON.stringify(params) }),
    };

    axios(options)
      .then((response) => {
        if (response?.status) {
          resolve(response?.data);
        } else {
          reject(response);
        }
      })
      .catch((err) => {
        catError(err?.message);
        console.log("request error: " + path + " ==> ", err?.message);
        reject({ status: false });
      });
  });
};

export const catError = (message) => {
  if (message) {
    alert(message);
  } else {
    alert("Something went wrong! Please try again.");
  }
};
