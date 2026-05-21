# Portafolio Personal

Un portafolio web rápido, moderno y accesible, diseñado para mostrar proyectos y habilidades. Construido aprovechando la velocidad de Astro y la flexibilidad de React.

🌍 **[Ver sitio en vivo](https://portafolio-astro-sebitax.vercel.app/)**

## 🚀 Tecnologías

- **Framework:** [Astro](https://astro.build/) (SSG - Generación de Sitios Estáticos)
- **Componentes UI:** [React](https://react.dev/) + [shadcn/ui](https://ui.shadcn.com/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Despliegue:** [Vercel](https://vercel.com/)

## ✨ Características destacadas

- **Rendimiento extremo:** Construido con la arquitectura "Islands" de Astro. El código JavaScript de React (shadcn/ui) solo se carga e hidrata cuando es estrictamente necesario (usando directivas como `client:load` o `client:idle`).
- **Modo Oscuro:** Soporte nativo de tema oscuro/claro guardado en `localStorage`, con scripts optimizados para evitar el FOUC (Flash of Unstyled Content) al recargar la página.
- **Tailwind v4:** Utiliza la última versión de Tailwind CSS integrada a través de Vite sin requerir archivo `tailwind.config.js`.

## 🛠️ Desarrollo Local

### Requisitos previos
- Node.js `>= 22.12.0`

### Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver el resultado.

## 🧞 Comandos útiles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor local de desarrollo (`localhost:4321`) |
| `npm run build` | Genera la versión de producción estática en la carpeta `./dist/` |
| `npm run preview` | Previsualiza el build de producción localmente |
| `npx shadcn@latest add <component>` | Instala y configura un nuevo componente de shadcn/ui |
| `npx astro add <integration>` | Instala una nueva integración oficial de Astro |
