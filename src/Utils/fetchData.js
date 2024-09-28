export const fetchData = async () => {
  try {
    const [companyData, keshavData, shulkaData] = await Promise.all([
      fetch("/Json/companyData.json").then((res) => res.json()),
      fetch("/Json/keshavData.json").then((res) => res.json()),
      fetch("/Json/shulkaData.json").then((res) => res.json()),
    ]);

    return { companyData, keshavData, shulkaData };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
