import { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function App() {
  const [selectedItem, setSelectedItem] = useState('DashBoard');
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setSelectedItem(item.name);
    console.log(item); // Log the path to the console
    navigate(item.path); // Navigate to the respective path
  };
  const menuItems = [
    { name: 'DashBoard', path: '/', src: '../Lab_05/dashboard.png' },
    { name: 'Project', path: '/project', src: '../Lab_05/Folder.png' },
    { name: 'Teams', path: '/teams', src: '../Lab_05/Groups.png' },
    { name: 'Analytics', path: '/analytics', src: '../Lab_05/Pie chart.png' },
    { name: 'Messages', path: '/messages', src: '../Lab_05/Chat.png' },
    { name: 'Integrations', path: '/integrations', src: '../Lab_05/Code.png' },
  ];

  return (
    <div style={{ marginLeft: "120px", display: "flex" }}>
      <div id="component" style={{ display: 'flex', height: "900px", width: "1300px", margin: "10px" }}>
        <div id="left" style={{ width: "230px", margin: "10px", border: "5px solid lightblue", borderRadius: "5px", backgroundColor: "white" }}>
          <img src="../Lab_05/Image 1858.png" alt="" />
          <ul style={{ margin: "10px", padding: "0" }}>
            {menuItems.map((item) => (
              <li
                key={item.name}
                style={{
                  listStyle: "none",
                  marginBottom: "20px",
                  padding: "5px",
                  borderRadius: "3px",
                  backgroundColor: selectedItem === item.name ? '#FF4081' : 'transparent',
                  color: selectedItem === item.name ? 'white' : 'black',
                }}
                onClick={() => handleItemClick(item)}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img style={{ width: "25px", height: "25px" }} src={item.src} alt="" />
                  {item.name}
                </div>


              </li>
            ))}
          </ul>


          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src="../Lab_05/Group.png" alt="Group" style={{ width: '100%', height: 'auto' }} />
            <p style={{
                color: "lightblue",
                position: 'absolute',
                bottom: '70px', // Adjust as needed
                left: '50%',
                transform: 'translateX(-50%)',
                height: '40px',
                width: '150px',
                backgroundColor: 'white',
                border: '1px soild rgb(165, 236, 245)',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                marginBottom: '7px'
              }}
            >V2.0 is available</p>
            <button
              style={{
                color: "lightblue",
                position: 'absolute',
                bottom: '20px', // Adjust as needed
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '10px 20px',
                height: '40px',
                width: '150px',
                backgroundColor: 'white',
                border: '1px soild rgb(165, 236, 245)',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Try Now
            </button>
          </div>

        </div>
        <div id="right" style={{ width: "1000px", paddingLeft: "20px", margin: "10px", border: "5px solid lightblue", borderRadius: "5px", backgroundColor: "white" }}>

          <Outlet /> {/* Nội dung này sẽ được render từ các route con */}

        </div>
      </div>
    </div>
  );
}

export default App;