


import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle ke liye

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMenuOpen(false); // Link click hote hi menu close ho jaye
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Holdings", path: "/holdings" },
    { name: "Positions", path: "/positions" },
    { name: "Funds", path: "/funds" },
    { name: "Apps", path: "/apps" },
  ];

  return (
    <nav className="menu-container shadow-sm">
      <style>
        {`
          .menu-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 30px;
            background: #fff;
            border-bottom: 1px solid #eee;
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          .logo-section img { width: 40px; }

          /* Hamburger Icon Styling */
          .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 5px;
          }

          .hamburger span {
            width: 25px;
            height: 3px;
            background: #444;
            border-radius: 2px;
            transition: 0.3s;
          }

          /* Navigation Menu */
          .nav-menus {
            display: flex;
            align-items: center;
          }

          .nav-menus ul {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .nav-link {
            text-decoration: none;
            padding: 10px 20px;
            display: block;
            color: #666;
            font-size: 14px;
            font-weight: 500;
          }

          .selected {
            color: #387ed1;
            border-bottom: 2px solid #387ed1;
          }

          .profile-section {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-left: 20px;
            padding-left: 20px;
            border-left: 1px solid #eee;
          }

          .avatar {
            width: 30px;
            height: 30px;
            background: #eff3f8;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            color: #387ed1;
            font-weight: bold;
          }

          /* Mobile Responsiveness */
          @media (max-width: 768px) {
            .hamburger { display: flex; }

            .nav-menus {
              display: ${isMenuOpen ? "block" : "none"};
              position: absolute;
              top: 60px;
              left: 0;
              width: 100%;
              background: #fff;
              box-shadow: 0 10px 15px rgba(0,0,0,0.1);
              padding: 20px 0;
            }

            .nav-menus ul {
              flex-direction: column;
              text-align: center;
            }

            .nav-link {
              padding: 15px;
              border-bottom: 1px solid #f9f9f9;
            }

            .selected {
              border-bottom: none;
              background: #f0f7ff;
            }

            .profile-section {
              border-left: none;
              margin: 20px 0 0 0;
              justify-content: center;
            }
          }
        `}
      </style>

      {/* Brand Logo */}
      <div className="logo-section">
        <Link to="/">
          <img src=".\logo.png" alt="logo" />
        </Link>
      </div>

      {/* Hamburger Icon (Visible on Mobile) */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : '' }}></span>
        <span style={{ opacity: isMenuOpen ? '0' : '1' }}></span>
        <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -7px)' : '' }}></span>
      </div>

      {/* Menus Area */}
      <div className="nav-menus">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={selectedMenu === index ? "nav-link selected" : "nav-link"}
                onClick={() => handleMenuClick(index)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="profile-section">
          <div className="avatar">ZU</div>
          <p className="username mb-0 ms-2" style={{ fontSize: "13px" }}>USERID</p>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
