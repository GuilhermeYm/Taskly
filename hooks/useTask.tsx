import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
const getTasks = async () => {
  try {
    const response = await api.tasks.get();
    if (response.error) {
      throw response.error;
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};
export function useTasks() {
  return useQuery({ queryKey: ["tasks"], queryFn: getTasks });
}
