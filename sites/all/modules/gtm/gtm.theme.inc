<?php

/**
 * Theme callback from GTM container
 */
function theme_gtm_container(&$variables) {
  if($variables['track'] == TRUE) {
    $init = '<script type="text/javascript">var '. $variables['data_layer'] .' = [];</script>';
    $push = '';
    foreach(module_invoke_all('gtm_data_layer') as $data_layer_push) {
      $layer = array(
        '#theme' => 'gtm_datalayer',
        '#dataLayer' => $data_layer_push,
      );
      $push .= drupal_render($layer);
    }
    // Build script tags.
    $noscript = <<<EOS
<noscript><iframe src="//www.googletagmanager.com/ns.html?id={$variables['id']}"
 height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
EOS;
    $script = <<<EOS
<script type="text/javascript">
(function(w,d,s,l,i){
  w[l]=w[l]||[];
  w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0];
  var j=d.createElement(s);
  var dl=l!='dataLayer'?'&l='+l:'';
  j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;
  j.type='text/javascript';
  j.async=true;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','{$variables['data_layer']}','{$variables['id']}');
</script>
EOS;
    $script = <<<EOS
<!-- Google Tag Manager -->
$init
$push
$noscript
$script
<!-- End Google Tag Manager -->
EOS;
    return $script;
  }
  return FALSE;
}

/**
 * Implements hook_preprocess_HOOK()
 */
function gtm_preprocess_gtm_container(&$variables) {
  if(gtm_should_track()) {
    $variables['track'] = TRUE;
    $variables['id'] = variable_get('gtm');
    $variables['data_layer'] = variable_get('datalayer', 'dataLayer');
  }
}

/**
 * Theme callback for dataLayer
 */
function theme_gtm_datalayer(&$variables) {
  if(gtm_should_track()) {
    $build = array(
      '#theme' => 'html_tag',
      '#tag' => 'script',
      '#attributes' => array(
        'type' => 'text/javascript'
      ),
      '#value' => $variables['dataLayer'],
    );
    return drupal_render($build);
  }
  return FALSE;
}