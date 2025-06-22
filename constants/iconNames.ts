import { Ionicons } from '@expo/vector-icons';

export type IoniconName = keyof typeof Ionicons.glyphMap;

export const habitIconNames: IoniconName[] = [
  // Здоров'я та фітнес
  'alarm-outline',
  'barbell-outline',
  'bed-outline',
  'heart-outline',
  'walk-outline',

  // Спорт та активність
  'bicycle-outline',
  'football-outline',
  'trophy-outline',

  // Навчання та розвиток
  'book-outline',
  'school-outline',
  'code-slash',
  'laptop-outline',

  // Творчість
  'brush-outline',
  'color-palette-outline',
  'musical-notes-outline',

  // Побут та організація
  'bag-handle-outline',
  'calendar-outline',
  'home-outline',

  // Соціальні та комунікація
  'call-outline',
  'mail-outline',
  'people-outline',

  // Фінанси та бізнес
  'wallet-outline',
  'calculator-outline',

  // Розваги та хобі
  'game-controller-outline',
  'tv-outline',

  // Природа та подорожі
  'leaf-outline',
  'sunny-outline',
  'airplane-outline',

  // Технології
  'phone-portrait-outline',

  // Інші корисні
  'gift-outline',
  'star-outline',
  'rocket-outline',
];
