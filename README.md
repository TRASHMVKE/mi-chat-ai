🚀 Guía para Crear y Ejecutar Tu Propio Chat AI Usando React y Google Generative AI



Link de la pagina: https://mi-chat-ai.vercel.app/

![image](https://github.com/user-attachments/assets/d9ea6896-4e8e-43c9-a430-bab202dcc9a8)

Esta guía detalla los pasos necesarios para replicar la aplicación de chat AI, que interactúa con la API de Google Generative AI (modelo Gemini 1.5). Es perfecta para incluir en un repositorio en GitHub para que otros puedan configurarla y ejecutarla.


📋 Prerrequisitos
Antes de comenzar, asegúrate de que tienes lo siguiente instalado en tu máquina:

1-Node.js y npm: Necesarios para ejecutar el proyecto y administrar dependencias.

Verifica tu instalación con:
node -v
npm -v

Si no los tienes, descárgalos desde nodejs.org (se recomienda la versión LTS).

2-Editor de Código: Recomendado: Visual Studio Code.
3-Clave API de Google Generative AI: Obtén tu clave desde Google AI Studio o Google Cloud Console.
4-Git (Opcional): Si deseas clonar este proyecto desde GitHub.

📁 Estructura del Proyecto

El proyecto sigue esta estructura de carpetas y archivos:

![image](https://github.com/user-attachments/assets/f6aefd7e-420b-4e5c-ac68-bc00d87d12e4)


⚙️ Pasos de Instalación

1. Clona el Repositorio
Si este proyecto ya está en GitHub, clona el repositorio en tu máquina local:

![image](https://github.com/user-attachments/assets/49af8f97-40e7-4983-b67d-8e9286772b73)


2. Configura las Variables de Entorno
Crea un archivo  en la raíz del proyecto con tu clave API:

![image](https://github.com/user-attachments/assets/14888b97-bacb-4ec7-a861-e6d365bd370d)


3. Instala las Dependencias
Ejecuta el siguiente comando para instalar las dependencias necesarias:

npm install

4. Inicia el Servidor de Desarrollo
Lanza la aplicación localmente con:

![image](https://github.com/user-attachments/assets/31359bea-f972-4313-a468-466a248301e7)


🛠️ Cómo Funciona el Proyecto

1. Entrada del Usuario: El usuario escribe un mensaje en el campo de texto.

2. Interacción con la API: El mensaje del usuario (prompt) se envía a la API de Google Generative AI.

3. Respuesta de la IA: La respuesta generada se muestra como un mensaje en el chat.


🌟 Componentes y Código Clave

1. Lógica para la API (googleAI.js)
Conecta con la API de Google Generative AI usando el modelo "gemini-1.5-flash".

![image](https://github.com/user-attachments/assets/db1b67d9-07c8-4aec-88bb-21e2dd077f67)

2. Estructura Principal del Chat (App.jsx)
Gestiona el flujo de los mensajes entre el usuario y la IA.

![image](https://github.com/user-attachments/assets/60c7f80f-dedb-4686-a19e-a3bf8788521e)

3. Campo de Entrada y Botón de Enviar (InputBox.jsx)
Permite al usuario escribir mensajes y envía las consultas a la API.

![image](https://github.com/user-attachments/assets/eebc5358-3e8e-4a19-97b8-b144c88bb257)


🚀 Despliegue
Para desplegar la aplicación, puedes usar servicios como:

Vercel: Sigue los pasos en Vercel.

Netlify: Alternativa sencilla para proyectos React.














