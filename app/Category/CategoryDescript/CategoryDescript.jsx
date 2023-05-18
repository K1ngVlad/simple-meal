import s from './CategoryDescript.module.css';

const CategoryDescript = (props) => {
  const { name, descript } = props;
  return (
    <section className={s.categoryDescript}>
      <div className={s.box}>
        <h3 className={s.name}>{name}</h3>
        <p className={s.descript}>{descript}</p>
      </div>
    </section>
  );
};

export { CategoryDescript };
