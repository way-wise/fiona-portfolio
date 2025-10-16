<?php
/**
 * Projects Component
 * Portfolio section with dynamic project data
 */

// Include data file
require_once 'data/projects.php';
?>

<!-- Projects Section -->
<div data-export-id="396-22-86ce46c"
    class="aux-parallax-section elementor-element elementor-element-86ce46c e-flex e-con-boxed e-con e-parent e-lazyloaded"
    data-id="86ce46c" data-element_type="container">
    <div class="e-con-inner">
        <!-- Section Title -->
        <div class="elementor-element elementor-element-a5fbc05 aux-appear-watch-animation aux-fade-in-down elementor-widget elementor-widget-aux_modern_heading aux-animated aux-animated-once"
            data-id="a5fbc05" data-element_type="widget"
            data-widget_type="aux_modern_heading.default">
            <div class="elementor-widget-container">
                <section class="aux-widget-modern-heading">
                    <div class="aux-widget-inner">
                        <h3 class="aux-modern-heading-primary">
                            <?php echo htmlspecialchars($site_config['projects_title']); ?>
                        </h3>
                        <div class="aux-modern-heading-divider"></div>
                    </div>
                </section>
            </div>
        </div>
        
        <!-- Projects Grid -->
        <div class="elementor-element elementor-element-eb80c76 aux-appear-watch-animation aux-fade-in-up-1 elementor-widget elementor-widget-aux_recent_portfolios_grid aux-animated aux-animated-once"
            data-id="eb80c76" data-element_type="widget"
            data-settings='{"columns":"3","columns_tablet":"2","columns_mobile":"1"}'
            data-widget_type="aux_recent_portfolios_grid.default">
            <div class="elementor-widget-container">
                <section class="widget-container aux-widget-recent-portfolios aux-parent-au93e84f2b">
                    <div id="68f0a6d4a9e4e" data-element-id="au93e84f2b"
                        class="aux-portfolio-columns aux-ajax-view aux-isotope-animated aux-isotope-layout aux-layout-grid aux-no-gutter aux-row aux-match-height aux-de-col3 aux-tb-col2 aux-mb-col1 aux-isotope-ready"
                        data-lazyload="true" data-space="30" data-pagination="true"
                        data-deeplink="true" data-slug="" data-perpage="8"
                        data-layout="fitRows" data-reveal-transition-duration="600"
                        data-reveal-between-delay="60"
                        data-hide-transition-duration="600"
                        data-hide-between-delay="30" data-num="3" data-order="DESC"
                        data-orderby="date" data-taxonomy="" data-n="0ed7308729"
                        style="height: 585.562px; margin-right: -30px; position: relative;">
                        
                        <?php foreach ($projects as $index => $project): ?>
                        <!-- Project Item -->
                        <div class="aux-iso-item aux-col aux-iso-visible project-item" 
                             data-category="<?php echo strtolower(str_replace(' ', '-', $project['category'])); ?>" 
                             style="
                                margin-bottom: 30px;
                                padding-right: 30px;
                                position: absolute;
                                left: <?php echo $index * 476.609; ?>px;
                                top: 0px;
                              ">
                            <article class="post-<?php echo $project['id']; ?> portfolio type-portfolio status-publish has-post-thumbnail hentry portfolio-cat-<?php echo strtolower(str_replace(' ', '-', $project['category'])); ?> portfolio-tag-uncategorized portfolio-filter-uncategorized">
                                <div class="">
                                    <div class="entry-media">
                                        <div class="aux-media-frame aux-media-image">
                                            <a href="<?php echo htmlspecialchars($project['link']); ?>">
                                                <img width="606" height="697"
                                                    class="aux-attachment aux-featured-image attachment-606.66666666667x697.66666666667 aux-attachment-id-<?php echo $project['id']; ?>"
                                                    alt="<?php echo htmlspecialchars($project['alt']); ?>"
                                                    data-ratio="0.87"
                                                    data-original-w="2560"
                                                    sizes="447px"
                                                    src="<?php echo htmlspecialchars($project['image']); ?>"
                                                    srcset="<?php echo htmlspecialchars($project['image']); ?> 607w" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="entry-main">
                                    <header class="entry-header">
                                        <h3 class="entry-title">
                                            <a href="<?php echo htmlspecialchars($project['link']); ?>">
                                                <?php echo htmlspecialchars($project['title']); ?>
                                            </a>
                                        </h3>
                                    </header>
                                    
                                    <!-- Like Button -->
                                    <div class="wpulike wpulike-heart aux-wpulike aux-wpulike-portfolio-widget">
                                        <div class="wp_ulike_general_class wp_ulike_is_not_liked">
                                            <button type="button"
                                                aria-label="Like Button"
                                                data-ulike-id="<?php echo $project['id']; ?>"
                                                data-ulike-nonce="f868c1335d"
                                                data-ulike-type="post"
                                                data-ulike-template="wpulike-heart"
                                                data-ulike-display-likers="0"
                                                data-ulike-likers-style="popover"
                                                class="wp_ulike_btn wp_ulike_put_image wp_post_btn_<?php echo $project['id']; ?>"></button>
                                            <span class="count-box wp_ulike_counter_up"
                                                data-ulike-counter-value="0">0</span>
                                        </div>
                                    </div>
                                    
                                    <div class="entry-info">
                                        <span class="entry-tax">
                                            <a href="#<?php echo strtolower(str_replace(' ', '-', $project['category'])); ?>"
                                                title="View all posts in <?php echo htmlspecialchars($project['category']); ?>"
                                                rel="category"><?php echo htmlspecialchars($project['category']); ?></a>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>

<!-- Project Filter (Optional) -->
<div class="project-filter-section" style="margin: 20px 0; text-align: center;">
    <div class="filter-buttons">
        <?php foreach ($categories as $category_name => $category_slug): ?>
        <button class="filter-btn <?php echo $category_slug === 'all' ? 'active' : ''; ?>" 
                data-filter="<?php echo $category_slug; ?>">
            <?php echo htmlspecialchars($category_name); ?>
        </button>
        <?php endforeach; ?>
    </div>
</div>

<style>
.filter-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin: 20px 0;
}

.filter-btn {
    padding: 10px 20px;
    border: 2px solid #333;
    background: transparent;
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 5px;
    font-weight: 500;
}

.filter-btn:hover,
.filter-btn.active {
    background: #333;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.project-item {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.project-item.hidden {
    opacity: 0;
    transform: scale(0.8);
}

@media (max-width: 768px) {
    .filter-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .filter-btn {
        width: 200px;
    }
}
</style>

<script>
// Enhanced filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects with smooth animation
            projectItems.forEach((item, index) => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filter === 'all') {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'block';
                        item.style.opacity = '1';
                    }, index * 50);
                } else {
                    if (itemCategory === filter) {
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.display = 'block';
                            item.style.opacity = '1';
                        }, index * 50);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
});
</script>
