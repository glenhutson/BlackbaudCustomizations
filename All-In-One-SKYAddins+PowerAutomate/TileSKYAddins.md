# Tile SKY Add-ins
<!-- vscode-markdown-toc -->
* [Summary](#Summary)
* [Prerequisites](#Prerequisites)
* [Installation - All in One](#Installation-AllinOne)
* [Installation - Adaptive Card](#Installation-AdaptiveCard)
* [Activation](#Activation)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=false
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Summary'></a>Summary
These instructions give a high-level overview on the steps needed to install a Tile All-in-One Add-in.  View the documentation for each Add-In for any variations needed.

## <a name='Prerequisites'></a>Prerequisites
To successfully get this setup, you need to meet the following prerequisites before beginning.

* You are an [environment admin who can create and connect applications](https://webfiles.blackbaud.com/files/support/helpfiles/marketplace/content/contactadmin.html) in the Blackbaud Marketplace for your Raiser's Edge NXT solution.
* You have a SKY Developer account. If you don't have one, you can create one by completing the [SKY Developer Getting Started](https://developer.blackbaud.com/skyapi/docs/getting-started).

SKY Add-Ins are considered custom applications, so you'll need to register your application with SKY Developer.  

> **Note**: Multiple Add-ins can be housed under the _same_ application, you need not create a separate application for each.  It's entirely up to if you have all custom tiles under one application or under separate.  If you already have an application setup for your Add-Ins, you can skip these Prerequisite and subsequent Activation steps. 

1. Go to the SKY Developer My applications page.
2. Select Add.
3. On the Add application screen, enter the following information for the fields:
    * **Application name** – All In One Flows (the same application can be used for multiple add-ins/flows, or you can create a separate one for each and label it accordingly)
    * **Application details** – (If it's a 'generic' app to hold all your add-ins, state so here.  Otherwise, explain the purpose of the individual Application). 
    * **Which organization owns this app?** – All of your available Blackbaud organization associations appear. If your Blackbaud ID is associated with only one organization, we default in the name for you. However, you can change that to "Not owned by an organization," such as for testing purposes. If your Blackbaud ID is associated with more than one, select which one owns the application.
    * **Publisher** – Enter your organization's name.
    * **Application logo** - This field is not required, so you can skip adding a logo.
    * **Application website URL** – Enter your organization’s website link. If you decide later that you want to maintain documentation specific to this application, you can update the link then.
4. Select **Save**.
5. After your application is registered, the application details page appears.  This is where you can edit and add additonal information.  On this page, you need to add a redirect URI:
    * On the Settings tab, in the Redirect URIs tile, select Edit.
    * Select Add a redirect URI.
    * Enter `https://global.consent.azure-apim.net/redirect`
    * You will also need your Application ID (at the top of the page) later.  You may wish to keep the tab open for reference.  

This is _similar_ to the steps needed as a pre-requisite to setting up an add-in button letter flow.  You can watch a video on that at https://youtu.be/9jGsh-uRAik. 

## <a name='Installation-AllinOne'></a>Installation - All in One

These are flows that result in HTML output.  For those designated as Adaptive Card, see the next section. 

> Before installing any All-In-One Custom Tile, make sure you review any documentation in the corresponding folder as well as any steps labeled "README" in the flow. 

1. Download the zip file located in the appropriate directory. (These are versioned where "X" is the version number.) Do _not_ unzip the file (it should stay as one file).  
2. Review the instructions at https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/basics/import-flows for Importing flows into your Power Automate account. Stop before the "Next Steps" section. 
3. Edit the flow if it doesn't already take you to the editor. 
4. Open up the area that starts with "README - ACTION REQUIRED" to review that information and take associated steps.  Not doing this will cause your application to immediately terminate when it tries to run. 
5. Open the _Initialize variable - ApplicationID_ step and replace the _Value_ there with the Application ID you registered earlier.  This is an important step in making sure that this flow is only being run from within your environment. 
6. Open the _Initialize variable - AuthorizedUsers_ step. If you want to allow only select people to see this tile, enter the email address associated with their Blackbaud ID account on the _Value_ line, separated by commas.  Leave it blank to allow everyone accessing the system to be able to see it.  
7. Open the _Initialize variable - TileName_ step.  This is where you can relabel the title of the tile seen when viewing it. 
8. _Don't touch anything else before the Switch Statement_. These steps contain all the needed CSS and Coding needed to render your tile.  In most scenarios, even when you're creating your own Add-In, you should not need to touch these.  
9. Open the _Switch - Which Function_ step, the _Action_ function underneath.  There may be one or more Scopes containing the steps. This contains the core of what the flow is doing to get information about to display in the Tile.  Review it for any exclamation marks indicating you have to reestablish a connection to  either Raiser's Edge NXT and/or 3rd party connectors. 
10. Save your flow. (But don't exit it yet)  
11. Scroll all the way back to the top of the flow, open the _When a HTTP request is received_ step, and copy the _HTTP GET URL_.  You should see a copy icon (what looks like two pages on top of each other).  Clicking on that will save the entire address to your clipboard.  You'll need this in a moment. 
12. Go back to the application you created in your SKY Developer Account earlier. 
13. Under the Add-ins tile, click the _Add_ button. 
14. Under the _Add-in name_ field, put in a description that makes sense to you.  It can be the same thing you put in the _TileName_ step above, but doesn't have to be. 
15. Under the _Add-in URL_, paste in the Web Address you copied from the _When a HTTP request is received_ step prior. 
16.  Review documentation for each tile to see which Extension Point this will use. An Extension point is basically where the tile will show.  For example, to add a tile to a Constituent Record, under _Extension point_, expand _Development Office_, and then _Constituents_, and select _Constituent Tile Dashboard_. 
17. Click _Save_. 

## <a name='Installation-AdaptiveCard'></a>Installation - Adaptive Card

[Adaptive Card](https://adaptivecards.io/) based flows are a bit more streamlined than the All In One scenarios as more of the heavy lifting is done behind the scenes.  Always check the instructions included in the Flow and/or associated Readme for additional information. 

1. Download the zip file located in the appropriate directory. (These are versioned where "X" is the version number.) Do _not_ unzip the file (it should stay as one file).  
2. Review the instructions at https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/basics/import-flows for Importing flows into your Power Automate account. Stop before the "Next Steps" section. 
3. Edit the flow if it doesn't already take you to the editor. 
4. Open up the area that starts with "README - ACTION REQUIRED" to review that information and take associated steps.  Not doing this will cause your application to immediately terminate when it tries to run. 
5. Open the _Validate a user identity token_ step and replace "Application ID" with your Application ID. 
6. Open _Compose - Authorized Users_ (if present) to determine which users can view the content.  
7. Save your flow. (But don't exit it yet)  
8. Scroll all the way back to the top of the flow, open the _When a HTTP request is received_ step, and copy the _HTTP POST URL_.  You should see a copy icon (what looks like two pages on top of each other).  Clicking on that will save the entire address to your clipboard.  You'll need this in a moment. 
9.  In order to setup an Adaptive Card to be used, a bit complex URL will have to be constructed.  You can [find the full details here](https://developer.blackbaud.com/skyapi/docs/addins/get-started/adaptive-card-addins#use-the-adaptive-card-host-spa). A shortcut has been created that will take the needed information and send you an email with the full complex URL.  [See this community post](https://community.blackbaud.com/forums/viewtopic/586/65850) on how to use the SKY Add-in URL Builder. 
10. Go back to the application you created in your SKY Developer Account earlier. 
11. Under the Add-ins tile, click the _Add_ button. 
12. Under the _Add-in name_ field, put in a description that makes sense to you.  It can be the same thing you put in the _TileName_ step above, but doesn't have to be. 
13. Under the _Add-in URL_, paste in the Web Address you created from the instructions above. 
14.  Review documentation for each tile to see which Extension Point this will use. An Extension point is basically where the tile will show.  For example, to add a tile to a Constituent Record, under _Extension point_, expand _Development Office_, and then _Constituents_, and select _Constituent Tile Dashboard_. 
15. Click _Save_.    



## <a name='Activation'></a>Activation 
The final step to enable your new SKY Add-in Tile is to connect your new SKY Developer application to your Blackbaud environment. From the [Blackbaud Marketplace Manage page](https://app.blackbaud.com/marketplace/manage), you'll connect your application.

> If you have added the SKY Add-In to an existing Application that's already connected, you need not go through these steps. 

> If you do not see the Connect app button, you are not an environment admin for your organization. You'll need to either become an environment admin or have your environment admin connect your application for you. For more assistance, see the [Permissions to connect applications](https://webfiles.blackbaud.com/files/support/helpfiles/marketplace/content/contactadmin.html) help.

1. From the [Manage](https://app.blackbaud.com/marketplace/manage) page, select **Connect app**.
2. Paste in the Application ID from application details page on the SKY Developer website.
Select **Connect**. You should now see your application on the Manage page.
3.  Go to your Raiser's Edge NXT system, open up a Constituent Record, and scroll all the way down to the bottom and you should see your new tile there.  New Add-Ins typically are added at the bottom of the page, but you can drag this tile to the top if needed.  
4. If all works well, congrats, you've created a Custom Tile.  There are a number of steps, but you have not had to deal with the underlying JavaScript code needed to have it display in your system. 
