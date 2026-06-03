import './App.css';

import { Route, Routes } from 'react-router-dom';

import { Character } from './pages/character/Character';
import { Characters } from './pages/characters/Characters';
import { Layout } from './shared/components/layout/Layout';

export function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Characters />} />
                <Route path='/character/:id' element={<Character />} />
            </Route>
        </Routes>
    );
}
