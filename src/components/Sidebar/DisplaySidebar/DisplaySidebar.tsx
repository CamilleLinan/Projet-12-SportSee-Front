import { FC } from "react";
import './_DisplaySidebar.scss';
import SidebarButton from "../SidebarButton/SidebarButton";
import yoga from '../../../assets/icon-yoga.svg';
import swimming from '../../../assets/icon-swimming.svg';
import biking from '../../../assets/icon-biking.svg';
import haltere from '../../../assets/icon-haltere.svg';

const DisplaySidebar:FC = () => {
    return (
        <aside className="aside">
            <div className="aside-buttons">
                <SidebarButton src={yoga} />
                <SidebarButton src={swimming} />
                <SidebarButton src={biking} />
                <SidebarButton src={haltere} />
            </div>

            <p>Copyright, SportSee 2020</p>
        </aside>
    )
};

export default DisplaySidebar;