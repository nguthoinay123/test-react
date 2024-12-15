import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./tableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../services/apiService";
import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from './ModalDeleteUser';


const ManageUser=(prosp)=>{
    const [showModalCreatUser, setShowModalCreatUser]=useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser]=useState(false);
    const [showModalViewUser, setShowModalViewUser]=useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser]=useState(false)
    const [dataUser, setDataUser] = useState({});
    const [dataUpdate, setDataUpdate]=useState({})
    const [dataDelete, setDataDelete] = useState({});

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
    const resetUpdateData=()=>{
        setDataUpdate({});
    }
    const handleClickBtnView=(user)=>{
        setShowModalViewUser(true);
        setDataUser(user);
    }
    const resetViewData=(user)=>{
        setDataUser(user);
    }
    const handleClickBtnDelete=(user)=>{
        setShowModalDeleteUser(true);
        setDataDelete(user);
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
                    <TableUser listUser={listUser} handleClickBtnView={handleClickBtnView} handleClickBtnUpdate={handleClickBtnUpdate} handleClickBtnDelete={handleClickBtnDelete}/>
                </div>
                <ModalCreateUser show={showModalCreatUser} setShow={setShowModalCreatUser} fetchListUser={fetchListUser}/>
                <ModalUpdateUser show={showModalUpdateUser} setShow={setShowModalUpdateUser} dataUpdate={dataUpdate} fetchListUser={fetchListUser} resetUpdateData={resetUpdateData}/>
                <ModalViewUser   show={showModalViewUser} setShow={setShowModalViewUser} dataUser={dataUser} fetchListUser={fetchListUser} resetViewData={resetViewData}/>
                <ModalDeleteUser show={showModalDeleteUser} setShow={setShowModalDeleteUser} dataDelete={dataDelete}/>
            </div>
            
        </div>
    )
}

export default ManageUser;