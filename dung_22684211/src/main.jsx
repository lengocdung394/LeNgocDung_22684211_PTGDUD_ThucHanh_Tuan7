import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Dashboard from '../component/Dashboard.jsx'
import Project from '../component/Project.jsx'
import Teams from '../component/Teams.jsx'
import Analytics from '../component/Analytics.jsx'
import Messages from '../component/Messages.jsx'
import Integrations from '../component/Integrations.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} /> {/* Route mặc định cho Dashboard */}
          <Route path="project" element={<Project />} />
          <Route path="teams" element={<Teams />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="messages" element={<Messages />} />
          <Route path="integrations" element={<Integrations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
