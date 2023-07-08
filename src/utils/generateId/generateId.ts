/**
 * Утилита генерации уникального шестизначного цифрового значения
 */
export const generateId = () => Math.floor(100000 + Math.random() * 900000);
