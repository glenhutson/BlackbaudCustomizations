
# Page SKY Add-Ins
Examples here may include the use of (Full) Page add-ins.  This goes into a high-level overview before diving into those.

<!-- vscode-markdown-toc -->
* [SKY Add-Ins and "All In One" Flows](#SKYAdd-InsandAllInOneFlows)
* [The Page Host SPA - Basics](#ThePageHostSPA-Basics)
* [Linking to a Page Add-in](#LinkingtoaPageAdd-in)
* [Installation](#Installation)
	* [Prerequisites](#Prerequisites)
	* [Installation - Main Add-In](#Installation-MainAdd-In)
	* [Installation - Link](#Installation-Link)
* [A note about authorization / validation](#Anoteaboutauthorizationvalidation)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=false
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='SKYAdd-InsandAllInOneFlows'></a>SKY Add-Ins and "All In One" Flows
If you have not done so already, please reivew the overall concept of [SKY Add-Ins and "All In One" Flows](https://github.com/glenhutson/BlackbaudCustomizations/tree/main/All-In-One-SKYAddins%2BPowerAutomate/Simple). That disucssion focuses on a Tile on an existing native page. 

## <a name='ThePageHostSPA-Basics'></a>The Page Host SPA - Basics
Once understanding the concepts of a Tile SKY Add-In, the concept of a [Page Add-in](https://developer.blackbaud.com/skyapi/docs/addins/get-started/page-addins) is very similar.  Note that the difference between this and a modal is that with a page add-in, you continue to see the navigation / "omnibar" so that the add-in looks more like the rest of the system. Like a tile, it runs independantly from the host system (Raiser's Edge NXT, Financial Edge NXT, Church Management), but receives data from that host system in order to run. 

## <a name='LinkingtoaPageAdd-in'></a>Linking to a Page Add-in
The link to the [Page Add-in details](https://developer.blackbaud.com/skyapi/docs/addins/get-started/page-addins) includes discussion on how to navigate to these Page Add-ins.  In most cases, this includes creating a companion/second Add-in to surface a button on a record page or a link on the Home page.  

## <a name='Installation'></a>Installation 

### <a name='Prerequisites'></a>Prerequisites
The Pre-Requisites for installing these SKY Add-Ins are the same as for the [Tile Add-Ins](https://github.com/glenhutson/BlackbaudCustomizations/blob/main/All-In-One-SKYAddins+PowerAutomate/Simple/README.md#prerequisites).  Note that if you already have an application setup for one or more SKY Add-Ins already, you can use that _same_ Application for additional Add-Ins.  It really depends on administrative preferences.  If you are creating a separate / first Application follow those setps listed and stop at step 5. 

### <a name='Installation-MainAdd-In'></a>Installation - Main Add-In
1. Download the zip file located in the appropriate repository (These are versioned where "X" is the version number.) Do _not_ unzip the file (it should stay as one file).  
2. Review the instructions at https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/basics/import-flows for Importing flows into your Power Automate account. Stop before the "Next Steps" section. 
3. Edit the flow if it doesn't already take you to the editor. 
4. Open up the area that starts with "README - ACTION REQUIRED" to review that information and take associated steps.  Not doing this will cause your application to immediatley terminate when it tries to run. 
5. Open the _Initilize variable - ApplicationID_ step and replace the _Value_ there with the Application ID you registered earlier.  This is an important step in making sure that this flow is only being run from within your environment. 
6. Open the _Initialize variable - AuthorizedUsers_ step. If you want to allow only select people to see this page, enter the email address associated with their Blackbaud ID account on the _Value_ line, separated by commas.  Leave it blank to allow everyone accessing the system to be able to see it.  **READ THE NOTE BELOW ABOUT HOW AUTHORIZATION WORKS IN THIS SCENARIO.** 
7. Open the _Initialize variable - TileName_ step.  In a Page SKY Add-in, this becomes the name seen in your browser tab. 
8. _Don't touch anything else before the Switch Statement_. These steps contain all the needed CSS and Coding needed to render your page.  In most scenarios, even when you're creating your own Add-In, you should not need to touch these.  
9. Open the _Switch - Which Function_ step and the _Action_ function underneath. This contains the core of what the flow is doing and may be placed in one or more Scopes.  Review it for any exclamation marks indicating you have to reestablish a connection to the Blackbaud system or any 3rd party connector. 
10. Save your flow. (But don't exit it yet)  
11. Scroll all the way back to the top of the flow, open the _When a HTTP request is received_ step, and copy the _HTTP GET URL_.  You should see a copy icon (what looks like two pages on top of each other).  Clicking on that will save the entire address to your clipboard.  You'll need this in a moment. 
12. Go back to the application you created in your SKY Developer Account earlier. 
13. Under the Add-ins tile, click the _Add_ button. 
14. Unlike Tiles, the name you put here is very important. This is how you're going to reference the Page Add-In when creating the link to it.  Make it as short as possible while still understanding the purpose.  Use a "-" for a space.  For example, if the name of the page is _My Widget_, put "my-widget" as the Add-In Name.
15. Under the _Add-in URL_, paste in the Web Address you copied from the _When a HTTP request is received_ step prior. **Note** See Instructions for the specific Page add-ins as those may require adding an additional piece to that URL. 
16.  Under _Extension point_, expand _Navigation_ and select _Page (Preview)_. 
17. Click _Save_, but don't leave the Application page yet. 

### <a name='Installation-Link'></a>Installation - Link
These steps will create the link to your Page Add-In
1. In the Application screen from above, under Add-ins, selcect "Add" (again). 
2. Here, the _Add-in name_ won't matter as much, but it is suggested that it's named similar to the main Add-in.  If the main add-in is "My Widget", then name this one "My Widget - Button" (or "My Widget - Link"). 
3. The Add-in URL is going to be a very particular one in order to make sure it calls the right page.  The URL takes the basic structure of: 
    ```
    https://app.blackbaud.com/addin-page-host-button?svcid=[SERVICE ID]&appId=[APP ID]&pageName=[Add-in Name created in last section]&title=[How you want the link/button labeled]

    ```
   The title can't have any spaces or odd characters in it, so you have to encode it first.  "My Widget (Custom)" becomes "My%20Widget%20%28Custom%29".  https://www.urlencoder.org/ is a site where you can easily encode your title if needed. 

   What this means is that if you are creating a button/link for RENXT (the Service ID), in Application ID 4i983aap-524r-5214-as3a-w82acyy5z94w (no, that's not a real one, use the one created for your SKY Add-In), you labled the main Add-in "my-widget" and wanted to title the button/link label "My Widget (Custom), the corresponding URL will be

    ```
    https://app.blackbaud.com/addin-page-host-button?svcid=renxt&appId=4i983aap-524r-5214-as3a-w82acyy5z94w&pageName=my-widget&title=My%20Widget%20%28Custom%29
    ```
4. For the Extension Point you have two options:
   * To have it show up as a link under the "Tasks" area in the Home Page of Raiser's Edge NXT, select _Development Office_ -> _Home Page_ -> _Development Office Home Action_.
   * To have it show up as a button on (for example), a Constituent Record, select _Development Office_ -> _Constituents_ -> _Constituent Page Action_ . 
5. Click _Save_. 

You should now see a link/button at the location indicated in the previous step pointing to the Page SKY Add-In you created. 

## <a name='Anoteaboutauthorizationvalidation'></a>A note about authorization / validation
Like the "All In One" Tile Add-Ins, these Page Add-ins also have a validation step to make sure the appropriate (or all) users accessing the system can get to these add-ins.  However, regardless of what you have in "Authorized Users", the links/buttons will appear to "all" users.  Validation will not happen until they click on that button/link.  If they're approved to access that Page SKY Add-in, then they'll be taken to it.  Otherwise, they'll see an "unauthorized" message. 
