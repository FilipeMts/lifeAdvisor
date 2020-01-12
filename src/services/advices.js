import axios from "axios";

export const getAdvices = async () => {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    return response.data.slip.advice;
  } 
  catch (error) {
    throw error;
  }
};
