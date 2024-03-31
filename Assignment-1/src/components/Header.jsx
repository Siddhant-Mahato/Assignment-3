import style from "./Header.module.css"
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
    return (
      <div className={style.head}>
        <h1 className="text-4xl font-semibold">Task Board</h1>
        <div className="text-4xl">
            <FaUserCircle />
        </div>
      </div>
    );
}

export default Header;


