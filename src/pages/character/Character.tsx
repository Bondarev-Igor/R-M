import './Character.css';

import { useNavigate, useParams } from 'react-router-dom';

export function Character() {
    const { id } = useParams();
    const navigate = useNavigate();

    function handleBack() {
        void navigate(-1);
    }

    return (
        <div className='character-page'>
            {/* по макету: кнопка «Назад» только здесь */}
            <button type='button' className='character-page__back' onClick={handleBack}>
                Назад
            </button>

            <h1 className='character-page__title'>Персонаж #{id}</h1>

            {/* заглушка контента — позже: fetch + картинка, статус и т.д. */}
            <div className='character-page__card'>
                <div className='character-page__image-placeholder'>Фото</div>
                <dl className='character-page__info'>
                    <dt>Имя</dt>
                    <dd>Rick Sanchez (заглушка)</dd>
                    <dt>Статус</dt>
                    <dd>Alive (заглушка)</dd>
                    <dt>Вид</dt>
                    <dd>Human (заглушка)</dd>
                </dl>
            </div>
        </div>
    );
}
