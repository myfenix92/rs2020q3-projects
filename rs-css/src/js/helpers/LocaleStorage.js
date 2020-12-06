export const getLocalStorageData = (key) => {
  const storageData = window.localStorage.getItem('rss-css');
  if (!storageData) {
    return null;
  }
  if (key) {
    return JSON.parse(storageData)[key];
  }
  return JSON.parse(storageData);
};

export const setLocalStorageData = (key, data) => {
  const storageData = getLocalStorageData();
  if (!storageData) {
    return window.localStorage.setItem('rss-css', JSON.stringify({ [key]: data }));
  }
  storageData[key] = data;
  window.localStorage.setItem('rss-css', JSON.stringify(storageData));
};
