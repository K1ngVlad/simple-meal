import s from './SideBar.module.css';

// const getCategories = async () => {
//   const response = await fetch(
//     'https://www.themealdb.com/api/json/v1/1/categories.php'
//   );
//   return response.json();
// };

const SideBar = () => {
  return <aside className={s.sideBar}></aside>;
};

export { SideBar };
