$(function () {
  function showErrorAlert(reason, detail) {
    var msg = '';
    if (reason === 'unsupported-file-type') {
      msg = "Unsupported format " + detail;
    } else {
      //console.log("error uploading file", reason, detail);
    }
    $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
      '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#alerts');
  }

  $('#editor1').ace_wysiwyg({
    toolbar: [
      'font',
      null,
      'fontSize',
      null,
      {
        name: 'bold',
        className: 'btn-info'
      },
      {
        name: 'italic',
        className: 'btn-info'
      },
      {
        name: 'strikethrough',
        className: 'btn-info'
      },
      {
        name: 'underline',
        className: 'btn-info'
      },
      null,
      {
        name: 'insertunorderedlist',
        className: 'btn-success'
      },
      {
        name: 'insertorderedlist',
        className: 'btn-success'
      },
      {
        name: 'outdent',
        className: 'btn-purple'
      },
      {
        name: 'indent',
        className: 'btn-purple'
      },
      null,
      {
        name: 'justifyleft',
        className: 'btn-primary'
      },
      {
        name: 'justifycenter',
        className: 'btn-primary'
      },
      {
        name: 'justifyright',
        className: 'btn-primary'
      },
      {
        name: 'justifyfull',
        className: 'btn-inverse'
      },
      null,
      {
        name: 'createLink',
        className: 'btn-pink'
      },
      {
        name: 'unlink',
        className: 'btn-pink'
      },
      null,
      {
        name: 'insertImage',
        className: 'btn-success'
      },
      null,
      'foreColor',
      null,
      {
        name: 'undo',
        className: 'btn-grey'
      },
      {
        name: 'redo',
        className: 'btn-grey'
      }
    ],
    'wysiwyg': {
      fileUploadError: showErrorAlert
    }
  }).prev().addClass('wysiwyg-style2');


  /**
	//make the editor have all the available height
	$(window).on('resize.editor', function() {
		var offset = $('#editor1').parent().offset();
		var winHeight =  $(this).height();
		
		$('#editor1').css({'height':winHeight - offset.top - 10, 'max-height': 'none'});
	}).triggerHandler('resize.editor');
  */

  var toolbar = $('#editor1').prev().get(0);
  toolbar.className = toolbar.className.replace(/wysiwyg\-style(1|2)/g, '');
  $(toolbar).find('.btn-group > .btn').addClass('btn-white btn-round');

  //RESIZE IMAGE

  //Add Image Resize Functionality to Chrome and Safari
  //webkit browsers don't have image resize functionality when content is editable
  //so let's add something using jQuery UI resizable
  //another option would be opening a dialog for user to enter dimensions.
  if (typeof jQuery.ui !== 'undefined' && ace.vars['webkit']) {

    var lastResizableImg = null;

    function destroyResizable() {
      if (lastResizableImg == null) return;
      lastResizableImg.resizable("destroy");
      lastResizableImg.removeData('resizable');
      lastResizableImg = null;
    }

    var enableImageResize = function () {
      $('.wysiwyg-editor')
        .on('mousedown', function (e) {
          var target = $(e.target);
          if (e.target instanceof HTMLImageElement) {
            if (!target.data('resizable')) {
              target.resizable({
                aspectRatio: e.target.width / e.target.height,
              });
              target.data('resizable', true);

              if (lastResizableImg != null) {
                //disable previous resizable image
                lastResizableImg.resizable("destroy");
                lastResizableImg.removeData('resizable');
              }
              lastResizableImg = target;
            }
          }
        })
        .on('click', function (e) {
          if (lastResizableImg != null && !(e.target instanceof HTMLImageElement)) {
            destroyResizable();
          }
        })
        .on('keydown', function () {
          destroyResizable();
        });
    }

    enableImageResize();
  }
});