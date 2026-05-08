const API_URL = import.meta.env.VITE_API_URL || 'https://backendcearq-2.onrender.com';

export async function getCollection(name) {
    try {
      const res = await fetch(`${API_URL}/api/${name}`);
      if (!res.ok) throw new Error(`Error al obtener ${name}`);
      return await res.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  }

export async function uploadItem(collection, file, data) {
    try {
        const formData = new FormData();

        formData.append("image", file);

        Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
        });

        const res = await fetch(`${API_URL}/api/${collection}`, {
        method: "POST",
        body: formData
        });

        if (!res.ok) throw new Error(`Error al subir ${collection}`);

        return await res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}
  
export async function deleteItem(collection, id) {
  try {
    const res = await fetch(`${API_URL}/api/${collection}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error(`Error al eliminar ${collection}`);

    const data = await res.json();

    console.log("🗑️", data.message);
    return true;

  } catch (error) {
    console.error(error);
    return false;
  }
}

  