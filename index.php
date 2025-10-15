<?php
// Main Index File - Portfolio Website
?>
<!DOCTYPE html>
<!-- saved from url=(0039)#works -->
<html lang="en-US" class="lenis">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">
  <title>Gerold – Personal Portfolio WordPress Theme</title>
  <meta name="robots" content="noindex, nofollow">
  
  <style>
    img:is([sizes="auto" i], [sizes^="auto," i]) {
      contain-intrinsic-size: 3000px 1500px
    }
  </style>
  
  <link rel="dns-prefetch" href="https://fonts.googleapis.com/">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Google Fonts - Sora -->
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  
  <link rel="alternate" type="application/rss+xml" title="Gerold » Feed" href="feed/">
  <link rel="alternate" type="application/rss+xml" title="Gerold » Comments Feed"
    href="comments/feed/">
  
  <!-- Tailwind CSS CDN with tw- prefix -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      prefix: 'tw-',
      corePlugins: {
        preflight: false, // Disable Tailwind's base styles to avoid conflicts
      }
    }
  </script>
  
  <!-- CSS Files -->
  <link rel="stylesheet" id="contact-form-7-css" href="./uiux-portfolio_files/styles.css" media="all">
  <link rel="stylesheet" id="tjcore-style-css" href="./uiux-portfolio_files/tjcore.css" media="all">
  <link rel="stylesheet" id="bootstrap-css" href="./uiux-portfolio_files/bootstrap.min.css" media="all">
  <link rel="stylesheet" id="font-awesome-pro-css" href="./uiux-portfolio_files/font-awesome-pro.min.css" media="all">
  <link rel="stylesheet" id="animate-css" href="./uiux-portfolio_files/animate.min.css" media="all">
  <link rel="stylesheet" id="meanmenu-css" href="./uiux-portfolio_files/meanmenu.css" media="all">
  <link rel="stylesheet" id="nice-select-css" href="./uiux-portfolio_files/nice-select.css" media="all">
  <link rel="stylesheet" id="flaticon-css" href="./uiux-portfolio_files/flaticon_gerold.css" media="all">
  <link rel="stylesheet" id="owl-carousel-css" href="./uiux-portfolio_files/owl.carousel.min.css" media="all">
  <link rel="stylesheet" id="odometer-css" href="./uiux-portfolio_files/odometer-theme-default.css" media="all">
  <link rel="stylesheet" id="magnific-popup-css" href="./uiux-portfolio_files/magnific-popup.css" media="all">
  <link rel="stylesheet" id="gerold-swiper-css" href="./uiux-portfolio_files/swiper.min.css" media="all">
  <link rel="stylesheet" id="gerold-core-css" href="./uiux-portfolio_files/gerold-core.css" media="all">
  <link rel="stylesheet" id="gerold-core-2-css" href="./uiux-portfolio_files/gerold-core-2.css" media="all">
  <link rel="stylesheet" id="gerold-core-3-css" href="./uiux-portfolio_files/gerold-core-3.css" media="all">
  <link rel="stylesheet" id="gerold-main-css" href="./uiux-portfolio_files/gerold-main.css" media="all">
  <link rel="stylesheet" id="gerold-responsive-css" href="./uiux-portfolio_files/gerold-responsive.css" media="all">
  <link rel="stylesheet" id="gerold-responsive-2-css" href="./uiux-portfolio_files/gerold-responsive-2.css" media="all">
  <link rel="stylesheet" id="gerold-responsive-3-css" href="./uiux-portfolio_files/gerold-responsive-3.css" media="all">
  <link rel="stylesheet" id="gerold-unit-css" href="./uiux-portfolio_files/gerold-unit.css" media="all">
  <link rel="stylesheet" id="gerold-custom-css" href="./uiux-portfolio_files/gerold-custom.css" media="all">
  <link rel="stylesheet" id="gerold-style-css" href="./uiux-portfolio_files/style.css" media="all">
  <link rel="stylesheet" id="elementor-icons-css" href="./uiux-portfolio_files/elementor-icons.min.css" media="all">
  <link rel="stylesheet" id="elementor-frontend-css" href="./uiux-portfolio_files/custom-frontend.min.css" media="all">
  <link rel="stylesheet" id="elementor-post-7-css" href="./uiux-portfolio_files/post-7.css" media="all">
  <link rel="stylesheet" id="font-awesome-5-all-css" href="./uiux-portfolio_files/all.min.css" media="all">
  <link rel="stylesheet" id="font-awesome-4-shim-css" href="./uiux-portfolio_files/v4-shims.min.css" media="all">
  <link rel="stylesheet" id="elementor-post-100-css" href="./uiux-portfolio_files/post-100.css" media="all">
  <link rel="stylesheet" id="elementor-gf-local-roboto-css" href="./uiux-portfolio_files/roboto.css" media="all">
  <link rel="stylesheet" id="elementor-gf-local-robotoslab-css" href="./uiux-portfolio_files/robotoslab.css" media="all">
  <link rel="stylesheet" id="elementor-icons-tj-flaticons-css" href="./uiux-portfolio_files/flaticon_gerold(1).css" media="all">
  <link rel="stylesheet" id="elementor-icons-shared-0-css" href="./uiux-portfolio_files/fontawesome.min.css" media="all">
  <link rel="stylesheet" id="elementor-icons-fa-brands-css" href="./uiux-portfolio_files/brands.min.css" media="all">
  
  <!-- JavaScript Files -->
  <script src="./uiux-portfolio_files/jquery.min.js.download" id="jquery-core-js"></script>
  <script src="./uiux-portfolio_files/jquery-migrate.min.js.download" id="jquery-migrate-js"></script>
  <script src="./uiux-portfolio_files/v4-shims.min.js.download" id="font-awesome-4-shim-js"></script>
  
  <link rel="https://api.w.org/" href="wp-json/">
  <link rel="alternate" title="JSON" type="application/json" href="wp-json/wp/v2/pages/100">
  <link rel="EditURI" type="application/rsd+xml" title="RSD" href="xmlrpc.php?rsd">
  <meta name="generator" content="WordPress 6.8.3">
  <link rel="canonical" href="">
  <link rel="shortlink" href="">
  <link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed"
    href="wp-json/oembed/1.0/embed?url=https%3A%2F%2Fgerold.themejunction.net%2F">
  <link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed"
    href="wp-json/oembed/1.0/embed?url=https%3A%2F%2Fgerold.themejunction.net%2F&amp;format=xml">
  <meta name="generator"
    content="Elementor 3.32.4; features: additional_custom_breakpoints; settings: css_print_method-external, google_font-enabled, font_display-swap">
  
  <link rel="icon" href="wp-content/uploads/2024/05/favicon.png" sizes="32x32">
  <link rel="icon" href="wp-content/uploads/2024/05/favicon.png" sizes="192x192">
  <link rel="apple-touch-icon" href="wp-content/uploads/2024/05/favicon.png">
  <meta name="msapplication-TileImage" content="wp-content/uploads/2024/05/favicon.png">
  
  <!-- Custom Styles -->
  <style id="kirki-inline-styles">
    :root {
      --tj-ff-body: 'Sora', sans-serif;
      --tj-fz-body: 16px;
      --tj-ff-heading: 'Sora', sans-serif;
      --tj-theme-accent-2: #140c1c;
      --tj-off-white: #f6f3fc;
      --tj-grey-2: #d9d9d9;
    }
    
    body {
      font-family: 'Sora', sans-serif;
      line-height: 1.5;
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Sora', sans-serif;
    }
    
    .hero-title, .section-title, .hero-sub-title {
      font-family: 'Sora', sans-serif;
    }
  </style>
