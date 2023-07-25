import s from "./Main.module.scss";

const Main = ({ children }) => {
    return <main className={s.main}>{children}</main>;
};

export default Main;
