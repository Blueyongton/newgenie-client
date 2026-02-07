import api from "./axiosConfig";

export function createGoals({ interests, dailyGoal }) {
  return api.post("/auth/goals", {
    interests,
    dailyGoal
  });
}

// // src/apis/goalsApi.js
// import { getAuthAxios } from "./axiosConfig";

// export function createGoals({ interests, dailyGoal }) {
//   const authAxios = getAuthAxios();
//   return authAxios.post("/auth/goals", { interests, dailyGoal });
// }
