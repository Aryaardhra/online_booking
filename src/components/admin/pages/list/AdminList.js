import "../list/adminList.scss";
import Navbar from "../../components/adminnavbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
import DataTable from "../../components/datatable/DataTable";

const AdminList = () => {
  return (
    <>
    <div className="admin_list">
        <SideBar />
        <div className="l_list_container">
            <Navbar />
            <DataTable />
        </div>
    </div>
    </>
  )
}

export default AdminList