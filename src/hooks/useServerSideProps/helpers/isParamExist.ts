/**
 * Хелпер возвращает булево существования переданного параметра (undefined as string from Next.js)
 * @param value - string
 * @return boolean
 */
export const isParamExist = (value: string): boolean => value !== 'undefined' && value !== undefined && value !== null && value !== '[object Object]';
