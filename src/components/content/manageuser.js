import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./tableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser=(prosp)=>{
    const [showModalCreatUser, setShowModalCreatUser]=useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser]=useState(false);
    const [dataUpdate, setDataUpdate]=useState({})
    const [listUser, setListUser]=useState([])
    useEffect(()=>{
        fetchListUser();
    },[]);
    const fetchListUser = async()=>{
        let res = await getAllUser();
        if(res.EC === 0){
            setListUser(res.DT)
        }
    }
    const handleClickBtnUpdate=(user)=>{
        setShowModalUpdateUser(true)
        setDataUpdate(user)
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={()=>setShowModalCreatUser(true)}>
                        <FcPlus/> add user
                    </button>
                </div>
                <div className="table-users-container">
                        <TableUser listUser={listUser} handleClickBtnUpdate={handleClickBtnUpdate} />
                </div>
                <ModalCreateUser show={showModalCreatUser} setShow={setShowModalCreatUser} fetchListUser={fetchListUser}/>
                <ModalUpdateUser show={showModalUpdateUser} setShow={setShowModalUpdateUser} dataUpdate={dataUpdate}/>
            </div>
            
        </div>
    )
}

export default ManageUser;