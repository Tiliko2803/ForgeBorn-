# ForgeBorn ⚒️

Juego de navegador para forjar armas, engastarlas y probarlas en la arena.

## Estructura
- `index.html`: interfaz y carga de scripts.
- `css/style.css`: presentación responsive.
- `js/game.js`: forja, economía, interfaz y arena (siguiente paso: dividir subsistemas).
- `js/rules.js`: reglas puras y comprobables de rarezas y potencia.
- `tests/rules.test.js`: pruebas automáticas sin dependencias externas.

## Probar
1. Ejecutar `node tests/rules.test.js` (Node.js 18+).
2. Iniciar un servidor estático, por ejemplo `python -m http.server 8000`, y abrir `http://localhost:8000`.
3. En móvil, comprobar: calentar y golpear repetidamente, comprar, forjar, engastar, combatir, vender y recargar para verificar guardado.

## Reglas de desarrollo
- No cambiar la clave `forgeborn_progress_v1` sin migración de datos.
- Mantener `js/rules.js` sin DOM ni acceso a almacenamiento.
- Ejecutar pruebas antes de publicar; añadir una prueba por cada fallo corregido.
- No confundir comprobación sintáctica con prueba funcional en navegador.

## Publicación
https://tiliko2803.github.io/ForgeBorn-/
