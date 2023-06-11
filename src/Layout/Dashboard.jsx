import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor]=useInstructor();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard/manageclasses">Manage Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageusers">Manage Users</Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <Link to="/dashboard/addclass">Add A Class</Link>
                </li>
                <li>
                  <Link to="/dashboard/myclasses">My Classes</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/selectedclasses">My Selected Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/enrolledclasses">My Enrolled Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/paymenthistory">Payment History</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
