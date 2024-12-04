import * as React from "react";
import s from "./Main.module.scss";

type MainProps = {
    children: JSX.Element[];
};

const Main: React.FC<MainProps> = ({ children }) => {
    return <main className={s.main}>{children}</main>;
};

export default Main;
