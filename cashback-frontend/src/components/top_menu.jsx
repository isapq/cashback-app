import { Link } from "react-router-dom";
import "../styles/top_menu.css";

function Top_menu() {
  return (
    <nav className="top-menu">
      <ul className="top-menu__list">
        <li className="top-menu__item">
          <Link to="/newPurchase">Nova compra</Link>
        </li>

        <li className="top-menu__item">
          <Link to="/history">Histórico</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Top_menu;
