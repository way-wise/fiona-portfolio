# Portfolio Website - Component-Based Structure

This portfolio website has been refactored into a component-based PHP structure for easy management and customization.

## 📁 Project Structure

```
fiona-portfolio-2/
├── components/           # PHP component files
│   ├── header.php       # Navigation and logo
│   ├── hero.php         # Main banner section
│   ├── what-we-do.php   # Services section
│   ├── projects.php     # Portfolio grid
│   └── footer.php       # Footer and contact
├── data/                # Data management files
│   └── projects.php     # All website data
├── assets/              # Static assets
│   ├── css/            # CSS files
│   └── js/             # JavaScript files
├── index.php           # Main page file
└── README.md           # This file
```

## 🚀 How to Use

### 1. Managing Projects

To add, edit, or remove projects, simply edit the `data/projects.php` file:

```php
$projects = [
    [
        'id' => 1,
        'title' => 'Your Project Title',
        'category' => 'Web Design',
        'image' => 'path/to/image.jpg',
        'alt' => 'Project description',
        'link' => 'https://your-project-link.com',
        'description' => 'Brief project description'
    ],
    // Add more projects here...
];
```

### 2. Updating Site Information

All site configuration is managed in `data/projects.php`:

```php
$site_config = [
    'name' => 'Your Company Name',
    'tagline' => 'Your tagline',
    'logo' => 'path/to/logo.svg',
    'hero_title' => 'Your main headline',
    'hero_subtitle' => 'Your subtitle',
    // ... more configuration
];
```

### 3. Adding New Services

To add services in the "What We Do" section:

```php
$services = [
    [
        'title' => 'New Service',
        'icon' => 'service-icon',
        'description' => 'Service description'
    ],
    // Add more services...
];
```

### 4. Customizing Components

Each component is a separate PHP file in the `components/` directory:

- **header.php**: Navigation menu and logo
- **hero.php**: Main banner with call-to-action buttons
- **what-we-do.php**: Services grid with icons
- **projects.php**: Portfolio grid with filtering
- **footer.php**: Footer content and newsletter signup

## 🎨 Features

### Dynamic Content Management
- ✅ All content managed through data files
- ✅ Easy project addition/removal
- ✅ Simple site configuration updates
- ✅ Component-based architecture

### Responsive Design
- ✅ Mobile-friendly layout
- ✅ Tablet optimization
- ✅ Desktop compatibility

### Interactive Elements
- ✅ Project filtering by category
- ✅ Smooth scrolling navigation
- ✅ Newsletter signup form
- ✅ Like buttons for projects

## 📝 Customization Guide

### Adding a New Project

1. Open `data/projects.php`
2. Add a new array to the `$projects` array:

```php
[
    'id' => 7,
    'title' => 'New Project',
    'category' => 'Branding',
    'image' => './path/to/image.jpg',
    'alt' => 'New project image',
    'link' => 'https://project-link.com',
    'description' => 'Project description'
]
```

### Changing Site Colors

Edit the CSS variables in the main stylesheet or add custom CSS to `assets/css/custom.css`.

### Adding New Categories

1. Update the `$categories` array in `data/projects.php`
2. The filtering system will automatically include the new category

### Modifying Navigation

Edit the `$navigation` array in `data/projects.php`:

```php
$navigation = [
    [
        'title' => 'New Page',
        'url' => '#new-page',
        'active' => false
    ],
    // ... existing navigation items
];
```

## 🔧 Technical Details

### PHP Requirements
- PHP 7.4 or higher
- No database required (file-based data)

### File Structure Benefits
- **Modular**: Each section is a separate component
- **Maintainable**: Easy to update individual sections
- **Scalable**: Simple to add new components
- **Data-driven**: All content managed through data files

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Responsive design for all screen sizes

## 📞 Support

For questions or customization help:
- Check the component files for structure
- Review the data files for content management
- Modify CSS for styling changes

## 🎯 Next Steps

1. **Customize Content**: Update `data/projects.php` with your information
2. **Add Projects**: Add your portfolio items to the projects array
3. **Style Changes**: Modify CSS for your brand colors and fonts
4. **Deploy**: Upload to your web server

---

**Note**: This structure makes it easy to manage your portfolio website by simply editing data files instead of searching through HTML code. All content is centralized and easy to update!
