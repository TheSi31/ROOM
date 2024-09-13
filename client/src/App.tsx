import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import axios from 'axios';

import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Buy from './pages/Buy';

import Cart from './img/Cart.svg';
import Maps from './img/Maps.svg';

// Определяем интерфейс для объектов залов
interface Hall {
    id: number;
    name: string;
}

const App = () => {
    const { t } = useTranslation();
    const [isChangingLanguage, setIsChangingLanguage] = useState(false);
    const [halls, setHalls] = useState<Hall[]>([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const changeLanguage = (lng: string) => {
        setIsChangingLanguage(true);
        i18n.changeLanguage(lng)
            .then(() => setIsChangingLanguage(false))
            .catch((error) => {
                console.error('Ошибка при смене языка', error);
                setIsChangingLanguage(false);
            });
    };

    const loadHalls = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/halls');
            setHalls(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadHalls();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <BrowserRouter>
            <div className='header'>
                <div className='top'>
                    <p>{t('contact')}</p>
                    <p>TEL 646-791-3333</p>
                    <select
                        disabled={isChangingLanguage}
                        onChange={(e) => changeLanguage(e.target.value)}
                        defaultValue={i18n.language}
                    >
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>
                </div>
                <div className='menu'>
                    <div className={isMenuOpen ? 'burger_open' : 'burger'} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <Link to='/' className='logo'>
                        <h2>R</h2>
                        <h2>O</h2>
                        <h2>O</h2>
                        <h2>M</h2>
                    </Link>
                    <ul className={isMenuOpen ? 'open' : ''}>
                        <li>
                            <Link to="/" onClick={toggleMenu}>{t('home')}</Link>
                        </li>
                        <li>
                            <Link to="/products" onClick={toggleMenu}>{t('products')}</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={toggleMenu}>{t('about')}</Link>
                        </li>
                    </ul>
                    <div className='extras'>
                        <div className="select-wrapper">
                            <select>
                                {halls.map((hall) => (
                                    <option key={hall.id} value={hall.id}>
                                        {hall.name}
                                    </option>
                                ))}
                            </select>
                            <div className="custom-arrow" style={{ backgroundImage: `url(${Maps})` }}></div>
                        </div>
                        <Link to='/buy'><img src={Cart} alt="Cart" /></Link>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path='/products' component={Products} />
                <Route path='/buy' component={Buy} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;

