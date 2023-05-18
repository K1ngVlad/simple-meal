'use client';

import { useContext } from 'react';
import s from './BurgerBtn.module.css';
import { SidebarContext } from '@/app/contexts';

const BurgerBtn = () => {
  const { openSidebar } = useContext(SidebarContext);
  return (
    <button onClick={openSidebar} className={s.burgerBtn}>
      Открыть меню
    </button>
  );
};

export { BurgerBtn };
