import React from "react";
import s from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <div className={s.header__title}>
                Со
                <br />
                кра
                <br />
                ща
                <br />
                тель://
            </div>
        </header>
    );
};

export default Header;
