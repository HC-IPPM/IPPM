// src/pages/Home.jsx
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('homePage.title')}</h1>
      <p>{t('homePage.welcome')}</p>

    </>
  );
}
