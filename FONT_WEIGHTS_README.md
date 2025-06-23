# Guía para Agregar Pesos de Fuente

## 📁 Estructura de Carpetas para Múltiples Pesos

Cuando tengas múltiples pesos de una fuente, organízalos así:

```
public/fonts/
├── stigma/
│   ├── Stigma-Light.otf
│   ├── Stigma-Regular.otf
│   ├── Stigma-Medium.otf
│   └── Stigma-Bold.otf
├── laisha/
│   ├── Laisha-Light.otf
│   ├── Laisha-Regular.otf
│   └── Laisha-Bold.otf
└── hashira/
    ├── Hashira-Regular.otf
    └── Hashira-Bold.otf
```

## 🔧 Pasos para Agregar Pesos de Fuente

### 1. Agregar archivos de fuente

Coloca los archivos `.otf` de diferentes pesos en la carpeta correspondiente.

### 2. Editar `src/lib/fonts.ts`

Agrega los nuevos pesos a la configuración:

```typescript
export const stigma = localFont({
  src: [
    {
      path: "../../public/fonts/stigma/Stigma-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/stigma/Stigma-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/stigma/Stigma-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/stigma/Stigma-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-stigma",
  display: "swap",
});
```

### 3. Actualizar la configuración de pesos

En el mismo archivo, actualiza el objeto `fontWeights`:

```typescript
export const fontWeights = {
  stigma: [
    { name: "Light", weight: "300", class: "font-light" },
    { name: "Regular", weight: "400", class: "font-normal" },
    { name: "Medium", weight: "500", class: "font-medium" },
    { name: "Bold", weight: "700", class: "font-bold" },
  ],
  // ... otras fuentes
};
```

## 🎯 Pesos de Fuente Estándar

| Peso        | Valor | Clase Tailwind    | Descripción   |
| ----------- | ----- | ----------------- | ------------- |
| Thin        | 100   | `font-thin`       | Muy fino      |
| Extra Light | 200   | `font-extralight` | Extra fino    |
| Light       | 300   | `font-light`      | Fino          |
| Regular     | 400   | `font-normal`     | Normal        |
| Medium      | 500   | `font-medium`     | Medio         |
| Semi Bold   | 600   | `font-semibold`   | Semi negrita  |
| Bold        | 700   | `font-bold`       | Negrita       |
| Extra Bold  | 800   | `font-extrabold`  | Extra negrita |
| Black       | 900   | `font-black`      | Muy negrita   |

## 🎨 Cómo Funciona el Selector

1. **Selector de Fuente**: Cambia entre diferentes fuentes
2. **Selector de Peso**: Aparece solo cuando la fuente tiene múltiples pesos
3. **Posición**: El selector de peso aparece a la izquierda del selector de fuente

## 📝 Ejemplo Completo

Para una fuente con Light, Regular y Bold:

```typescript
// Configuración de fuente
export const miFuente = localFont({
  src: [
    {
      path: "../../public/fonts/miFuente/MiFuente-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/miFuente/MiFuente-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/miFuente/MiFuente-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mi-fuente",
  display: "swap",
});

// Configuración de pesos
export const fontWeights = {
  miFuente: [
    { name: "Light", weight: "300", class: "font-light" },
    { name: "Regular", weight: "400", class: "font-normal" },
    { name: "Bold", weight: "700", class: "font-bold" },
  ],
};
```

## 🚀 Resultado

- El selector de peso aparecerá automáticamente
- Los usuarios podrán cambiar entre Light, Regular y Bold
- Se aplicará inmediatamente al sitio web
- Solo se usan archivos `.otf` (no `.ttf`)
