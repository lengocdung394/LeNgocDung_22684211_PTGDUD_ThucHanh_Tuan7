import { useState, useEffect, use } from 'react'


function App() {

  const [data, setData] = useState([])
  const [datatable, setDataTable] = useState([])
  const displayedData = datatable.slice(0, 6); // Hiển thị 10 dòng đầu tiên
  useEffect(() => {
    fetch('https://67c7c637c19eb8753e7ab0ce.mockapi.io/Overview')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
  const colors = ["#FFB6C1", "#E0F7FA", "#FFD1DC"]; // Danh sách màu sắc
  useEffect(() => {
    fetch('https://67e369142ae442db76d0029b.mockapi.io/dttb')
      .then(response => response.json())
      .then(data => setDataTable(data))
  }, [])
  return (


    <div style={{ marginLeft: "150px", display: "flex" }}>

      <div id="conponent" style={{ display: 'flex', height: "900px", width: "1300px", margin: "10px" }}>
        <div id="left" style={{ width: "200px", margin: "10px", border: "5px solid lightblue", borderRadius: "5px", backgroundColor: "white" }}>
          <h2 style={{ padding: 0, margin: 0 }}>Logo </h2>
          <ul style={{ margin: "none", padding: "0" }}>

            <li style={{ listStyle: "none", marginBottom: "20px", padding: "5px", backgroundColor: "lightblue", borderRadius: "3px", color: "black" }}>DashBoard</li>
            <li style={{ listStyle: "none", marginBottom: "20px", padding: "5px", borderRadius: "3px" }}>Project</li>
            <li style={{ listStyle: "none", marginBottom: "20px", padding: "5px", borderRadius: "3px" }}>Teams</li>
            <li style={{ listStyle: "none", marginBottom: "20px", padding: "5px", borderRadius: "3px" }}>Analytics</li>
            <li style={{ listStyle: "none", marginBottom: "20px", padding: "5px", borderRadius: "3px" }}>Messages</li>
            <li style={{ listStyle: "none", marginBottom: "20px", padding: "5px", borderRadius: "3px" }}>Integrations</li>
          </ul>



        </div>
        <div id="right" style={{ width: "1000px", paddingLeft: "20px", margin: "10px", border: "5px solid lightblue", borderRadius: "5px", backgroundColor: "white" }}>

          <div style={{ height: "70px", display: "flex", borderBottom: "5px solid lightblue", paddingTop: "15px" }}>
            <h2 style={{ margin: "0", color: "pink" }}>DashBoard</h2>
            <input type="text" name="" id="" style={{ width: "220px", height: "25px", marginLeft: "410px", borderRadius: "5px" }} />
            <img src="../image/bell.png" alt="" style={{ width: "25px", height: "25px", marginLeft: "20px", marginRight: "20px" }} />
            <h3 style={{ margin: "0px" }}>?</h3>
            <img src="../image/account.jpg" alt="" style={{ width: "32px", height: "32px", borderRadius: "20px", marginLeft: "20px" }} />
          </div>
          <div style={{ height: "300px", borderBottom: "5px solid lightblue" }}>

            <h2 style={{ color: "black" }}>Overview</h2>

            <div style={{ display: "flex", padding: "0px" }}>
              {
                data.map((item, index) => {
                  const backgroundColor = colors[index % colors.length];
                  return (
                    <div key={index} style={{ backgroundColor, width: "200px", margin: "10px", display: "flex", flexDirection: "column", width: "300px", height: "150px", borderRadius: "5px", padding: "10px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px", height: "40px" }}>
                        <h3>{item.title}</h3>
                        <div style={{ width: "20px", height: "20px", border: "2px solid black", borderRadius: "7px", padding: "5px" }} dangerouslySetInnerHTML={{ __html: item.icon }} />
                      </div>

                      <h2 style={{ padding: "0px", margin: "0px", }}>${item.number}</h2>
                      <div style={{ display: "flex" }}> <p style={{ color: "green" }}>{item.percent}%</p><p style={{ marginLeft: "5px" }}>  period of change</p></div>
                    </div>
                  )
                })
              }

            </div>

          </div>
          <div style={{ height: "500px" , marginRight: "15px"}}>

            <table style={{ width: "100%", borderCollapse: "collapse"}}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}><input type='checkbox' ></input></th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Customer Name</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Company</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Order Value</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Order Date</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px", width:"50px" }}></th>
                </tr>
              </thead>
              <tbody>
                {displayedData.map((item, index) => (
                  
                  <tr key={index} style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <input type="checkbox" />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.name}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.company}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.orderValue}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.orderDate}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.status}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{<img src='../image/edit.png' style={{width: "25px", height:"25px"}}></img>}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  )

}

export default App
