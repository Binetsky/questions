/**
 * Хелпер для отправки POST запроса по урлу
 * @param url: string
 * @param body: unknown
 * @returns Promise<unknown>
 */
export const sendChanges = async (url: string, body?: unknown): Promise<any> => {
  if (body) {
    const resWithBody = await fetch(url, { method: 'POST', body: JSON.stringify(body) });

    return resWithBody.json();
  }

  const res = await fetch(url, { method: 'POST' });

  return res.json();
};
