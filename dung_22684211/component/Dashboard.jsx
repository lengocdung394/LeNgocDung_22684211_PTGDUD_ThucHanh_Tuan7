import React from "react";
import { useState, useEffect } from "react";

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [datatable, setDataTable] = useState([])
    const displayedData = datatable.slice(0, 6); // Hiển thị 10 dòng đầu tiên
    useEffect(() => {
        fetch('https://67e369142ae442db76d0029b.mockapi.io/dttb')
            .then(response => response.json())
            .then(data => setDataTable(data))
    }, [])
    useEffect(() => {
        fetch('https://67c7c637c19eb8753e7ab0ce.mockapi.io/Overview')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
    const colors = ["#FFB6C1", "#E0F7FA", "#FFD1DC"];
    return (
        <div>
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
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}><input type='checkbox' ></input></th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Customer Name</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Company</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Order Value</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Order Date</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px", width: "50px" }}></th>
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
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{<img src='../image/edit.png' style={{ width: "25px", height: "25px" }}></img>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    );
}