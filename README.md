# Alexandria

## Сервис-приложение проведения опросов

### Ценность продукта
1. Отсутствие необходимости РБК использовать сторонние решения по созданию и прохождению опросов (сейчас используется Google Forms и Oprosso)
2. Локализация собираемых данных с возможностью дальнейшей работы с ними как в самом приложении, так и в других продуктах РБК
3. Возможность реализовывать прохождение опросов как через апи, так и через готовую форму
4. Возможность реализации продукта на рынок, что дает увеличение лояльности пользователей к РБК, сбор данных от пользователей
5. Возможность монетизации через подписку (взимать плату за увеличенное количество опросов для создания и время их хранения в приложении)
6. Возможность монетизации через создание и размещение опросов к релевантным материалам по заказу от сторонних компаний с целью проведения аналитики или рекламных кампаний.
7. Возможность связи опросов с материалами РБК для сквозной аналитики

### План разработки
#### MVP
1. ~~Развертывание приложения и подключение библиотек~~
2. ~~Разметка структуры~~
3. ~~Описание модели данных~~
4. ~~Связь с БД~~
5. ~~Верстка основных страниц приложения (создание, список, страница опроса, страница прохождения опроса)~~
6. ~~Реализация создания и публикации опроса~~
7. Реализация вывода списка опросов
8. ~~Реализация доступа к опросу через апи~~
9. ~~Реализация доступа к опросу через страницу прохождения опроса~~
10. ~~Единая реализация сохранения результатов опроса~~
11. Реализация вывода статистики по выбранному из списка опроса
12. Реализация редактирования созданного опроса

#### Релиз продукта
1. Авторизация через единую авторизацию РБК
2. Доступ к апи по ключу
3. Страница профиля пользователя
4. Страница редактирования профиля пользователя
5. Подстановка данных пользователя в сущности опросов
6. Механизм назначения ключей доступа
7. Возможность загружать изображения к создаваемым опросам
8. Поддержка загрузки изображений
9. Размещение на домене
10. Выполнить Todo проекта

### Схема данных

[Miro](https://miro.com/app/board/uXjVM56EpXI=/)

### Методы для работы по апи

```
GET - /api/survey/[id] (в заголовке передать accessKey)

POST - /api/survey-result (Модель данных в директории src/models) (в заголовке передать accessKey)

```

### Урл опроса для прохождения

```
(url)/survey/[id]
```

### Контакты

Бинецкий Алексей - [abinetskiy@rbc.ru](mailto:abinetskiy@rbc.ru)