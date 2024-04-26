import { useMutation, useQueryClient } from "@tanstack/react-query";

import $axios from "../lib/$axios";

const createClient = async (data) => {
  try {
    await $axios.post("clients", { ...data });
  } catch (error) {
    throw error;
  }
};

const useCreateClient = () => {
  const queryClient = useQueryClient();

  return useMutation(createClient, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
    onError: (e) => {
      console.log(e);
    },
  });
};

export default useCreateClient;
