import Navbar from '@/components/Navbar';
import NavbarButton from '@/components/Navbar/NavbarButton';
import NavbarLink from '@/components/Navbar/NavbarLink';
import { useTranslation } from 'react-i18next';

export default function Navigator() {
  const { i18n, t } = useTranslation(undefined, { keyPrefix: 'navigator' });
  const { changeLanguage, language } = i18n;

  return (
    <Navbar
      endElements={
        <>
          <NavbarLink icon="fa-info" title={t('about')} to="#about" />
          <NavbarLink
            icon="fa-graduation-cap"
            title={t('studies')}
            to="#studies"
          />
          <NavbarLink icon="fa-file-alt" title={t('resume')} to="#resume" />
          <NavbarLink icon="fa-envelope" title={t('contact')} to="#contact" />
          <NavbarButton
            icon="fa-globe"
            onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
            title={t(`language.${language}`)}
          />
        </>
      }
    />
  );
}
