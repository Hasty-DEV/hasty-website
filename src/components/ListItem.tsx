import { ReactNode } from "react";

type ListItemProps = {
  children: ReactNode;
  NavLink?: string;
  onClick?: () => void;
};

const ListItem = ({ children, NavLink, onClick }: ListItemProps) => {
  return (
    <a
      href={NavLink}
      className="flex py-2 text-base font-medium text-dark hover:text-primary text-dark lg:ml-10 lg:inline-flex"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default ListItem;
