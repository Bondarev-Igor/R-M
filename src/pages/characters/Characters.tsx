import './Characters.css';

import { Link } from 'react-router-dom';

export function Characters() {
    return (
        <div className='characters-page'>
            {/* по макету: крупный логотип только на этой странице */}
            <div className='characters-page__hero-logo' aria-hidden>
                LOGO
            </div>

            <h1 className='characters-page__title'>Персонажи</h1>

            {/* заглушка списка — позже замените на карточки из API */}
            <ul className='characters-page__list'>
                <li>
                    <Link to='/character/1'>Rick Sanchez</Link>
                </li>
                <li>
                    <Link to='/character/2'>Morty Smith</Link>
                </li>
            </ul>

            <p className='characters-page__hint'>
                Заглушка: клик по имени откроет страницу персонажа
            </p>
        </div>
    );
}
