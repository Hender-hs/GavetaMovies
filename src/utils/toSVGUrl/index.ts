export const toSVGUrl = (img_path: string) => {
  const path = img_path.split('.')[0]
  return `https://image.tmdb.org/t/p/original${path}.svg`
}