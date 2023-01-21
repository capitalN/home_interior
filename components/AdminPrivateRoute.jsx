import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function AdminPrivateRoute({ children }) {
  let [adminAuth, setadminAuth] = useState(false);
  const Router = useRouter();

  useEffect(() => {
    setadminAuth(localStorage.getItem("adminAuth"));
  }, []);

  if (!adminAuth) {
    return;
  }
  return children;
}

export default AdminPrivateRoute;
