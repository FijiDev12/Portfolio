"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import "../css/Navbar.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className="navbar" elevation={0}>
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Toolbar className="toolbar">
          {/* Logo */}
          <Typography variant="h6" className="logo">
            FIJI
          </Typography>

          {/* Desktop Links */}
          <div className="navLinks">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} passHref>
                <Button className="linkBtn">{item.label}</Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            className="menuBtn"
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Dropdown */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            keepMounted
          >
            {navItems.map((item) => (
              <MenuItem key={item.label} onClick={handleMenuClose}>
                <Link href={item.href} className="menuLink">
                  {item.label}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
