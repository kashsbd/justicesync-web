import { useQuery } from "@tanstack/react-query";

import $axios from "../lib/$axios";

const getAllClientData = async () => {
  try {
    const res = await $axios.get("clients");
    return res.data?.data;
  } catch (error) {
    throw new Error(error);
  }
};

const useGetAllClient = () => {
  return useQuery({ queryKey: ["clients"], queryFn: getAllClientData });
};

export default useGetAllClient;
