import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
} from "reactstrap";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Search } from "lucide-react"; // Ensure this is installed
import { MapPin } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: "Home", path: "/" },
    { label: "Login", path: "/login" },
    // { label: "Quotation Builder", path: "/builder" },
    // { label: "Quotation Status", path: "/status" },
    { label: "Register",path: "/registerPage"},
  ];

  const navButtonStyle = (active) => ({
    background: "none",
    border: "none",
    color: active ? "#667eea" : "#64748b",
    fontWeight: active ? "600" : "400",
    cursor: "pointer",
    padding: "0.5rem 0",
    borderBottom: active ? "2px solid #667eea" : "2px solid transparent",
    transition: "color 0.2s, border 0.2s",
    fontSize: "1rem",
  });

  return (
    <div className="main-navbar">
      <Navbar
        color="light"
        light
        expand="md"
        className="px-4"
        style={{
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          padding: "1rem",
        }}
      >
        <div className="d-flex w-100 justify-content-between align-items-center">
          {/* Brand and Toggler */}
          <div className="d-flex align-items-center">
            <NavbarBrand
              onClick={() => navigate("/")}
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "#4f46e5",
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <MapPin size={20} color="white" />
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b' }}>EasyBook</span>
          </div>
            </NavbarBrand>
            {/* <NavbarToggler onClick={toggle} /> */}
          </div>

          {/* Navigation Tabs and Search */}
          <Collapse isOpen={isOpen} navbar>
            <div className="d-flex align-items-center justify-content-end w-100" style={{ gap: "2rem", flexWrap: "wrap" }}>
              <nav
                className="d-flex align-items-center"
                style={{
                  display: "flex",
                  gap: "4rem",
                  listStyle: "none",
                  marginBottom: "-2%",
                  marginLeft:'20%',
                  marginTop:'0%'
                  
                }}
              >
                {tabs.map((tab) => {
                  const isActive = location.pathname === tab.path;
                  return (
                    <button
                      key={tab.label}
                      onClick={() => {
                        navigate(tab.path);
                        setIsOpen(false); // close nav on mobile
                      }}
                      style={navButtonStyle(isActive)}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </nav>

              {/* Search Input */}
              <div style={{ position: "relative", display:"flex",marginLeft:'70%',width:'50%' }}>
                <Search
                  size={20}
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#94a3b8",
                  }}
                />
                <input
                  type="text"
                  placeholder="Search for flights, hotels, and places"
                  style={{
                    padding: "0.75rem 1rem 0.75rem 2.5rem",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    width: "300px",
                    fontSize: "0.875rem",
                  }}
                />
              </div>
            </div>
          </Collapse>
        </div>
      </Navbar>

      {/* Render page content below navbar */}
      <div style={{ padding: "1.5rem" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
