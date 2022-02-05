
import {message} from "antd";
import i18n from '../../i18n/index';

export const StatusMessage = () => {

    //succes delete lang
    const success_Delete = () => {
        message.success({
            content:i18n.t("ShowVideo.SuccessMsg"),
            className: 'message-event',
            duration:1.5,
            style: {
                marginTop: '2vh',
            },
        });
    }
    // error delete lang
    const error_Delete = (code) => {
        const messageERROR = {
            400: i18n.t("ShowVideo.ErrorDelOne"),
            404:  i18n.t("ShowVideo.ErrorDelTwo"),
            401: i18n.t("ShowVideo.ErrorDelOne"),
        }
        message.error({
            content: messageERROR[code],
            duration:1.5
        });
    }

    return({
        success_Delete,
        error_Delete
    })
}