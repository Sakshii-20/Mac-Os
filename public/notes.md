# 📝 Notes

## 📌 Project Overview
This project is a **MacOS-inspired desktop UI** built using **React**.  
It includes draggable & resizable windows, a dock, and multiple app-like components.

---

## 🛠 Tech Stack
- React
- SCSS
- react-rnd
- JavaScript (ES6+)

---

## 🪟 MacWindows Component
- Draggable using `react-rnd`
- Resizable from bottom-right corner
- Custom macOS-style header with control dots
- Scrollable content area

### Key Points
- `Rnd` controls size and position
- Inner `.window` uses `width: 100%` and `height: 100%`
- Scroll handled inside `.main-content`

---

## 📂 Components
- **Nav** → Top navigation bar
- **Dock** → Bottom dock with app icons
- **MacWindows** → Reusable window wrapper
- **GitHub** → Displays GitHub project cards
- **Notes** → Markdown-style notes display (this file)

---

## 🎯 Features
- ✅ Draggable windows
- ✅ Resizable windows
- ✅ Scrollable content
- ✅ macOS UI feel
- ✅ Modular components

---

## 🧠 Learnings
- `react-rnd` only accepts **number values** for width/height
- Resize works on the **wrapper**, not inner components
- Scroll requires **fixed or calculated height**
- Avoid fixed px sizes inside resizable containers

---

## 🚀 Future Improvements
- Window minimize / close actions
- Active window focus & z-index handling
- Keyboard shortcuts
- Markdown rendering inside Notes app

---

## 👩‍💻 Author
**Sakshi Mhaske**

> “Build UI that feels alive.”
