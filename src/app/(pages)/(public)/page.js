'use client';
import Cards from "../../components/ui/Cards";
import ConceptualSec from "../../components/ui/ConceptualSec";
import HeroMain from "../../components/ui/HeroMain";
import InsurancePlan from "../../components/ui/InsurancePlan";
import { useEffect } from "react";
import axios from "axios";


export default function Home() {


  useEffect(() => {
    axios.interceptors.request.use(
      function (config) {
        console.log(config);
        config.withCredentials = true;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }, []);


  return (
    <>
      <HeroMain />
      <ConceptualSec />
      <Cards />
      <InsurancePlan />
    </>
  );
}