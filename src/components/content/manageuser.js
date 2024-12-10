import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const ManageUser=(prosp)=>{
    const [showModalCreatUser, setShowModalCreatUser]=useState(false);
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
                  table user 
                </div>
                <ModalCreateUser show={showModalCreatUser} setShow={setShowModalCreatUser}/>
            </div>
            
        </div>
    )
}

export default ManageUser;