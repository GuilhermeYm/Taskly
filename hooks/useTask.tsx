import { TaskResponse, CreateTaskInput } from "@/app/api/routes/tasks/model";
import { api } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getTasks = async (): Promise<TaskResponse[]> => {
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

const createTask = async (taskData: CreateTaskInput) => {
  try {
    console.log("Data of the prop", taskData);
    const response = await api.tasks.createUser.post(taskData);
    if (response.error) {
      throw response.error;
    }
    return response.data.taskCreated;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export function useTasks() {
  return useQuery({ queryKey: ["tasks"], queryFn: getTasks });
}

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
