<?php
/**
 * Expose GTM dataLayer as context reaction.
 */
class context_reaction_data_layer extends context_reaction {
  /**
   * Allow admins to provide additional body classes.
   */
  function options_form($context) {
    $values = $this->fetch_from_context($context);
    $form = array(
      'gtm_data_layer' => array(
        '#title' => t('dataLayer JS Object'),
        '#description' => t('Enter properly formed JSON. Brackets {} are required.'),
        '#type' => 'textarea',
        '#size' => 64,
        '#rows' => 10,
        '#default_value' => isset($values['gtm_data_layer']) ? $values['gtm_data_layer'] : '',
      ),
    );
    return $form;
  }

  /**
   * Print our object.
   */
  function execute() {
    $layers = '';
    $dl = variable_get('datalayer');
    foreach (context_active_contexts() as $k => $v) {
      if (!empty($v->reactions[$this->plugin]['gtm_data_layer'])) {
        $json = $v->reactions[$this->plugin]['gtm_data_layer'];
        $script = "{$dl}.push({$json});";
        $layers .= $script;
      }
    }
    return $layers;
  }
}