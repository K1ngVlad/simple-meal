import Link from 'next/link';
import s from './MealElem.module.css';

const MealElem = (props) => {
  const { strMeal, strMealThumb, idMeal, strCategory, strArea } = props;
  return (
    <Link href={`/MealDetails/${idMeal}`}>
      <article className={s.mealElem}>
        <img draggable={false} alt={strMeal} src={strMealThumb} />
        <div className={s.info}>
          {strArea && <span className={s.area}>{strArea}</span>}
          <span>{strMeal}</span>
        </div>
        {strCategory && <div className={s.categ}>{strCategory}</div>}
      </article>
    </Link>
  );
};

export { MealElem };
