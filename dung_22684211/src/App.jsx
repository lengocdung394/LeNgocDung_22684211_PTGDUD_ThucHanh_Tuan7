import { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function App() {
  const navigate = useNavigate(); // Sửa typo từ nav thành navigate



  return (
    <div style={{ marginLeft: "150px", display: "flex" }}>
      <div id="component" style={{ display: 'flex', height: "900px", width: "1300px", margin: "10px" }}>
        <div id="left" style={{ width: "200px", margin: "10px", border: "5px solid lightblue", borderRadius: "5px", backgroundColor: "white" }}>
          <h2 style={{ padding: 0, margin: 0 }}>Logo</h2>
          <ul style={{ margin: "none", padding: "0" }}>
            <li style={{ listStyle: "none", marginBottom: "20px", padding: "5px", backgroundColor: "lightblue", borderRadius: "3px", color: "black" }} onClick={() => navigate("/")}>
              DashBoard
            </li>
            <li style={{ listStyle: "none", marginBottom: "20px", padding: "5px", borderRadius: "3px" }} onClick={() => navigate("/project")}>
              Project
            </li>
            <li style={{ listStyle: "none", marginBottom: "20px", padding: "5px", borderRadius: "3px" }} onClick={() => navigate("/teams")}>
              Teams
            </li>
            <li style={{ listStyle: "none", marginBottom: "20px", padding: "5px", borderRadius: "3px" }} onClick={() => navigate("/analytics")}>
              Analytics
            </li>
            <li style={{ listStyle: "none", marginBottom: "20px", padding: "5px", borderRadius: "3px" }} onClick={() => navigate("/messages")}>
              Messages
            </li>
            <li style={{ listStyle: "none", marginBottom: "20px", padding: "5px", borderRadius: "3px" }} onClick={() => navigate("/integrations")}>
              Integrations
            </li>
          </ul>
        </div>
        <div id="right" style={{ width: "1000px", paddingLeft: "20px", margin: "10px", border: "5px solid lightblue", borderRadius: "5px", backgroundColor: "white" }}>

          <Outlet /> {/* Nội dung này sẽ được render từ các route con */}

        </div>
      </div>
    </div>
  );
}

export default App;