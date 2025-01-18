import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [callLogs, setCallLogs] = useState([]);

  useEffect(() => {
    axios.get('/api/call-logs')
      .then(response => setCallLogs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="dashboard">
      <nav className="sidebar">
        <div className="logo">AI Voice Agent</div>
        <ul className="menu">
          <li>Dashboard</li>
          <li>Call History</li>
          <li>Settings</li>
          <li>Analytics</li>
        </ul>
      </nav>
      <div className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <div className="user-profile">
            <span>Welcome, User</span>
            <img src="https://via.placeholder.com/40" alt="Profile" />
          </div>
        </header>
        <div className="content">
          <div className="call-history">
            <h2>Recent Calls</h2>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Phone Number</th>
                  <th>Duration</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {callLogs.map(log => (
                  <tr key={log.id}>
                    <td>{log.date}</td>
                    <td>{log.phone_number}</td>
                    <td>{log.duration}</td>
                    <td>{log.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
