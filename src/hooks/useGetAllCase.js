import { useQuery } from "@tanstack/react-query";

import $axios from "../lib/$axios";

const getAllCaseData = async () => {
  try {
    const res = await $axios.get("cases");
    return res.data?.data;
  } catch (error) {
    throw error;
  }
};

const useGetAllCase = () => {
  return useQuery({ queryKey: ["cases"], queryFn: getAllCaseData });
};

export default useGetAllCase;
