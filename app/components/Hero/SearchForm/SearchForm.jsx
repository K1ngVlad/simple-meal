'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import search from '../../../assets/search.svg';

import s from './SearchForm.module.css';

const SearchForm = () => {
  const [value, setValue] = useState('');
  const { push } = useRouter();

  const onSubmitHeandler = (e) => {
    e.preventDefault();
    push(`/Search/${value}`);
  };

  return (
    <form onSubmit={(e) => onSubmitHeandler(e)} className={s.searchForm}>
      <input
        placeholder="Search recipes here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>
        <Image
          draggable={false}
          width={30}
          height={30}
          alt="search"
          src={search}
        ></Image>
      </button>
    </form>
  );
};

export { SearchForm };
