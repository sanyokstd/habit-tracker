import { remindersDays, ReminderValue } from '@/types/habits';
import { useTranslation as useTranslationOriginal } from 'react-i18next';

export const useReminderDays = (idsToFilter?: ReminderValue[]) => {
  const { t } = useTranslationOriginal();
  const remindersDaysList = [
    { id: remindersDays.monday, title: t('Reminder.mon') },
    { id: remindersDays.tuesday, title: t('Reminder.tue') },
    { id: remindersDays.wednesday, title: t('Reminder.wed') },
    { id: remindersDays.thursday, title: t('Reminder.thu') },
    { id: remindersDays.friday, title: t('Reminder.fri') },
    { id: remindersDays.saturday, title: t('Reminder.sat') },
    { id: remindersDays.sunday, title: t('Reminder.sun') },
  ];

  if (idsToFilter) {
    if (idsToFilter.length > 0) {
      return remindersDaysList.filter((item) => idsToFilter.includes(item.id));
    } else {
      return [];
    }
  } else {
    return remindersDaysList;
  }
};
