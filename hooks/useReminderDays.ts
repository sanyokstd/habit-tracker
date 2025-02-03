import { remindersDays, ReminderValue } from '@/types/habits';
import { useTranslation as useTranslationOriginal } from 'react-i18next';

export const useReminderDays = (idsToFilter?: ReminderValue[]) => {
  const { t } = useTranslationOriginal();
  const remindersDaysList = [
    {
      id: remindersDays.monday,
      title: 'Mon',
    },
    {
      id: remindersDays.tuesday,
      title: 'Tue',
    },
    {
      id: remindersDays.wednesday,
      title: 'Wed',
    },
    {
      id: remindersDays.thursday,
      title: 'Thu',
    },
    {
      id: remindersDays.friday,
      title: 'Fri',
    },
    {
      id: remindersDays.saturday,
      title: 'Sat',
    },
    {
      id: remindersDays.sunday,
      title: 'Sun',
    },
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
