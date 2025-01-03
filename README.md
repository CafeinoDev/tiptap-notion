# 📝 Tiptap Notion-Like Editor
✨ Features:
- 📄 Rich text editing with Notion-style blocks.
- 🤝 Real-time collaboration using Y.js.
- 🛠️ Extensible architecture powered by Tiptap.
- 🌟 Minimalistic and user-friendly design.
- 📦 Easy integration into any web app.

A Notion-inspired editor built with **Tiptap** and **Y.js** to deliver a seamless and collaborative writing experience.

## ✨ Features

- 📄 **Rich Text Editing**: Supports Notion-style blocks like headings, lists, and code blocks.
- 🤝 **Real-Time Collaboration**: Powered by **Y.js** for seamless collaborative editing.
- 🛠️ **Extensible Architecture**: Add custom Tiptap extensions to suit your needs.
- 🌟 **User-Friendly Design**: Minimalistic and distraction-free interface.
- 📦 **Easy Integration**: Ready to drop into your web app.

## 📚 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/CafeinoDev/tiptap-notion.git
   cd tiptap-notion
   ```

2. Install dependencies:
   ```bash
   # npm
   npm install
   # or bun
   bun install
   ```

3. Start the development server:
   ```bash
   # npm
   npm run dev
   # or bun
   bun dev
   ```

## 🤝 Collaboration Setup
This editor uses Y.js for collaboration. To enable real-time updates:

1. Set up a WebSocket server with y-websocket.
2. Configure the Collaboration extension in the editor.

## 📦 Technologies
- [React](https://reactjs.org/)
- [Tiptap](https://github.com/ueberdosis/tiptap)
- [Y.js](https://github.com/yjs/yjs)
- [Mantine UI](https://mantine.dev/)
- [Jotai](https://jotai.org/)

## 🙌 Contributing
1. Fork the repository
2. Create a new branch
```bash
git checkout -b feature/your-feature
```
3. Commit your changes
```bash
git commit -m "Add your message"
```
4. Push to the branch
```bash
git push origin feature/your-feature
```
5. Open a pull request.

#### ⭐ Enjoy crafting with your Notion-like editor!