# Plan de Trabajo: Fondo con Grilla de Puntos Interactiva

## Objetivo
Crear un componente de fondo con grilla de puntos que incluya:
- Colores adaptativos según tema claro/oscuro
- Efecto parallax al mover el cursor
- Efecto hover: puntos cercanos al cursor aumentan 15% su tamaño con animación suave

## Tareas

### 1. Crear componente DotBackground
- [x] Crear archivo `src/components/ui/DotBackground.tsx`
- [x] Implementar canvas para renderizar los puntos
- [x] Configurar colores según tema (claro: gris claro, oscuro: gris oscuro)

### 2. Implementar efecto parallax
- [x] Detectar posición del mouse
- [x] Aplicar desplazamiento sutil a los puntos basado en posición del cursor
- [x] Usar requestAnimationFrame para animación fluida

### 3. Implementar efecto hover en puntos cercanos
- [x] Calcular distancia entre cursor y cada punto
- [x] Si distancia < umbral, escalar punto 15%
- [x] Aplicar transición suave (easing)

### 4. Integrar en layout
- [x] Importar DotBackground en Layout.astro
- [x] Posicionar como fondo fijo (z-index: 0)
- [x] Envolver contenido en div con z-index: 10
- [x] Remover fondos sólidos de Hero y About para mostrar puntos

### 5. Optimización
- [x] Usar canvas en lugar de DOM para mejor rendimiento
- [x] requestAnimationFrame para animación fluida

## Especificaciones Técnicas

### Colores
- Tema claro: `#e5e7eb` (gray-200)
- Tema oscuro: `#374151` (gray-700)

### Dimensiones
- Tamaño de punto: 2px
- Espaciado entre puntos: 24px
- Radio de detección hover: 60px
- Escala en hover: 1.15 (15% más grande)

### Parallax
- Factor de movimiento: 0.02 (sutil)
