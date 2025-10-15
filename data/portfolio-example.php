<?php
// Portfolio Data File - Example with additional items
// Add, remove, or modify portfolio items here

$portfolio_items = [
    [
        'id' => 'mochnix',
        'title' => 'Mochnix',
        'description' => 'Project was about precision and information....',
        'image' => './assets/portfolio-1.jpg',
        'image_width' => 1168,
        'image_height' => 1004,
        'category' => 'branding',
        'link' => 'portfolios/mochnix/',
        'alt_text' => 'Mochnix Portfolio',
        'priority' => 'high' // for fetchpriority
    ],
    [
        'id' => 'sebastian',
        'title' => 'Sebastian',
        'description' => 'Project was about precision and information....',
        'image' => './assets/portfolio-2.jpg',
        'image_width' => 1168,
        'image_height' => 1004,
        'category' => 'apps',
        'link' => 'portfolios/sebastian/',
        'alt_text' => 'Sebastian Portfolio',
        'priority' => 'normal'
    ],
    [
        'id' => 'new-age',
        'title' => 'New Age',
        'description' => 'Project was about precision and information....',
        'image' => './assets/portfolio-4.jpg',
        'image_width' => 1168,
        'image_height' => 1000,
        'category' => 'ux-ui',
        'link' => 'portfolios/new-age/',
        'alt_text' => 'New Age Portfolio',
        'priority' => 'normal'
    ],
    [
        'id' => 'deloitte',
        'title' => 'Deloitte',
        'description' => 'Project was about precision and information....',
        'image' => './assets/portfolio-3.jpg',
        'image_width' => 1168,
        'image_height' => 1000,
        'category' => 'branding',
        'link' => 'portfolios/deloitte/',
        'alt_text' => 'Deloitte Portfolio',
        'priority' => 'normal'
    ],
    // Example: How to add a new portfolio item
    // [
    //     'id' => 'new-project',
    //     'title' => 'New Project',
    //     'description' => 'Description of your new project...',
    //     'image' => './assets/new-project.jpg',
    //     'image_width' => 1168,
    //     'image_height' => 1000,
    //     'category' => 'content', // or 'apps', 'branding', 'ux-ui'
    //     'link' => 'portfolios/new-project/',
    //     'alt_text' => 'New Project Portfolio',
    //     'priority' => 'normal'
    // ]
];

// Portfolio categories for filter buttons
$portfolio_categories = [
    'all' => 'All',
    'apps' => 'Apps',
    'branding' => 'Branding',
    'content' => 'Content',
    'ux-ui' => 'UX/UI'
];

/*
HOW TO USE THIS DATA FILE:

1. ADD NEW PORTFOLIO ITEM:
   - Copy the commented example above
   - Uncomment it and fill in your project details
   - Add your image to the assets folder
   - The item will automatically appear in the portfolio

2. REMOVE PORTFOLIO ITEM:
   - Simply delete the entire array item from $portfolio_items

3. MODIFY EXISTING ITEM:
   - Change any field in the existing array items
   - Title, description, image, category, link, etc.

4. ADD NEW CATEGORY:
   - Add new category to $portfolio_categories array
   - Use the category key in your portfolio items

5. REORDER ITEMS:
   - Simply rearrange the order in the $portfolio_items array
   - First item will appear top-left, second top-right, etc.

The portfolio will automatically:
- Generate filter buttons based on categories
- Position items in a 2-column masonry layout
- Apply proper loading priorities
- Generate all necessary HTML attributes
*/
?>
