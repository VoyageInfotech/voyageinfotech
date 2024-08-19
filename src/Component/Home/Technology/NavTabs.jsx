import React, { useState } from "react";
import { Button, ButtonGroup, Container, Box, Typography } from "@mui/material";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Database from "./Database";
import Design from "./Design";
import ProjectManagement from "./ProjectManagement";
import { useTheme } from "@emotion/react";

const NavTabs = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("Frontend");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    console.log(`Selected Tab: ${tab}`);
  };

  return (
    <Container>
      <Box sx={{ textAlign: "center", marginBottom: 2 }}>
        <Typography
          variant="h4"
          component="h4"
          sx={{
            color: theme.palette.secondary.third,
            fontWeight: "bold",
            mb: 1,
          }}
        >
          Technologies & Platforms We Work With
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.secondary.lightgrey,
            fontWeight: 400,
            maxWidth: 700,
            margin: "auto",
          }}
        >
          We adopt the most appropriate solution considering the required
          technology.
        </Typography>
      </Box>
      <ButtonGroup
        variant="outlined"
        aria-label="nav tabs"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => handleTabChange("Frontend")}
          variant={activeTab === "Frontend" ? "contained" : "outlined"}
        >
          Frontend
        </Button>
        <Button
          onClick={() => handleTabChange("Backend")}
          variant={activeTab === "Backend" ? "contained" : "outlined"}
        >
          Backend
        </Button>
        <Button
          onClick={() => handleTabChange("Database")}
          variant={activeTab === "Database" ? "contained" : "outlined"}
        >
          Database
        </Button>
        <Button
          onClick={() => handleTabChange("Design")}
          variant={activeTab === "Design" ? "contained" : "outlined"}
        >
          Design
        </Button>
        <Button
          onClick={() => handleTabChange("Project Management")}
          variant={
            activeTab === "Project Management" ? "contained" : "outlined"
          }
        >
          Project Management
        </Button>
      </ButtonGroup>

      <Box mt={3}>
        {activeTab === "Frontend" && <Frontend />}
        {activeTab === "Backend" && <Backend />}
        {activeTab === "Database" && <Database />}
        {activeTab === "Design" && <Design />}
        {activeTab === "Project Management" && <ProjectManagement />}
      </Box>
    </Container>
  );
};

export default NavTabs;
