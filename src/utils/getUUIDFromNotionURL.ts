
const getUUIDFromNotionURL = (url: string): string => {
  const urlParts = url.split("-");
  const uuid = urlParts.at(-1) as string;

  return uuid;
};

export default getUUIDFromNotionURL;