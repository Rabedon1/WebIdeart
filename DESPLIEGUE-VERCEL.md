# Guía de Despliegue en Vercel - Ideart

## 🚀 Preparación Completada

Tu proyecto está listo para desplegarse en Vercel. Se han creado los siguientes archivos:

- ✅ `vercel.json` - Configuración de Vercel
- ✅ `public/robots.txt` - Para SEO y crawlers
- ✅ `app/sitemap.js` - Sitemap dinámico
- ✅ `public/manifest.json` - PWA manifest

---

## 📋 Pasos para Desplegar en Vercel

### Opción 1: Despliegue desde GitHub (Recomendado)

#### 1. Inicializar Git (si no lo has hecho)
```bash
git init
git add .
git commit -m "Initial commit - Ideart website"
```

#### 2. Crear repositorio en GitHub
1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. Nómbralo "WebIdeart" o como prefieras
3. **NO inicialices** con README, .gitignore o licencia

#### 3. Conectar tu proyecto local con GitHub
```bash
git remote add origin https://github.com/TU-USUARIO/WebIdeart.git
git branch -M main
git push -u origin main
```

#### 4. Desplegar en Vercel
1. Ve a [Vercel](https://vercel.com)
2. Haz clic en "Add New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente Next.js
5. Haz clic en "Deploy"

**¡Listo!** Vercel construirá y desplegará tu sitio automáticamente.

---

### Opción 2: Despliegue Directo (Sin GitHub)

#### 1. Instalar Vercel CLI
```bash
npm install -g vercel
```

#### 2. Login en Vercel
```bash
vercel login
```

#### 3. Desplegar
```bash
vercel
```

Sigue las instrucciones en pantalla. Vercel te preguntará:
- ¿Es este un nuevo proyecto? → **Sí**
- ¿Cuál es el nombre del proyecto? → **ideart** (o el que prefieras)
- ¿En qué directorio está tu código? → **./** (presiona Enter)
- ¿Quieres modificar la configuración? → **No**

#### 4. Despliegue a Producción
```bash
vercel --prod
```

---

## ⚙️ Configuración Post-Despliegue

### 1. URL Automática de Vercel

**¡No necesitas dominio propio!** Vercel te asigna automáticamente una URL gratuita:
- Formato: `https://tu-proyecto.vercel.app`
- SSL/HTTPS incluido
- Funciona inmediatamente después del despliegue

### 2. Configurar Dominio Personalizado (OPCIONAL - Para el futuro)

**Solo si compras un dominio más adelante:**

En el dashboard de Vercel:
1. Ve a tu proyecto
2. Click en "Settings" → "Domains"
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar DNS

**Mientras tanto, usa tu dominio `.vercel.app` - funciona perfectamente para todo.**

### 3. El sitemap y robots.txt ya están configurados

✅ **No necesitas hacer nada más**. Los archivos ya están configurados para:
- Funcionar con tu dominio `.vercel.app`
- Actualizarse automáticamente si agregas un dominio personalizado después

En Vercel Dashboard:
1. Ve a "Settings" → "Environment Variables"
2. Agrega las variables necesarias

---

## 🔄 Actualizaciones Futuras

### Con GitHub (Automático)
Cada vez que hagas push a GitHub, Vercel desplegará automáticamente:
```bash
git add .
git commit -m "Descripción de cambios"
git push
```

### Con Vercel CLI (Manual)
```bash
vercel --prod
```

---

## ✅ Checklist Pre-Despliegue

Antes de desplegar, asegúrate de:

- [ ] Agregar las 9 imágenes de productos en `public/images/productos/`
- [ ] Verificar que `npm run build` funcione sin errores
- [ ] Probar el sitio localmente con `npm run dev`
- [ ] Revisar que todos los links de WhatsApp funcionen
- [ ] Verificar que el logo se vea correctamente

---

## 🧪 Probar el Build Localmente

Antes de desplegar, prueba que el build funcione:

```bash
# Construir el proyecto
npm run build

# Esto generará la carpeta 'out/' con tu sitio estático
```

Si el build es exitoso, estás listo para desplegar.

---

## 📊 Después del Despliegue

### Verificar SEO
1. **Google Search Console**: Agrega tu sitio
2. **Schema Markup**: Verifica en [Rich Results Test](https://search.google.com/test/rich-results)
3. **PageSpeed Insights**: Prueba el rendimiento

### Monitoreo
Vercel te proporciona:
- Analytics automáticos
- Logs de errores
- Métricas de rendimiento

---

## 🆘 Solución de Problemas

### Error: "Build failed"
- Verifica que `npm run build` funcione localmente
- Revisa los logs en Vercel Dashboard

### Imágenes no se ven
- Asegúrate de que las imágenes estén en `public/images/`
- Verifica que las rutas sean correctas (sin `/public/` en el código)

### Sitio no actualiza
- Vercel puede tardar 1-2 minutos en desplegar
- Limpia caché del navegador (Ctrl + Shift + R)

---

## 🎯 URLs Importantes

Después del despliegue, tendrás:
- **URL de producción**: `https://tu-proyecto.vercel.app`
- **Dashboard**: `https://vercel.com/dashboard`
- **Analytics**: En el dashboard de tu proyecto

---

## 💡 Consejos

1. **Dominio gratuito**: Vercel te da un dominio `.vercel.app` gratis
2. **SSL automático**: HTTPS está habilitado por defecto
3. **CDN global**: Tu sitio se sirve desde múltiples ubicaciones
4. **Preview deployments**: Cada branch de Git tiene su propia URL de preview

---

## 📞 Siguiente Paso

**Ejecuta este comando para probar el build:**
```bash
npm run build
```

Si todo está bien, ¡estás listo para desplegar! 🚀
