import React from 'react';
import Stars from './components/Stars';

const App = () => {
    return (
        <div>
            <h1>Фильм</h1>
            <Stars count={5} /> {/* Начальный рейтинг 3 звезды */}
        </div>
    );
};

export default App;


