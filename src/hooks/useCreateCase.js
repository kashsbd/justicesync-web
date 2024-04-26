import { useMutation, useQueryClient } from "@tanstack/react-query";

import $axios from "../lib/$axios";

const createCase = async (data) => {
  try {
    await $axios.post("cases", { ...data });
  } catch (error) {
    throw error;
  }
};

const useCreateCase = () => {
  const queryClient = useQueryClient();

  return useMutation(createCase, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
    },
  });
};

export default useCreateCase;
