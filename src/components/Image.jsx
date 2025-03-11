export default function Image({ image, imageStyles, altTxt }) {
  return <img src={image} className={imageStyles} alt={altTxt} />;
}
