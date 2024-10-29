import React, { useEffect, useState } from "react";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { fetchData } from "../../Utils/fetchData";
import { Header } from "../../components/Header_Footer/Header/Header";
import { Footer } from "../../components/Header_Footer/Footer/Footer";
import styles from "./Shulka.module.css";

export function Shulka() {
  const [shulkaData, setShulkaData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData();
        if (data && data.shulkaData) {
          setShulkaData(data.shulkaData);
        } else {
          throw new Error("Shulka data not found");
        }
      } catch (error) {
        console.error("Error fetching Shulka's data:", error);
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
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.contentWrap}>
        <Portfolio data={shulkaData} />
      </main>
      <Footer />
    </div>
  );
}
