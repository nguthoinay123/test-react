import ModalCreateUser from "./ModalCreateUser";

const ManageUser=(prosp)=>{
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <button>
                    add user
                </button>
            </div>
            <div>
                table user
              <ModalCreateUser/>
            </div>
        </div>
    )
}

export default ManageUser;