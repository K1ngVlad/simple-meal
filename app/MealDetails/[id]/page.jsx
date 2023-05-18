import { Title } from '@/app/UI/Title';

import s from './MealDetails.module.css';
import { InstructionsInfo, MealInfo, MeasureInfo } from './components';

const getMeal = async (id) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();

  return data.meals[0];
};

const getIngredients = (api) => {
  const ingredients = [];
  for (const key in api) {
    if (key.includes('strIngredient') && api[key]?.trim()) {
      ingredients.push(api[key]);
    }
  }
  return ingredients;
};

const getMeasures = (api) => {
  const measures = [];
  for (const key in api) {
    if (key.includes('strMeasure') && api[key]?.trim()) {
      measures.push(api[key]);
    }
  }
  return measures;
};

export default async function MealDetails({ params }) {
  const id = params.id;
  const meal = await getMeal(id);
  const {
    strMealThumb,
    strMeal,
    strTags,
    strSource,
    strCategory,
    strInstructions,
  } = meal;
  const ingredients = getIngredients(meal);
  const measures = getMeasures(meal);
  return (
    <main>
      <section>
        <Title>Meal Details</Title>
        <article className={s.mealDetails}>
          <MealInfo
            ingredients={ingredients}
            strMealThumb={strMealThumb}
            strMeal={strMeal}
            strTags={strTags}
            strSource={strSource}
            strCategory={strCategory}
          />
          <MeasureInfo measures={measures} />
          <InstructionsInfo strInstructions={strInstructions} />
        </article>
      </section>
    </main>
  );
}

export { MealDetails };
