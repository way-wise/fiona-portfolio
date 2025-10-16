<?php
/**
 * Site Configuration
 * Contains all site-wide settings and content
 */

$site_config = [
    // Basic site information
    'name' => 'Digital Pulse',
    'tagline' => 'Creative Digital Agency',
    'logo' => './Home - Digital Pulse - Phlox Elementor WordPress Theme_files/logo-logotype-retina.png',
    
    // Hero section content
    'hero_subtitle' => 'Welcome to Digital Pulse',
    'hero_title' => 'We Create Amazing Digital Experiences',
    'hero_description' => 'Transform your business with our innovative digital solutions and creative expertise.',
    
    // What We Do section
    'what_we_do_title' => 'What We Do',
    'what_we_do_description' => 'We provide comprehensive digital solutions to help your business grow and succeed in the digital landscape.',
    
    // Projects section
    'projects_title' => 'Our Portfolio',
    
    // Services data for What We Do section
    'services' => [
        [
            'title' => 'Human Resources',
            'description' => 'Strategic HR solutions for your business growth'
        ],
        [
            'title' => 'Copy Writing',
            'description' => 'Compelling content that converts and engages'
        ],
        [
            'title' => 'Product Design',
            'description' => 'Innovative design solutions for modern products'
        ]
    ],
    
    // Footer content
    'footer_title' => 'Get In Touch',
    'footer_description' => 'Ready to start your next project? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    
    // Contact information
    'email' => 'hello@digitalpulse.com',
    'phone' => '+1 (555) 123-4567',
    'address' => '123 Creative Street, Design City, DC 12345',
    
    // Social media links
    'social' => [
        'facebook' => '#',
        'twitter' => '#',
        'instagram' => '#',
        'linkedin' => '#',
        'youtube' => '#'
    ],
    
    // SEO and meta information
    'meta_description' => 'Digital Pulse is a creative digital agency specializing in web design, branding, and digital marketing solutions.',
    'meta_keywords' => 'digital agency, web design, branding, digital marketing, creative solutions',
    
    // Copyright information
    'copyright_year' => date('Y'),
    'copyright_text' => 'Digital Pulse. All rights reserved.',
    
    // Categories for project filtering
    'categories' => [
        'All' => 'all',
        'Marketing' => 'marketing',
        'Logo Design' => 'logo-design',
        'Web Design' => 'web-design'
    ]
];

// Extract services for easier access in components
$services = $site_config['services'];

// Extract categories for easier access in components
$categories = $site_config['categories'];
?>
