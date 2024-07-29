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
    console.log("Company Data:", companyData);
    console.log("Keshav Data:", keshavData);
    console.log("Shulka Data:", shulkaData);

    // Combine categories from Keshav and Shulka
    const combinedCategories = {};
    const addCategories = (data) => {
      Object.keys(data.categories).forEach((key) => {
        if (!combinedCategories[key]) {
          combinedCategories[key] = [];
        }
        const categoryData = data.categories[key];
        if (Array.isArray(categoryData)) {
          combinedCategories[key] = [
            ...combinedCategories[key],
            ...categoryData,
          ];
        } else {
          combinedCategories[key].push(categoryData);
        }
      });
    };

    addCategories(keshavData);
    addCategories(shulkaData);

    console.log("Combined Categories:", combinedCategories);

    return { companyData, keshavData, shulkaData, combinedCategories };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;
