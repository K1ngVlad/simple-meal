import { Meals } from '@/app/components';

const getMeels = async (name) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );

  return response.json();
};

export default async function Search({ params }) {
  const name = params.name;
  const data = await getMeels(name);
  return (
    <main>
      <Meals meals={data.meals} />
    </main>
  );
}
