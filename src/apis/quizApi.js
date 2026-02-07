import { authAxios } from "@/apis/axiosInstance";

// 퀴즈 가져오는 api 
export const getQuestion = async (articleId) => {
  const response = await authAxios.get(`/quiz/${articleId}`);
  return response.data;
};

// 퀴즈 정답 유무에 따른 목표 달성 여부 확인 api 
export const submitQuizResult = async (articleId, answer) => {
  if (!articleId) throw new Error("articleId가 필요합니다.");
  if (!answer) throw new Error("result가 필요합니다.");

  const response = await authAxios.post(`/quiz/${articleId}`, {
    result, 
  });

  return response.data;
};