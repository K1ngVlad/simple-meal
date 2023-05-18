import s from './SideElem.module.css';

const SideElem = ({ strCategory }) => {
  return <li className={s.sideElem}>{strCategory}</li>;
};

export { SideElem };
