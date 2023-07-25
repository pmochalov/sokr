import React, { useContext } from "react";
import s from "./Form.module.scss";
import { SokrContext } from "../../App";

const Form = () => {
    const { sokrData, setSokrData } = useContext(SokrContext);

    const handleChangeUrl = (e) => {
        setSokrData({ ...sokrData, url: e.target.value, is_created: false });
    };

    const createLink = (e) => {
        e.preventDefault();
        getData();
    };

    const getData = async () => {
        try {
            const formData = new FormData();
            formData.append("url", sokrData.url);

            const response = await fetch(
                `${process.env.REACT_APP_API_URL}add`,
                {
                    method: "post",
                    body: formData,
                }
            );

            const data = await response.json();

            setSokrData({
                ...sokrData,
                url: data.url,
                url_short: data.url_short,
                is_created: true,
            });
        } catch (e) {
            console.log("Ошибка: ", e.message);
        }
    };

    const resetForm = () => {
        setSokrData({ ...sokrData, url: "", is_created: false });
    };

    return (
        <form className={s.form}>
            <input
                type='text'
                name='url'
                onChange={handleChangeUrl}
                value={sokrData.url}
                placeholder='https://...'
            />

            {!sokrData.is_created && (
                <button
                    onClick={createLink}
                    disabled={sokrData.url.trim().length === 0}
                >
                    Сократить ссылку
                </button>
            )}

            {sokrData.is_created && (
                <button onClick={resetForm}>
                    <figure className='icon-close'></figure>Очистить
                </button>
            )}
        </form>
    );
};

export default Form;
