import s from './Hero.module.css';
import { SearchForm } from './SearchForm';

const Hero = () => {
  return (
    <section className={s.hero}>
      <SearchForm />
      <h2 className={s.title}>What is your favorite meal?</h2>
      <span className={s.descript}>PERSONALIZE YOUR EXPERIENCE</span>
    </section>
  );
};

export { Hero };
