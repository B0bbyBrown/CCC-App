const fetchData = async () => {
  try {
    const [companyData, keshavData, shulkaData] = await Promise.all([
      fetch("/src/components/Diagram/Utils/Json/companyData.json").then((res) =>
        res.json()
      ),
      fetch("/src/components/Diagram/Utils/Json/keshavData.json").then((res) =>
        res.json()
      ),
      fetch("/src/components/Diagram/Utils/Json/shulkaData.json").then((res) =>
        res.json()
      ),
    ]);

    const combinedCategories = {};
    const addCategories = (data, name) => {
      Object.keys(data.categories).forEach((key) => {
        if (!combinedCategories[key]) {
          combinedCategories[key] = {};
        }
        combinedCategories[key][name] = data.categories[key];
      });
    };

    addCategories(keshavData, "Keshav");
    addCategories(shulkaData, "Shulka");

    return { companyData, keshavData, shulkaData, combinedCategories };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;
