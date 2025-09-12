"use client";
import React from "react";
import "../css/Footer.css";
import { Box, Typography, Link, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FooterMap from "./FooterMap";

export default function Footer() {
  return (
    <Box component="footer" className="footer">
      <Box className="footerContent">
        {/* Left */}
        <Box className="left">
          <FooterMap />
          <Typography variant="body2">
            Brgy. San Pablo, Sto. Tomas, Batangas
            <br />
            +6343 987 6543
            <br />
            carloquila.fiji@gmail.com
          </Typography>
        </Box>

        {/* Center */}
        <Box
          className="center"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" className="vision">
            Let’s make your vision a reality
          </Typography>
          <Typography
            variant="body2"
            className="desc"
            sx={{ textAlign: "center", mb: 2 }}
          >
            I create modern, reliable, and user-friendly software and websites
            designed to bring your ideas to life.
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center">
            <IconButton
              href="https://www.facebook.com/carl.oquila/"
              color="inherit"
              target="_blank"
              rel="noopener"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://github.com/FijiDev12"
              color="inherit"
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/cxrl.json/"
              color="inherit"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/carl-jerson-oquila-72280a235/"
              color="inherit"
              target="_blank"
              rel="noopener"
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>


        {/* Right */}
        <Box className="right" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Typography variant="h6">Pages</Typography>
          <Stack spacing={1}>
            <Link href="/" underline="hover" color="inherit">
              Home
            </Link>
            <Link href="#about" underline="hover" color="inherit">
              About
            </Link>
            <Link href="#skills" underline="hover" color="inherit">
              Skills
            </Link>
            <Link href="#projects" underline="hover" color="inherit">
              Projects
            </Link>
            <Link href="#contact" underline="hover" color="inherit">
              Contact
            </Link>
          </Stack>
        </Box>
      </Box>

      <Typography variant="body2" align="center" className="copyright">
        © 2025 Fiji. All rights reserved.
      </Typography>
    </Box>
  );
}
