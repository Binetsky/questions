import { Image } from '@frontend/uikit-rbc';
import React from 'react';

/**
 * Общий тип поля ID
 */
export type ID = string;

/**
 * Типы экшенов
 *
 * [key: string]: (data?: T) => { type: R, payload?: T | Promise<void> }
 */
export interface ActionsParams<T, R> {
  [key: string]: (data?: T) => void | Promise<R>;
}

/**
 * Интерфейс виджетов VK.Widgets
 * @property post
 */
interface WidgetsVk {
  Post: (elementId: string, ownerId: number, postId: number, hash: string) => void;
}

/**
 * Интерфейс глобального обьекта VK
 * @property Widgets обьект виджетов api vk
 */
interface Vk {
  Widgets: WidgetsVk;
}

/**
 * Типы некоторых методов добавленных в window
 */
declare global {
  interface Window {
    VK: Vk;
  }
}

/**
 * Тип данных для адаптера newsListAdapter
 * @property id: string - id новости
 * @property type: string - тип блока
 * @property fronturl: string - ссылка
 * @property title: string - заголовок
 * @property rubric: DataNewsItemRubric|null - объект рубрики
 * @property image: Image|null - изображение
 */
export interface DataNewsItem {
  id: string;
  type: string;
  fronturl: string;
  title: string;
  rubric: DataNewsItemRubric | null;
  image: Image | null;
}

/**
 * Тип данных Рубрики для адаптера newsListAdapter
 * @property nick: string|null - ссылка рубрики
 * @property title: string|null - заголовок рубрики
 */
export interface DataNewsItemRubric {
  nick: string | null;
  title: string | null;
}

export interface ComponentWithChildren {
  children?: React.ReactNode;
}

export interface WithChildren {
  children?: React.ReactNode;
}
