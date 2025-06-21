# HabitTracker

Додаток для відстеження звичок з можливістю створення, редагування та видалення звичок.

## Функціональність

### Редагування звичок

- **Довге натискання** на звичку в списку відкриває екран редагування
- Можна змінити назву, опис, іконку, колір та ціль звички
- Кнопка "ЗБЕРЕГТИ" зберігає зміни
- Кнопка "ВИДАЛИТИ" видаляє звичку з підтвердженням

### Навігація

- Екран редагування доступний за шляхом `/edit-habit?id={habitId}`
- Параметр `id` передається через URL
- Анімація `slide_from_bottom` при відкритті екрану

### Store функції

- `getHabitById(id: number)` - отримання звички за ID
- `updateHabit(habit: IHabit)` - оновлення звички
- `deleteHabit(id: number)` - видалення звички за ID

## Використання

```typescript
// Навігація до редагування звички
router.push(`/edit-habit?id=${habitId}`);

// Отримання звички за ID
const habit = getHabitById(habitId);

// Оновлення звички
updateHabit(updatedHabit);

// Видалення звички
deleteHabit(habitId);
```

## Структура файлів

- `app/edit-habit/` - екрани редагування звички
- `screens/EditHabit/` - компонент редагування
- `store/habitStore.ts` - store з функціями для роботи з звичками
- `components/HabitList/HabitListItem/` - елемент списку з можливістю довгого натискання

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with
[`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses
[file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app**
directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with
  our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step
  tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
