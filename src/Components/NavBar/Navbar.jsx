import React, { useState } from "react";
import Logo from "../../Assets/Logo.svg"
import { BsCart2 } from "react-icons/bs";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CommentRoudedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoudedIcon from "@mui/icons-material/ShoppingCartRounded";
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import './Navbar.css';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);    
    const menuOptions = [
      {
        text: "Home",
        icon: <HomeIcon />,
      },
      {
        text: "Sobre Nós",
        icon: <InfoIcon />,
      },
      {
        text: "Nosso Trabalho",
        icon: <HomeWorkIcon />,
      },
      {
        text: "Avaliação",
        icon: <CommentRoudedIcon />,
      },
      {
        text: "Contato",
        icon: <PhoneRoundedIcon />,
      },
      {
        text: "Carrinho",
        icon: <ShoppingCartRoudedIcon />,
      },
    ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="logo donuts" />
      </div>

      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">Sobre Nós</a>
        <a href="">Nosso Trabalho</a>
        <a href="">Avaliação</a>
        <a href="">Contato</a>
        <a href="">
          <BsCart2 className="nav-cart-icon" />
        </a>
        <button className="primary-button">Reservas Agora</button>
      </div>
      <div className="nav-bar-menu-container">
        <HiOutlineBars3 className="lines-menu" onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
