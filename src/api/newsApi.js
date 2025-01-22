import axios from "axios";

const BASE_URL = "https://api-berita-indonesia.vercel.app/";

export const fetchNewsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/${category}`);
    return response.data.data.posts;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
