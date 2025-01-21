import React from 'react';
import { useTranslation } from 'react-i18next';
import './Pricing.css';

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <div className="pricing-container">
      <h1>{t('pricing')}</h1>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h2>{t('free')}</h2>
          <p className="price">مجاني</p>
          <ul>
            <li>10 مكالمات/شهر</li>
            <li>دعم لغوي محدود</li>
            <li>تقارير أساسية</li>
          </ul>
          <button>{t('subscribe')}</button>
        </div>
        <div className="pricing-card">
          <h2>{t('basic')}</h2>
          <p className="price">$10/شهر</p>
          <ul>
            <li>100 مكالمة/شهر</li>
            <li>دعم لغوي متقدم</li>
            <li>تقارير مفصلة</li>
          </ul>
          <button>{t('subscribe')}</button>
        </div>
        <div className="pricing-card">
          <h2>{t('pro')}</h2>
          <p className="price">$30/شهر</p>
          <ul>
            <li>500 مكالمة/شهر</li>
            <li>دعم لغوي متقدم</li>
            <li>تقارير مفصلة</li>
          </ul>
          <button>{t('subscribe')}</button>
        </div>
        <div className="pricing-card">
          <h2>{t('premium')}</h2>
          <p className="price">$50/شهر</p>
          <ul>
            <li>مكالمات غير محدودة</li>
            <li>دعم لغوي كامل</li>
            <li>تقارير متقدمة</li>
            <li>دعم فني مخصص</li>
          </ul>
          <button>{t('subscribe')}</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
