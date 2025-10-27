(function () {

  var isWhite = true;

  // BBSkyAddinClient is global here.
  var client = new BBSkyAddinClient.AddinClient({
    callbacks: {
      init: function (args) {

        // show the context values provided to the modal
        $('#environmentId').text(args.envId);
        $('#context').text(JSON.stringify(args.context, null, 2));

        // wire up a click handler for the toggle background button
        $('#toggleBackground').click(toggleBackground);

        // wire up a click handler for the close button
        $('#closeModal').click(closeModal);

        // inform the host page that the addin is ready to be shown
        args.ready({ showUI: true });
      }
    }
  });

  function toggleBackground() {

    if (isWhite) {
      $('body').css({ 'background-color': 'transparent' });
    }
    else {
      $('body').css({ 'background-color': 'white' });
    }

    isWhite = !isWhite;
  }

  function closeModal() {

    // close the modal and pass context back to the caller
    client.closeModal({
      context: {
        response: 6,
        value: 'this value was returned from the modal'
      }
    });
  }

}());