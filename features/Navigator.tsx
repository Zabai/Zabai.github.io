import Navbar from '@/components/Navbar';
import { useTranslation } from 'react-i18next';

export default function Navigator() {
  const { t } = useTranslation(undefined, { keyPrefix: 'navigator' });

  return (
    <Navbar
      endItems={[
        {
          icon: 'fa-info',
          title: t('about'),
          to: '#about',
        },
        {
          icon: 'fa-graduation-cap',
          title: t('studies'),
          to: '#studies',
        },
        {
          icon: 'fa-file-alt',
          title: t('resume'),
          to: '#resume',
        },
        {
          icon: 'fa-envelope',
          title: t('contact'),
          to: '#contact',
        },
      ]}
    />
  );
}
