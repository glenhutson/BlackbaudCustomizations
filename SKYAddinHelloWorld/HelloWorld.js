(function () {

    var initialArgs,
        showHelloWorld = true;

    // BBSkyAddinClient is global here.
    var client = new BBSkyAddinClient.AddinClient({
        callbacks: {
            init: function (args) {

                initialArgs = args;

                $('#environmentId').text(args.envId);
                $('#context').text(JSON.stringify(args.context, null, 2));

                // wire up a click handler for the login button
                $('#getUserIdentityToken').click(getUserIdentityToken);

                // wire up a click handler for the modal button
                $('#showModal').click(showSimpleModal);

                // wire up a click handler for the modal button
                $('#showAddCustomerModal').click(showAddCustomerModal);

                // wire up a click handler for the help button
                $('#openHelp').click(openHelp);

                // wire up a click handler for the navigation button
                $('#invokeNavigation').click(invokeNavigation);

                $('#helpContent').hide();
                $('#helpContent-exit').click(exitHelp);
                $('#closeSettings').click(function () {
                    // close settings
                    $('#settingsContent').slideUp();
                });

                $("#showHelloWorldChk").prop('checked', true);
                $("#showHelloWorldChk").change(function () {
                    showHelloWorld = this.checked;
                    setWelcomeMessageVisibility();
                });

                // wire up a click handler for the toast button
                $('#showToast').click(showToast);

                // wire up a click handler for the flyout button
                $('#showFlyout').click(showFlyout);
                $('#flyoutClosed').hide();

                // wire up a click handler for the confirm button
                $('#showConfirm').click(showConfirm);

                // wire up a click handler for the error button
                $('#showError').click(showError);

                // inform the host page that the add-in is ready to be shown
                args.ready({
                    showUI: true,
                    title: 'My Custom Tile',
                    tileConfig: {
                        showHelp: true,
                        showSettings: true,
                        summaryStyle: BBSkyAddinClient.AddinTileSummaryStyle.Text,
                        summaryText: 'Summary text'
                    }
                });
            },
            helpClick: helpClick,
            settingsClick: settingsClick,
            flyoutNextClick: flyoutNextClick,
            flyoutPreviousClick: flyoutPreviousClick
        }
    });

    function helpClick() {
        $('#helpContent').show();
    }

    function exitHelp() {
        $('#helpContent').hide();
    }

    function setWelcomeMessageVisibility() {
        if (showHelloWorld) {
            $("#helloWorldContainer").show();
        } else {
            $("#helloWorldContainer").hide();
        }
    }

    function settingsClick() {
        // show settings
        $('#settingsContent').slideDown();
    }

    function flyoutNextClick() {
        // show toast for next button clicked
        client.showToast({
            message: "Next button was clicked"
        });
    }

    function flyoutPreviousClick() {
        // show toast for previous button clicked
        client.showToast({
            message: "Previous button was clicked"
        });
    }

    function getUserIdentityToken() {
        $('#userIdentityToken').hide();
        $('#userIdentityTokenValue').text('');

        client.getUserIdentityToken().then(function (token) {
            $('#userIdentityTokenValue').text(token);
            $('#userIdentityToken').show();
        });
    }

    function showModal(url, context) {
        $('#modalResults').hide();
        $('#modalContextReturned').text('');

        // launch the modal and pass it some context
        client.showModal({
            url: url,
            context: context
        }).modalClosed.then(function (context) {
            // Handle when the modal is closed, and show the context returned from the modal
            $('#modalContextReturned').text(JSON.stringify(context, null, 2));
            $('#modalResults').show();
        });
    }

    function showSimpleModal() {
        // start with the context provided to this add-in, and pass an additional value to the modal
        var context = $.extend(true, {}, initialArgs.context);
        context['anotherValue'] = 'this value was passed to the modal';

        showModal('https://blackbaudaddinhelloworld.azurewebsites.net/helloworldmodal.html', context);
    }

    function showAddCustomerModal() {
        // define context for the modal
        var context = {
            firstName: 'John',
            lastName: 'Doe'
        };

        showModal('https://host.nxt.blackbaud.com/addin-modal-demo/add-customer', context);
    }

    function invokeNavigation() {
        client.navigate({ url: 'https://www.blackbaud.com' });
    }

    function openHelp() {
        client.openHelp({ helpKey: 'applications.html' });
    }

    function showToast() {
        client.showToast({
            message: 'this is a simple toast message',
            style: BBSkyAddinClient.AddinToastStyle.Success
        });
    }

    function showFlyout() {
        $('#flyoutClosed').hide();

        // show a flyout and pass it some content
        client.showFlyout({
            url: 'https://blackbaudaddinhelloworld.azurewebsites.net/helloworldflyout.html',
            showIterator: true,
            iteratorPreviousDisabled: false,
            iteratorNextDisabled: false,
            defaultWidth: 500,
            maxWidth: 800,
            minWidth: 200,
            context: {
                name: 'John Doe',
                constituentCode: 'Alumnus',
                status: 'Paid'
            }
        }).flyoutClosed.then(function () {
            // Handle when the flyout is closed
            $('#flyoutClosed').show();
        });
    }

    function showConfirm() {
        $('#confirmAction').hide();
        $('#confirmActionReturned').text('');

        // show the confirm dialog
        client.showConfirm({
            body: 'Are you sure you want to continue?',
            buttons: [
                {
                    action: 'yes',
                    text: 'Yes',
                    autofocus: true,
                    style: BBSkyAddinClient.AddinConfirmButtonStyle.Primary
                },
                {
                    action: 'cancel',
                    text: 'Cancel',
                    style: BBSkyAddinClient.AddinConfirmButtonStyle.Link
                }
            ],
            message: 'Saving...'
        }).then(function (action) {
            // Handle when the confirm dialog is closed, and show the returned action
            $('#confirmActionReturned').text(action);
            $('#confirmAction').show();
        });
    }

    function showError() {
        client.showError({
            closeText: 'OK',
            title: 'Save Error',
            description: 'An unexpected error occurred'
        });
    }

}());