import React, { useState, useEffect } from "react";

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [datatable, setDataTable] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null); // Add this line
    const [isModalOpen, setIsModalOpen] = useState(false);
    const displayedData = datatable.slice(0, 6); // Hiển thị 6 dòng đầu tiên

    useEffect(() => {
        fetch('https://67e369142ae442db76d0029b.mockapi.io/dttb')
            .then(response => response.json())
            .then(data => setDataTable(data));
    }, []);

    useEffect(() => {
        fetch('https://67c7c637c19eb8753e7ab0ce.mockapi.io/Overview')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const handleOnclick = (item) => {
        setSelectedItem(item); // Set the selected item
        setIsModalOpen(true); // Open modal
    };

    const handleEdit = (id) => {
        {
            console.log(id)
        }
    }
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };
    var style = { width: "250px", height: "30px", borderRadius: "5px", margin: "15px" }

    function Modal({ isOpen, onClose, item }) {
        if (!isOpen) return null;

        const [name, setName] = useState(item.name);
        const [company, setCompany] = useState(item.company);
        const [orderValue, setOrderValue] = useState(item.orderValue);
        const [orderDate, setOrderDate] = useState(new Date(item.orderDate).toLocaleDateString());
        const [status, setStatus] = useState(item.status);

        return (
            <div style={modalStyles.overlay}>
                <div style={modalStyles.modal}>
                    <h2>Details</h2>
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <td><strong>Name:</strong></td>
                                <td>
                                    <input style={style} value={name} onChange={(e) => setName(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Company:</strong></td>
                                <td>
                                    <input style={style} value={company} onChange={(e) => setCompany(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Order Value:</strong></td>
                                <td>
                                    <input style={style} value={orderValue} onChange={(e) => setOrderValue(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Order Date:</strong></td>
                                <td>
                                    <input style={style} value={orderDate} onChange={(e) => setOrderDate(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Status:</strong></td>
                                <td>
                                    <input style={style} value={status} onChange={(e) => setStatus(e.target.value)} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ display: "flex", justifyContent: "center", margin: "auto", marginTop: "20px" }}>
                        <button style={{ width: "150px", height: "50px" }} onClick={onClose}>Close</button>
                        <button style={{ width: "150px", height: "50px" }} onClick={() => handleEdit(item.id)}>Save</button>
                    </div>

                </div>
            </div>
        );
    }

    const modalStyles = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        modal: {
            background: "white",
            padding: "20px",
            borderRadius: "5px",
            width: "400px",
        },
    };

    const colors = ["#FFB6C1", "#E0F7FA", "#FFD1DC"];

    return (
        <div>
            <div style={{ height: "70px", display: "flex", borderBottom: "5px solid lightblue", paddingTop: "15px" }}>
                <h2 style={{ margin: "0", color: '#FF4081' }}>DashBoard</h2>
                <input type="text" style={{ width: "220px", height: "25px", marginLeft: "410px", borderRadius: "5px" }} />
                <img src="../image/bell.png" alt="" style={{ width: "25px", height: "25px", marginLeft: "20px", marginRight: "20px" }} />
                <h3 style={{ margin: "0px" }}>?</h3>
                <img src="../image/account.jpg" alt="" style={{ width: "32px", height: "32px", borderRadius: "20px", marginLeft: "20px" }} />
            </div>

            <div style={{ height: "300px", borderBottom: "5px solid lightblue" }}>
                <div style={{ display: "flex", padding: "10px" }}>
                    <img style={{ width: "25px", height: "25px" }} src="../Lab_05/Squares four 1.png" alt="" />
                    <h3 style={{ color: "black", margin: "0px" }}>Overview</h3>
                </div>

                <div style={{ display: "flex", padding: "0px" }}>
                    {data.map((item, index) => {
                        const backgroundColor = colors[index % colors.length];
                        return (
                            <div key={index} style={{ backgroundColor, width: "270px", margin: "10px", display: "flex", flexDirection: "column", height: "120px", borderRadius: "5px", padding: "10px" }}>
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
                <div style={{ display: "flex", padding: "10px" }}>
                    <img style={{ width: "25px", height: "25px" }} src="../Lab_05/File text 1.png" alt="" />
                    <h3 style={{ padding: "0px", margin: "0px" }}>Detailed Report</h3>
                    <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
                        <div style={{ border: "1px solid #FF4081", padding: "5px", display: "flex", marginRight: "7px", color: "#FF4081" }}><img src="../Lab_05/Download.png" alt="" />import</div>
                        <div style={{ border: "1px solid #FF4081", padding: "5px", display: "flex", color: "#FF4081" }}><img src="../Lab_05/Move up.png" />export</div>

                    </div>
                </div>
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
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                    <img
                                        src='../image/edit.png'
                                        onClick={() => handleOnclick(item)}
                                        style={{ width: "25px", height: "25px", cursor: "pointer" }}
                                        alt="Edit"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} item={selectedItem} />
        </div>
    );
}