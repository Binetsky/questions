/**
 * Утилита скрытия изображения в случае ошибки загрузки
 */
// Todo: нельзя протестировать document.onreadystatechange, необходимо разобраться
export const hideBrokenImages = (): void => {
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const imagesOnPage = document.querySelectorAll('img');

      imagesOnPage.forEach((imageItem) => {
        // eslint-disable-next-line no-param-reassign
        imageItem.onerror = () => {
          // eslint-disable-next-line no-param-reassign
          imageItem.style.display = 'none';
        };
      });
    }
  };
};
