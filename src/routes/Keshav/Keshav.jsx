import React, { useEffect, useState } from "react";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { fetchData } from "../../Utils/fetchData";
import { Header } from "../../components/Header_Footer/Header/Header";
import { Footer } from "../../components/Header_Footer/Footer/Footer";
import styles from "./Keshav.module.css";

export function Keshav() {
  const [keshavData, setKeshavData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData();
        console.log("Fetched data:", JSON.stringify(data, null, 2));
        if (data && data.keshavData) {
          console.log("Keshav Data:", JSON.stringify(data.keshavData, null, 2));
          setKeshavData(data.keshavData);
        } else {
          console.log("Keshav data not found in fetched data");
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

  console.log(
    "Rendering Keshav component with data:",
    JSON.stringify(keshavData, null, 2)
  );

  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.contentWrap}>
        <Portfolio data={keshavData} />
      </main>
      <Footer />
    </div>
  );
}
