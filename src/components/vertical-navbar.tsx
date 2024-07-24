import React from "react";
import {
    HomeIcon,
    CalendarIcon,
    BookmarkIcon,
    CogIcon,
    MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";

// Define the type for the NavItem props
interface NavItemProps {
    icon: React.ReactNode;
    text: string;
}

const NavBar: React.FC = () => {
    return (
        <div className="hidden md:block fixed z-50 left-0 top-0 h-full w-20 group bg-gradient-to-r from-[#000] to-transparent hover:w-64 hover:from-gray-800 hover:to-transparent transition-all duration-300 ease-in-out">
            <div className="flex flex-col justify-center h-full items-center py-4">
                <NavItem
                    icon={<HomeIcon className="h-6 w-6 text-white" />}
                    text="Home"
                />
                <NavItem
                    icon={<MagnifyingGlassCircleIcon className="h-6 w-6 text-white" />}
                    text="Search"
                />
                <NavItem
                    icon={<CalendarIcon className="h-6 w-6 text-white" />}
                    text="Calendar"
                />
                <NavItem
                    icon={<BookmarkIcon className="h-6 w-6 text-white" />}
                    text="Bookmarks"
                />
                <NavItem
                    icon={<CogIcon className="h-6 w-6 text-white" />}
                    text="Settings"
                />
            </div>
        </div>
    );
};

const NavItem: React.FC<NavItemProps> = ({ icon, text }) => {
    return (
        <div className="flex min-w-10 items-center space-x-4 w-full px-4 py-2 hover:ps-3 transition-all cursor-pointer">
            <div>{icon}</div>
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {text}
            </p>
        </div>
    );
};

export default NavBar;
