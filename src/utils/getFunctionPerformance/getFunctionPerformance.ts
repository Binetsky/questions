import { logError } from '../logError';

/**
 * Утилита тестирования скорости выполнения кода
 * @param functionParam () => unknown
 */
export const getFunctionPerformance = (functionParam: () => unknown): void => {
  const timestamps = [];

  for (let i = 0; i < 10; i += 1) {
    const firstTimestamp = performance.now();

    functionParam();

    const secondTimestamp = performance.now();

    timestamps.push(secondTimestamp - firstTimestamp);
  }

  const getTimestampsMedian = (() => {
    timestamps.sort(); // note that direction doesn't matter
    return timestamps[Math.ceil(timestamps.length / 2)];
  })();

  const resultPerformanceTime = getTimestampsMedian.toFixed(6);

  logError(`Текущее среднее время исполнения кода ${resultPerformanceTime} миллисекунд`);
};
