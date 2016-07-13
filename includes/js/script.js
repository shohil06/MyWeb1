/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$( function() {
$('#Me').click(function(shohil) {

		shohil.preventDefault();

		$('#success').slideDown();
});
$('a.pop').click(function(n) {
	n.preventDefault();
});
$('a.pop').popover();
// $('a#href12').tooltip();
$('a#shohil').tooltip();
// $('a.href12').tooltip();
});
