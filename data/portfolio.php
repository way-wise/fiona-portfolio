<?php
// Portfolio Data File
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
    ]
];

// Portfolio categories for filter buttons
$portfolio_categories = [
    'all' => 'All',
    'apps' => 'Apps',
    'branding' => 'Branding',
    'content' => 'Content',
    'ux-ui' => 'UX/UI'
];
?>
