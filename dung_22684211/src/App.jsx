import { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Sửa typo từ nav thành navigate

  useEffect(() => {
    fetch('https://67c7c637c19eb8753e7ab0ce.mockapi.io/Overview')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const colors = ["#FFB6C1", "#E0F7FA", "#FFD1DC"];

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
          <div style={{ height: "70px", display: "flex", borderBottom: "5px solid lightblue", paddingTop: "15px" }}>
            <h2 style={{ margin: "0", color: "pink" }}>DashBoard</h2>
            <input type="text" style={{ width: "220px", height: "25px", marginLeft: "410px", borderRadius: "5px" }} />
            <img src="../image/bell.png" alt="" style={{ width: "25px", height: "25px", marginLeft: "20px", marginRight: "20px" }} />
            <h3 style={{ margin: "0px" }}>?</h3>
            <img src="../image/account.jpg" alt="" style={{ width: "32px", height: "32px", borderRadius: "20px", marginLeft: "20px" }} />
          </div>
          <div style={{ height: "300px", borderBottom: "5px solid lightblue" }}>
            <h2 style={{ color: "black" }}>Overview</h2>
            <div style={{ display: "flex", padding: "0px" }}>
              {data.map((item, index) => {
                const backgroundColor = colors[index % colors.length];
                return (
                  <div key={index} style={{ backgroundColor, width: "200px", margin: "10px", display: "flex", flexDirection: "column", width: "300px", height: "150px", borderRadius: "5px", padding: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px", height: "40px" }}>
                      <h3>{item.title}</h3>
                      <div style={{ width: "20px", height: "20px", border: "2px solid black", borderRadius: "7px", padding: "5px" }} dangerouslySetInnerHTML={{ __html: item.icon }} />
                    </div>
                    <h2 style={{ padding: "0px", margin: "0px", }}>${item.number}</h2>
                    <div style={{ display: "flex" }}> <p style={{ color: "green" }}>{item.percent}%</p><p style={{ marginLeft: "5px" }}> period of change</p></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ height: "500px", marginRight: "15px" }}>
            <Outlet /> {/* Nội dung này sẽ được render từ các route con */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;