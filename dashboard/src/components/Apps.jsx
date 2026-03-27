

import React from "react";

const Apps = () => {
  const socialLinks = [
    { name: "Instagram", icon: "fa-brands fa-instagram", url: "https://www.instagram.com/abhishekshivhare_/", color: "#E1306C" },
    { name: "LinkedIn", icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/abhishek-shivhare-42009b327/", color: "#0077B5" },
    { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/abhishekshivahre08", color: "#333" },
    { name: "Portfolio", icon: "fa-solid fa-user", url: "https://abhishekshivhare.netlify.app/", color: "#387ed1" },
  ];

  return (
    <div className="apps-container">
      <style>
        {`
          .apps-container {
            padding: 20px;
            text-align: center;
          }
          
          .apps-title {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 30px;
            color: #444;
          }

          .apps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            max-width: 1000px;
            margin: 0 auto;
          }

          .app-card {
            background: #fff;
            border: 1px solid #eee;
            border-radius: 12px;
            padding: 25px;
            text-decoration: none;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;
          }

          .app-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.08);
            border-color: transparent;
          }

          .app-card i {
            font-size: 40px;
            transition: transform 0.3s ease;
          }

          .app-card:hover i {
            transform: scale(1.1);
          }

          .app-name {
            font-size: 16px;
            font-weight: 500;
            color: #555;
          }

          /* Mobile Tweaks */
          @media (max-width: 576px) {
            .apps-grid {
              grid-template-columns: 1fr 1fr; /* Mobile par 2 columns */
              gap: 10px;
            }
            .app-card {
              padding: 15px;
            }
            .app-card i {
              font-size: 30px;
            }
          }
        `}
      </style>

      <h2 className="apps-title">Connect with the Developer</h2>

      <div className="apps-grid">
        {socialLinks.map((app, index) => (
          <a 
            key={index} 
            href={app.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="app-card shadow-sm"
          >
            <i className={app.icon} style={{ color: app.color }}></i>
            <span className="app-name">{app.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Apps;
