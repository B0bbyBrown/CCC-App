import React, { useState, useEffect } from "react";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { Loading } from "../../components/Loading/Loading";
import { fetchData } from "../../Utils/fetchData";
import { Header } from "../../components/Header_Footer/Header/Header";
import { Footer } from "../../components/Header_Footer/Footer/Footer";

export const Keshav = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Keshav component mounted");
    const getData = async () => {
      try {
        console.log("Fetching Keshav data...");
        const result = await fetchData("keshavData.json");
        console.log("Keshav data received:", result);
        setData(result.keshavData);
      } catch (error) {
        console.error("Error loading Keshav data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  console.log("Keshav render state:", { isLoading, data, error });

  if (error) return <div>Error loading portfolio: {error.message}</div>;
  if (isLoading || !data) return <Loading />;

  return (
    <>
      <Header />
      <Portfolio data={data} portfolioType="dark" />
      <Footer />
    </>
  );
};
