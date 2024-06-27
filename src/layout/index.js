import React, { useEffect } from "react";

import PublicLayout from "./publicLayout";
import PrivateLayout from "./privateLayout";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { selectUserData } from "../redux/AuthSlice/index.slice";

function Layout() {
  const profile = useSelector(selectUserData);
  const navigate = useNavigate();
  console.log("profile------------", profile);
  useEffect(() => {
    if (profile) navigate("/dashboard");
    else navigate("/");
  }, [profile]);

  return <>{profile ? <PrivateLayout /> : <PublicLayout />}</>;
}

export default Layout;
