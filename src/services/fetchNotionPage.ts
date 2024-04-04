import axios from "axios";

const fetchNotionPage = async (uid:string) => {
    const URL_API="https://notion-api.splitbee.io/v1/page"

    const { data } = await axios.get(`${URL_API}/${uid}`);
    return data;
};

export default fetchNotionPage;