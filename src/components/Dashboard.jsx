import styles from "../styles/Dashboard.module.css";
import ImgNonAttached from "./imgNonAttached";
import BackendImage from "./BackendImage";
import { useEffect, useState } from "react";
import { getCollection, uploadItem, deleteItem } from "../services/api";

export default function Dashboard() {
  const [openForm, setOpenForm] = useState(false);
  const [collection, setCollection] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);

  const [designs, setDesigns] = useState([]);
  const [projects, setProjects] = useState([]);

  // 👉 DELETE MODAL
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [collectionToDelete, setCollectionToDelete] = useState("");

  useEffect(() => {
    refreshData();
  }, []);

  async function refreshData() {
    const designsData = await getCollection("designs");
    const projectsData = await getCollection("projects");
    setDesigns(designsData);
    setProjects(projectsData);
  }

  // ---------- UPLOAD ----------
  const handleOpen = (collectionName) => {
    setCollection(collectionName);
    setOpenForm(true);
    document.body.classList.add("no-scroll");
  };

  const handleClose = () => {
    setOpenForm(false);
    setImage(null);
    setType("");
    document.body.classList.remove("no-scroll");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) return alert("Selecciona una imagen");
    if (!type) return alert("Ingresa el tipo");

    const res = await uploadItem(collection, image, { type });

    if (res) {
      alert("Imagen subida ✔");
      handleClose();
      refreshData();
    }
  };

  // ---------- DELETE ----------
  const handleAskDelete = (collectionName, item) => {
    setSelectedItem(item);
    setCollectionToDelete(collectionName);
    setOpenDeleteModal(true);
    document.body.classList.add("no-scroll");
  };

  const handleCancelDelete = () => {
    setSelectedItem(null);
    setOpenDeleteModal(false);
    document.body.classList.remove("no-scroll");
  };

  const handleConfirmDelete = async () => {
    await deleteItem(collectionToDelete, selectedItem.id, selectedItem.public_id);
    refreshData();
    handleCancelDelete();
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Imagenes Comunes</h2>

      <div className={styles["container-images-carrousel"]}>
        <div className={styles["img-card"]}>
          <ImgNonAttached onClick={() => handleOpen("designs")} />
        </div>

        {designs.map((item) => (
          <div className={styles["img-card"]} key={item.id}>
            <BackendImage
              item={item}
              onDelete={() => handleAskDelete("designs", item)}
            />
          </div>
        ))}
      </div>

      <h2 className={styles.title}>Imagenes Carrousel</h2>

      <div className={styles["container-images-carrousel"]}>
        <div className={styles["img-card"]}>
          <ImgNonAttached onClick={() => handleOpen("projects")} />
        </div>

        {projects.map((item) => (
          <div className={styles["img-card"]} key={item.id}>
            <BackendImage
              item={item}
              onDelete={() => handleAskDelete("projects", item)}
            />
          </div>
        ))}
      </div>

      {/* ---------- MODAL UPLOAD ---------- */}
      {openForm && (
        <div className={styles.overlay} onClick={handleClose}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <input type="file" accept="image/*" onChange={handleImageChange} />

              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  className={styles.preview}
                  alt="preview"
                />
              )}

              <input
                type="text"
                placeholder="Tipo"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={styles.input}
              />

              <div className={styles.actions}>
                <button type="submit">Guardar</button>
                <button type="button" onClick={handleClose}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------- MODAL DELETE ---------- */}
      {openDeleteModal && (
        <div className={styles.overlay} onClick={handleCancelDelete}>
          <div className={styles.confirmModal} onClick={(e)=>e.stopPropagation()}>
            <h3>¿Eliminar imagen?</h3>
            <p>Esta acción no se puede deshacer.</p>

            <div className={styles.actions}>
              <button onClick={handleConfirmDelete}>Eliminar</button>
              <button onClick={handleCancelDelete}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
