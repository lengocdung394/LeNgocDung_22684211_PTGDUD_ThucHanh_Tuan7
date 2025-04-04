import React from "react";
import { useState, useEffect } from "react";

export default function Dashboard() {
    const [datatable, setDataTable] = useState([])
    const displayedData = datatable.slice(0, 6); // Hiển thị 10 dòng đầu tiên
    useEffect(() => {
        fetch('https://67e369142ae442db76d0029b.mockapi.io/dttb')
            .then(response => response.json())
            .then(data => setDataTable(data))
    }, [])
    return (
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
    );
}