<?php
/**
 * Expose GTM container as context reaction.
 */
class context_reaction_gtm_container extends context_reaction {
  function options_form($context) {
    $values = $this->fetch_from_context($context);
    $form = array(
      'gtm_container' => array(
        '#title' => t('Include the Google Tag Manager script'),
        '#type' => 'hidden',
        '#default_value' => TRUE,
      ),
    );
    return $form;
  }
  /**
   * Print our container.
   */
  function execute() {
    foreach (context_active_contexts() as $k => $v) {
      if (!empty($v->reactions[$this->plugin]['gtm_container'])) {
        $build = array(
          '#theme' => 'gtm_container',
          '#gtm_id' => variable_get('gtm')
        );
        return drupal_render($build);
      }
    }
  }
}