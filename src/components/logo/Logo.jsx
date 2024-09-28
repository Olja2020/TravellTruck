import { useNavigate } from "react-router-dom";
//import { selectIsLoggedIn } from '../../redux/auth/selectors';
//import { useSelector } from 'react-redux';
import css from "./Logo.module.css";

const Logo = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const logoClick = () => {
    navigate("/home");
  };

  return (
    <div className={css.logoWrapper} onClick={logoClick}>
      <img
        src="../../../public/images/Logo.png"
        alt="logo"
        className={css.image}
      />
    </div>
  );
};

export default Logo;
