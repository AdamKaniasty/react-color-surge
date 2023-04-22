// @ts-ignore
import React, { useEffect, useRef, useState } from 'react';
import { findDominantColor} from './FindDominantColor';

export const Color = ({ hook, ...rest }: any) => {
  const [pixelData, setPixelData] = useState<number[] | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const id: number = Math.floor(Math.random() * 8934592689354);
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
  return (
    <div>
      <img {...rest} id={'color-surge-img' + id} ref={imgRef} onLoad={() => setImgLoaded(true)} />
    </div>
  );
};

