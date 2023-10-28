import { useState } from "react";
import styles from "./Navbar.module.scss";

type NavbarProps = { children?: string | JSX.Element | JSX.Element[] };

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>{children}</ul>
    </nav>
  );
};

type NavItemProps = {
  icon: React.ReactElement;
  children?: string | JSX.Element | JSX.Element[];
};

export const NavItem = ({ icon, children }: NavItemProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <li className={styles.navitem}>
      <a href="#" className={styles.iconButton} onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  );
};
