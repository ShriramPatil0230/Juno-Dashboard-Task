import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="container sidebar">
      <div className="d-flex justify-content-center">
      <h2>Logo Here</h2>
      </div>
      <hr className="mb-0"/>
      <div className="links">
        <a>Overview</a>
        <a>Onboarding</a>
        <a
          className={location.pathname === "/monitoring/pending" || "/monitoring/completed" ? "active" : ""}
          onClick={() => navigate("monitoring/pending")}
        >
          Monitoring
        </a>
        <a>Flagging</a>
        <a>Source of Income</a>
        <a>UAR</a>
      </div>
    </div>
  );
};

export default Sidebar;
