# 🚀 Mi App Personal - Portfolio Móvil

**👨‍💻 Desarrollador:** Kevin Pinto  
**📚 Bootcamp:** React Native 2025  
**📅 Fecha:** 21 de octubre de 2025  

---

## 📱 Descripción del Proyecto

Aplicación móvil desarrollada en **React Native con TypeScript** que funciona como portfolio personal profesional.  
Permite mostrar información personal, habilidades técnicas y proyectos destacados de forma visual y moderna.

### ✨ Características Principales
- 🎨 **Diseño Moderno:** Paleta profesional azul con acentos verdes.  
- 📱 **Diseño Responsive:** Adaptable a distintos tamaños de pantalla.  
- ⚡ **Rendimiento Optimizado:** Componentes reutilizables y eficientes.  
- 🎯 **Experiencia de Usuario Mejorada:** Navegación intuitiva con feedback visual.

---

## 🛠 Tecnologías Utilizadas

### **Frontend & Framework**
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)

### **Estilos & UI**
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NativeWind](https://img.shields.io/badge/NativeWind-06B6D4?style=for-the-badge)

### **Desarrollo**
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

---

## 🏗️ Arquitectura del Proyecto

```
mi-app-personal/
├── App.tsx # Componente principal
├── README.md # Documentación
├── package.json # Dependencias
├── tailwind.config.js # Configuración Tailwind
├── babel.config.js # Configuración Babel
├── nativewind-env.d.ts # Tipos NativeWind
└── components/ # Componentes reutilizables
        ├── ProfileSection.tsx # Sección de perfil
        ├── SkillCard.tsx # Tarjeta de habilidad
        └── ProjectCard.tsx # Tarjeta de proyecto
```


**Estructura de componentes**

```
App.tsx
├── ProfileSection
├── ContactInfo
├── SkillCard
└── ProjectCard
```

---

## 🎨 Paleta de Colores

| Tipo      | Color Principal | Código | Descripción |
|------------|----------------|---------|--------------|
| Primary    | Azul profesional | `#0c4a6e` → `#0ea5e9` | Gradientes principales |
| Accent     | Verde | `#22c55e` → `#16a34a` | Acentos visuales |
| Neutral    | Gris | `#f8fafc` → `#1e293b` | Fondos y textos neutros |

**Aplicación visual:**
- **Header:** Gradiente `primary-700` → `primary-900`  
- **Cards:** Fondo blanco con bordes `gray-100`  
- **Botones:** Acentos en `accent-500`  

---

## ⚙️ Instalación y Configuración

### 🔧 Prerrequisitos
- Node.js **v16+**
- npm o yarn
- Expo CLI
- App **Expo Go** instalada en el dispositivo móvil

### 🪄 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd mi-app-personal

# Instalar dependencias
npm install

# Ejecutar la aplicación
npm start

```

1. Abre Expo Go en tu teléfono.

2. Escanea el código QR que aparece en la terminal.

3. ¡La aplicación se cargará automáticamente en tu dispositivo!

## 🧩 Personalización
### 🧑 Información Personal

Edita los datos en App.tsx:

```
const personalInfo = {
  name: 'Tu Nombre',
  title: 'Tu Profesión',
  avatar: 'tu-foto-url',
  bio: 'Tu biografía...'
};
```
### 💡 Agregar Habilidades
```
const skills: Skill[] = [
  { id: '1', emoji: '⚛️', name: 'React Native' },
  // Agrega más habilidades...
];
```

### 🎨 Modificar Colores

```
Edita tailwind.config.js para ajustar la paleta:

colors: {
  primary: {
    500: '#0ea5e9',
    700: '#0369a1',
  },
  accent: {
    500: '#22c55e',
  }
}
```
## 📄 Licencia

Este proyecto fue desarrollado con fines educativos y de portafolio personal.
© 2025 Kevin Pinto. Todos los derechos reservados.