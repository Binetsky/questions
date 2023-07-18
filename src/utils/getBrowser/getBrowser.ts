/**
 * Утилита определения браузера и его версии
 */
export const getBrowser = () => {
  const { userAgent } = navigator;
  let browserName;
  let browserVersion;
  let verOffset;

  // Определение названия браузера
  if (userAgent.indexOf('Opera') !== -1 || userAgent.indexOf('OPR') !== -1) {
    browserName = 'Opera';
  } else if (userAgent.indexOf('Edge') !== -1) {
    browserName = 'Microsoft Edge';
  } else if (userAgent.indexOf('Chrome') !== -1) {
    browserName = 'Google Chrome';
  } else if (userAgent.indexOf('Safari') !== -1) {
    browserName = 'Safari';
  } else if (userAgent.indexOf('Firefox') !== -1) {
    browserName = 'Mozilla Firefox';
  } else if (userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1) {
    browserName = 'Internet Explorer';
  } else {
    browserName = 'Unknown';
  }

  // Определение версии браузера
  if (userAgent.indexOf('OPR') !== -1) {
    verOffset = userAgent.indexOf('OPR');
    browserVersion = userAgent.substring(verOffset + 4);
  } else if (userAgent.indexOf('Edge') !== -1) {
    verOffset = userAgent.indexOf('Edge');
    browserVersion = userAgent.substring(verOffset + 5);
  } else if (userAgent.indexOf('Chrome') !== -1) {
    verOffset = userAgent.indexOf('Chrome');
    browserVersion = userAgent.substring(verOffset + 7);
  } else if (userAgent.indexOf('Safari') !== -1) {
    verOffset = userAgent.indexOf('Safari');
    browserVersion = userAgent.substring(verOffset + 7);
  } else if (userAgent.indexOf('Firefox') !== -1) {
    verOffset = userAgent.indexOf('Firefox');
    browserVersion = userAgent.substring(verOffset + 8);
  } else if (userAgent.indexOf('MSIE') !== -1) {
    verOffset = userAgent.indexOf('MSIE');
    browserVersion = userAgent.substring(verOffset + 5);
  } else if (userAgent.indexOf('Trident/') !== -1) {
    verOffset = userAgent.indexOf('Trident/');
    browserVersion = userAgent.substring(verOffset + 8);
  } else {
    browserVersion = 'Unknown';
  }

  return {
    name: browserName,
    version: browserVersion,
  };
};
