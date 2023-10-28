import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import { ReactComponent as BellIcon } from "../../icons/bell.svg";
import { ReactComponent as CogIcon } from "../../icons/cog.svg";
import { MenuNames } from "../../models/enums/menuNames";
import "./DropdownMenu.css";
import styles from "./DropdownMenu.module.scss";

type DropdownItemProps = {
  leftIcon: React.ReactElement;
  rightIcon?: React.ReactElement;
  children?: string | JSX.Element | JSX.Element[];
  goToMenu?: () => void;
};
const DropdownItem = ({
  children,
  leftIcon,
  rightIcon,
  goToMenu,
}: DropdownItemProps) => {
  return (
    <a href="#" className={styles.menuItem} onClick={goToMenu}>
      <span className={styles.iconButton}>{leftIcon}</span>
      <span className={styles.child}>{children}</span>
      {rightIcon && <span className={styles.iconRight}>{rightIcon}</span>}
    </a>
  );
};

export const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState<MenuNames>(MenuNames.Main);
  const [menuHeight, setMenuHeight] = useState<number>(130);

  const calcHeight = (el: HTMLElement) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const nodeRef = useRef(null);
  const nodeRef2 = useRef(null);
  return (
    <div className={styles.dropdown}>
      <CSSTransition
        in={activeMenu === MenuNames.Main}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        nodeRef={nodeRef}
        onEnter={calcHeight}
      >
        <div className={styles.menu} ref={nodeRef}>
          <DropdownItem leftIcon={<BellIcon />}>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            goToMenu={() => setActiveMenu(MenuNames.Settings)}
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === MenuNames.Settings}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        nodeRef={nodeRef2}
        onEnter={calcHeight}
      >
        <div className={styles.menu} ref={nodeRef2}>
          <DropdownItem
            leftIcon={<ArrowIcon />}
            goToMenu={() => setActiveMenu(MenuNames.Main)}
          />
          <DropdownItem leftIcon={<BellIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<BellIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<BellIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<BellIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<BellIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<BellIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<BellIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<BellIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<BellIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<BellIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<BellIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<BellIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<BellIcon />}>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};
