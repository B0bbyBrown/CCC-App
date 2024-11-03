import React, { useState, useEffect } from "react";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { Loading } from "../../components/Loading/Loading";
import { fetchData } from "../../Utils/fetchData";
import { Header } from "../../components/Header_Footer/Header/Header";
import { Footer } from "../../components/Header_Footer/Footer/Footer";

export const Shulka = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Shulka component mounted");
    const getData = async () => {
      try {
        console.log("Fetching Shulka data...");
        const result = await fetchData("shulkaData.json");
        console.log("Shulka data received:", result);
        // Access the specific shulkaData object
        setData(result.shulkaData);
      } catch (error) {
        console.error("Error loading Shulka data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  console.log("Shulka render state:", { isLoading, data, error });

  if (error) return <div>Error loading portfolio: {error.message}</div>;
  if (isLoading || !data) return <Loading />;

  return (
    <>
      <Header />
      <Portfolio data={data} portfolioType="light" />
      <Footer />
    </>
  );
};
