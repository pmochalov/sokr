import React from "react";
import s from "./Form.module.scss";

import { useSokr } from "../../App";

const Form: React.FC = () => {
    const { sokrData, setSokrData } = useSokr();

    const handleChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSokrData((prev) => ({
            ...prev,
            url: e.target.value,
            is_created: false,
        }));
    };

    const createLink = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("url", sokrData.url);

            const response = await fetch(
                `${process.env.REACT_APP_API_URL}add`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            setSokrData({
                url: data.url,
                url_short: data.url_short,
                is_created: true,
            });
        } catch (error) {
            console.error("Ошибка при создании короткой ссылки:", error);
        }
    };

    const resetForm = () => {
        setSokrData({ url: "", url_short: "", is_created: false });
    };

    return (
        <form className={s.form}>
            <input
                type='text'
                name='url'
                value={sokrData.url}
                onChange={handleChangeUrl}
                placeholder='https://...'
            />

            {!sokrData.is_created ? (
                <button
                    onClick={createLink}
                    disabled={sokrData.url.trim().length === 0}
                >
                    Сократить ссылку
                </button>
            ) : (
                <button onClick={resetForm}>
                    <figure className='icon-close'></figure>Очистить
                </button>
            )}
        </form>
    );
};

export default Form;
