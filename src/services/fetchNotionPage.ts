// import axios from "axios";
import { NotionAPI } from "notion-client";

const fetchNotionPage = async (
  uid: string = "85be5b5026d64a1dbd2f40f54839568c"
) => {
  const notion = new NotionAPI();
  //   const URL_API = "https://notion-api.splitbee.io/v1/page";

  return await notion.getPage(uid);
};

export default fetchNotionPage;
