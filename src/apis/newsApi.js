import { getAuthAxios } from './axiosConfig';

export const getSentenceTerms = async (
  articleId,
  sentenceId,
  details = false
) => {
  const token = localStorage.getItem("accessToken");
  const authAxios = getAuthAxios(token);

  if (articleId === undefined || articleId === null) {
    throw new Error("articleId가 필요합니다.");
  }

  if (sentenceId === undefined || sentenceId === null) {
    throw new Error("sentenceId가 필요합니다.");
  }

  const response = await authAxios.get(
    `/news/${articleId}/${sentenceId}`,
    {
      params: { details }
    }
  );

  return response.data;
};
