import React, { useEffect, useState } from "react";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { fetchData } from "../../Utils/fetchData";
import { Header } from "../../components/Header_Footer/Header/Header";
import { Footer } from "../../components/Header_Footer/Footer/Footer";
export function Keshav() {
  const [keshavData, setKeshavData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData();
        if (data && data.keshavData) {
          console.log("Keshav Data:", data.keshavData);
          setKeshavData(data.keshavData);
        } else {
          throw new Error("Keshav data not found");
        }
      } catch (error) {
        console.error("Error fetching Keshav's data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="keshav-container">
        <Portfolio data={keshavData} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
