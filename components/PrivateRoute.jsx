import Router from "next/router";

function PrivateRoute({ children }) {
  if (!state.isAuth) return Router.push("login");
  return children;
}

export default PrivateRoute;
