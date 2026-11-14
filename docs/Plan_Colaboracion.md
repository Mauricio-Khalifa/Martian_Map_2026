# Plan de Colaboración Estratégica: Martian Map

Este documento define la estructura de trabajo, los roles y el flujo de desarrollo para el equipo **UTS-Duitama-01** en el repositorio `Martian_Map_2026`.

## 1. Objetivos del Prototipo
El objetivo principal es entregar un prototipo interactivo (48h) de una vista integrada de una ruta en Mawrth Vallis, Marte, utilizando datos científicos de la NASA.
- **Principio rector:** Explorar Marte desde sus regiones y comprender sus regiones desde la ciencia.

---

## 2. Roles y Objetivos Específicos

| Rol | Objetivo Principal | Tareas Clave |
| :--- | :--- | :--- |
| **Data Steward** | Garantizar la precisión científica y geográfica. | Validar el polígono de estudio, filtrar productos de CRISM/HiRISE/CTX y mantener la matriz de evidencias actualizada. |
| **Frontend Dev** | Crear una interfaz intuitiva y eficiente. | Montar la UI en React+TS, integrar componentes de visualización y asegurar una navegación fluida entre regiones/preguntas. |
| **Spatial Specialist** | Lograr la visualización 3D/espacial. | Configurar **NASA Web WorldWind** para Marte, cargar geometrías y asegurar la integridad de las coordenadas (Planetocéntricas). |
| **Storyteller / QA** | Asegurar la cohesión y calidad del demo. | Coordinar el guion de la demo con las capacidades reales del código, realizar pruebas de usuario y asegurar honestidad científica. |

---

## 3. Flujo de Trabajo (Git Workflow)

Para mantener el código estable, **nadie debe hacer push directamente a la rama `main`**. El flujo obligatorio es:

### A. Antes de empezar
Cada vez que vayas a trabajar, asegúrate de tener lo último:
```bash
git checkout main
git pull origin main
```

### B. Crear una rama de trabajo
Para cada tarea, crea una rama nueva siguiendo este formato: `feat/nombre-de-la-tarea`
```bash
git checkout -b feat/configuracion-worldwind
```

### C. Trabajo y Commits
Realiza tus cambios y haz commits frecuentes:
```bash
git add .
git commit -m "feat: integración básica de WorldWind en componente Map"
```

### D. Integración (Pull Request)
1. Sube tu rama: `git push origin feat/configuracion-worldwind`
2. En GitHub, abre un **Pull Request (PR)** desde tu rama hacia `main`.
3. Otro compañero debe revisar los cambios y aprobar el PR para hacer el "Merge".

---

## 4. Comunicación y Colaboración
- **Matriz de datos (Excel):** Es la fuente de la verdad. Cualquier cambio en metadatos, productos o hallazgos científicos debe reflejarse primero en `docs/matriz/`.
- **Agente de IA:** Pueden utilizar al agente para:
  - Generar archivos JSON de configuración a partir del Excel.
  - Escribir boilerplate de componentes React.
  - Resolver problemas de configuración de WorldWind.
- **Comunicación:** Si surgen bloqueos técnicos, comuníquenlo inmediatamente en el grupo para reasignar tareas si es necesario.

---
*¡Vamos a hacer este proyecto realidad en 48 horas!*
