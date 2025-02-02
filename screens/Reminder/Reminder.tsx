import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useTheme } from '@/hooks/useTheme';
import { DetailHeader } from '@/components';
import { useTranslation } from 'react-i18next';

export function Reminder() {
  const { s } = useTheme(styles);
  const { t } = useTranslation();

  return (
    <SafeAreaView style={s.area}>
      <DetailHeader title={'Reminder'} />
    </SafeAreaView>
  );
}
