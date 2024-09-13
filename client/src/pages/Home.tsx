import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Home.css';


import Home_1 from '../img/Home_1.png';

import Product_1 from '../img/Product_1.png';
import Product_2 from '../img/Product_2.png';
import Product_3 from '../img/Product_3.png';
import Product_4 from '../img/Product_4.png';

import Companies_1 from '../img/companies/companies_1.svg';
import Companies_2 from '../img/companies/companies_2.svg';
import Companies_3 from '../img/companies/companies_3.svg';
import Companies_4 from '../img/companies/companies_4.svg';
import Companies_5 from '../img/companies/companies_5.svg';
import Companies_6 from '../img/companies/companies_6.svg';
import Companies_7 from '../img/companies/companies_7.svg';
import Companies_8 from '../img/companies/companies_8.svg';
import Companies_9 from '../img/companies/companies_9.svg';
import Companies_10 from '../img/companies/companies_10.svg';
import Companies_11 from '../img/companies/companies_11.svg';
import Companies_12 from '../img/companies/companies_12.svg';
import Companies_13 from '../img/companies/companies_13.svg';
import Companies_14 from '../img/companies/companies_14.svg';
import Companies_15 from '../img/companies/companies_15.svg';
import Companies_16 from '../img/companies/companies_16.svg';
import Companies_17 from '../img/companies/companies_17.svg';
import Companies_18 from '../img/companies/companies_18.svg'; 

import Slide_1 from '../img/slide/slide_1.png';
import Slide_2 from '../img/slide/slide_2.png';
import Slide_3 from '../img/slide/slide_3.png';

import Slider from '../component/Slider';

import img_1 from '../img/plus/img_1.svg';
import img_2 from '../img/plus/img_2.svg';
import img_3 from '../img/plus/img_3.svg';

import review from '../img/review.png';

import description_1 from '../img/description/description_1.png';
import description_2 from '../img/description/description_2.png';
import description_3 from '../img/description/description_3.png';

import plus_1 from '../img/Shipping.svg';
import plus_2 from '../img/Plug_Play.svg';
import plus_3 from '../img/Returns.svg'; 
import Footer from '../component/Footer';

const companies = [
    Companies_1, Companies_2, Companies_3, Companies_4, Companies_5,
    Companies_6, Companies_7, Companies_8, Companies_9, Companies_10,
    Companies_11, Companies_12, Companies_13, Companies_14, Companies_15,
    Companies_16, Companies_17, Companies_18
];

const imgs = [
    Slide_1,Slide_2,Slide_3
]
const Home = () => {

    const { t } = useTranslation();

    return (
        <div className='main'>
            <img className='home' src={Home_1}></img>
            <div className='text_1'>
                <h2>{t('design_h1')}</h2>
                <p>{t('design_p')}</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <img src={Product_1}></img>
                    <p>{t('product_1')}</p>
                </div>
                <div className='card'>
                    <img src={Product_2}></img>
                    <p>{t('product_2')}</p>
                </div>
                <div className='card'>
                    <img src={Product_3}></img>
                    <p>{t('product_3')}</p>
                </div>
                <div className='card'>
                    <img src={Product_4}></img>
                    <p>{t('product_4')}</p>
                </div>
            </div>
            <div className='companies'>
                <h2>{t('companies_h2')}</h2>
                <p>{t('companies_p')}</p>
                <div className='companies_imgs'>
                    {companies.map((company, index) => (
                            <img key={index} src={company} alt={`Company ${index + 1}`}></img>
                        ))}
                </div>
            </div>
            <Slider imgs={imgs}></Slider>
            <div className='plus'>
                <h2>{t('plus_h2')}</h2>
                <p>{t('plus_p')}</p>
                <div className='plus_cards'>
                    <div className='plus_card'>
                        <img src={img_1}></img>
                        <h3>{t('card_1_h3')}</h3>
                        <p>{t('card_1_p')}</p>
                    </div>
                    <div className='plus_card'>
                        <img src={img_2}></img>
                        <h3>{t('card_2_h3')}</h3>
                        <p>{t('card_2_p')}</p>
                    </div>
                    <div className='plus_card'>
                        <img src={img_3}></img>
                        <h3>{t('card_3_h3')}</h3>
                        <p>{t('card_3_p')}</p>
                    </div>
                </div>
            </div>
            <img src={review} className='review'></img>
            <div className='text_2'>
                <p>{t('text_2_p')}</p>
                <h3>{t('text_2_h3')}</h3>
            </div>
            <div className='description'>
                <div className='description_left'>
                    <img src={description_1}></img>
                    <div className='description_text'>
                        <h3>{t('description_1_h3')}</h3>
                        <p>{t('description_1_p')}</p>
                    </div>
                </div>
                <div className='description_right'>
                    <img src={description_2}></img>
                    <div className='description_text'>
                        <h3>{t('description_2_h3')}</h3>
                        <p>{t('description_2_p')}</p>                        
                    </div>
                </div>
                <div className='description_left'>
                    <img src={description_3}></img>
                    <div className='description_text'>
                        <h3>{t('description_3_h3')}</h3>
                        <p>{t('description_3_p')}</p>
                    </div>
                </div>
            </div>
            <Slider imgs={imgs}></Slider>
            <div className='risk-free'>
                <h3 className='risk-free_h3'>{t('risk-free_h3')}</h3>
                <div className='risk-free_cards'>
                    <div className='risk-free_card'>
                        <img src={plus_1}></img>
                        <h3>{t('risk-free_card_1_h3')}</h3>
                    </div>
                    <div className='risk-free_card'>
                        <img src={plus_2}></img>
                        <h3>{t('risk-free_card_2_h3')}</h3>
                    </div>
                    <div className='risk-free_card'>
                        <img src={plus_3}></img>
                        <h3>{t('risk-free_card_3_h3')}</h3>
                    </div> 
                </div>
                <Link className='risk-free_link' to={'/products'}>{t('risk-free_link')}</Link>
                <Link className='terms' to={'/terms'}>{t('terms_conditions')}</Link>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;