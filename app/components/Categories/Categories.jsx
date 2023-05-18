import { Title } from '@/app/UI/Title';
import s from './Categories.module.css';
import { CategoryElem } from './CategoryElem';

const getCategories = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );
  return response.json();
};

const Categories = async () => {
  const data = await getCategories();
  return (
    <section>
      <Title>Categories</Title>
      <div className={s.categories}>
        {data.categories.map((e) => (
          <CategoryElem {...e} />
        ))}
      </div>
    </section>
  );
};

export { Categories };
