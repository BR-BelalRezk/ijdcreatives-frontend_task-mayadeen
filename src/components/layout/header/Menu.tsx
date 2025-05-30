"use client";
// compound components
import { AnimatePresence, motion, Variants } from "motion/react";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// types
type MenuContextType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuContextType | null>(null);
const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

const Menu = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setToggle(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <MenuContext.Provider value={{ toggle, setToggle }}>
      <div className={className}>{children}</div>
    </MenuContext.Provider>
  );
};

const MenuButtonToggle = ({
  className,
  children,
}: {
  className: string;
  children: React.JSX.Element;
}) => {
  const { toggle, setToggle } = useMenu();
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <button
      className={className}
      onClick={handleToggle}
    >
      {cloneElement(children, { toggle })}
    </button>
  );
};

const MenuList = ({
  className,
  children,
  variants,
}: React.HTMLAttributes<HTMLUListElement> & { variants: Variants }) => {
  const { toggle } = useMenu();
  return (
    <AnimatePresence mode="wait">
      {toggle && (
        <motion.ul
          initial={"close"}
          animate={"open"}
          exit={"close"}
          variants={variants}
          className={className}
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

const MenuListItem = ({
  className,
  children,
}: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <motion.li
      variants={{
        open: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 250, damping: 25 },
        },
        close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
      }}
      className={className}
    >
      {children}
    </motion.li>
  );
};

export { Menu, MenuButtonToggle, MenuList, MenuListItem };
