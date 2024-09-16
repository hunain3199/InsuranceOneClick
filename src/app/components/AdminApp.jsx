"use client"; // remove this line if you choose Pages Router
import {
  Admin,
  Resource,
  ListGuesser,
  radiantLightTheme,
  radiantDarkTheme,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { MyLayout } from "./ui/MyLayout";
import { MyDashboard } from "./ui/MyDashboard";
import { fetchUtils } from "react-admin";
import { PostCreate } from "./ui/PostCreate";
import BookIcon from "@mui/icons-material/Book";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PeopleIcon from "@mui/icons-material/People";
import axios from "axios";
import { useEffect, useState } from "react";


const token = localStorage.getItem("token");

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  options.headers.set("Authorization", `Bearer ${token}`);

  return fetchUtils.fetchJson(url, options).then((response) => {
    if (!response.status || response.status >= 400) {
      // Check for any error responses and reject the Promise with the error
      return Promise.reject(new Error(`HTTP error ${response.status}`));
    }
    return response;
  }).catch((error) => {
    // Handle rejected promises properly
    console.error("HTTP Error:", error);
    return Promise.reject(error); // Reject the promise with the error to be caught by react-admin
  });
};

const customDataProvider = (apiUrl, httpClient) => {
  const dataProvider = jsonServerProvider(apiUrl, httpClient);

  return {
    ...dataProvider,
    getList: (resource, params) => {
      return dataProvider.getList(resource, params).then(({ data, total }) => {
        // Log the response data and total to see where they are coming from
        console.log("API Response data:", data);  // Logs the data array
        console.log("API Response total:", total); // Logs the total number of records

        // Ensure the response data is in the correct format
        return {
          data: data,
          total: total,
        };
      }).catch(error => {
        console.error("Error in getList:", error); // Logs any error in the getList call
        throw error;
      });
    },
    // Other methods can be customized similarly
  };
};


const dataProvider = customDataProvider(
  "http://localhost:8080/api/v1/partner",
  httpClient
);

// console.log(dataProvider);

const AdminApp = () => {

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://oneclick-server-x09s.onrender.com/api/v1/partner/getInvoices"
  //     )
  //     .then((response) => {
  //       console.log("my response", response);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // }, []);

  return (
    <Admin
      dataProvider={dataProvider}
      layout={MyLayout}
      dashboard={MyDashboard}
      theme={radiantLightTheme}
      darkTheme={radiantDarkTheme}
    >
      <Resource name="getInvoices" list={ListGuesser} icon={ChatBubbleIcon} />
    </Admin>
  );
};

export default AdminApp;
