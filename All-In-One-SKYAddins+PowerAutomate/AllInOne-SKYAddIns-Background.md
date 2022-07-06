# All-In-One SKY Add-ins
<!-- vscode-markdown-toc -->
* [Background](#Background)
* [What you need to know](#Whatyouneedtoknow)
	* [Behind the Scenes](#BehindtheScenes)
	* [Existing Shortcuts](#ExistingShortcuts)
* [The Concept of an All-In-One](#TheConceptofanAll-In-One)
* [IMPORTANT NOTE](#IMPORTANTNOTE)
* [Q&A](#QA)
* [Creating Your Own Add-In](#CreatingYourOwnAdd-In)
	* [Key Areas for Review / Update](#KeyAreasforReviewUpdate)
* [A Note About Permissions](#ANoteAboutPermissions)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=false
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Background'></a>Background
[SKY Add-ins](https://developer.blackbaud.com/skyapi/docs/addins) allow developers to extend functionality of solutions such as Raiser's Edge NXT, Church Management, and Financial Edge NXT.  This can take on a variety of formats such as:
* Custom Tiles
* Fly-outs
* Modals (pop-ups)
* Buttons
* Full Pages

Full technical details on SKY Add-Ins can be found at https://developer.blackbaud.com/skyapi/docs/addins .  

## <a name='Whatyouneedtoknow'></a>What you need to know
The following are the basics of SKY Add-ins when considering working with one involving Power Automate. For simplicity, Raiser's Edge NXT / "RENXT" will be specifically mentioned, but pieces of this of this may also apply to Financial Edge NXT, Church Management, and Blackbaud's Education Management Solution.  

### <a name='BehindtheScenes'></a>Behind the Scenes
Behind the scenes of various types of SKY Add-ins such as Tiles are what's called **_Single Page Applications_**, or "**SPAs**",  Don't let the name fool you as a lot more can be happening in regards to what's powering that SPA.  At the very basic setup, the SPA is a webpage that contains needed code (JavaScript) to allow it to run within RENXT. This code also alllows for the exchange of basic information such as the _System Record ID_ of the record the Tile is on as well as other data such as the _Enviroment_ and the identity of the logged in user.  The identity of the logged in user is key to help specify who can actually see the Tile / SPA. If you need more information about the record the tile is running on (such as the Primary Address Postcode of a Constituent), you'll have to call for that information. Because it's a webpage, it needs to be hosted somewhere on the Internet which adds an additional step/requirement. 

### <a name='ExistingShortcuts'></a>Existing Shortcuts
Even though the SPA is a webpage that needs to be hosted somewhere, there are already some shortcuts built in for the Power Platform that eliminate the need for you to have a dedicated SPA / webpage:
* If your cutomization is utilizing a _Power App_, then you can use the pre-made [Power Apps Host SPA](https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/power-apps/power-app-addins) directly without needing to have that additional SPA / webpage. 
* If your customization is utilizing _Power BI_, then you can use the pre-made [Power BI Host SPA](https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/power-bi/power-bi-addins) . 
* If your customization is a button that is meant to trigger a flow to perform an action, then you can use the pre-made [Web Request Action SPA ](https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/power-automate/invoke-a-flow). 

What remains is if you're working with a scenario outside of those, namely wanting to simply show the results of a Power Automate flow within a  SKY Add-in.  These examples illustrate one possible approach. 

## <a name='TheConceptofanAll-In-One'></a>The Concept of an All-In-One
All-One-Flows basically do three things:
* Renders a basic SPA "on the fly" to kick off a Power Automate flow and return the results in a SKY Add-in Tile. 
* Provides a validation step to ensure the right people are accessing the Add-in.
* Runs the core Flow Actions (the actual actions you're creating the Tile to do).

This can all be done with a single Flow using multiple "switches", or an "if this then that".  The Flow is actually calling itself multiple times, each time invoking a different switch option.  In this example, the _only_ part of the switch you need to work with directly is the one running your specific Flow Actions. 

These examples contain _basic_ SKY Styling so that your custom Tile looks similar to the rest of the solution.  It does _not_ include functionality such as moving/resizing columns, tile-specific search box, pagination, or other similar features. 

## <a name='IMPORTANTNOTE'></a>IMPORTANT NOTE
The "Existing Shortcuts" mentioned above are from Blackbaud.  This All In One Technique is an _unofficial_ approach.  Workflows and code samples for Microsoft Power Platform are created by passionate individuals, some of whom may work for Blackbaud. These “community-sourced” customizations to your Blackbaud solutions are not covered under the Scope of Customer Support for Blackbaud Solutions. They are intended as examples to get you started in building your own workflows and applications and may not cover every scenario. Please direct questions related to community-sourced code to the [Blackbaud Community discussion](https://community.blackbaud.com/forums/viewcategory/586) forum, which is primarily for communicating with your peers, [or to one of these help options](https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/additional-help). While the Blackbaud Community is moderated and maintained by Blackbaud, this does not guarantee your topic will receive a reply from a Blackbaud staff member.  When posting to the forum, feel free to "@" the Author as well as including the specific flow in the subject line. Direct messages or emails to the Author may be redirected to the public forum. 

## <a name='QA'></a>Q&A
1. I'm having issues, where do I go for help?
    * Post a message in the Blackbaud SKY Developer Microsoft Integrations forum at https://community.blackbaud.com/forums/viewcategory/586 .  If you're having an issue, others may have the same issue and it makes sure experiences and resolutions are being shared.  It will also allow others to chime in, potentially getting an answer sooner.  Any Direct Messages / Emails to the Author may be routed back to the public forum. As this is not an official Blackbaud Solution, it's not covered by Support or the Customer Success Team. 
2. What's with the Switch Statement?
    * With a switch statement, the flow can perform different actions depending on which path it's directed toward.  Generally speaking, the Simple Example Flow actually runs 3 times in order to display the Custom Tile. Each invokes a different switch case:
        * **Default:** The initial run when the Constituent Record is first loaded sets up all the behind the scenes details needed (The SPA) to display the final results of the flow. It then automatically runs itself again to kick off the Validate case. 
        * **Validate:** This case makes sure it's running in your designated environment/system as well as optionally checking the _who_ is loading the Constituent page can see the tile.  If all those checks pass, the flow then automatically runs a third time to kick off the Action case. 
        * **Action:** This switch case is where your specific actions are located unique to your Custom Tile.  You will assemble the steps in this area similar to any other flow that you've created. 
    * Using this approach, you're not having to maintain a separate Webpage to host your custom tile and/or not having to maintain different flows. 
3. Could the Validate and Action cases to be combined to simplify things?
    * In theory yes.  Separating it out like this allows the tile and the "waiting" graphic to show sooner as the Action case runs.  Otherwise, if the Action case has a lot of steps, the end user won't even see the tile at all until everything completes. 
4. Do I have to create a separate Application for each Custom Tile?
    * No, you do not.  You can have multiple SKY Add-Ins running under the same Application.  It's a balance between simplicity and how similar/dissimilar the various Add-Ins are to each other. 
5. <a name='scopes'></a>What's with the Scopes?
    * Long story short, Scopes are a way in Power Automate to further organize your actions.  They themselves don't do any actions, but rather group actions together.  If you don't want or need to work on an area of a flow, you can put items in a scope, close the scope, and have them hidden away.  
    * The benefit in this scenario is that you can copy entire Scopes from one Flow to another.  The All In One flow basically _has_ to run from within RENXT.  This isn't practical when you're initially constructing your custom-specific actions.  You can use one flow to construct/test (perhaps using a pre-defined System Record ID).  By putting all of your actions into a scope, then you can copy/paste that Scope from your test flow to the actual flow instead of each of the individual steps.  Variables can _not_ be initalized inside a scope, however. 


## <a name='CreatingYourOwnAdd-In'></a>Creating Your Own Add-In
> This assumes you're already familiar with creating Raiser's Edge NXT based Flows in Power Automate.  If not, refer to the getting started link at the beginning of this document. 

[The Weather Tile](https://github.com/glenhutson/BlackbaudCustomizations/tree/main/All-In-One-SKYAddins%2BPowerAutomate/Simple) is an example of a straight-forward All-In-One you can use as a starting point.  You can certainly start with any of the other examples, but those may have additional pieces unique to their scenarios that may not apply to others.  Note that the examples here are vaious types of Add-Ins (such as Full Page Add-Ins and/or including Fly-outs). 

In the examples provided, the core part of the steps unique to the Custom Tile are in the _Action_ switch in the flow.  You would replace the steps there with those that put together the information you want to show in the Tile.  

### <a name='KeyAreasforReviewUpdate'></a>Key Areas for Review / Update
This would be the areas that you would need to review and update as you create your own Add-In: 
1. When a HTTP request is received
    * Whenever you copy the example flow as the basis of your new flow, the corresponding URL will be different.  This will be the address you'll need to copy and paste into the SKY Add-In configuration area of your Application in your Developer Account. 
2. Initialize variable - ApplicationID
    * As mentioned above, you can have multiple SKY Add-Ins / Custom Tiles configured under the same Applicaiton.  However, if you put it under another Application, you will need to update that Application ID here. 
3. Initialize Variable - AuthorizedUsers
    * You may want to consider limiting access to just you and perhaps a few others as you're initially testing the Tile.  Once you're happy with the results, then you can make the value blank (but _don't_ delete the variable) to open it up for everyone. 
4. TileName
    * This will be the name of the tile shown to users. 
5. Additional Variables
    * Variables can not be initialized inside a Switch.  If you need to initialize any new variables as part of your flow, you can do so anywhere before the _Compose - STOP HERE - README_ action.     
6. Switch - WhichFunction ->  Validate and Default Cases
    * Do _not_ alter these unless directed to do so for troubleshooting. 
7. Switch - WhichFunction -> Action Case
    * Put all of your tile-specific actions here.  
    * The variable _SystemRecordId_ has already been initialized and defined for you. Simply use this in the _Constituent ID_ line of a _Get a constituent_ step to gather any needed information. 
    * When working with tiles on Gift, Event, and other records, you'd still use the _SystemRecordId_ variable in the corresponding "Get" statements. 
8. The _Response_ Variable
    * The _Response_ Variable is used to hold the results of your flow to show in your tile. 
    * You need to use a _Set Variable_ step, specifying that variable, and include any outputs of your custom steps that you want to appear in the tile. 
    * If you have multiple possible outcomes of your actions, such as in the example flow in which there may or may not be a post code on file, you will need to have multiple instances of the _Set Variable_ step, one for each outcome.  It's recommended that you rename the step (but not the variable) for clarity on which is which. 
    * To format your tile, either directly in the Response Variable or in the outputs included in it, HTML is required.  Some CSS styles are alerady included in the flow to mimick (but not exact) the styling of the rest of RENXT.  You can use HTML like the following to put in subsection headings: 
```
    <div class="sky-subsection-heading">A Heading</div>

```
9. Development tip
    * For the most part, the All-In One (AIO) flow needs to run from within Raiser's Edge NXT.  
    * While you're putting together your custom actions, create them in their own flow.  You can initialize the required _SystemRecordId_ variable at the top and pre-fill it with a test record.  The results will just show in the Flow, but this will give you an easier ability to test while you work.  
    * Once you have the steps completed, copy them to the AIO flow.  See discussion about [scopes](#scopes) above and an article first introducing the feature at https://powerautomate.microsoft.com/en-us/blog/introducing-clipboard-in-flow-designer-and-three-new-user-experience-updates/

## <a name='ANoteAboutPermissions'></a>A Note About Permissions
* The only permissions available as part of this setup is whether an RENXT user can see the Tile or not. 
* The _Initialize variable - AuthorizedUsers_  step allows you to enter email addresses associated with the Blacbaud IDs of the end users you want to see the tile.  Leaving it blank will allow _every one_ of your RENXT users that has access to the records with the tile to see the tile. 
* In Power Automate, when you make a connection to Raiser's Edge NXT, you sign in with a set of RENXT credentials.  All actions/viewing of data in RENXT via Power Automate is based on this login. 
* This means if that an end-user is given permission to see this tile, they'll be viewing data/performing actions in the context of the Tile based on the user credentials of the above user _regardless_ if that end user has a more restrictive set of permissions.  
* If any Add-Ins allow a user to click through to a native record, that's when any individual security settings will be applied.  
