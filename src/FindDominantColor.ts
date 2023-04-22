import { rgbToHex } from './RgbToHex'

export const findDominantColor = (pixelArray:number[]) => {
  const colorFrequency:{[key:string]:number}|null = {}
  let totalRed = 0
  let totalGreen = 0
  let totalBlue = 0
  let totalPixels = 0
  for (let i = 0; i < pixelArray.length; i += 4) {
    const r = pixelArray[i]
    const g = pixelArray[i + 1]
    const b = pixelArray[i + 2]

    if ((r > 230 && g > 230 && b > 230) || (r < 10 && g < 10 && b < 10)) {
      continue
    }
    const hexColor = rgbToHex(r, g, b)

    if (!colorFrequency.hasOwnProperty(hexColor)) {
      colorFrequency[hexColor] = 1
    } else {
      colorFrequency[hexColor]++
    }

    totalRed += r * colorFrequency[hexColor]
    totalGreen += g * colorFrequency[hexColor]
    totalBlue += b * colorFrequency[hexColor]
    totalPixels += colorFrequency[hexColor]
  }
  const avgRed = Math.round(totalRed / totalPixels)
  const avgGreen = Math.round(totalGreen / totalPixels)
  const avgBlue = Math.round(totalBlue / totalPixels)
  return rgbToHex(avgRed, avgGreen, avgBlue)
}
