# MORFEO - Landing Page VSL

Landing page minimalista optimizada para conversión para el programa Morfeo de sistemas de contenido automatizado con IA.

## 📋 Características Implementadas

### ✅ Funcionalidades Completadas

1. **Hero Section**
   - Título principal con gradiente de color
   - Subtítulo con propuesta de valor
   - Badge "Programa de 3 meses"
   - CTA principal "Aplicar al programa"

2. **Video VSL Embebido**
   - Video de YouTube responsivo (16:9)
   - Lazy loading optimizado
   - URL: https://youtu.be/zuZ6CygbToQ

3. **Sección de Problemas**
   - Mensaje de urgencia (18 meses)
   - Grid de 3 problemas principales
   - Cards interactivas con hover effects

4. **Sección de Solución**
   - 4 beneficios principales
   - Diseño en grid responsive
   - Highlight block con mención a Morfeo

5. **¿Qué es un sistema automatizado?**
   - Definición clara
   - Introducción a ComfyUI
   - Benefits tags
   - Grid de 6 ejemplos de sistemas
   - Key insight destacado

6. **Sección de Claridad Operativa**
   - Lista de beneficios con checks
   - Conclusión impactante

7. **Para quién es / No es**
   - Dos columnas contrastantes
   - Listas con iconos ✓ y ✕
   - Bordes con colores semánticos

8. **Qué vas a lograr en 3 meses**
   - 4 outcome cards
   - Iconos descriptivos
   - Nota final de compromiso

9. **Lo que NO es**
   - Tags negativos
   - Definición de metodología

10. **CTA Final**
    - Frase memorable "La IA no va a reemplazar..."
    - Contexto de la llamada
    - Botón de aplicación grande
    - Disclaimer

11. **Footer**
    - Branding minimalista
    - Tagline

### 🎨 Diseño y Estilos

- **Paleta de colores**: Oscuro (#0a0a0a) con acentos púrpura (#6366f1)
- **Tipografía**: Inter (Google Fonts)
- **Responsive**: Mobile-first design
- **Animaciones**: 
  - Scroll-triggered fade-in
  - Hover effects en cards
  - Staggered animations
  - Smooth scroll

### ⚡ Optimizaciones

- CSS Variables para mantenibilidad
- Intersection Observer para animaciones
- Passive event listeners para scroll
- Optimización de video embedding

## 📁 Estructura de Archivos

```
/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos principales
├── js/
│   └── main.js         # JavaScript para interactividad
└── README.md           # Este archivo
```

## 🚀 URIs Funcionales

| Ruta | Descripción |
|------|-------------|
| `/` | Landing page principal |
| `/#video` | Sección del video VSL |
| `/#aplicar` | Sección de aplicación (CTA final) |

## 🔧 Personalización

### Cambiar URL del formulario de aplicación

En `index.html`, buscar los botones CTA y actualizar el `href`:

```html
<a href="URL_DEL_FORMULARIO" class="cta-button primary">Aplicar al programa</a>
```

### Cambiar video de YouTube

En `index.html`, actualizar el ID del video en el iframe:

```html
<iframe src="https://www.youtube.com/embed/NUEVO_ID?rel=0&modestbranding=1" ...>
```

### Colores principales

En `css/style.css`, modificar las variables:

```css
:root {
    --color-accent: #6366f1;        /* Color principal */
    --color-accent-hover: #818cf8;   /* Hover */
    --color-bg: #0a0a0a;            /* Fondo principal */
}
```

## 📱 Breakpoints Responsive

- **Desktop**: > 768px
- **Tablet**: 481px - 768px  
- **Mobile**: < 480px

## ✨ Próximos Pasos Recomendados

1. **Integrar formulario de aplicación**
   - Conectar CTAs con Typeform, Calendly, o formulario propio

2. **Agregar tracking/analytics**
   - Implementar Google Analytics 4
   - Configurar eventos de conversión
   - Facebook Pixel si aplica

3. **Optimizar SEO**
   - Agregar meta tags de Open Graph
   - Agregar schema.org markup
   - Crear sitemap.xml

4. **Agregar secciones opcionales**
   - Testimonios de alumnos
   - FAQ expandible
   - Pricing/inversión

5. **A/B Testing**
   - Probar diferentes headlines
   - Variar colores de CTA
   - Testear posición del video

## 📊 Métricas a Monitorear

- Tiempo en página
- Scroll depth
- Click rate en CTAs
- Video play rate
- Conversion rate (aplicaciones completadas)

---

**Proyecto**: MORFEO Landing Page  
**Versión**: 1.0  
**Última actualización**: Enero 2025
