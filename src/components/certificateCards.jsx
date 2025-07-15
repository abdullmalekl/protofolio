const CertificateCard = ({ title, image, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="certColumn block transition-transform duration-300 hover:scale-105"
    >
      <img src={image} alt={title} id="certImage" />
      <h3 className="CertTitle mt-4">{title}</h3>
    </a>
  );
};

export default CertificateCard;
