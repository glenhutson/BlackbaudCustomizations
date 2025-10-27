(function () {

  // BBSkyAddinClient is global here.
  var client = new BBSkyAddinClient.AddinClient({
      callbacks: {
          init: function (args) {
              // inform the host page that the add-in is ready to be shown
              args.ready({
                  showUI: true,
                  title: 'Add customer',
                  buttonConfig: { style: BBSkyAddinClient.AddinButtonStyle.Add }
              });
          },
          buttonClick: function () {
              showAddCustomerModal();
          }
      }
  });

  function showModal(url, context) {
      // launch the modal and pass it some context
      client.showModal({
          url: url,
          context: context
      }).modalClosed.then(function (context) {
          // Handle when the modal is closed, and show the context returned from the modal
          console.log('Modal closed context = ' + JSON.stringify(context, null, 2));
      });
  }

  function showAddCustomerModal() {
      // define context for the modal
      var context = {
          firstName: 'John',
          lastName: 'Doe'
      };

      showModal('https://host.nxt.blackbaud.com/addin-modal-demo/add-customer', context);
  }
}());