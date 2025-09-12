'use client';
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });
import "../app/css/General.css";
import { useState } from "react";
import { Box, Button, Typography, Container, Grid, Chip, Modal, Stack, TextField } from "@mui/material";
import Image from "next/image";
import headerImage from "../public/images/general/Header_Image.jpeg";
import aboutImage from "../public/images/general/About_Image.jpeg";
import draftTech_Project from "../public/images/general/Draftech.png";
import Metro_Project from "../public/images/general/Metro.png";
import { sendTelegramMessage } from '@/app/utils/telegram_Talk';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const items = [
  "Website",
  "< >",
  "Mobile Application",
  "< >",
  "UI/UX Design",
  "< >",
  "Monitoring System",
  "< >",
  "Database Project",
  "< >",
  "Web Application",
  "< >"
];

export default function Home() {
// Modal state
  const [isLetsTalkModalOpen, setIsLetsTalkModalOpen] = useState<boolean>(false);

  // Open / Close modal
  const openLetsTalkModal = () => setIsLetsTalkModalOpen(true as const);
  const closeLetsTalkModal = () => setIsLetsTalkModalOpen(false as const);

  // Handle form submission
  const handleLetsTalkSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const payload = {
      email: formData.get("email")?.toString() || "",
      subject: formData.get("subject")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    try {
      await sendTelegramMessage(payload);
      toast.success("Message sent successfully! ✅");
      closeLetsTalkModal();
    } catch (err) {
      console.error("Failed to send Telegram message:", err);
      toast.error("Failed to send message. ❌");
    }
  };


  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnHover
      draggable
      pauseOnFocusLoss
    />
      {/* Lets Talk Modal */}
      <Modal
        open={isLetsTalkModalOpen}
        onClose={closeLetsTalkModal}
        aria-labelledby="lets-talk-modal-title"
      >
        <Box
          component="form"
          onSubmit={handleLetsTalkSubmit}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 400 },
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="lets-talk-modal-title" variant="h6" sx={{ mb: 2, color: "#424240" }} className="kaisei">
            Let’s Talk
          </Typography>
          <Stack spacing={2}>
            <TextField
              required
              label="Email"
              name="email"
              type="email"
              fullWidth
            />
            <TextField
              required
              label="Subject"
              name="subject"
              fullWidth
            />
            <TextField
              required
              label="Message"
              name="message"
              multiline
              rows={4}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ borderRadius: 2, backgroundColor: "#C06B46" }}
            >
              Send
            </Button>
          </Stack>
        </Box>
      </Modal>
      <Navbar />
      {/* Header */}
      <Box
        sx={{
          background: "linear-gradient(90deg, #0d3b24 0%, #1e5631 100%)",
          color: "#fff",
          // py: { xs: 6, md: 10 },
          height: { xs: "100lvh", md: "100vh" }
        }}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Grid container spacing={2} alignItems="center" sx={{ height: "100%"}}>
            <Grid size={{ xs: 6, sm: 6, md: 7, lg: 7 }}>
              <Typography sx={{ fontWeight: 700, mb: 2, fontSize: { xs: 30, md: 40, lg: 60 } }} className="kaisei">
                I’m <span style={{ color: "#C06B46" }}>Carl,</span><br />a Web Developer
              </Typography>
              <Typography sx={{ mb: 3, fontSize: { xs: 12, md: 20, lg: 30 } }}>
                I build dynamic, engaging websites with a commitment to exceptional service and
                results that exceed expectations.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button variant="contained" size="large" sx={{ borderRadius: 8, background:"#C06B46" }} href="#projects">
                  View Projects
                </Button>
                <Button variant="outlined"  size="large" sx={{ borderRadius: 8, color:"#C06B46", borderColor:"#C06B46" }} onClick={openLetsTalkModal}>
                  Let’s Talk
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 6, md: 5, lg: 5 }} sx={{ height: "100%",display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
              <Box className="HeaderAvatar">
                <Image
                  src={headerImage}
                  alt="Profile"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About */}
      <Box sx={{ background: '#EEF0E5'}} id="about">
        <Box sx={{ background: "#1e5631", py: 2 }}>
        <div className="ticker">
          <div className="ticker-track">
            {/* first copy */}
            {items.map((chip, i) => (
              <Chip
                key={`a-${i}`}
                label={chip}
                sx={{
                  mx: 1,
                  bgcolor: chip === "< >" ? "transparent" : "rgba(255,255,255,0.1)",
                  color: chip === "< >" ? "#C06B46" : "#fff",
                  fontWeight: 500,
                }}
              />
            ))}
            {/* second copy for seamless loop */}
            {items.map((chip, i) => (
              <Chip
                key={`b-${i}`}
                label={chip}
                sx={{
                  mx: 1,
                  bgcolor: chip === "< >" ? "transparent" : "rgba(255,255,255,0.1)",
                  color: chip === "< >" ? "#C06B46" : "#fff",
                  fontWeight: 500,
                }}
              />
            ))}
          </div>
        </div>
        </Box>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                textAlign: "center",
                color: "#424240",
                display: "inline-block",      // underline matches text width
                borderBottom: "6px solid #424240", // thick underline
                pb: "4px",                    // space between text & underline
              }}
              className="kaisei"
            >
            About
          </Typography>
          </Box>

        <Grid container spacing={4} alignItems="stretch">
          <Grid
            size={{ xs: 12, md: 5, lg: 5 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              className="AboutImage"
              sx={{
                width: "100%",
                height: { xs: 300, md: "100%" }, // 👈 height for mobile, stretch for desktop
                position: "relative",
                borderRadius: { xs: "1rem", md: "1rem 0 0 1rem" },
                overflow: "hidden",
              }}
            >
              <Image
                src={aboutImage}
                alt="About Image"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7, lg: 7 }}>
            <Box
              sx={{
                bgcolor: "#DDDDDB",
                p: { xs: 4, md: 8 },
                borderRadius: { xs: "1rem", md: "0 1rem 1rem 0" },
                height: "100%",
              }}
            >
              <Typography sx={{ color: "#585D59" }}>
                “Hi, I&apos;m Carl. I’ve been a developer for three years, with strong experience in
                frontend and solid skills in fullstack development. I enjoy building clean,
                user-friendly websites and applications with JavaScript, CSS, and modern frameworks,
                while also working on the backend when needed. What drives me is solving real
                problems, learning new things, and collaborating with others to create useful,
                well-built software.”
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, borderRadius: 8, background:"#C06B46" }}
                component="a"
                href="/documents/Carl_Oquila%28Resume%29.pdf"
                download
              >
                Download CV
              </Button>
            </Box>
          </Grid>
        </Grid>
        </Container>
      </Box>
      
      {/* Skills */}
      <Box id="skills" sx={{ py: { xs: 6, md: 10 }, background: '#99ff00ff' }}>
        <Container maxWidth="lg" className="skills-content">
          <Box sx={{ display: "flex", justifyContent: "center", width: '100%' }}>
            <Typography
              variant="h3"
              sx={{
                  fontWeight: 700,
                  mb: 5,
                  textAlign: "center",
                  color: "#ffffffff",
                  display: "inline-block",      // underline matches text width
                  borderBottom: "6px solid #ffffffff", // thick underline
                  pb: "1rem"
                }}
              className="kaisei"
            >
              Skills
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: "#fff" }} className="kaisei">
                Front End
              </Typography>
              <Typography sx={{ mb: 2, color: "#e0e0e0" }}>
                The part users see and interact with, handling design, layout, and responsiveness.
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {[
                  "HTML",
                  "CSS",
                  "Javascript",
                  "Typescript",
                  "Bootstrap",
                  "ReactJS",
                  "React Native",
                  "NextJS",
                  "JQuery",
                ].map((skill) => (
                  <Chip sx={{ color: 'white' }} key={skill} label={skill} color="default" />
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: "#fff" }} className="kaisei">
                Back End
              </Typography>
              <Typography sx={{ mb: 2, color: "#e0e0e0" }}>
                The behind-the-scenes logic that processes data, runs the app, and connects to databases.
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {["PHP", "NodeJS", "ExpressJS", "MySQL", "PostgreSQL"].map((skill) => (
                  <Chip sx={{ color: 'white' }} key={skill} label={skill} />
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: "#fff" }} className="kaisei">
                Tools
              </Typography>
              <Typography sx={{ mb: 2, color: "#e0e0e0" }}>
                The essential helpers for coding, testing, collaboration, and project management.
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {["Git", "VSCode", "Postman", "Figma"].map((tool) => (
                  <Chip sx={{ color: 'white' }} key={tool} label={tool} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects */}
      <Box id="projects" sx={{ background: '#EEF0E5'}}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                textAlign: "center",
                color: "#424240",
                display: "inline-block",
                borderBottom: "6px solid #424240",
                pb: "4px",
              }}
              className="kaisei"
            >
            Projects
          </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {/* Project 1 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                  cursor: "pointer",
                  "&:hover .overlay": { opacity: 1 },
                }}
              >
                <Image
                  src={draftTech_Project}
                  alt="Project 1"
                  width={500}
                  height={300}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
                    DRAFTECH
                  </Typography>
                  <Button variant="contained" color="warning" sx={{ borderRadius: 8 }} href="https://draftectfinal.vercel.app">
                    View Project
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Project 2 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                  cursor: "pointer",
                  "&:hover .overlay": { opacity: 1 },
                }}
              >
                <Image
                  src={Metro_Project}
                  alt="Project 2"
                  width={500}
                  height={300}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    METRO PROJECTS
                  </Typography>
                  <Button variant="contained" color="warning" sx={{ borderRadius: 8 }} href="https://metroprojects.ph/">
                    View Project
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Coming Soon */}
            <Grid size={{ xs: 12, sm: 12, md: 4 }}>
              <Box
                sx={{
                  bgcolor: "#b2b2b2",
                  color: "#fff",
                  borderRadius: 4,
                  p: 2,
                  minHeight: 180,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" color="#333">
                  Coming Soon…
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="contact">
        <Footer />
      </Box>
      
    </>
  );
}
