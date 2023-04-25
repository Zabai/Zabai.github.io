import Header from '@/components/Header';
import { useTranslation } from 'react-i18next';
import styles from './Cover.module.css';

export default function Cover() {
  const { t } = useTranslation(undefined, { keyPrefix: 'header' });

  return (
    <Header
      backgroundImage={styles.cover}
      subtitle={t('subtitle')}
      title="Zabai Armas Herrera"
    />
  );
}
