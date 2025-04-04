import { useState } from 'react'


function App() {


  return (


    <div style={{ marginLeft: "150px", display: "flex" }}>

      <div id="conponent" style={{ display: 'flex', height: "800px", width: "1200px", margin: "10px" }}>
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

          <img src="" alt="" />

        </div>
        <div id="right" style={{ width: "900px", paddingLeft: "20px", margin: "10px", border: "5px solid lightblue", borderRadius: "5px", backgroundColor: "white" }}>

          <div style={{ height: "70px", display: "flex", borderBottom: "5px solid lightblue" }}>
            <h2 style={{ margin: "0", color: "pink" }}>DashBoard</h2>
            <input type="text" name="" id="" style={{ width: "200px", height: "25px", marginLeft: "200px" }} />


          </div>
          <div style={{ height: "300px", borderBottom: "5px solid lightblue" }}>

            <h2>Overview</h2>

            <div style={{ display: "flex" }}>

              <div style={{ flex: 1, border: "1px solid white", borderRadius: "5px", margin: "5px", height: "150px", border: "5px solid lightblue" }}>1</div>
              <div style={{ flex: 1, border: "1px solid white", borderRadius: "5px", margin: "5px", height: "150px", border: "5px solid lightblue" }}>2</div>
              <div style={{ flex: 1, border: "1px solid white", borderRadius: "5px", margin: "5px", height: "150px", border: "5px solid lightblue" }}>3</div>
            </div>

          </div>
          <div style={{ height: "400px" }}>

            <table>





            </table>

          </div>
        </div>
      </div>
    </div>
  )

}

export default App
