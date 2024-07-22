const fetchData = async () => {
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
    Object.keys(data.categories).forEach((category) => {
      if (!combinedCategories[category]) {
        combinedCategories[category] = {};
      }
      combinedCategories[category][name] = data.categories[category];
    });
  };

  addCategories(keshavData, "Keshav");
  addCategories(shulkaData, "Shulka");

  return { companyData, keshavData, shulkaData, combinedCategories };
};

export default fetchData;
