const UserManagement = {
  getUsers: {
    url: "/users",
    method: "GET",
  },
  addUser: {
    url: "/users/add",
    method: "POST",
  },
  getSingleUser: (id) => ({
    url: `/users/${id}`,
    method: "GET",
  }),
  updateUser: (id) => ({
    url: `/users/${id}`,
    method: "PUT",
  }),
  deleteUser: (id) => ({
    url: `/users/${id}`,
    method: "DELETE",
  }),
  
};
export default UserManagement;
