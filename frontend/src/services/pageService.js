import api from "./api";

export const getPages = async (token) => {
  const response = await api.get("/pages", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const createPage = async (pageData, token) => {
  const response = await api.post("/pages", pageData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getPageById = async (id, token) => {
  const response = await api.get(`/pages/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updatePage = async (id, pageData, token) => {
  const response = await api.put(`/pages/${id}`, pageData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const deletePage = async (id, token) => {
  const response = await api.delete(`/pages/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};