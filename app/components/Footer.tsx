import React from "react";
import "../css/Footer.css";
import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className="footer">
      <Box className="footerContent">
        <Box className="left">
          <img
            src="/placeholder.jpg"
            alt="Map placeholder"
            className="map"
          />
          <Typography variant="body2">
            Brgy. San Pablo, Sto. Tomas, Batangas<br />
            +6343 987 6543<br />
            carlcarlvh@gmail.com
          </Typography>
        </Box>
        <Box className="center">
          <Typography variant="h6" className="vision">
            Let’s make your vision a reality
          </Typography>
          <Typography variant="body2" className="desc">
            I create modern, reliable, and user-friendly software and websites designed to bring your ideas to life.
          </Typography>
          <Box>
            <IconButton href="#" color="inherit"><FacebookIcon /></IconButton>
            <IconButton href="#" color="inherit"><GitHubIcon /></IconButton>
            <IconButton href="#" color="inherit"><InstagramIcon /></IconButton>
            <IconButton href="#" color="inherit"><LinkedInIcon /></IconButton>
          </Box>
        </Box>
        <Box className="right">
          <Typography variant="h6">Pages</Typography>
          <ul className="pages">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#skills">Skills</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </Box>
      </Box>
      <Typography variant="body2" align="center" className="copyright">
        © 2025 Fiji. All rights reserved.
      </Typography>
    </footer>
  );
}