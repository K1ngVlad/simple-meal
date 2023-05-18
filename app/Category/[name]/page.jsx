import { Title } from '@/app/UI/Title';
import { Meals } from '@/app/components';
import { CategoryDescript } from '../CategoryDescript';

const getMeels = async (name) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
  );

  return response.json();
};

const getDescript = async (name) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  const data = await response.json();
  return data.categories.find((e) => e.strCategory === name)
    .strCategoryDescription;
};

export default async function Category({ params }) {
  const name = params.name;
  const descript = getDescript(name);
  const data = await getMeels(name);
  return (
    <main>
      <CategoryDescript name={name} descript={descript} />
      <Meals meals={data.meals} />
    </main>
  );
}
