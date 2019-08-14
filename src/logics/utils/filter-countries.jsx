export const filterByRegion = (countries, query) => {
  if (!query) return countries;

  const reg = new RegExp(query);
  return countries.filter((country) => reg.test(country.region));
};

export const filterByName = (countries, query) => {
  if (!query) return countries;

  const reg = new RegExp(query.toLowerCase());
  return countries.filter((country) => reg.test(country.name.toLowerCase()));
};
