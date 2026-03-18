import api from "@/lib/axios";

/**
 * Todo Service updated to work with the provided Express/MongoDB backend.
 * Note: MongoDB uses '_id' instead of 'id', and the backend returns data inside a 'data' field.
 */
export const todoService = {
  // Fetch all todos from the backend
  // Backend route: GET /api/all-todo
  getAll: async () => {
    try {
      const response = await api.get("/api/all-todo");
      // The backend returns { message, data: [...] }
      return response.data.data;
    } catch (error) {
      console.error("Error fetching todos:", error);
      throw error;
    }
  },

  // Fetch a single todo by its unique _id
  // Backend route: GET /api/all-todo/:id
  getById: async (id) => {
    try {
      const response = await api.get(`/api/all-todo/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching todo with _id ${id}:`, error);
      throw error;
    }
  },

  // Create a new todo on the backend
  // Backend route: POST /api/create-todo
  create: async (todoData) => {
    try {
      const response = await api.post("/api/todo", todoData);
      return response.data.data;
    } catch (error) {
      console.error("Error creating todo:", error);
      throw error;
    }
  },

  // Update an existing todo by its _id
  // Backend route: PUT /api/all-todo/:id
  update: async (id, updateData) => {
    try {
      // Create a clean update object (avoid sending _id in the body if possible)
      const { _id, ...cleanData } = updateData;
      const response = await api.put(`/api/all-todo/${id}`, cleanData);
      return response.data.data;
    } catch (error) {
      console.error(`Error updating todo with _id ${id}:`, error);
      throw error;
    }
  },

  // Delete a todo from the backend by its _id
  // Backend route: DELETE /api/all-todo/:id
  delete: async (id) => {
    try {
      const response = await api.delete(`/api/all-todo/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error deleting todo with _id ${id}:`, error);
      throw error;
    }
  },
};
