<style type="text/css">
#LodgingWidget {
  padding:5px 0 0 0;
}
#LodgingWidget label, #LodgingWidget input, #LodgingWidget select {
  margin:0 0 0 10px;
  float:left;
  font-size:20px;
  font-weight:bold;
}
#LodgingWidget label {
  color:white;
}
#LodgingWidget input{
  margin-right:25px;
  text-align:center;
  width:130px;
}
#LodgingWidget #Bedrooms_Lodging {
  text-align:center;
  width:80px;
}
.vrbutton {
	-moz-box-shadow:inset 0px 1px 0px 0px #c1ed9c;
	-webkit-box-shadow:inset 0px 1px 0px 0px #c1ed9c;
	box-shadow:inset 0px 1px 0px 0px #c1ed9c;
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #9dce2c), color-stop(1, #8cb82b) );
	background:-moz-linear-gradient( center top, #9dce2c 5%, #8cb82b 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#9dce2c', endColorstr='#8cb82b');
	background-color:#9dce2c;
	-webkit-border-top-left-radius:10px;
	-moz-border-radius-topleft:10px;
	border-top-left-radius:10px;
	-webkit-border-top-right-radius:10px;
	-moz-border-radius-topright:10px;
	border-top-right-radius:10px;
	-webkit-border-bottom-right-radius:10px;
	-moz-border-radius-bottomright:10px;
	border-bottom-right-radius:10px;
	-webkit-border-bottom-left-radius:10px;
	-moz-border-radius-bottomleft:10px;
	border-bottom-left-radius:10px;
	text-indent:0;
	border:1px solid #83c41a;
	display:inline-block;
	color:#ffffff;
	font-family:Arial;
	font-size:20px;
	font-weight:bold;
	font-style:normal;
	height:30px;
	line-height:30px;
	width:140px;
	float:right;
 	margin:0 10px 0 0;
	text-decoration:none;
	text-align:center;
	text-shadow:1px 1px 0px #689324;
}
.vrbutton:hover {
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #8cb82b), color-stop(1, #9dce2c) );
	background:-moz-linear-gradient( center top, #8cb82b 5%, #9dce2c 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#8cb82b', endColorstr='#9dce2c');
	background-color:#8cb82b;
}.vrbutton:active {
	position:relative;
	top:1px;
}
#la-datepicker-div {
  z-index:2000;
  -webkit-box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.75);
  -moz-box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.75);
  box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.75);
  margin-top:-300px;
}</style>
<div id="LodgingWidget">
	<input id="searchResultsUrlPath" type="hidden" value="/lodging/search" /><label for="CheckIn_Lodging">Check-in:</label> <input id="CheckIn_Lodging" type="text" /> <label for="CheckOut_Lodging">Check-out:</label> <input id="CheckOut_Lodging" type="text" /><label for="Bedrooms_Lodging">Bedrooms:</label> <select id="Bedrooms_Lodging"><option value="">ANY</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="lots">5+</option></select><button class="vrbutton" id="Search_Lodging">Book Now</button></div>
<link rel="stylesheet" type="text/css" href="http://www.vacationrentalagent.com/css/jqueryui-lightness-la-prefix.css"></link>
<script language="javascript" type="text/javascript" src="http://ajax.vacationroost.com/v3/bookingwidget.js"></script>
<script language="javascript" type="text/javascript">
function matchDatePicker(from, to, offset) {
	var fromDate = $("#" + from).datepicker("getDate");
	if (fromDate)
		var fromTime = fromDate.getTime();
	var toDate = $("#" + to).datepicker("getDate");
	if (toDate)
		var toTime = toDate.getTime();
	if (!toTime || fromTime >= toTime) {
		var toDate = $("#" + from).datepicker("getDate");
		toDate.setDate(toDate.getDate() + offset);
		$("#" + to).datepicker("setDate", toDate);
	}
}
	$(function() {
		var dpOpts = {
			beforeShow : function(inpt, inst) {
				inst.dpDiv.removeClass("la-helper-hidden-accessible");
			},
			showAnim : "",
			duration : ""
		};
		$("#CheckOut_Lodging").datepicker(dpOpts);
		dpOpts.onSelect = function() {matchDatePicker("CheckIn_Lodging","CheckOut_Lodging",5);};
		$("#CheckIn_Lodging").datepicker(dpOpts);
		var lodgingOptions = {
				mode : "custom",
				product : "lodging",
				destinationField : $("#Destination_Lodging"),
				searchResultsUrlPathField:$("#searchResultsUrlPath"),
				checkinField : $("#CheckIn_Lodging"),
				checkoutField : $("#CheckOut_Lodging"),
				bedroomsField: $("#Bedrooms_Lodging"),
				searchButton : $("#Search_Lodging"),
				domain : "book.gobreck.com"
			};
			$("#LodgingWidget").vrBookingWidget(lodgingOptions);
	})(jQuery);
</script>
