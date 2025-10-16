<?php
/**
 * Footer Component
 * Footer section with contact form and links
 */

// Include data file
require_once 'data/projects.php';
?>

<footer class="aux-elementor-footer" itemscope="itemscope" itemtype="https://schema.org/WPFooter"
    role="contentinfo">
    <div class="aux-wrapper">
        <div data-elementor-type="footer" data-elementor-id="388" class="elementor elementor-388">
            
            <!-- Newsletter Section -->
            <div data-export-id="396-388-611192b"
                class="aux-parallax-section elementor-element elementor-element-611192b e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-id="611192b" data-element_type="container">
                <div class="e-con-inner">
                    <div class="elementor-element elementor-element-8da4fb8 e-flex e-con-boxed e-con e-child"
                        data-id="8da4fb8" data-element_type="container"
                        data-settings='{"background_background":"classic"}'>
                        <div class="e-con-inner">
                            <!-- Decorative Shape -->
                            <div class="elementor-element elementor-element-7831353 aux-appear-watch-animation aux-fade-in-right aux-shpe-type-circle elementor-widget elementor-widget-aux_simple_shape aux-animated aux-animated-once"
                                data-id="7831353" data-element_type="widget"
                                data-widget_type="aux_simple_shape.default">
                                <div class="elementor-widget-container">
                                    <div class="aux-widget-container aux-simple-shape-container">
                                        <div class="aux-widget-container-inner">
                                            <div class="aux-the-shape"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Newsletter Title -->
                            <div class="elementor-element elementor-element-8bd3564 aux-appear-watch-animation aux-fade-in-up elementor-widget elementor-widget-aux_modern_heading aux-animated aux-animated-once"
                                data-id="8bd3564" data-element_type="widget"
                                data-widget_type="aux_modern_heading.default">
                                <div class="elementor-widget-container">
                                    <section class="aux-widget-modern-heading">
                                        <div class="aux-widget-inner">
                                            <h3 class="aux-modern-heading-primary">
                                                <?php echo htmlspecialchars($site_config['footer_title']); ?>
                                            </h3>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            
                            <!-- Newsletter Form -->
                            <div class="elementor-element elementor-element-4db1da1 aux-appear-watch-animation aux-fade-in-up elementor-widget elementor-widget-aux_mailchimp aux-animated aux-animated-once"
                                data-id="4db1da1" data-element_type="widget"
                                data-widget_type="aux_mailchimp.default">
                                <div class="elementor-widget-container">
                                    <script type="text/javascript">
                                        (function () {
                                            window.mc4wp = window.mc4wp || {
                                                listeners: [],
                                                forms: {
                                                    on: function (evt, cb) {
                                                        window.mc4wp.listeners.push({
                                                            event: evt,
                                                            callback: cb,
                                                        });
                                                    },
                                                },
                                            };
                                        })();
                                    </script>
                                    <!-- Newsletter Form -->
                                    <form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-389" method="post"
                                        data-id="389" data-name="">
                                        <div class="mc4wp-form-fields">
                                            <input type="email" name="EMAIL" placeholder="Your email Address"
                                                required="" />
                                            <input type="submit" value="Get In Touch" />
                                        </div>
                                        <label style="display: none !important">Leave this field empty if you're
                                            human:
                                            <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1"
                                                autocomplete="off" /></label>
                                        <input type="hidden" name="_mc4wp_timestamp" value="1760601812" />
                                        <input type="hidden" name="_mc4wp_form_id" value="389" />
                                        <input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" />
                                        <div class="mc4wp-response"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Footer Content -->
            <div data-export-id="396-388-05d1fc0"
                class="aux-parallax-section elementor-element elementor-element-05d1fc0 e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-id="05d1fc0" data-element_type="container"
                data-settings='{"background_background":"classic"}'>
                <div class="e-con-inner">
                    <div class="elementor-element elementor-element-ef2f088 e-con-full e-flex e-con e-child"
                        data-id="ef2f088" data-element_type="container">
                        
                        <!-- Footer Logo -->
                        <div class="elementor-element elementor-element-58a93c2 aux-appear-watch-animation aux-fade-in-right elementor-widget elementor-widget-aux_logo aux-animated aux-animated-once"
                            data-id="58a93c2" data-element_type="widget" data-widget_type="aux_logo.default">
                            <div class="elementor-widget-container">
                                <div class="aux-widget-logo">
                                    <a class="aux-logo-anchor aux-has-logo"
                                        title="<?php echo htmlspecialchars($site_config['name']); ?>"
                                        href="#"><img width="134"
                                            height="21"
                                            src="<?php echo htmlspecialchars($site_config['logo']); ?>"
                                            class="attachment-full size-full" alt="<?php echo htmlspecialchars($site_config['name']); ?>" /></a>
                                    <section class="aux-logo-text">
                                        <h3 class="site-title">
                                            <a href="#"
                                                title="<?php echo htmlspecialchars($site_config['name']); ?>"><?php echo htmlspecialchars($site_config['name']); ?>
                                            </a>
                                        </h3>
                                        <p class="site-description">
                                            <?php echo htmlspecialchars($site_config['tagline']); ?>
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Footer Description -->
                        <div class="elementor-element elementor-element-b5fd54f elementor-widget__width-initial aux-appear-watch-animation aux-fade-in-right elementor-widget elementor-widget-text-editor aux-animated aux-animated-once"
                            data-id="b5fd54f" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <p>
                                    <?php echo htmlspecialchars($site_config['footer_description']); ?>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Footer Navigation -->
                    <div class="elementor-element elementor-element-a46495d e-con-full e-flex e-con e-child"
                        data-id="a46495d" data-element_type="container">
                        <div class="elementor-element elementor-element-7e5bcdb aux-appear-watch-animation aux-fade-in-right elementor-widget elementor-widget-aux_menu_box aux-animated aux-animated-once"
                            data-id="7e5bcdb" data-element_type="widget" data-widget_type="aux_menu_box.default"
                            style="animation-name: none; opacity: 1">
                            <div class="elementor-widget-container">
                                <div class="aux-elementor-header-menu aux-nav-menu-element aux-nav-menu-element-7e5bcdb">
                                    <div class="aux-burger-box" data-target-panel="overlay"
                                        data-target-content=".elementor-element-7e5bcdb .aux-master-menu">
                                        <div class="aux-burger aux-lite-small">
                                            <span class="mid-line"></span>
                                        </div>
                                    </div>
                                    <!-- start master menu -->
                                    <nav id="master-menu-elementor-7e5bcdb" class="menu-header-menu-container">
                                        <ul id="menu-header-menu-1"
                                            class="aux-master-menu aux-skin-classic aux-vertical aux-wide"
                                            data-type="vertical" data-switch-type="toggle"
                                            data-switch-parent=".elementor-element-7e5bcdb .aux-fs-popup .aux-fs-menu"
                                            data-switch-width="5">
                                            <?php foreach ($navigation as $item): ?>
                                            <!-- start single menu -->
                                            <li class="menu-item menu-item-type-post_type menu-item-object-page <?php echo $item['active'] ? 'current-menu-item' : ''; ?> aux-menu-depth-0 aux-menu-root-1 aux-menu-item">
                                                <a href="<?php echo htmlspecialchars($item['url']); ?>"
                                                    class="aux-item-content">
                                                    <span class="aux-menu-label"><?php echo htmlspecialchars($item['title']); ?></span>
                                                </a>
                                            </li>
                                            <!-- end single menu -->
                                            <?php endforeach; ?>
                                        </ul>
                                    </nav>
                                    <!-- end master menu -->
                                    <section class="aux-fs-popup aux-fs-menu-layout-center aux-indicator"
                                        style="display: none">
                                        <div class="aux-panel-close">
                                            <div class="aux-close aux-cross-symbol aux-thick-medium"></div>
                                        </div>
                                        <div class="aux-fs-menu" data-menu-title=""></div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- Contact Information Section -->
<div class="contact-info-section" style="background: #f8f9fa; padding: 40px 0;">
    <div class="aux-wrapper">
        <div class="contact-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; text-align: center;">
            <div class="contact-item">
                <h4>Email</h4>
                <p>info@digitalpulse.com</p>
            </div>
            <div class="contact-item">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
            </div>
            <div class="contact-item">
                <h4>Address</h4>
                <p>123 Business St, City, State 12345</p>
            </div>
        </div>
    </div>
</div>

<!-- Copyright -->
<div class="copyright-section" style="background: #333; color: white; padding: 20px 0; text-align: center;">
    <div class="aux-wrapper">
        <p>&copy; <?php echo date('Y'); ?> <?php echo htmlspecialchars($site_config['name']); ?>. All rights reserved.</p>
    </div>
</div>
