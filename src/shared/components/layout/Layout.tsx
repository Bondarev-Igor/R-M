import './Layout.css';

import { Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <div className='layout'>
            <header>{/* лого, заглушки */}</header>
            <main>
                <Outlet /> {/* здесь рендерится Characters или Character */}
            </main>
            <footer>{/* текст с вашим ником */}</footer>
        </div>
    );
}
