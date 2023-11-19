import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = (props = {}) => {
  const { children } = props || {};
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  // console.log(location.pathname);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (loading == undefined) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return (
    <>
      <Navigate state={location.pathname} to={"/login"} replace></Navigate>
    </>
  );
};

export default PrivateRoute;
