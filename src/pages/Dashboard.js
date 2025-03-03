import React from "react";
import "./Dashboard.css"; // Import file CSS

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        {/* Konten sidebar di sini */}
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Selamat Datang di Dashboard NusaGPT</h1>
          {/* Elemen header di sini */}
        </header>
        <div className="chat-container">
          <div className="chat-box">
            <p>Mulai membangun UI chatbot AI kita!</p>
            {/* Pesan chat akan ditempatkan di sini */}
          </div>
        </div>
        <div className="chat-input">
          {/* Elemen input di sini */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
