<?php

function gobreck_booking_widget_form($form, &$form_state) {

	drupal_add_js(drupal_get_path('module', 'gobreck') . '/gobreck_booking_widget.js');

	$form = array();

	$date_format = 'm/d/Y';

  $form['checkin'] = array(
    '#type' => 'date_popup',
    '#title' => t('Check-in'),
		'#date_format' => $date_format,
		//'#attributes' => array('onchange' => 'javascript:default_checkout()'),
 		'#date_year_range' => '-0:+5',
    '#post_render' => array('_gobreck_booking_widget_element_wrapper'),
  );

  $form['checkout'] = array(
    '#type' => 'date_popup',
    '#title' => t('Check-out'),
		'#date_format' => $date_format,
 		'#date_year_range' => '-0:+5',
    '#post_render' => array('_gobreck_booking_widget_element_wrapper'),
  );

	/*
	$rooms_options = _gobreck_booking_widget_rooms_options();
  $form['bedrooms'] = array(
    '#type' => 'select',
    '#title' => t('Bedrooms'),
    '#default_value' => '',
    '#options' => $rooms_options,
    '#post_render' => array('_gobreck_booking_widget_element_wrapper'),
  );
	*/
	
  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => 'Go!',
  );

	return $form;

}	// function gobreck_booking_widget_form($form, &$form_state) {


function gobreck_booking_widget_form_submit($form, &$form_state) {

 	$values = $form_state['values'];
	$redirect = 'http://book.gobreck.com/lodging/search';
	if (!empty($values['bedrooms'])) {
		$redirect .= '/' . $values['bedrooms'];
	}
	$query = array('checkin' => $values['checkin'], 'checkout' => $values['checkout']);

	$form_state['redirect'] = array($redirect, array('query' => $query));

}	// function gobreck_booking_widget_form($form, &$form_state) {


function _gobreck_booking_widget_rooms_options() {

	$options = array(
		'' => 'ANY',
		'1' => '1',
		'2' => '2',
		'3' => '3',
		'4' => '4',
		'lots' => '5+',
	);

	return $options;

}	// function _gobreck_booking_widget_rooms_options() {


function _gobreck_booking_widget_element_wrapper($content, $element) {
	$searches = array('<select', '</select>','<input', '<div class="description">');
	$replaces = array('<span><select', '</select></span>','<span><input', '</span><div class="description">');
	$content = str_replace($searches, $replaces, $content);
	return $content;
}	// function _gobreck_booking_widget_element_wrapper($content, $element) {