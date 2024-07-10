export const fetchData = async () => {
  const companyResponse = await fetch(
    "/src/components/Diagram/Utils/companyData.json"
  );
  const keshavResponse = await fetch(
    "/src/components/Diagram/Utils/keshavData.json"
  );
  const shulkaResponse = await fetch(
    "/src/components/Diagram/Utils/shulkaData.json"
  );

  const companyData = await companyResponse.json();
  const keshavData = await keshavResponse.json();
  const shulkaData = await shulkaResponse.json();

  return {
    companyData,
    keshavData,
    shulkaData,
  };
};
