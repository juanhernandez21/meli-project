# meli-project

## Instalación

### Ejecutar docker-compose

Carpeta de instalación:

```bash
cd /docker-install
```

Instalar y levantar contenedores:

```bash
docker-compose up --build
```
Bajar contenedores:

```bash
docker-compose down
```
### Ejecutar desde el navegador

Interactuar con WEB:
```bash
http://localhost:3000/MLC123
```

Interactuar con Servicio Productos:
```bash
http://localhost:8000/api/v1/products/MLC123
```

Interactuar con Servicio Ofertas:
```bash
http://localhost:8000/api/v1/products/MLC123/offers
```

Interactuar con Servicio Vendedores:
```bash
http://localhost:8000/api/v1/sellers/S001
```