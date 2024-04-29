export async function getCountriesByRegion({ region }) {
  const res = await fetch(`https://restcountries.com/v3.1/region/${region} `);
  const data = await res.json();
  if (!res.ok) throw new Error("faild to fetch Countries");
  return data;
}

export async function getCountryByName({ name }) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const data = await res.json();
  if (!res.ok) throw new Error("error to fetch the Country");
  return data;
}
