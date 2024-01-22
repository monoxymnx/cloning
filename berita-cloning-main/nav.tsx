import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

type Page = {
  title: string;
  path: string;
  dropdownItems?: { title: string; path: string }[];
};

const Navbar: React.FC = () => {
  const pages: Page[] = [
    { title: "Home", path: "/home" },
    {
      title: "Berita Muslim",
      path: "/berita",
      dropdownItems: [
        { title: "Category 1", path: "/category1" },
        { title: "Category 2", path: "/category2" },
        { title: "Category 3", path: "/category3" },
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

  const navRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState<Page>(pages[0]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  const toggleDropdown = (page: Page) => {
    if (page.title === "Berita Muslim") {
      setActivePage(page);
    }
  };

  return (
    <div>
      <header>
        <img
          style={{ width: 65 }}
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/themes/berita/assets/images/logo.png"
          alt=""
        />
        <nav ref={navRef}>
          {pages.map((page, index) => (
            <div key={index} className="nav-item">
              <Link
                to={page.path}
                className={page.title === "Berita Muslim" ? "nav-dropdown" : ""}
                onClick={() => toggleDropdown(page)}
              >
                {page.title}
              </Link>
              {page.title === "Berita Muslim" &&
                activePage.title === "Berita Muslim" && (
                  <div className="dropdown-content">
                    {page.dropdownItems?.map((item, idx) => (
                      <Link key={idx} to={item.path}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}
          <button className="nav-btn nav-close-btn" onClick={toggleMenu}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={toggleMenu}>
          <FaBars />
        </button>
      </header>
    </div>
  );
};

export default Navbar;
