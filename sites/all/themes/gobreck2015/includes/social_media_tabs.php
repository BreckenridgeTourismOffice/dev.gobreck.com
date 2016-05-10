<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>


<div id="horizontalTab">
	<ul class="resp-tabs-list">
		<li id="tab-inst">
			Instagram</li>
		<li id="tab-youtube">
			Youtube</li>
		<li id="tab-facebook">
			Facebook</li>
		<li id="tab-twitter">
			Twitter</li>
	</ul>
	<div class="resp-tabs-container">
		<div>
		<h3>Instagram</h3>
			<div id="instafeed"></div>
		</div>
		<div>
		<h3>YouTube</h3>
			<?php
$options = array(
  'author' => 'gobreck',
  'max-results' => 10,
);
if (function_exists('youtube_pull_render')) {
  print youtube_pull_render($options);
}
?>
		</div>
		<div>
		<h3>Facebook</h3>
			<p><div class="fb-like-box" data-href="https://www.facebook.com/GoBreck" data-width="265" data-colorscheme="light" data-show-faces="true" data-header="false" data-stream="true" data-show-border="true"></div></p>
		</div>
		<div>
		<h3>Twitter</h3>
			<p><a class="twitter-timeline" data-dnt="true" data-widget-id="368399387795288064" href="https://twitter.com/GoBreck">Tweets by @GoBreck</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></p>
		</div>
	</div>
</div>
