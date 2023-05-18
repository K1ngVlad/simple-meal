import { BurgerBtn } from './BurgerBtn';
import s from './Header.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}> SimpleMeal</h1>
      {/* <BurgerBtn /> */}
    </header>
  );
};

export { Header };
