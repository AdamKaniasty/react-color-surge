var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// @ts-ignore
import React, { useEffect, useRef, useState } from 'react';
import { findDominantColor } from './FindDominantColor';
export const Color = (_a) => {
    var { hook } = _a, rest = __rest(_a, ["hook"]);
    const [pixelData, setPixelData] = useState(null);
    const [imgLoaded, setImgLoaded] = useState(false);
    const id = Math.floor(Math.random() * 8934592689354);
    const imgRef = useRef(null);
    useEffect(() => {
        // const img = document.getElementById(`color-surge-img${id}`);
        const img = imgRef.current;
        console.log(img);
        if (imgLoaded && img) {
            const canvas = document.createElement('canvas');
            // @ts-ignore
            canvas.width = img.offsetWidth;
            // @ts-ignore
            canvas.height = img.offsetHeight;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(img, 0, 0);
                // @ts-ignore
                const imageData = ctx.getImageData(0, 0, img.offsetWidth, img.offsetHeight);
                // @ts-ignore
                setPixelData(imageData.data);
            }
        }
    }, [imgLoaded]);
    useEffect(() => {
        if (pixelData) {
            console.log(findDominantColor(pixelData));
            hook(findDominantColor(pixelData));
        }
    }, [pixelData]);
    return (React.createElement("div", null,
        React.createElement("img", Object.assign({}, rest, { id: 'color-surge-img' + id, ref: imgRef, onLoad: () => setImgLoaded(true) }))));
};
