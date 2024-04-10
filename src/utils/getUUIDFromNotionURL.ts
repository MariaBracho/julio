const getUUIDFromNotionURL = (url: string): string => {
  const urlParts = url.split("-");
  const uuid = urlParts.at(-1);

  if (!uuid) return "";

  return uuid;
};

export default getUUIDFromNotionURL;
