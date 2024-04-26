import { useQuery } from "@tanstack/react-query";

import $axios from "../lib/$axios";

const getAllStaffData = async () => {
  try {
    const res = await $axios.get("users");
    return res.data?.data;
  } catch (error) {
    throw error;
  }
};

const useGetAllStaff = () => {
  return useQuery({ queryKey: ["users"], queryFn: getAllStaffData });
};

export default useGetAllStaff;
