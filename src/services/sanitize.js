const sanitize = (text) => {
  return text
    .replace(/\s|_|\(|\)| /g, '-')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
};

export default sanitize;
