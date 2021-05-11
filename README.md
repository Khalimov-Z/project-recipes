# Сайт рецептов

<p>Это групповой проект, выполненный студентами школы программирования <a href="https://intocode.ru/" target="_blank">Intocode</a>.</p>

<p><a href="https://blooming-castle-56069.herokuapp.com/" target="_blank">🌎 сайт проекта</a></p>

## Функционал сайта

- Авторизация
- Просмотр категорий рецептов
- Поиск рецепта по названию
- Добавление рецепта в избранное, а также удаление оттуда
- Лайк на понравившийся рецепт
- Комментирование рецепта
- Просмотр раздела "Избранное"

![gif](https://github.com/Kharsaeva/project-recipes/blob/Aisha/IMG_1338.gif)

- При авторизации есть возможность добавлять новые рецепты, а также удалять их.

![gif](https://github.com/Kharsaeva/project-recipes/blob/Aisha/IMG_1337.gif)

## Запуск проекта

Для запуска проекта вам необходимо набрать команду в терминале:

```javascript
npm i
```

После набрать команду:

```javascript
npm run dev
```

## Технологии проекта

<p>
  <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="Github" src="https://img.shields.io/badge/-Github-black?style=for-the-badge&logo=github&logoColor=white" />
  <img alt="Heroku" src="https://img.shields.io/badge/-Heroku-764ABC?style=for-the-badge&logo=heroku&logoColor=white" />
  <img alt="Redux" src="https://img.shields.io/badge/-Redux-430098?style=for-the-badge&logo=redux&logoColor=white" />
  <img alt="Redux-Thunk" src="https://img.shields.io/badge/-Redux_Thunk-white?style=for-the-badge&logo=Redux&logoColor=430098" />
  <img alt="Redux-Logger" src="https://img.shields.io/badge/-Redux_Logger-430098?style=for-the-badge&logo=Redux&logoColor=white" />
  <img alt="JSON-Server" src="https://img.shields.io/badge/-JSON_Server-white?style=for-the-badge&logo=JSON&logoColor=black" />
  <img alt="React-Router" src="https://img.shields.io/badge/-React_Router-black?style=for-the-badge&logo=react-router&logoColor=orange" />
  <img alt="Prettier" src="https://img.shields.io/badge/-Prettier-grey?style=for-the-badge&logo=Prettier&logoColor=orange" />
  <img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
  <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=for-the-badge&logo=Node.js&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-yellow?style=for-the-badge&logo=JavaScript&logoColor=white" />
  <img alt="Bootstrap" src="https://img.shields.io/badge/-Bootstrap-430098?style=for-the-badge&logo=bootstrap&logoColor=white" />
</p>

## Команда проекта

<h3>
  <a href="https://github.com/Khalimov-Z">
    <img alt="Khalimov" src="https://img.shields.io/badge/-Zubayra_Khalimov-black?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</h3>

<h3>
  <a href="https://github.com/KasumovW">
    <img alt="Kasumov" src="https://img.shields.io/badge/-Zubayra_Kasumov-black?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</h3>

<h3>
  <a href="https://github.com/Kharsaeva">
    <img alt="Kharsaeva" src="https://img.shields.io/badge/-Aisha_Kharsaeva-black?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</h3>

<h3>
  <a href="https://github.com/mrMovsar">
    <img alt="Movsar" src="https://img.shields.io/badge/-Movsar-black?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</h3>

---

### В этом проекте я выполнял следующие задачи:

- [x] Создать react приложение
- [x] Пользователь может смотреть категории рецептов
- [x] Организовать роутинг-маршрутизация внутри проекта
- [x] Администратор может войти в панель управлению
- [x] Администратор может добавить рецепты

---

> > **1. Создать react приложение**</br>
> > Создал реакт-приложение project-recipes.</br>
> > Из проекта удалил лишние файлы и создал нужные для начало работы компоненты и репозитории.<br>
> > Установил следующие библиотеки в зависимости:
>
> - bootstrap
> - react-redux
> - redux
> - redux-logger
> - react-router-dom
> - redux-thunk
> - prettier
>
> А также для каждого разработчика проекта, создал ветки и выгрузил их, после этого запушил проект на github.
>
> > **2. Пользователь может смотреть категории рецептов**</br>
> > Для выполнения данной задачи я использовал библиотеку react-router-dom, с помощью этой библиотеки организовал маршрут-переход по категориям.<br>
> > Также была использована библиотека react-bootstrap, с помощью которого создал выпадающий список
>
> > **3. Организовать роутинг-маршрутизация внутри проекта**</br>
> > Маршрутизация внутри проекта организовал используя библиотеку react-router-dom, <br>
> > также для решения задачи я создал пользовательские хуки, под названием useAuth.js и useRoutes.js.
>
> > **4. Администратор может войти в панель управлению**</br>
> > Для реализации этой задачи я использовал пользовательские хуки, useAuth.js и useRoutes.js.
>
> > **5. Администратор может добавить рецепты**</br>
> > Для выполнения этой задачи я создал компонент AdminPage.jsx и отдельный редюсер adminPanel.js и с помощью библиотеки redux-thunk организовал добавление рецепта.

---

### Для выполнения поставленных задач я использовал следующие библиотеки:

- redux, redux-thunk - чтобы создавать асинхронные экшены
- react-router-dom - для роутинга
- и еще react-bootstrap, react-icons, json-server

---
