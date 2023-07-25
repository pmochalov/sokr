import React from "react";
import QRCode from "qrcode";
import { SokrContext } from "../../App";

import { useContext } from "react";
import s from "./Info.module.scss";

const Info = () => {
    const { sokrData } = useContext(SokrContext);
    const [qrUrl, setQrUrl] = React.useState("");
    const [isCopied, setIsCopied] = React.useState(false);

    const generateQR = async (stroke) => {
        try {
            const url = await QRCode.toDataURL(stroke, {
                width: 70,
                margin: 0,
            });
            setQrUrl(url);
        } catch (e) {
            console.error("Error qr-code: ", e.message);
        }
    };

    const handleClickCopy = async () => {
        await navigator.clipboard.writeText(sokrData.url_short);
        setIsCopied(true);
    };

    React.useEffect(() => {
        generateQR(sokrData.url_short);
        setIsCopied(false);
    }, [sokrData.url_short]);

    if (!sokrData.is_created) {
        return <></>;
    }

    return (
        <div className={s.info}>
            <div className={s.info__link}>
                <a href={sokrData.url_short}>
                    <figure className={"icon-link"}></figure>{" "}
                    {sokrData.url_short}
                </a>
            </div>
            <div className={s.info__copy}>
                {!isCopied && (
                    <button onClick={handleClickCopy}>Копировать</button>
                )}
                {isCopied && (
                    <button>
                        <figure className='icon-checked'></figure> Скопировано
                    </button>
                )}
            </div>
            <div className={s.info__qr}>
                <div>
                    <img src={qrUrl} />
                </div>
            </div>
        </div>
    );
};

export default Info;
