import logo from "../assets/logo.svg";
import bell from "../assets/bell-icon.svg";
import plus from "../assets/math-plus.svg";
import userImage from "../assets/user-image.png";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <header className="h-[7 2px] w-full bg-white shadow-md rounded-t-lg py-4 px-2 flex items-center justify-between">
      {/* Header Left */}
      <div className="h-10 hover:cursor-pointer">
        <img src={logo} alt="company logo" />
      </div>

      {/* Header Right */}
      <div className="flex items-center gap-x-4">
        {/* Button */}
        <button
          onClick={() => alert("Button Clicked")}
          className="h-10 flex items-center justify-center bg-black rounded-lg w-52 gap-x-3"
        >
          <img src={plus} alt="add" />
          <span className="text-white">Preview Reel Store</span>
        </button>

        {/* Notification Icon */}
        <div className="bg-black rounded-full p-2 relative hover:cursor-pointer">
          <div className="text-white text-[10px] flex items-center justify-center absolute -top-1 right-0 bg-red-500 p-1 h-4 w-4 rounded-full border-2">
            3
          </div>
          <img src={bell} alt="notification" />
        </div>

        {/* Avatar */}
        <div className="h-10 w-10 hover:cursor-pointer">
          <Avatar src={userImage} alt="profile image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
