import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Material-UI Menu Icon
import { Menu, MenuItem, IconButton } from '@mui/material'; // Material-UI Components
import './AdminNavbar.css'; // Import the CSS for Navbar styling

const AdminNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // State to manage the dropdown

  // Function to open the dropdown menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to close the dropdown menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
      <h2>Admin Dashboard</h2>
      <IconButton
        edge="end"
        color="inherit"
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleMenuClick}
      >
        <MenuIcon fontSize="large" /> {/* Material-UI Menu Icon */}
      </IconButton>

      {/* Dropdown menu */}
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Link to="/upload">Add Student</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link to="/view-students">View Students</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link to="/add-menu-item">Add Menu Item</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link to="/view-menu">View Menu</Link>
        </MenuItem>
      </Menu>
    </nav>
  );
};

export default AdminNavbar;
