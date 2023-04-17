import {ROAST_CONFIG} from "../config";

export default {
    methods: {
        showErrors(datas) {
            const errorAjax = []
            for (const value of Object.values(datas)) {
                errorAjax.push(value)
            }
            return errorAjax
        },
        exitAndroidApp() {
            setTimeout(function () {
                window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: 'exit',
                    data: ''
                }))
            }, 100);

        },
        cutString(text, cut) {
            return text.substr(0, cut) + '...';
        },
        playVideo(videoUrl) {
            setTimeout(function () {
                window.ReactNativeWebView &&
                window.ReactNativeWebView.postMessage(
                    JSON.stringify({type: "playVideo", data: videoUrl})
                );
            }, 0);
        },
        toggleFullScreen(type) {
            setTimeout(function () {
                window.ReactNativeWebView &&
                window.ReactNativeWebView.postMessage(
                    JSON.stringify({type: "fullscreen", data: type})
                );
            }, 0);
        },
        stopVideo: function (videoUrl) {
            setTimeout(function () {
                window.ReactNativeWebView &&
                window.ReactNativeWebView.postMessage(
                    JSON.stringify({type: "stopVideo", data: videoUrl})
                );
            }, 0);
        },
        seekVideo: function (type) {
            const time = (type == 0) ? (ROAST_CONFIG.TIME_TO_SEEK) : (-1 * ROAST_CONFIG.TIME_TO_SEEK)
            setTimeout(function () {
                window.ReactNativeWebView &&
                window.ReactNativeWebView.postMessage(
                    JSON.stringify({type: "seekVideo", data: time})
                );
            }, 0);
        },

        PPVideo: function (flag) {
            setTimeout(function () {
                window.ReactNativeWebView &&
                window.ReactNativeWebView.postMessage(
                    JSON.stringify({type: "playPauseVideo", data: flag})
                );
            }, 0);
        },

        openBrowser: function (url) {
            setTimeout(function () {
                window.ReactNativeWebView &&
                window.ReactNativeWebView.postMessage(
                    JSON.stringify({type: "browser", data: url})
                );
            }, 0);
        },

        getUserAuth: function () {
            setTimeout(function () {
                window.ReactNativeWebView &&
                window.ReactNativeWebView.postMessage(
                    JSON.stringify({type: "getUserAuth", data: ''})
                );
            }, 0);
        },
        setAuth: function (data) {
            setTimeout(function () {
                window.ReactNativeWebView &&
                window.ReactNativeWebView.postMessage(
                    JSON.stringify({type: "setAuth", data: data})
                );
            }, 0);
        },
    }
}
