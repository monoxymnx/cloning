

import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import {Button, Input} from '@mui/material'

type Page = {
  title: string;
  path: string;
  dropdownItems?: { title: string; path: string }[];
};

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const isTop = scrollPosition < 100; 
    setIsScrolled(!isTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pages: Page[] = [
    { title: "Home", path: "/home" },
    {
      title: "Berita Muslim",
      path: "/berita",
      dropdownItems: [
        { title: "art", path: "/art" },
        { title: "bussiness", path: "/bussiness" },
        { title: "coverstory", path: "/coverstory" },
        { title: "doa", path: "/doa" },
        { title: "finace", path: "/finace" },
        { title: "food", path: "/food" },
        { title: "history", path: "/history" },
        { title: "life", path: "/life" },
        { title: "magazine", path: "/magazine" },
        { title: "news", path: "/news" },
        { title: "quran", path: "/quran" },
        { title: "resturant", path: "/resturant" },
        { title: "slowlife", path: "/slowlife" },
        { title: "travel", path: "/travel" },
      ],
    },
    { title: "Baitul", path: "/baitul" },
    { title: "M Style", path: "/mstyle" },
    { title: "Muallaf", path: "/muallaf" },
    { title: "Love", path: "/love" },
    { title: "Halal", path: "/halal" },
    { title: "Clip Video", path: "/clipvideo" },
    { title: "Portfolio", path: "/portfolio" },
  ];

  const navLinkStyle = {
    marginRight: "10px",
  };

  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary ${isScrolled ? "fixed-top" : ""}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img
            style={{ width: 65 }}
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/themes/berita/assets/images/logo.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {pages.map((page, index) => {
              if (page.dropdownItems) {
                return (
                  <NavDropdown
                    key={index}
                    title={page.title}
                    id={`nav-dropdown-${index}`}
                  >
                    {page.dropdownItems.map((item, itemIndex) => (
                      <NavDropdown.Item
                        key={itemIndex}
                        as={Link}
                        to={item.path}
                      >
                        {item.title}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                );
              } else {
                return (
                  <Nav.Link
                    key={index}
                    as={Link}
                    to={page.path}
                    style={navLinkStyle}
                  >
                    {page.title}
                  </Nav.Link>
                );
              }
            })}
            <div className="search">
              <Input
                placeholder="Search..."
                style={{ backgroundColor: "#fff" }}
              />

              <Button>Search</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
