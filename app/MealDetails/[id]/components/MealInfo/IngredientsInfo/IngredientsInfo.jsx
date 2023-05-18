import s from './IngredientsInfo.module.css';

const IngredientsInfo = ({ ingredients }) => {
  return (
    <div className={s.ingredientsInfo}>
      <h3>Ingredients:</h3>
      <div className={s.box}>
        {ingredients.map((ingredient, index) => (
          <div key={ingredient} className={s.ingredient}>
            <div className={s.index}>{index + 1}</div>
            <span>{ingredient}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { IngredientsInfo };
