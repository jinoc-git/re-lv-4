import axios from 'axios';

// const instance = axios.create({
//   baseURL: process.env.REACT_APP_SERVER_URL
// })

const URL = process.env.REACT_APP_SERVER_URL;

const getPosts = async () => {
  const res = await axios.get(`${URL}/posts`);
  return res.data;
};

const addPost = async (newPost) => {
  await axios.post(`${URL}/posts`, newPost);
};

const deletePost = async (id) => {
  await axios.delete(`${URL}/posts/${id}`);
};

const updatePost = async ({id, ...contents}) => {
  await axios.patch(`${URL}/posts/${id}`, {...contents});
};

export { getPosts, addPost, deletePost, updatePost };
