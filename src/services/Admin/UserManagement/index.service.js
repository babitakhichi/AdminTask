


import { UserManagement } from "../../../apiEndPoints";
import APIrequest from "../../axios";

export const UserManagementServices = {
  getUserService: async () => {
    try {
      const payload = {
        ...UserManagement.getUsers
        
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  UpdateUserService: async (id, bodyData) => {
    try {
      const payload = {
        ...UserManagement.updateUser(id),
        bodyData,
      };
      console.log('payload',payload)
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getSingleUserService: async (id) => {
    try {
      const payload = {
        ...UserManagement.getSingleUser(id),
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  addUserService: async (bodyData) => {
    try {
      const payload = {
        ...UserManagement.addUser,
        bodyData,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  deleteUser: async (id) => {
    try {
      const payload = {
        ...UserManagement.deleteUser(id),
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

};
