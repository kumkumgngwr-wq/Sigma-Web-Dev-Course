# AI Agent Instructions for Sigma Web Dev Course

This is a beginner-level web development learning project. Focus on simplicity and educational clarity.

## Project Purpose
Personal website project for learning HTML, CSS, and JavaScript fundamentals.

## Quick Start: Live Preview

### For Real-Time Development (Recommended)
1. **Use Live Server Extension** (VS Code)
   - Install the "Live Server" extension (ritwickdey.LiveServer)
   - Right-click `index.html` → "Open with Live Server"
   - Browser automatically refreshes on file changes
   - Perfect for seeing CSS and HTML changes instantly

2. **Manual Browser Refresh**
   - Open `index.html` directly in a browser
   - Refresh (F5) after making changes

### When Helping with Live Preview Issues
- Ensure all file references use correct paths (e.g., `href="style.css"`, `src="script.js"`)
- Verify files are saved before suggesting refresh
- Browser cache can cause stale CSS; suggest Hard Refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Project Structure
```
.
├── index.html      # Main page - welcome content and basic structure
├── script.js       # JavaScript - currently has a welcome alert
├── style.css       # Styling - currently sets red bg, white text
└── .git/           # Version control
```

## Development Conventions

### HTML
- Keep structure simple and semantic
- Meta tags for charset and viewport already included
- All external resources (CSS, JS) should have clear relative paths

### CSS
- Keep styles inline in `style.css` file
- Global styles preferred over class/id overrides during learning phase
- Color and layout should be easily testable in live preview

### JavaScript
- Keep scripts simple and synchronous
- Alert/console.log for debugging during learning
- Avoid complex async operations unless intentional lesson

## Common Development Tasks

### Adding/Modifying Content
1. Edit HTML structure
2. Live preview updates automatically
3. Adjust CSS if styling needed
4. Test in live preview before committing

### Styling Changes
- Edit `style.css` only
- Live Server refresh is instant
- No page reload typically required in modern browsers

### Testing Changes
- Always verify in live preview with actual browser rendering
- Check responsive design (if added) by resizing browser window
- Test on target screen size if specified

## Tips for AI Agents
- **Assume VS Code + Live Server workflow** when suggesting development patterns
- **Emphasize live feedback** when modifying code - this is a learning project
- **Keep explanations beginner-friendly** in comments or commit messages
- **Verify file paths** before suggesting external resources
- **Test in browser** - don't just assume code works; visual feedback is crucial for learning
