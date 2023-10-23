import style from './PagPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import styleTema from 'styles/Tema.module.scss';

export default function PagPadrao() {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__text} >
          A casa do código e da massa
        </div>
      </header>
      <div className={styleTema.container}>
        <Outlet />
      </div>
    </>
  );
}