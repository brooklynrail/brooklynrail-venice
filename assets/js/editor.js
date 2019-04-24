jQuery(document).ready(function($) {

  var giturl = 'https://github.com/brooklynrail/brooklynrail-venice/edit/master/';
  var all = document.querySelectorAll("[data-edit-this]");
  $(all).each(function( i, e ) {
    var path = $(e).attr('data-edit-this');
    var edit_btn = '<p class="edit-this"><a href="' + giturl + '' + path + ' " title="edit this"><span>edit</span></a><p>';
    $(e).append(edit_btn);
  });

  function showEdit() {
    var all = document.querySelectorAll("[data-edit-this]");
    $(all).each(function( i, e ) {
      $(e).find(".edit-this").show();
    });
	}
  function hideEdit() {
    var all = document.querySelectorAll("[data-edit-this]");
    $(all).each(function( i, e ) {
      $(e).find('.edit-this').hide();
    });
	}

  // Temporary
	// Press the escape key to edit page
	$(document).bind('keyup', function (evt) {
		if (evt.keyCode == 191){
			return (this.tog = !this.tog) ? showEdit() : hideEdit();
		}
	});

});
