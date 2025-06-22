# Запобігання подвійним натисканням

Цей документ описує рішення для запобігання подвійним натисканням у додатку HabitTracker.

## Проблема

Користувачі можуть швидко натискати кнопки кілька разів, що призводить до:

- Подвійної навігації між екранами
- Дублювання дій
- Небажаних станів додатку

## Рішення

### 1. Хук `usePreventDoublePress`

Використовуйте цей хук для захисту від подвійних натискань:

```typescript
import { usePreventDoublePress } from '@/hooks/usePreventDoublePress';

const MyComponent = () => {
  const { preventDoublePress } = usePreventDoublePress(1000); // 1 секунда затримки

  const handlePress = () => {
    preventDoublePress(() => {
      // Ваша логіка тут
      router.push('/some-screen');
    });
  };

  return (
    <Button onPress={handlePress}>
      Натисни мене
    </Button>
  );
};
```

### 2. Компонент `SafeTouchableOpacity`

Замініть `TouchableOpacity` на `SafeTouchableOpacity` для автоматичного захисту:

```typescript
import { SafeTouchableOpacity } from '@/components';

const MyComponent = () => {
  const handlePress = () => {
    router.push('/some-screen');
  };

  return (
    <SafeTouchableOpacity onPress={handlePress} style={styles.button}>
      <Text>Натисни мене</Text>
    </SafeTouchableOpacity>
  );
};
```

## Налаштування затримки

За замовчуванням затримка становить 1000мс (1 секунда). Ви можете змінити це:

```typescript
// Хук з кастомною затримкою
const { preventDoublePress } = usePreventDoublePress(500); // 0.5 секунди

// Компонент з кастомною затримкою
<SafeTouchableOpacity onPress={handlePress} delay={500}>
  <Text>Натисни мене</Text>
</SafeTouchableOpacity>
```

## Візуальна індикація

Коли кнопка заблокована, вона стає напівпрозорою (opacity: 0.5) для інформування користувача.

## Рекомендації

1. **Використовуйте `SafeTouchableOpacity`** для всіх кнопок навігації
2. **Використовуйте `usePreventDoublePress`** для складних дій з кількома кроками
3. **Встановіть відповідну затримку** - не занадто коротку (користувач не зможе натиснути) і не
   занадто довгу (поганий UX)

## Приклади використання

### Навігація між екранами

```typescript
<SafeTouchableOpacity onPress={() => router.push('/settings')}>
  <Text>Налаштування</Text>
</SafeTouchableOpacity>
```

### Збереження даних

```typescript
const { preventDoublePress } = usePreventDoublePress();

const handleSave = () => {
  preventDoublePress(async () => {
    await saveHabit(habitData);
    router.back();
  });
};
```

### Форми з валідацією

```typescript
const { preventDoublePress } = usePreventDoublePress();

const handleSubmit = () => {
  preventDoublePress(() => {
    if (validateForm()) {
      submitForm();
    }
  });
};
```
