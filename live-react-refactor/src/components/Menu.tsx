import { useState } from "react";
import classNames from 'classnames';
import "./Menu.css";

type Props = {
    onAction(action: "reset" | "newRound"): void;
};

export default function Menu({ onAction}: Props) {

    const [menuOpen, setMenuOpen] = useState(false);

    return ( 
      <div className="menu">
      <button className="menu-btn" onClick={() => 
        setMenuOpen((prev) => !prev)}>
        Actions
        <i className={classNames('fa-solid',
        menuOpen ? "fa-chevron-up" : "fa-chevron-down"
        )}
        ></i>
         
      </button>
   
       {menuOpen && (
      <div className="items border">
        <button onClick={() => onAction("reset")}>Reset</button>
        <button onClick={() => onAction("newRound")}>New Round</button>
      </div>
      )} 
    </div>
    );
}