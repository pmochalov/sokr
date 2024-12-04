import React from "react";
import QRCode from "qrcode";
import s from "./Info.module.scss";

import { useSokr } from "../../App";

const Info: React.FC = () => {
    const { sokrData } = useSokr();
    const [qrUrl, setQrUrl] = React.useState<string>("");
    const [isCopied, setIsCopied] = React.useState<boolean>(false);

    const generateQR = async (stroke: string) => {
        try {
            const url = await QRCode.toDataURL(stroke, {
                width: 70,
                margin: 0,
            });
            setQrUrl(url);
        } catch (e) {
            console.error("Error qr-code: ", (e as Error).message);
        }
    };

    const handleClickCopy = async (): Promise<void> => {
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
                    <img src={qrUrl} alt='qr code' />
                </div>
            </div>
        </div>
    );
};

export default Info;
