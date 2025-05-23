import React, { useState, useEffect } from "react";

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [datatable, setDataTable] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAdding, setIsAdding] = useState(false); // Biến để xác định hành động thêm hay chỉnh sửa
    const displayedData = datatable.slice(0, 6);

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
        setSelectedItem(item);
        setIsAdding(false); // Đặt là false khi chỉnh sửa
        setIsModalOpen(true);
    };

    const handleAddClick = () => {
        setSelectedItem(null);
        setIsAdding(true); // Đặt là true khi thêm
        setIsModalOpen(true);
    };

    const handleEdit = (id, updatedItem) => {
        fetch(`https://67e369142ae442db76d0029b.mockapi.io/dttb/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
            .then(response => response.json())
            .then(data => {
                setDataTable(prev => prev.map(item => (item.id === id ? data : item)));
                closeModal();
            })
            .catch(error => console.error('Error updating item:', error));
    };

    const handleAdd = (newItem) => {
        fetch(`https://67e369142ae442db76d0029b.mockapi.io/dttb`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
            .then(response => response.json())
            .then(data => {
                setDataTable(prev => [...prev, data]); // Thêm item mới vào danh sách
                closeModal();
                {
                    console.log("them thanh cong", newItem);
                }
            })
            .catch(error => console.error('Error adding item:', error));
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    var style = { width: "250px", height: "30px", borderRadius: "5px", margin: "15px" }

    function Modal({ isOpen, onClose, item, isAdding }) {
        const [name, setName] = useState(item ? item.name : '');
        const [company, setCompany] = useState(item ? item.company : '');
        const [orderValue, setOrderValue] = useState(item ? item.orderValue : '');
        const [orderDate, setOrderDate] = useState(item ? new Date(item.orderDate).toLocaleDateString() : '');
        const [status, setStatus] = useState(item ? item.status : '');

        useEffect(() => {
            if (item) {
                setName(item.name);
                setCompany(item.company);
                setOrderValue(item.orderValue);
                setOrderDate(new Date(item.orderDate).toLocaleDateString());
                setStatus(item.status);
            } else {
                // Reset input fields when adding new item
                setName('');
                setCompany('');
                setOrderValue('');
                setOrderDate('');
                setStatus('');
            }
        }, [item]);

        if (!isOpen) return null;

        const handleSave = () => {
            const updatedItem = {
                name,
                company,
                orderValue,
                orderDate: new Date(orderDate).toISOString(),
                status,
            };
            if (isAdding) {
                handleAdd(updatedItem); // Gọi hàm thêm item mới
            } else {
                handleEdit(item.id, updatedItem); // Gọi hàm chỉnh sửa item
            }
        };

        return (
            <div style={modalStyles.overlay}>
                <div style={modalStyles.modal}>
                    <h2>{isAdding ? "Add New Item" : "Edit Item"}</h2>
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
                        <button style={{ width: "150px", height: "50px", borderRadius: "5px" }} onClick={onClose}>Close</button>
                        <button style={{ width: "150px", height: "50px", borderRadius: "5px" }} onClick={handleSave}>Save</button>
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

    const addData = () => {
        handleAddClick(); // Mở modal để thêm dữ liệu
    }

    const colors = ["#FFC0CB", "rgb(221, 234, 247)", "rgb(231, 238, 245)"];

    return (
        <div>
            <div style={{ height: "40px", display: "flex", borderBottom: "2px solid #EEEEEE", paddingTop: "15px" }}>
                <h2 style={{ margin: "0", color: '#FF4081' }}>DashBoard</h2>
                <input type="text" style={{ width: "220px", height: "25px", marginLeft: "470px", borderRadius: "5px",border:"1px solid white ", backgroundColor:"#EEEEEE" }} />
                <img src="../image/bell.png" alt="" style={{ width: "25px", height: "25px", marginLeft: "20px", marginRight: "20px" }} />
                <h3 style={{ margin: "0px" }}>?</h3>
                <img src="../image/account.jpg" alt="" style={{ width: "32px", height: "32px", borderRadius: "20px", marginLeft: "20px" }} />
            </div>

            <div style={{ height: "240px" }}>
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

            <div style={{ height: "380px", marginRight: "15px" }}>
                <div style={{ display: "flex", padding: "10px" }}>
                    <img style={{ width: "25px", height: "25px" }} src="../Lab_05/File text 1.png" alt="" />
                    <h3 style={{ padding: "0px", margin: "0px" }}>Detailed Report</h3>
                    <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
                        <div onClick={handleAddClick} style={{ border: "1px solid #FF4081", padding: "5px", display: "flex", marginRight: "7px", color: "#FF4081", width: "40px", borderRadius: "5px", cursor: "pointer" }}>Add</div>
                        <div style={{ border: "1px solid #FF4081", padding: "5px", display: "flex", marginRight: "7px", color: "#FF4081", borderRadius: "5px" }}><img src="../Lab_05/Download.png" alt="" />import</div>
                        <div style={{ border: "1px solid #FF4081", padding: "5px", display: "flex", color: "#FF4081", borderRadius: "5px" }}><img src="../Lab_05/Move up.png" />export</div>
                    </div>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #EEEEEE", marginTop: "10px" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}><input type='checkbox' /></th>
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
            <div style={{ display: "flex" }}>
                <p style={{ width: "200px" }}>63 result</p>
                <ul style={{ display: "flex", justifyContent: "center", listStyle: "none", padding: "0px", marginLeft: "430px" }}>
                    <li style={{ width: "25px", height: "25px", padding: "5px" }}><img style={{ width: "25px", height: "25px" }} src="../Lab_05/left-arrow.png" alt="" /></li>
                    <li style={{ width: "25px", height: "25px", padding: "5px", borderRadius: "20px", color: "white", justifyContent: "center", backgroundColor: "#FF4081" }}><p style={{margin:"0px", paddingLeft:"7px"}}>1</p></li>
                    <li style={{ width: "25px", height: "25px", padding: "5px" }}>2</li>
                    <li style={{ width: "25px", height: "25px", padding: "5px" }}>3</li>
                    <li style={{ width: "25px", height: "25px", padding: "5px" }}>4</li>
                    <li style={{ width: "25px", height: "25px", padding: "5px" }}>....</li>
                    <li style={{ width: "25px", height: "25px", padding: "5px" }}>11</li>
                    <li style={{ width: "25px", height: "25px", padding: "5px" }}>12</li>
                    <li style={{ width: "25px", height: "25px", padding: "5px" }}><img style={{ width: "25px", height: "25px" }} src="../Lab_05/right-arrow (1).png" alt="" /></li>
                </ul>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} item={selectedItem} isAdding={isAdding} />
        </div>
    );
}