</head>

<body class="home wp-singular page-template page-template-elementor_header_footer page page-id-100 wp-embed-responsive wp-theme-gerold tj-magic-cursor absolute_header sticky_header active_header_1 elementor-default elementor-template-full-width elementor-kit-7 elementor-page elementor-page-100 e--ua-blink e--ua-chrome e--ua-webkit"
  data-elementor-device-mode="desktop" data-new-gr-c-s-check-loaded="14.1257.0" data-gr-ext-installed="" style="">

  <a class="skip-link screen-reader-text" href="#primary">Skip to content</a>

  <!-- Include Header Component -->
  <?php include 'components/header.php'; ?>

  <!-- start: Before Main Content -->
  <!-- start: Scroll Area -->
  <div class="preloader"
    style="translate: none; rotate: none; scale: none; transform: translate(0px, -1500px); display: none; z-index: -1;">
    <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <path id="preloaderSvg" d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
    </svg>
    <div class="preloader-heading">
      <div class="load-text"
        style="translate: none; rotate: none; scale: none; opacity: 0; transform: translate(0px, -100px);">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  </div>
  
  <div class="gerold-scroll-top progress-done">
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style="transition: stroke-dashoffset 10ms linear; stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 226.69;">
      </path>
    </svg>
    <div class="gerold-scroll-top-icon">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
        data-icon="mdi:arrow-up" class="iconify iconify--mdi">
        <path fill="currentColor" d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z">
        </path>
      </svg>
    </div>
  </div>
  <!-- end: Scroll Area -->
  <!-- end: Before Main Content -->

  <!-- start: Breadcrumb Section -->
  <!-- end: Breadcrumb Section -->

  <main id="content" class="site-main">
    <div data-elementor-type="wp-page" data-element_type="container" class="elementor elementor-100">
      <div class="elementor-element elementor-element-8b54269 e-con-full e-flex e-con e-parent e-lazyloaded"
        data-id="8b54269" data-element_type="container">
        
        <!-- Include Hero Component -->
        <?php include 'components/hero.php'; ?>
        
        <!-- Include Services Component -->
        <?php include 'components/services.php'; ?>
        
        <!-- Include Portfolio Component -->
        <?php include 'components/portfolio.php'; ?>
        
        <!-- Include Resume Component -->
        <?php include 'components/resume.php'; ?>
        
        <!-- Include Skills Component -->
        <?php include 'components/skills.php'; ?>
        
        <!-- Include Testimonials Component -->
        <?php include 'components/testimonials.php'; ?>
        
        <!-- Include Contact Component -->
        <?php include 'components/contact.php'; ?>
        
      </div>
    </div>
  </main><!-- #main -->

  <!-- Include Footer Component -->
  <?php include 'components/footer.php'; ?>

  <!-- JavaScript Files -->
  <script src="./uiux-portfolio_files/hooks.min.js.download" id="wp-hooks-js"></script>
  <script src="./uiux-portfolio_files/i18n.min.js.download" id="wp-i18n-js"></script>
  <script src="./uiux-portfolio_files/index.js.download" id="swv-js"></script>
  <script src="./uiux-portfolio_files/index(1).js.download" id="contact-form-7-js"></script>
  <script src="./uiux-portfolio_files/tjcore.js.download" id="tjcore-script-js"></script>
  <script src="./uiux-portfolio_files/bootstrap.bundle.min.js.download" id="bootstrap-bundle-js"></script>
  <script src="./uiux-portfolio_files/gsap.min.js.download" id="gerold-gsap-js"></script>
  <script src="./uiux-portfolio_files/gsap-scroll-to-plugin.min.js.download" id="gsap-scroll-to-plugin-js"></script>
  <script src="./uiux-portfolio_files/gsap-scroll-trigger.min.js.download" id="gerold-scroll-trigger-js"></script>
  <script src="./uiux-portfolio_files/gsap-split-text.js.download" id="gerold-split-text-js"></script>
  <script src="./uiux-portfolio_files/lenis.min.js.download" id="lenis-js"></script>
  <script src="./uiux-portfolio_files/nice-select.js.download" id="nice-select-js"></script>
  <script src="./uiux-portfolio_files/meanmenu.js.download" id="meanmenu-js"></script>
  <script src="./uiux-portfolio_files/appear.min.js.download" id="appear-js"></script>
  <script src="./uiux-portfolio_files/wow.min.js.download" id="wow-js"></script>
  <script src="./uiux-portfolio_files/owl.carousel.min.js.download" id="owl-carousel-js"></script>
  <script src="./uiux-portfolio_files/imagesloaded.min.js.download" id="imagesloaded-js"></script>
  <script src="./uiux-portfolio_files/isotope.pkgd.min.js.download" id="gerold-isotope-js"></script>
  <script src="./uiux-portfolio_files/masonry.pkgd.min.js.download" id="gerold-masonry-js"></script>
  <script src="./uiux-portfolio_files/odometer.min.js.download" id="odometer-js"></script>
  <script src="./uiux-portfolio_files/magnific-popup.js.download" id="magnific-popup-js"></script>
  <script src="./uiux-portfolio_files/swiper.min.js.download" id="gerold-swiper-js"></script>
  <script src="./uiux-portfolio_files/vanilla-tilt.min.js.download" id="gerold-tilt-js"></script>
  <script src="./uiux-portfolio_files/tj-cursor.js.download" id="gerold-cursor-js"></script>
  <script src="./uiux-portfolio_files/gerold-main.js.download" id="gerold-main-js"></script>
  <script src="./uiux-portfolio_files/webpack.runtime.min.js.download" id="elementor-webpack-runtime-js"></script>
  <script src="./uiux-portfolio_files/frontend-modules.min.js.download" id="elementor-frontend-modules-js"></script>
  <script src="./uiux-portfolio_files/core.min.js.download" id="jquery-ui-core-js"></script>
  <script src="./uiux-portfolio_files/frontend.min.js.download" id="elementor-frontend-js"></script>

  <!-- Custom Testimonial Carousel Initialization -->
  <script>
    jQuery(document).ready(function($) {
      // Initialize testimonial carousel
      if ($('#testimonial-carousel').length) {
        $('#testimonial-carousel').owlCarousel({
          loop: true,
          margin: 30,
          nav: false,
          dots: true,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            1024: {
              items: 2
            }
          }
        });
      }
      
      // Initialize WOW animations
      if (typeof WOW !== 'undefined') {
        new WOW().init();
      }
    });
  </script>

</body>

</html>
