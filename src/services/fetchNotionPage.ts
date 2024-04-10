import { NotionAPI } from "notion-client";

const fetchNotionPage = async (uid?: string) => {
  let data;
  const notion = new NotionAPI();

  if (!uid) return;

  try {
    data = await notion.getPage(uid);
  } catch (error) {
    console.log(error);
  }

  return data;
};

export default fetchNotionPage;
