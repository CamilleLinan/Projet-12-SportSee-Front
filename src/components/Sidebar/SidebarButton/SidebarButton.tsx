import { FC } from "react";
import './_SidebarButton.scss';

interface SidebarButtonProps {
    src: string;
  }

const SidebarButton:FC<SidebarButtonProps> = ({ src }) => {
    return (
        <div className="sidebar-button">
            <img src={src} alt="button-icon" className="sidebar-button-icon" />
        </div>
    )
};

export default SidebarButton;