import { DropdownMenu } from "./components/DropdownMenu/DropdownMenu";
import { NavItem, Navbar } from "./components/Navbar/Navbar";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";

const App = () => {
  return (
    <Navbar>
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<BoltIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
};

export default App;
