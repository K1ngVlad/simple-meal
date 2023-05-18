import Link from 'next/link';
import s from './CategoryElem.module.css';

const CategoryElem = (props) => {
  const { strCategory, strCategoryThumb } = props;
  return (
    <Link href={`/Category/${strCategory}`}>
      <article className={s.categoryElem}>
        <span className={s.name}>{strCategory}</span>
        <img draggable={false} alt={strCategory} src={strCategoryThumb} />
      </article>
    </Link>
  );
};

export { CategoryElem };
