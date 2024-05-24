import axios from "axios";

export const getAPI = async () => {
  try {
    const response = await axios.get("http://192.168.0.24:8080/mypage/listall")
    console.log(response.data);
    return response.data; // 응답 데이터 반환
  } catch (err) {
    console.error(err);
  }
};

export const postMemberAPI = async (data) => {
  try {
    const response = await axios.post("http://192.168.0.24:8080/mypage/listall", data); 
    return response;
  } catch (err) {
    console.error(err);
  }
};