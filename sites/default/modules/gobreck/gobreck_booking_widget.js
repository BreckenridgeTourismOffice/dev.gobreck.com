function dateToMDY(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return (m<=9 ? '0' + m : m) + '/' + (d <= 9 ? '0' + d : d) + '/' + y;
}

function default_checkout() {
	checkin = document.getElementById('edit-checkin-datepicker-popup-0').value;
	var arrivaldate = new Date(checkin);
	var departuredate = new Date(arrivaldate.getTime() + (5 * 24 * 60 * 60 * 1000));
	departure = dateToMDY(departuredate);
	document.getElementById('edit-checkout-datepicker-popup-0').value = departure;
}