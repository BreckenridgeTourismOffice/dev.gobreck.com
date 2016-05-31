<?php
/**
 * @file
 * Admin callbacks for the Google Tag Manager module.
 */

/**
 * Admin settings form.
 */
function gtm_admin_settings_form($form) {
  $user_roles = user_roles();
  $form = array();
  $form['gtm'] = array(
    '#type' => 'textfield',
    '#title' => t('Google Tag Manager ID'),
    '#default_value' => variable_get('gtm', ''),
    '#attributes' => array(
      'placeholder' => 'GTM-XXXX'
    ),
    '#size' => 10,
    '#required' => TRUE,
    '#suffix' => t(
      '<small>If you do not already have a Google Tag Manager Account, create here one: !link</small>',
      array(
        '!link' => l(
          t('Google Tag Manager'),
          'https://www.google.com/tagmanager',
          array(
            'attributes' => array(
              'target' => '_blank',
            ),
          )
        ),
      )
    ),
  );

  $form['datalayer'] = array(
    '#prefix' => '<br /><br />',
    '#type' => 'textfield',
    '#title' => t('dataLayer Variable Name'),
    '#default_value' => variable_get('datalayer', 'dataLayer'),
    '#description' => t('The variable name which should be used to instantiate the GTM dataLayer'),
    '#required' => TRUE,
    '#size' => 20,
  );

  $form['roles'] = array(
    '#type' => 'fieldset',
    '#title' => t('User Role Tracking'),
    '#collapsible' => TRUE,
    '#description' => t('Define what user roles should be tracked by Google.'),
  );
  foreach ($user_roles as $user_role) {
    $role = str_replace(' ', '_', $user_role);
    $form['roles']['gtm_track_' . $role] = array(
      '#type' => 'checkbox',
      '#title' => t('@user_role', array('@user_role' => $user_role)),
      '#default_value' => variable_get('gtm_track_' . $role, FALSE),
    );
  }

  return system_settings_form($form);
}
