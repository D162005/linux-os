# Linux OS Desktop Environment

A modern, interactive desktop environment simulator built with React and Vite. Mimics a Linux desktop UI with draggable windows, customizable themes, and a dock-based application launcher.

Live-Link: https://linux-os-iota.vercel.app/ 

## ✨ Features

- **Draggable Windows** - Move windows around the screen freely with smooth drag-and-drop functionality

- **Resizable Windows** - Resize windows to fit your needs using the react-rnd library

- **Multiple Applications** - Pre-built applications including:
  - 📁 Projects - Showcase your work and portfolio
  - 📝 Text Editor - Write and edit text with syntax highlighting
  - 📄 Resume - Display your professional resume (PDF)
  - 💻 Terminal - Interactive command emulator
  - ⚙️ Settings - Customize theme and wallpaper

- **Customizable Themes** - Multiple color themes to personalize your experience

- **Dynamic Wallpapers** - Change background images on the fly

- **Responsive Dock** - Quick-access application launcher with smooth icons

- **External Links** - Quick access to calendar, email, GitHub, and LinkedIn

- **Modern UI** - Clean, polished interface with smooth animations

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19.2.4** | UI framework |
| **Vite 8.0.14** | Build tool & dev server |
| **TypeScript** | Type safety |
| **Tailwind CSS 4.3.0** | Utility-first styling |
| **SCSS** | Component-level styles |
| **react-rnd 10.5.3** | Draggable & resizable components |
| **react-console-emulator** | Terminal emulator |
| **react-markdown** | Markdown rendering |
| **react-syntax-highlighter** | Code syntax highlighting |

## 📋 Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Git

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/D162005/linux-os.git
cd linux-os
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `https://linux-os-iota.vercel.app/`

## 📦 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```



## 📋 Project Structure

```
linux-os/
├── src/
│   ├── App.jsx                 # Main application component
│   ├── App.scss               # Global styles
│   ├── index.css              # Base CSS
│   ├── main.jsx               # Entry point
│   ├── assets/                # Static assets
│   ├── componant/
│   │   ├── Dock.jsx          # Application launcher dock
│   │   ├── Nav.jsx           # Navigation bar
│   │   ├── Window.jsx        # Window wrapper component
│   │   └── windows/
│   │       ├── Projects.jsx     # Projects showcase
│   │       ├── TextEditor.jsx   # Text editor app
│   │       ├── Resume.jsx       # Resume display
│   │       ├── TerminalCmd.jsx  # Terminal emulator
│   │       ├── Setting.jsx      # Settings panel
│   │       └── [component].scss # Component styles
│   └── Data/
│       ├── project_data.js    # Project information
│       ├── theme.js           # Theme & wallpaper data
│       └── note.txt           # Notes file
├── public/                    # Static files
├── index.html                 # HTML entry point
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── vercel.json               # Vercel deployment config
├── eslint.config.js          # ESLint configuration
└── README.md                 # This file
```

## 🎮 Usage

### Opening Applications

1. Click any icon in the dock at the bottom of the screen
2. Applications will open as draggable windows
3. Use the red dot in the top-left to close windows

### Dragging Windows

- Click and drag windows anywhere on the screen
- Windows can be dragged outside the viewport without causing scrollbars
- Position persists until you close the window

### Customizing Your Experience

1. Click the **Settings** icon (⚙️) to access settings
2. Choose your preferred theme color
3. Select a different wallpaper background

### Using External Links

- **Calendar** (📅) - Opens Google Calendar
- **Mail** (✉️) - Opens your default email client
- **GitHub** (🔗) - Links to the GitHub repository
- **LinkedIn** (💼) - Links to LinkedIn profile

## 🌐 Deployment

### Deploy on Render

1. **Connect GitHub Repository**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub
   - Create a new Web Service

2. **Configure Build Settings**
   - **Framework**: Vite
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview`
   - **Output Directory**: `dist`

3. **Deploy**
   - Click "Create Web Service"
   - Wait 2-3 minutes for build
   - Your site will be live!

### Deploy on Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Import and deploy!

3. **Build Settings**
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

## 🎨 Customization

### Adding New Themes

Edit `src/Data/theme.js`:

```javascript
export const themes = {
  orange: '#FF6B35',
  blue: '#0066FF',
  // Add your custom colors
};
```

### Adding New Wallpapers

Add images to `public/` folder and update `src/Data/theme.js`:

```javascript
export const wallpapers = {
  wallpaper1: '/wallpaper1.jpg',
  wallpaper2: '/wallpaper2.jpg',
  // Add more wallpapers
};
```

### Creating New Applications

1. Create a new component in `src/componant/windows/`
2. Import it in `App.jsx`
3. Add to the window state in `useWindowOpen`
4. Add icon to the Dock in `Dock.jsx`

## 🐛 Known Issues

- Large bundle size (1.1MB) - Consider code splitting for optimization
- Some chunks exceed 500KB - Monitor performance in production

## 🔧 Troubleshooting

### Port Already in Use

```bash
# Use a different port
npm run dev -- --port 3000
```

### Build Failures

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Windows Not Dragging Properly

- Ensure no other event handlers interfere with drag
- Check `Window.jsx` has `stopPropagation()` on close button

## 📈 Performance Tips

1. **Lazy Load Windows** - Load window content on demand
2. **Code Splitting** - Use dynamic imports for large components
3. **Image Optimization** - Compress wallpapers and assets
4. **Cache Strategies** - Implement service workers for offline support


## 👨‍💻 Author

**Darshan Patil**
- GitHub: [@D162005](https://github.com/D162005)
- Email: darshanmpatil16012005@gmail.com
- LinkedIn: [Darshan Patil](https://www.linkedin.com/in/darshan-patil-92a7012b1/)

## 🙌 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For issues, questions, or suggestions:
- Open an [Issue](https://github.com/D162005/linux-os/issues)
- Check [Discussions](https://github.com/D162005/linux-os/discussions)
- Contact via email or LinkedIn

## 🎯 Future-Roadmap

- [ ] Persistent window positions using localStorage
- [ ] File upload functionality
- [ ] Dark/Light theme toggle
- [ ] Keyboard shortcuts
- [ ] Window minimize/maximize buttons
- [ ] Sound effects
- [ ] Multi-monitor support simulation
- [ ] Taskbar window list

---

**Made with ❤️ by Darshan Patil**

Give it a ⭐ if you like this project!
