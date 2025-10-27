(function () {

    // BBSkyAddinClient is global here.
    var client = new BBSkyAddinClient.AddinClient({
        callbacks: {
            init: function (args) {

                // show the context values provided to the flyout
                $('#environmentId').text(args.envId);
                $('#context').text(JSON.stringify(args.context, null, 2));
            }
         }
    });
}());
