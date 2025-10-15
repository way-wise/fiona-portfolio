<?php
// Portfolio Component (Works Section)
// Include portfolio data
include_once 'data/portfolio.php';
?>
<div class="elementor-element elementor-element-4d0a5de e-flex e-con-boxed e-con e-parent e-lazyloaded"
  data-id="4d0a5de" data-element_type="container" id="works"
  data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
  <div class="e-con-inner">
    <div class="elementor-element elementor-element-622507b e-con-full e-flex e-con e-child" data-id="622507b"
      data-element_type="container">
      <div
        class="elementor-element elementor-element-9e735d6 tj_section_align elementor-align-center elementor-widget__width-initial elementor-widget elementor-widget-tj-section-title"
        data-id="9e735d6" data-element_type="widget" data-widget_type="tj-section-title.default">
        <div class="elementor-widget-container">

          <div class="section-header">
            <h2 data-wow-delay="0.3s" class="section-title wow fadeInUp"
              style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
              My Recent Works </h2>
          </div>

        </div>
      </div>
    </div>
    <div class="elementor-element elementor-element-df02684 e-con-full e-flex e-con e-child" data-id="df02684"
      data-element_type="container">
      <div class="elementor-element elementor-element-7c00afb elementor-widget elementor-widget-tj-portfolios"
        data-id="7c00afb" data-element_type="widget" data-widget_type="tj-portfolios.default">
        <div class="elementor-widget-container">

          <div class="tj_portfolios">
            <div class="row">
              <div class="col-12">

                <div data-wow-delay="0.4s" class="portfolio-filter wow fadeInUp"
                  style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                  <div class="button-group filter-button-group">
                    <?php foreach ($portfolio_categories as $category_key => $category_name): ?>
                      <?php if ($category_key === 'all'): ?>
                        <button class="active" data-filter="*"><?php echo $category_name; ?></button>
                      <?php else: ?>
                        <button data-filter=".<?php echo $category_key; ?>"><?php echo $category_name; ?></button>
                      <?php endif; ?>
                    <?php endforeach; ?>
                    <div class="active-bg" style="left: 8px; width: 69.8438px; height: 39px; top: 6px;"></div>
                  </div>
                </div>

                <div class="portfolio-box wow fadeInUp" data-wow-delay="0.3s"
                  style="position: relative; height: 1169.44px; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                  <div class="portfolio-sizer"></div>
                  <div class="gutter-sizer"></div>

                  <?php 
                  // Calculate positioning for masonry layout
                  $items_per_row = 2;
                  $item_width_percent = 100 / $items_per_row;
                  $row_height = 560; // Approximate height for positioning
                  
                  foreach ($portfolio_items as $index => $item): 
                    $row = floor($index / $items_per_row);
                    $col = $index % $items_per_row;
                    $left_position = $col * $item_width_percent;
                    $top_position = $row * $row_height + 50; // 50px initial offset
                    
                    // Determine loading priority
                    $priority_attr = ($item['priority'] === 'high') ? 'fetchpriority="high"' : 'loading="lazy"';
                  ?>
                  <div class="portfolio-item <?php echo $item['category']; ?>" 
                       style="position: absolute; left: <?php echo $left_position; ?>%; top: <?php echo $top_position; ?>px;">
                    <div class="image-box">
                      <img <?php echo $priority_attr; ?> decoding="async" 
                           width="<?php echo $item['image_width']; ?>" 
                           height="<?php echo $item['image_height']; ?>"
                           src="<?php echo $item['image']; ?>"
                           class="attachment-full size-full wp-post-image" 
                           alt="<?php echo $item['alt_text']; ?>"
                           srcset="<?php echo $item['image']; ?> <?php echo $item['image_width']; ?>w"
                           sizes="(max-width: <?php echo $item['image_width']; ?>px) 100vw, <?php echo $item['image_width']; ?>px">
                    </div>
                    <div class="content-box">
                      <h3 class="portfolio-title"><?php echo $item['title']; ?></h3>
                      <p><?php echo $item['description']; ?></p>
                      <i class="flaticon-up-right-arrow"></i>
                      <a href="<?php echo $item['link']; ?>" class="portfolio-link"></a>
                    </div>
                  </div>
                  <?php endforeach; ?>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
