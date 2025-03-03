import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";
import AISelector from "../components/AISelector";
import ChatHistory from "../components/ChatHistory";
import UserDropdown from "../components/UserDropdown";
import PlanBilling from "../components/PlanBilling";
import "../styles/Dashboard.css"; // Pastikan jalur impor benar

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboard">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="main-content">
        <div className="header">
          <AISelector />
          <PlanBilling />
          <UserDropdown />
        </div>
        <div className="chat-container">
          <ChatHistory />
          <ChatBox />
        </div>
        <ChatInput />
      </div>
    </div>
  );
};

export default Dashboard;
