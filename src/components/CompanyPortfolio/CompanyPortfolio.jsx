import React, { useEffect, useState } from "react";
import { fetchData } from "../../Utils/fetchData";
import { Projects } from "./components/Projects/Projects";
import { Clients } from "./components/ClientC/Clients";
import { Partnerships } from "./components/Partnerships/Partnerships";
import { Achievements } from "./components/Achievements/Achievements";
import { Goals } from "./components/Goals/Goals";
import styles from "./CompanyPortfolio.module.css";

export const CompanyPortfolio = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const result = await fetchData();
      if (result && result.companyData) {
        setData(result.companyData);
      }
    }
    loadData();
  }, []);

  if (!data) return <div className={styles.loading}>Loading...</div>;

  const { name, description, founded, location, employees, categories } = data;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.companyInfo}>
        <p>Founded: {founded}</p>
        <p>Location: {location}</p>
        <p>Employees: {employees}</p>
      </div>

      {categories && categories.Projects && (
        <Projects projects={categories.Projects} />
      )}
      {categories && categories.Clients && (
        <Clients clients={categories.Clients} />
      )}
      {categories && categories.Partnerships && (
        <Partnerships partnerships={categories.Partnerships} />
      )}
      {categories && categories.Achievements && (
        <Achievements achievements={categories.Achievements} />
      )}
      {categories && categories.Goals && <Goals goals={categories.Goals} />}
    </div>
  );
};
