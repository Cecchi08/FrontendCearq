# CEARQ – Frontend

Frontend de la página web de **CEARQ**, un estudio de arquitectura y diseño de interiores. Construido con React + Vite.

## 🛠️ Tecnologías

- **React 18** con JSX
- **Vite 5** como bundler
- **React Router DOM** para navegación
- **CSS Modules** para estilos
- **Cloudinary** para imágenes (a través del backend)

## 📁 Estructura del Proyecto

```
src/
├── assets/          # Imágenes y fuentes
├── components/      # Componentes reutilizables
├── services/        # Llamadas a la API (api.js)
├── styles/          # CSS Modules por componente
├── App.jsx          # Componente principal
└── main.jsx         # Entry point
```

## 🚀 Instalación local

```bash
# Instalar dependencias
npm install

# Crear archivo .env con las variables necesarias
cp .env.example .env

# Iniciar en modo desarrollo
npm run dev
```

## 🔐 Variables de Entorno

| Variable | Descripción |
|---|---|
| `VITE_API_URL` | URL del backend (ej: `https://backendcearq-2.onrender.com`) |
| `VITE_DASHBOARD_PASSWORD` | Contraseña de acceso al dashboard |

## 🌐 Deploy

- **Frontend**: Vercel (conectado a este repositorio)
- **Backend**: Render → [backendcearq-2.onrender.com](https://backendcearq-2.onrender.com)
- **Base de datos**: Supabase (PostgreSQL)
- **Imágenes**: Cloudinary

