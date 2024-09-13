"use client"; // remove this line if you choose Pages Router
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { MyLayout } from "./ui/MyLayout";
import { MyDashboard } from "./ui/MyDashboard";
import { PostCreate } from "./ui/PostCreate";
import BookIcon from '@mui/icons-material/Book';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
import axios from "axios";
import { useEffect, useState } from "react";




// const dataProvider = jsonServerProvider("https://oneclick-server-x09s.onrender.com/api/v1/");
const dataProvider = jsonServerProvider("https://oneclick-server-x09s.onrender.com/api/v1/partner");

console.log(dataProvider)

const AdminApp = () =>{

  useEffect(() => {
    axios.get('https://oneclick-server-x09s.onrender.com/api/v1/partner/getInvoices')
        .then(response => {
            console.log('my response',response)
        })
        .catch(error => {
            setError(error);
        });
}, []);

 return (
  <Admin dataProvider={dataProvider} layout={MyLayout} dashboard={MyDashboard}>
        <Resource name="posts" list={ListGuesser} icon={BookIcon} />
        <Resource name="getInvoices" list={ListGuesser} icon={ChatBubbleIcon} />
        <Resource name="users" list={ListGuesser} icon={PeopleIcon} />
  </Admin>
);
}

export default AdminApp;