const BackendImage = ({ item, onDelete }) => {
  if (!item?.img_url) return null;

  const imageUrl = item.img_url.startsWith('http')
    ? item.img_url
    : `http://localhost:3000/${item.img_url.replace(/^\/+/, '')}`;

  return (
    <img
      className="img"
      src={imageUrl}
      onClick={onDelete}
      alt={item?.title || "Imagen de diseño"}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        console.error('Error al cargar imagen:', imageUrl);
      }}
    />
  );
};

export default BackendImage;
