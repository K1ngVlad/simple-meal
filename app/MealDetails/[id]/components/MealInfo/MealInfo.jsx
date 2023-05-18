import { IngredientsInfo } from './IngredientsInfo';
import s from './MealInfo.module.css';

const MealInfo = (props) => {
  const {
    strMealThumb,
    strMeal,
    strTags,
    strSource,
    strCategory,
    ingredients,
  } = props;
  const tags = strTags && strTags.split(',');
  return (
    <div className={s.mealInfo}>
      <img
        draggable={false}
        className={s.img}
        alt={strMeal}
        src={strMealThumb}
      />
      <div className={s.content}>
        <h3 className={s.title}>{strMeal}</h3>
        <div className={s.category}>
          <b>CATEGORY:</b> <span>{strCategory.toUpperCase()}</span>
        </div>
        <div className={s.source}>
          <b>Source:</b> <span>{strSource || 'No source'}</span>
        </div>
        <div className={s.tags}>
          <b>Tags:</b>{' '}
          <span>
            {tags
              ? tags.map((tag) => (
                  <span key={tag} className={s.tag}>
                    {tag}
                  </span>
                ))
              : 'No tags'}
          </span>
        </div>
        <IngredientsInfo ingredients={ingredients} />
      </div>
    </div>
  );
};

export { MealInfo };
