import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./tableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../services/apiService";

const ManageUser=(prosp)=>{
    const [showModalCreatUser, setShowModalCreatUser]=useState(false);
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
                        <TableUser listUser={listUser}/>
                </div>
                <ModalCreateUser show={showModalCreatUser} setShow={setShowModalCreatUser} fetchListUser={fetchListUser}/>
            </div>
            
        </div>
    )
}

export default ManageUser;