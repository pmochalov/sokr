import * as React from "react";
import s from "./Footer.module.scss";

const Footer: React.FC = () => {
    return (
        <footer className={s.footer}>
            <a href='https://mchlv.ru/' title='Сайт Павла Мочалова'>
                mchlv.ru
            </a>
        </footer>
    );
};

export default Footer;
