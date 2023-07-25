import s from "./Header.module.scss";

const Header = () => {
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
