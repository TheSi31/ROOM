import React from 'react';
import {Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import net_1 from '../img/net/net_1.svg';
import net_2 from '../img/net/net_2.svg';
import net_3 from '../img/net/net_3.svg';
import net_4 from '../img/net/net_4.svg';


import './Footer.css';

const Footer = () => {

    const { t } = useTranslation();

    return (
        <div className="footer">
            <div className="footer-block">
                <Link to='/' className='footer-logo'>
                    <h2>R</h2>
                    <h2>O</h2>
                    <h2>O</h2>
                    <h2>M</h2>
                </Link>
                <div className='footer-link'>
                    <div className='footer-item'>
                        <p id='footer-header'>{t('footer_block_about')}</p>
                        <p>{t('footer_block_about_1')}</p>
                        <p>{t('footer_block_about_2')}</p>
                        <p>{t('footer_block_about_3')}</p>
                        <p>{t('footer_block_about_4')}</p>
                        <p>{t('footer_block_about_5')}</p>
                        <p>{t('footer_block_about_6')}</p>
                        <p>{t('footer_block_about_7')}</p>
                    </div>
                    <div className='footer-item'>
                        <p id='footer-header'>{t('footer_block_support')}</p>
                        <p>{t('footer_block_support_1')}</p>
                        <p>{t('footer_block_support_2')}</p>
                        <p>{t('footer_block_support_3')}</p>
                        <p>{t('footer_block_support_4')}</p>
                        <p>{t('footer_block_support_5')}</p>
                        <p>{t('footer_block_support_6')}</p>
                        <p>{t('footer_block_support_7')}</p>
                        <p>{t('footer_block_support_8')}</p>
                    </div>
                    <div className='footer-item'>
                        <p id='footer-header'>{t('footer_block_follow')}</p>
                        <div className='net'>
                            <img src={net_1} alt="" />
                            <img src={net_2} alt="" />
                            <img src={net_3} alt="" />
                            <img src={net_4} alt="" />
                        </div>
                    </div>
                    <div className='footer-item'></div>
                    <div className='footer-item'>
                        <p id='footer-header'>{t('footer_block_office')}</p>
                        <p>599 Broadway, FL 9 New York, NY 10012</p>
                    </div>
                </div>
                <div className='footer-mail'>
                    <p>{t('footer_block_mailing')}</p>
                    <p>{t('footer_block_mailing_1')}</p>
                    <input type='email'></input>
                    <div className='footer-checkbox'>
                        <input type="checkbox" className='custom-checkbox' id='mail' name='mail' value='yes'/>
                        <label htmlFor='mail'>{t('footer_block_mailing_2')}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;