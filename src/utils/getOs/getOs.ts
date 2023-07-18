/**
 * Утилита получения операционной системы пользователя
 */
export const getOs = () => {
  if (window.navigator.userAgent.indexOf('Windows NT 10.0') !== -1) {
    return 'Windows 10';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 6.3') !== -1) {
    return 'Windows 8.1';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 6.2') !== -1) {
    return 'Windows 8';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 6.1') !== -1) {
    return 'Windows 7';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 6.0') !== -1) {
    return 'Windows Vista';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 5.1') !== -1) {
    return 'Windows XP';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 5.0') !== -1) {
    return 'Windows 2000';
  }

  if (window.navigator.userAgent.indexOf('Mac') !== -1) {
    return 'Mac/iOS';
  }

  if (window.navigator.userAgent.indexOf('X11') !== -1) {
    return 'UNIX';
  }

  if (window.navigator.userAgent.indexOf('Linux') !== -1) {
    return 'Linux';
  }

  return 'Unknown';
};
