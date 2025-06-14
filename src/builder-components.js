import NTTCard from './components/NTTCard.vue';
import NTTTable from './components/NTTTable.vue';
import NTTNotes from './components/NTTNotes.vue';

export const registeredComponents = [
  {
    component: NTTCard,
    name: 'NTT Card',
    friendlyName: 'Карточка NTT',
    noWrap: true,
    inputs: [
      {
        name: 'title',
        type: 'text',
        defaultValue: 'Заголовок карточки',
        friendlyName: 'Заголовок',
        placeholder: 'Введите заголовок карточки',
      },
      {
        name: 'content',
        type: 'longText',
        defaultValue: 'Содержимое карточки здесь...',
        friendlyName: 'Содержимое',
        placeholder: 'Введите содержимое карточки',
      },
      {
        name: 'image',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'gif', 'svg'],
        defaultValue: '',
        friendlyName: 'Изображение',
        helperText: 'Загрузите изображение для карточки',
      },
    ],
  },
  {
    component: NTTTable,
    name: 'NTT Table',
    friendlyName: 'Таблица NTT',
    noWrap: true,
    inputs: [
      {
        name: 'data',
        type: 'longText',
        defaultValue: 'Строка1Столбец1,Строка1Столбец2\nСтрока2Столбец1,Строка2Столбец2',
        friendlyName: 'Данные таблицы (CSV)',
        helperText: 'Введите данные таблицы в формате CSV, каждая строка с новой строки, столбцы через запятую.',
      },
    ],
  },
  {
    component: NTTNotes,
    name: 'NTT Notes',
    friendlyName: 'Заметки NTT',
    noWrap: true,
    inputs: [
      {
        name: 'notes',
        type: 'longText',
        defaultValue: 'Заметка 1\nЗаметка 2\nЗаметка 3',
        friendlyName: 'Список заметок',
        helperText: 'Введите каждую заметку с новой строки.',
      },
    ],
  },
];