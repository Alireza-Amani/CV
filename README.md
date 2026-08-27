# 📝 Editable Resume Template

A beautiful, fully editable resume template built with Vue.js 3 and localStorage persistence. Switch between view and edit modes, customize all content, and export your data.

## ✨ Features

- **🔄 Edit Mode**: Toggle between view and edit modes
- **💾 Auto-Save**: All changes are automatically saved to localStorage
- **🌍 Bilingual Support**: Built-in Dutch/English language toggle
- **📤 Export/Import**: Save your resume data as JSON and import it later
- **🔗 Custom Links**: Add multiple custom links to publications, experiences, and projects
- **↕️ Reorderable Sections**: Move entire sections (Skills, Experience, etc.) up/down to reorganize your CV layout
- **🔀 Reorder Items**: Move individual items within sections (skills, experiences, projects, education, publications)
- **🎨 Beautiful Design**: Clean, professional layout with elegant typography
- **🖨️ Print-Friendly**: Optimized for PDF export via browser print
- **📱 Responsive**: Works on desktop, tablet, and mobile devices
- **⚡ No Build Required**: Uses Vue.js via CDN, just open in a browser

## 🚀 Getting Started

### Quick Start

1. Open `index.editable.html` in your web browser
2. Click the **"✏️ Edit Mode"** button in the top-left corner
3. Start customizing your resume!

### Files

- **`index.editable.html`** - The main editable resume template (use this!)
- **`index.original.html`** - Original static version (backup)
- **`style.css`** - All styling for the resume
- **`app.js`** - Vue.js application logic
- **`README.md`** - This file

## 📖 How to Use

### Entering Edit Mode

Click the **"✏️ Edit Mode"** button in the top-left corner to activate editing.

### Editing Content

When in edit mode, you can:

- **Personal Info**: Click on any field in the header to edit name, email, phone, location, etc.
- **Profile Summary**: Edit your professional summary directly in the text area
- **Skills**:
  - Add or remove skills using the + Add and × buttons
  - **Reorder skills** within each row using the ←→ arrow buttons
  - Organize your tech stack, domains, and languages in your preferred order
- **Experience**:
  - Edit job titles, companies, and dates
  - Modify achievement bullets (supports HTML for bold text)
  - Add or remove achievements
  - Add/remove multiple custom links to projects
  - **Reorder individual experiences** using the ↑↓ buttons on each item
- **Projects**: Same editing capabilities as experience, including item reordering
- **Education**: Edit degrees, institutions, and thesis information; reorder individual entries
- **Certifications**: Add or remove certifications
- **Publications**:
  - Edit title, authors, and journal
  - **Add multiple custom links** (e.g., paper, preprint, dataset)
  - **Reorder individual publications** using move buttons
- **Repositories**:
  - **Edit repository names and URLs**
  - Edit descriptions in both languages
  - Add or remove repositories

### Reorganizing Your CV Layout

In edit mode, you can **reorder entire sections** (e.g., move Publications before Experience):

1. Enable edit mode
2. Each section displays a colored header with its name and ↑↓ buttons
3. Click **↑** to move a section up in the CV
4. Click **↓** to move a section down in the CV
5. The new order is saved automatically and persists across sessions

This allows you to customize the layout to highlight what matters most for different contexts!

### Managing Data

**Export Data** 💾
- Click "Export Data" in the edit panel
- Saves your resume as a JSON file
- Great for backups or sharing templates

**Import Data** 📂
- Click "Import Data" and select a previously exported JSON file
- Instantly loads all your resume information

**Reset to Default** 🔄
- Resets the resume to the original sample data
- Warning: This cannot be undone!

### Language Toggle

Click the 🇳🇱 / 🇬🇧 button to switch between Dutch and English.

When editing, you'll edit content for the currently selected language. Make sure to add content in both languages if you want full bilingual support!

### Exporting to PDF

1. Exit edit mode (click "✓ Done Editing")
2. Use your browser's Print function (Ctrl/Cmd + P)
3. Select "Save as PDF" as the destination
4. Adjust margins if needed
5. Save your professional PDF resume!

## 🛠️ Technical Stack

- **Vue.js 3** - Reactive framework (loaded via CDN)
- **LocalStorage API** - Data persistence
- **Vanilla CSS** - No frameworks, pure CSS
- **ES6 JavaScript** - Modern JavaScript features

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --bg-color: #ffffff;
  --text-main: #0f172a;
  --text-muted: #475569;
  --accent: #0f766e; /* Change this for a different accent color */
  --border: #e2e8f0;
}
```

### Changing Fonts

The template uses:
- **Inter** - For body text
- **Playfair Display** - For headings

You can change fonts by modifying the Google Fonts import in `index.editable.html` and the CSS variables in `style.css`.

## 💡 Tips

1. **Use HTML in bullets**: You can use `<strong>text</strong>` in achievement bullets for bold text
2. **Keep it concise**: Resumes should typically be 1-2 pages
3. **Regular backups**: Export your data regularly to avoid losing changes
4. **Test in both languages**: If using bilingual mode, preview in both languages before exporting
5. **Print preview**: Always check print preview before creating PDF

## 🔧 Advanced Usage

### Modifying the Data Structure

The resume data is stored in `app.js` in the `resumeData` object. You can:

- Add new fields to existing sections
- Create entirely new sections
- Modify the structure to fit your needs

### Adding New Sections

1. Add the data structure to `resumeData` in `app.js`
2. Create the HTML template in `index.editable.html`
3. Add corresponding methods for add/remove functionality
4. Style as needed in `style.css`

## 📄 License

This template is free to use for personal and commercial purposes. Feel free to modify and distribute!

## 🤝 Contributing

Found a bug or have a feature request? Feel free to:
- Open an issue
- Submit a pull request
- Fork and customize for your needs

## 🌟 Credits

Built with modern web technologies to make resume editing simple and beautiful.

---

**Happy job hunting! 🎯**
