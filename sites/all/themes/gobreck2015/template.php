<?php

/**
 * @file
 * Process theme data.
 *
 * Use this file to run your theme specific implimentations of theme functions,
 * such preprocess, process, alters, and theme function overrides.
 *
 * Preprocess and process functions are used to modify or create variables for
 * templates and theme functions. They are a common theming tool in Drupal, often
 * used as an alternative to directly editing or adding code to templates. Its
 * worth spending some time to learn more about these functions - they are a
 * powerful way to easily modify the output of any template variable.
 *
 * Preprocess and Process Functions SEE: http://drupal.org/node/254940#variables-processor
 * 1. Rename each function and instance of "gobreck2015" to match
 *    your subthemes name, e.g. if your theme name is "footheme" then the function
 *    name will be "footheme_preprocess_hook". Tip - you can search/replace
 *    on "gobreck2015".
 * 2. Uncomment the required function to use.
 */


/**
 * Preprocess variables for the html template.
 */
/* -- Delete this line to enable.
function gobreck2015_preprocess_html(&$vars) {

}
// */


/**
 * Process variables for the html template.
 */
/* -- Delete this line if you want to use this function
function gobreck2015_process_html(&$vars) {
}
// */


/**
 * Override or insert variables for the page templates.
 */
/* -- Delete this line if you want to use these functions
function gobreck2015_preprocess_page(&$vars) {
}
function gobreck2015_process_page(&$vars) {
}
// */

function gobreck2015_preprocess_page(&$vars) {
  if (isset($vars['node']->type)) {
    $vars['theme_hook_suggestions'][] = 'page__' . $vars['node']->type;
  }
}


/**
 * Override or insert variables into the node templates.
 */
/* -- Delete this line if you want to use these functions
function gobreck2015_preprocess_node(&$vars) {
}
function gobreck2015_process_node(&$vars) {
}
// */


/**
 * Override or insert variables into the comment templates.
 */
/* -- Delete this line if you want to use these functions
function gobreck2015_preprocess_comment(&$vars) {
}
function gobreck2015_process_comment(&$vars) {
}
// */


/**
 * Override or insert variables into the block templates.
 */
/* -- Delete this line if you want to use these functions
function gobreck2015_preprocess_block(&$vars) {
}
function gobreck2015_process_block(&$vars) {
}
// */
