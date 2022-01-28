import React from 'react';
import '../App.css';
import SideBarOption from './SideBarOption';

function Sidebar() {
    return (
        <div className='sideBar'>
            <div className='sidebar__twitter'>
                {/* Twitter icon */}
                <i class="fab fa-twitter"></i>
            </div>
            <SideBarOption icon={<i class="fas fa-house-user"></i>} text="Home" />
            <SideBarOption icon={<i class="fas fa-search"></i>} text="Search" />
            <SideBarOption icon={<i class="far fa-bell"></i>} text="Notifications" />
            <SideBarOption icon={<i class="far fa-envelope"></i>} text="Messages" />
            <SideBarOption icon={<i class="far fa-bookmark"></i>} text="Bookmarks" />
            <SideBarOption icon={<i class="far fa-list-alt"></i>} text="List" />
            <SideBarOption icon={<i class="far fa-user"></i>} text="Profile" />
            <SideBarOption icon={<i class="fas fa-ellipsis-h"></i>} text="More" />
            
            <button className='sideBar__tweet'>tweet</button>
        </div>
    )
}

export default Sidebar;
