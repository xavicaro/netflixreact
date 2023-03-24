## Inicializacion del proyecto

` npx create-react-app netflix-react-app --template redux`

### Proceso de limpieza 

### Importar librerias 

npm i @mui/material @mui/styled-engine-sc styled-components
npm i @mui/icons-material
npm i axios
npm i firebase
npm i react-router-dom
npm i react-uuid
npm i styled-components

### App.js  - layout inicial

- Creamos las rutas
- Login o App condicional a la existencia de un usuario

### Estilos

- Utilizamos useStyles para crear una infraestructura que nos permita asignar estilos a cada uno de los componentes

### Crear las carpetas de componentes: Pages

- Crear la infraestructura basica de los componentes que representan una página: Home, Login, Paypal, Profile, SignUp

## Estilos en los componentes de Pages

-patrón para añadir la infraestructura de estilos a todos los components página: Banner, Header, Plans, Row

## Estilos en los componentes de la carpeta components

- Creamos la infraestructura básica del resto de componentes

## Comenzamos a trabajar en el Header

- Importamoes el logo
- Añadir al appbar un estilo transparente condicional. Este estilo se activa si la variable show es true, se pone true cuando hay scroll.
-Hemos añadido useEffect para escuchar scroll.
-Añadimos las rutas

## Comenzamos a trabajar en el banner

-Hemos importado la imagen, como backgorundimage
-En React, tenemos que acompañar las backgroundimages con estilos como object-fit, background-size y background-position

-Hemos posicionado el titulo de la peliculas, los botons y descripción.

-La descripcion proviene de api, a truncamos para que ocupe el tamañao pertinente.

-Hemos añadido un box vacio que oscurece la imagen hasta la fusion con el resto.

## Comenzamos a trabajar en el Login

-Hemos creado un botón con styled components y le hemos llamado NetflixButton. Esté boton está totalmente customizado y podremos variar su longitu, color y otros estilos, pasándole props.

-Styled components para variar los estilos del input o del botón, pero para su posicionamiento, le damos una clase normal

-Hemos creado un input personalizado en Style components. Le hemos llamdo NetflixInput, como un InputBase era ya un componente de material ui, lo hemos llamado styled(InputBase). Si fuera un input de base usariamos styled.input

## Componente Profile
- Hemos trabajado en la distribución
- Pasar props a los styled components.