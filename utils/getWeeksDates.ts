import { addDays, eachDayOfInterval, endOfWeek, format, subWeeks } from 'date-fns';

export function getWeeksDates(createdAt: string): string[] {
  const today = new Date(createdAt);

  // Знаходимо кінець поточного тижня (неділя)
  const endOfCurrentWeek = endOfWeek(today, { weekStartsOn: 1 }); // Тиждень починається з понеділка (1)

  // Знаходимо дату початку 40 тижнів тому
  const startOf40WeeksAgo = addDays(subWeeks(endOfCurrentWeek, 40), 1); // Додаємо 1 день, щоб уникнути зайвого дня

  // Генеруємо масив дат за інтервал
  const allDates = eachDayOfInterval({
    start: startOf40WeeksAgo,
    end: endOfCurrentWeek,
  });

  // Форматуємо дати у формат 'yyyy-MM-dd'
  return allDates.map((date) => format(date, 'yyyy-MM-dd'));
}
