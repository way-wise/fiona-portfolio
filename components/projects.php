<?php
/**
 * Projects Component
 * Portfolio section with dynamic project data
 */

// Include data file
require_once __DIR__ . '/../data/projects.php';

// Include site config
require_once __DIR__ . '/../data/site_config.php';

// Generate categories for filtering
$categories = [
    'All' => 'all',
    'Apps Design' => 'apps-design',
    'Web Design' => 'web-design', 
    'Branding' => 'branding',
    'Email Template' => 'email-template'
];
?>

<!-- Projects Section -->
<div data-export-id="396-22-86ce46c"
    class="aux-parallax-section elementor-element elementor-element-86ce46c e-flex e-con-boxed e-con e-parent e-lazyloaded"
    data-id="86ce46c" data-element_type="container" id="portfolio">
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
        
        <!-- Projects by Category -->
        <?php 
        $grouped_projects = [];
        foreach ($projects as $project) {
            $grouped_projects[$project['category']][] = $project;
        }
        
        foreach ($grouped_projects as $category => $category_projects): 
            $section_info = $sectionInfo[$category] ?? ['title' => ucfirst($category), 'description' => ''];
        ?>
        <!-- <?php echo htmlspecialchars($section_info['title']); ?> Section -->
        <div class="category-section" style="margin: 60px 0;">
            <div class="category-header" style="text-align: center; margin-bottom: 40px;">
                <h2 style="font-size: 2.5rem; font-weight: 700; color: #333; margin-bottom: 10px;">
                    <?php echo htmlspecialchars($section_info['title']); ?>
                </h2>
                <p style="font-size: 1.1rem; color: #666; max-width: 600px; margin: 0 auto;">
                    <?php echo htmlspecialchars($section_info['description']); ?>
                </p>
            </div>
            
            <div class="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; padding: 0 20px;">
                <?php foreach ($category_projects as $project): ?>
                <!-- Project Item -->
                <div class="project-item">
                    <article class="post-<?php echo htmlspecialchars($project['id']); ?> portfolio type-portfolio status-publish has-post-thumbnail hentry portfolio-cat-<?php echo htmlspecialchars($project['category']); ?> portfolio-tag-uncategorized portfolio-filter-uncategorized" style="background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transition: transform 0.3s ease;">
                        <div class="entry-media" style="position: relative;">
                            <div class="aux-media-frame aux-media-image">
                                <a href="<?php echo htmlspecialchars($project['demoUrl'] ?? '#'); ?>">
                                    <img width="100%" height="250" style="object-fit: cover;"
                                        class="aux-attachment aux-featured-image"
                                        alt="<?php echo htmlspecialchars($project['title']); ?>"
                                        src="<?php echo htmlspecialchars($project['image']); ?>" />
                                </a>
                            </div>
                            <!-- Category Badge -->
                            <div class="category-badge">
                                <?php echo htmlspecialchars($project['category']); ?>
                            </div>
                        </div>

                        <div style="padding: 25px;">
                            <header>
                                <h3 class="entry-title" style="margin: 0 0 15px 0; font-size: 1.3rem; font-weight: 600;">
                                    <a href="<?php echo htmlspecialchars($project['demoUrl'] ?? '#'); ?>" style="color: #333; text-decoration: none;">
                                        <?php echo htmlspecialchars($project['title']); ?>
                                    </a>
                                </h3>
                            </header>
                            
                            <!-- Technologies -->
                            <?php if (!empty($project['technologies'])): ?>
                            <div class="project-technologies">
                                <?php foreach ($project['technologies'] as $tech): ?>
                                    <span class="tech-badge tech-badge-<?php echo rand(1, 6); ?>">
                                        <?php echo htmlspecialchars($tech); ?>
                                    </span>
                                <?php endforeach; ?>
                            </div>
                            <?php endif; ?>
                            
                            <div class="entry-info" style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #eee;">
                                <?php if (!empty($project['completionDate'])): ?>
                                <span class="completion-date">
                                    Completed: <?php echo htmlspecialchars($project['completionDate']); ?>
                                </span>
                                <?php endif; ?>
                            </div>
                        </div>
                    </article>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</div>


<style>
/* Category Section Styling */
.category-section {
    margin: 60px 0;
}

.category-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 10px;
}

.category-header p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    padding: 0 20px;
}

.project-item {
    transition: transform 0.3s ease;
}

.project-item:hover {
    transform: translateY(-5px);
}

/* Category Badge */
.category-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    z-index: 10;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.aux-media-frame {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
}

/* Technology Badges */
.project-technologies {
    margin: 15px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tech-badge {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 15px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: white;
    transition: all 0.3s ease;
}

.tech-badge:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

/* Random colored badges */
.tech-badge-1 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.tech-badge-2 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.tech-badge-3 { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.tech-badge-4 { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
.tech-badge-5 { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
.tech-badge-6 { background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); }

.completion-date {
    display: block;
    font-size: 12px;
    color: #999;
    margin-top: 5px;
}

.entry-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr;
        padding: 0 10px;
    }
    
    .category-header h2 {
        font-size: 2rem;
    }
    
    .category-badge {
        top: 10px;
        right: 10px;
        padding: 4px 8px;
        font-size: 10px;
    }
    
    .tech-badge {
        font-size: 10px;
        padding: 3px 8px;
    }
}
</style>

