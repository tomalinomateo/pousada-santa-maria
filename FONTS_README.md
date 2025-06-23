# Guía para Agregar Fuentes Locales

## 📁 Estructura de Carpetas

Coloca tus fuentes en `public/fonts/` con esta estructura:

```
public/fonts/
├── stigma/
│   ├── Stigma.ttf
│   └── Stigma.otf
├── laisha/
│   ├── Laisha.ttf
│   └── Laisha.otf
└── nueva-fuente/
    ├── NuevaFuente.ttf
    └── NuevaFuente.otf
```

## 🔧 Pasos para Agregar una Nueva Fuente

### 1. Crear la carpeta y agregar archivos

```bash
mkdir public/fonts/nueva-fuente
# Copia tus archivos .ttf y .otf a esta carpeta
```

### 2. Editar `src/lib/fonts.ts`

Agrega la configuración de la nueva fuente:

```typescript
export const nuevaFuente = localFont({
  src: [
    {
      path: "../../public/fonts/nueva-fuente/NuevaFuente.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/nueva-fuente/NuevaFuente.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nueva-fuente",
  display: "swap",
});

// Agregar al objeto localFonts
export const localFonts = {
  stigma,
  laisha,
  nuevaFuente, // ← Agregar aquí
};
```

### 3. Actualizar `tailwind.config.ts` (opcional)

Si quieres usar la fuente con clases específicas:

```typescript
fontFamily: {
  sans: ["var(--font-stigma)", "sans-serif"],
  stigma: ["var(--font-stigma)", "sans-serif"],
  laisha: ["var(--font-laisha)", "sans-serif"],
  nuevaFuente: ["var(--font-nueva-fuente)", "sans-serif"], // ← Agregar aquí
  josefin: ["var(--font-josefin-sans)", "sans-serif"],
},
```

### 4. Reiniciar el servidor

```bash
npm run dev
```

## 🎯 Resultado

- La fuente aparecerá automáticamente en el selector de fuentes
- Estará disponible como `font-nueva-fuente` en Tailwind
- Se aplicará con `var(--font-nueva-fuente)`

## 📝 Notas

- **Nombres de carpetas**: Usa minúsculas y guiones (ej: `nueva-fuente`)
- **Nombres de variables**: Se generan automáticamente como `--font-nueva-fuente`
- **Clases CSS**: Se generan automáticamente como `font-nueva-fuente`
- **Orden**: Las fuentes locales aparecen primero en el selector, luego las de Google

## 🔄 Ejemplo Completo

Si agregas una fuente llamada "Playfair":

1. **Carpeta**: `public/fonts/playfair/`
2. **Archivos**: `Playfair.ttf`, `Playfair.otf`
3. **Configuración**:
   ```typescript
   export const playfair = localFont({
     src: [
       {
         path: "../../public/fonts/playfair/Playfair.ttf",
         weight: "400",
         style: "normal",
       },
       {
         path: "../../public/fonts/playfair/Playfair.otf",
         weight: "400",
         style: "normal",
       },
     ],
     variable: "--font-playfair",
     display: "swap",
   });
   ```
4. **Uso**: `className="font-playfair"`
