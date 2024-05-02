import SideNav from "./components/SideNav";
import Main from "./components/content/Index";
import {useRef} from "react";

import Grid from "@mui/material/Grid";
import {
  PersonOutline,
  Mail,
  TrendingUp,
  FolderCopy,
  Build,
  School,
} from "@mui/icons-material";

export default function App() {
  const menuItems = [
    { name: "About", icon: <PersonOutline />, section: useRef(null) },
    { name: "Experience", icon: <TrendingUp />, section: useRef(null) },
    { name: "Projects", icon: <FolderCopy />, section: useRef(null) },
    { name: "Skills", icon: <Build />, section: useRef(null) },
    { name: "Education", icon: <School />, section: useRef(null) },
    { name: "Contact", icon: <Mail />, section: useRef(null) },
  ];

  return (
    <Grid container>
      <Grid
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: { xs: "12vw", sm: "7vw", md: "7vw", lg: "15vw" },
        }}
      >
        <SideNav menuItems={menuItems} />
      </Grid>
      <Grid
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: { xs: "88vw", sm: "93vw", md: "93vw", lg: "85vw" },
          height: "100vh",
        }}
      >
        <Main menuItems={menuItems} />
      </Grid>
    </Grid>
  );
}
