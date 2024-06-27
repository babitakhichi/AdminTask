import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Space, Spin, Table, Tag } from 'antd';
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/AuthSlice/index.slice";
import { UserManagementServices } from "../../services/Admin/UserManagement/index.service";
import AddEditUser from "../../Component/AddEditUser";


function Dashboard() {
  const dispatch = useDispatch();
const [loading, setLoading] = useState(false)
const [userData, setUserData] = useState([])
const [isModalOpen, setIsModalOpen] = useState(false);
const [userDeatils, setUserDeatils] = useState({})
const [id, setId] = useState('')
const showModal = () => {
  setIsModalOpen(true);
};
const handleOk = () => {
  setIsModalOpen(false);
};
const handleCancel = () => {
  setIsModalOpen(false);
  setUserDeatils({})
};
  const navigate = useNavigate();
  const remove = () => {
    dispatch(logout(navigate));
   
  };
  const handleEdit = (details) => {
    setUserDeatils(details)
    setIsModalOpen(true)
   
  }
  const onDelete = async (id) => {
    setLoading(true);
    try {

      const response = await UserManagementServices.deleteUser(id)
       
        if(response){
         alert('User Deleted')
        }
    
      
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text,row) => <a>{row.firstName} {row.lastName}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
   
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button  onClick={()=> handleEdit(record) } >Edit </button>
          <button  onClick={()=> onDelete(record.id) } >Delete</button>
        </Space>
      ),
    },
  ];
 
  const getUserList = async () => {
    setLoading(true);
    try {
     
      const res =
        await UserManagementServices.getUserService();
        setUserData(res.users)
    
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    
      getUserList();
    
  }, []);
  const onSubmit = async (value) => {
    setLoading(true);
    try {
      let bodyData = {
        firstName:value?.firstName||'',
         lastName:value?.lastName||'',
          email:value?.email||''
      };
      const response = userDeatils
        ? await UserManagementServices.UpdateUserService(userDeatils.id,bodyData)
        : await UserManagementServices.addUserService(bodyData);
        if(response.id){
          handleCancel()
          getUserList()
          setUserDeatils({})
        }
  
      
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  


  return (
    <div>
      profile<button onClick={remove}>Logout</button>
      <Button type="primary" onClick={showModal}>
        Add User
      </Button>
      {loading? <Spin size="large" />: <Table columns={columns} dataSource={userData} />}
      <Modal title="Add User" open={isModalOpen}  onCancel={handleCancel}  footer={null} >
       <AddEditUser userDeatils={userDeatils}  onSubmit={onSubmit}  />
      </Modal>
     
    </div>
  );
}

export default Dashboard;
