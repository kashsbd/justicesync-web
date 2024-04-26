import { useMutation, useQueryClient } from "@tanstack/react-query";

import $axios from "../lib/$axios";

const createStaff = async (data) => {
  try {
    await $axios.post("users", { ...data });
  } catch (error) {
    throw new Error(error);
  }
};

const useCreateStaff = () => {
  const queryClient = useQueryClient();

  return useMutation(createStaff, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export default useCreateStaff;
