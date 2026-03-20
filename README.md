# PRÁCTICA 3 - Eva Marina
En esta práctica utilizamos Next.js, React y TypeScript junto con la API pública DummyJSON.
La aplicación muestra productos en tarjetas con su imagen, título, categoría y precio. Se permite buscar productos por nombre o categoría.

# CREACIÓN DEL PROYECTO
El proyecto se creó utilizando Next.js con TypeScript.

1. Acceder a la carpeta donde se desea crear el proyecto --> `cd Escritorio`
2. Crear el proyecto --> `npx create-next-app@latest nombre-del-proyecto`
3. Elegir las opciones necesarias para crear el proyecto con TypeScript.
4. Acceder al proyecto --> `cd nombre-del-proyecto`
5. Instalar todas las dependencias del proyecto --> `npm install`  
   Este comando instala todas las dependencias necesarias definidas en el archivo `package.json`.
6. Instalar Axios --> `npm install axios`
7. Para iniciar el servidor de desarrollo --> `npm run dev`  
   El proyecto se ejecuta en --> `http://localhost:3000`

# EXPLICACIÓN
## page.tsx
Es la página principal donde se muestran los productos.

He creado dos estados con useState:
- searchTerm: guarda el texto del buscador
- products: guarda los productos obtenidos de la API

Utilizo useEffect para cargar todos los productos al iniciar la página mediante getProducts().
Después realizo un filtrado usando searchTerm para mostrar solo los productos cuyo título o categoría coincidan con la búsqueda.

En esta página también utilizo:
- SearchBar --> componente hijo que modifica el estado del padre
- ProductGrid --> componente que muestra la cuadrícula de productos
- SectionContainer --> componente contenedor que recibe children

Cada producto se muestra en una tarjeta con:
- imagen
- título
- categoría
- precio

## product/[id]/page.tsx
Esta página corresponde a la ruta dinámica de cada producto.
Se obtiene el id desde la URL utilizando useParams().

Después se realiza una petición a la API mediante getProductById(id)

En esta página se muestran los siguientes datos:
- título
- imágenes del producto
- precio
- marca
- valoración
- stock
- peso
- descripción
- dimensiones

También se incluye un botón Volver utilizando router.back().

## components/SearchBar.tsx
Es el componente del buscador.

Recibe por props:
- searchTerm
- setSearchTerm

## components/ProductGrid.tsx
Es el componente que recibe una lista de productos y los muestra en forma de cuadrícula.
Utiliza el componente ProductCard para renderizar cada producto.

## components/ProductCard.tsx
Es el componente que muestra cada tarjeta de producto.

En cada tarjeta se enseña:
- imagen
- título
- categoría
- precio

También incluye un botón para ir a la página de detalle del producto.

## components/SectionContainer.tsx
Es el componente contenedor pedido en el enunciado.

## lib/api/axios.ts
Aquí se configura Axios con la URL base de la API: https://dummyjson.com

## lib/api/product.ts
Contiene las funciones para comunicarse con la API:
- getProducts() --> obtiene todos los productos
- getProductById(id) --> obtiene un producto concreto

## types/product.ts
Aquí se define el tipo Product con los datos que utiliza la aplicación:
- id
- title
- description
- category
- price
- stock
- rating
- brand
- weight
- dimensions
- thumbnail
- images
