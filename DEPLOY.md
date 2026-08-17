# VEIA DEV

Landing inicial para `dev.veia.com.mx`.

## Publicación en el VPS

1. Crear en Hostinger un registro DNS tipo `A`:

   `dev.veia.com.mx` → `169.58.34.45`

2. Construir:

   ```bash
   npm install
   npm run build
   ```

3. Sincronizar `dist/` a `/var/www/dev-veia`.

4. Agregar en Caddy:

   ```caddy
   dev.veia.com.mx {
       encode zstd gzip
       root * /var/www/dev-veia
       file_server
   }
   ```

5. Validar la configuración y reiniciar Caddy. Caddy podrá emitir el certificado cuando el DNS ya resuelva hacia el VPS.

La ruta de Caddy se mantiene pendiente hasta que exista el registro DNS para no provocar intentos de certificado fallidos.
