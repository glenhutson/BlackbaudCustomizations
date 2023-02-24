# All-In-One Blackbaud CRM / Altru + Power Automate Tab 

<!-- vscode-markdown-toc -->
* [About this Guide](#AboutthisGuide)
* [Disclaimer](#Disclaimer)
* [Background](#Background)
* [What you need to know](#Whatyouneedtoknow)
	* [Behind the Scenes](#BehindtheScenes)
	* [Existing Shortcuts](#ExistingShortcuts)
* [IMPORTANT NOTE](#IMPORTANTNOTE)
* [The Basics](#TheBasics)
* [Prerequisites](#Prerequisites)
* [The 'Simple' Example](#TheSimpleExample)
	* [Installation](#Installation)
	* [Activation](#Activation)
* [Q&A](#QA)
* [Creating Your Own Custom Tab](#CreatingYourOwnCustomTab)
	* [Key Areas for Review / Update](#KeyAreasforReviewUpdate)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=false
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->
## <a name='AboutthisGuide'></a>About this Guide
This guide will walk you through the basics of adding Power Automate Facilitated content to Blackbaud CRM and Altru without the need of additional WebServers / SPAs.  This is meant for for mostly "view only" scenarios.  If you need more interaction, consider using Power Apps in addition to any Power Automate Flows. 

> This is considered an "advanced" activity and assumes you've already had experience working with Power Automate.

## <a name='Disclaimer'></a>Disclaimer
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## <a name='Background'></a>Background
Blackbaud CRM & Altru have a number of ways to extend functionality.  The most in-depth requires knowledge of the SDK and true "programming".  Simpler customizations can be done without needing as much coding.  This takes advantage of those options. 

## <a name='Whatyouneedtoknow'></a>What you need to know
The following are the basics needed when considering working with custom content involving Power Automate. 

### <a name='BehindtheScenes'></a>Behind the Scenes
Behind the scenes of various types of content add-ins such as tabs are what's called **_Single Page Applications_**, or "**SPAs**",  Don't let the name fool you as a lot more can be happening in regards to what's powering that SPA.  At the very basic setup, the SPA is a webpage that's embedded in Blackbaud CRM or Altru and can (optionally) have basic information (such as the context record ID) passed to it. This code also alllows for the exchange of basic information such as the _System Record ID_ of the record the tab. If you need more information about the record the tab is running on (such as the Primary Address Postcode of a Constituent), you'll have to call for that information. Because it's a webpage, it needs to be hosted somewhere on the Internet which adds an additional step/requirement. 

### <a name='ExistingShortcuts'></a>Existing Shortcuts
Even though the SPA is a webpage that needs to be hosted somewhere, there are already some shortcuts built in for the Power Platform that eliminate the need for you to have a dedicated SPA / webpage.  Both Power Apps and Power BI reports can be embedded directly into Blackbaud CRM (through a similar method explained below.)

What remains is if you're working with a scenario outside of those, namely wanting to simply show the results of a Power Automate flow within Blackbaud CRM or Altru.  This example demonstrates one possible option. 

## <a name='IMPORTANTNOTE'></a>IMPORTANT NOTE
 The following is an _unofficial_ example.  Workflows and code samples for Microsoft Power Platform are created by passionate individuals, some of whom may work for Blackbaud. These “community-sourced” customizations to your Blackbaud solutions are not covered under the Scope of Customer Support for Blackbaud Solutions. They are intended as examples to get you started in building your own workflows and applications and may not cover every scenario. Please direct questions related to community-sourced code to the [Blackbaud Community discussion](https://community.blackbaud.com/forums/viewcategory/586) forum, which is primarily for communicating with your peers, [or to one of these help options](https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/additional-help). While the Blackbaud Community is moderated and maintained by Blackbaud, this does not guarantee your topic will receive a reply from a Blackbaud staff member.  When posting to the forum, feel free to "@" the Author as well as including "All In One Example" in the subject line. Direct messages or emails to the Author may be redirected to the public forum. 

## <a name='TheBasics'></a>The Basics
This example does two things:
* Renders a basic SPA "on the fly" to kick off a Power Automate flow and return the results in an embedded tab. 
* Runs the core Flow Actions (the actual actions you're creating the content/tab to do).

This can all be done with a single Flow using multiple "switches", or an "if this then that".  The Flow is actually calling itself multiple times, each time invoking a different switch option.  In this example, the _only_ part of the switch you need to work with directly is the one running your specific Flow Actions. 

This example contains _basic_ SKY Styling. 

## <a name='Prerequisites'></a>Prerequisites
To successfully get this setup, you need to meet the following prerequisites before beginning.

* You have the ability to access the Page Designer and create new tabs in Blackbaud CRM or Altru. 
* You have experience in working with the Power Platform

## <a name='TheSimpleExample'></a>The 'Simple' Example 
The first  example (more complicated examples may be released later) adds a Custom Tab to your Constituent Records which displays the current weather and forecast for your constituent.  This shows an example of not only including BBCRM / Altru-specific actions, but also actions from other connectors (in this case [MSN Weather](https://docs.microsoft.com/en-us/connectors/msnweather/)). 

The example flow contains a number of steps/action for your informational purposes.  Though installation and setup instructions are below, make sure you review anything marked "README". 

### <a name='Installation'></a>Installation
1. Download the associated `BBCRM-Altru-AIO-Example-VX.zip` file located in this same repository (where "X" is the version number.) Do _not_ unzip the file (it should stay as one file).  
2. Review the instructions at https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/basics/import-flows for Importing flows into your Power Automate account. Stop before the "Next Steps" section. 
3. Edit the flow if it doesn't already take you to the editor. 
4. Open up the area that starts with "README - ACTION REQUIRED" to review that information and take associated steps.  Not doing this will cause your application to immediatley terminate when it tries to run. 
5. Open the _Initilize variable - BBCRMorAltru_ step and ensure it's setup for the correct system.  The _Value_ should say `crm` if you are using this for BBCRM or `alt` if you're using it for Altru.  
6. _Don't touch anything else before the Switch Statement_. These steps contain all the needed CSS and Coding needed to render your tile.  In most scenarios, even when you're creating your own Add-In, you should not need to touch these.  
7. Open the _Switch - Which Function_ step, the _Action_ function underneath, and then the _Scope - GetWeather_ step. This contains the core of what the flow is doing to get information about the Constituent and gather the weather information.  Review it for any exclamation marks indicating you have to reestablish a connection to the MSN Weather or SKY Add-ins Connector. 
8. Save your flow. (But don't exit it yet)  
9. Scroll all the way back to the top of the flow, open the _When a HTTP request is received_ step, and copy the _HTTP GET URL_.  You should see a copy icon (what looks like two pages on top of each other).  Clicking on that will save the entire address to your clipboard.  You'll need this in a moment. 



### <a name='Activation'></a>Activation 
The final step to enable your new Content Tab is to embedd it in Blackbaud CRM or Altru. These steps may need to go through specific organizational change management procedures depending on if this is Development, Staging, or Production. However, at this point, most of the heavy lifting has been done. 

1. From a Constituent Page, open the Page Designer
2. Click on **Edit Tabs**
3. Click **Add**
4. Enter the following options
   * _Caption_ - "Weather" (note your organization may have specific naming conventions, including those signifying custom objects)
   * _Visible_ - True
   * _LayoutMode_ - None
5. Click the 3 dots beside _Sections_
6. Click **Add**
7. Enter the following options under _Appearance_:
   * _Caption_ - "Weather"
   * _HideCaption_ - True
   * _Visible_ - True
   * _SectionType_ - CustomComponent
   * _SectionDisplayStyle_ - Block
8. Enter the following options under _Custom component_:
   * _CustomComponent_ - `Blackbaud.AppFx.Platform.UrlSectionClient.dll,Blackbaud.AppFx.Platform.UrlSectionClient.UrlSection` (no spaces, should be all one string)
   * _ContextType_ - PageContent
9. Click the 3 dots beside _Paramaters_:
   * Click **Add**
   * Beside ID, enter "URL"
   * Beside Value, paste in the Web Address you copied from the _When a HTTP request is received_ when editng the Flow, but _add to it at the end_ `&SystemRecordId=@@PAGECONTEXTRECORDID@@`.   THIS is the most important part. 
10. Click **OK** all the way through until you're back to the Constituent Page. 
11. Exit Page Designer. 
12. If you took the default location of the new tab, you'll have to scroll all the way to the right to see your new tab. 

## <a name='QA'></a>Q&A
1. I'm having issues, where do I go for help?
    * Post a message in the Blackbaud SKY Developer Microsoft Integrations forum at https://community.blackbaud.com/forums/viewcategory/586 .  If you're having an issue, others may have the same issue and it makes sure experiences and resolutions are being shared.  It will also allow others to chime in, potentially getting an answer sooner.  Any Direct Messages / Emails to the Author may be routed back to the public forum. As this is not an official Blackbaud Solution, it's not covered by Support or the Customer Success Team. 
2. What's with the Switch Statement?
    * With a switch statement, the flow can perform different actions depending on which path it's directed toward.  Generally speaking, the Simple Example Flow actually runs 2 times in order to display the Custom Tile. Each invokes a different switch case:
        * **Default:** The initial run when the Constituent Record is first loaded sets up all the behind the scenes details needed (The SPA) to display the final results of the flow. It then automatically runs itself again to kick off the Validate case. 
        * **Action:** This switch case is where your specific actions are located unique to your Custom Tile.  You will assemble the steps in this area similar to any other flow that you've created. 
    * Using this approach, you're not having to maintain a separate Webpage to host your custom tile and/or not having to maintain different flows. 
5. What's with the Scopes?
    * Long story short, Scopes are a way in Power Automate to further organize your actions.  They themselves don't do any actions, but rather group actions together.  If you don't want or need to work on an area of a flow, you can put items in a scope, close the scope, and have them hidden away.  
    * The benefit in this scenario is that you can copy entire Scopes from one Flow to another.  You can first create one flow to construct/test (perhaps using a pre-defined System Record ID).  By putting all of your actions into a scope, then you can copy/paste that Scope from your test flow to the actual flow instead of each of the individual steps.  Variables can _not_ be initalized inside a scope, however. 

## <a name='CreatingYourOwnCustomTab'></a>Creating Your Own Custom Tab
In the example provided, the core part of the steps unique to the Custom Tab are in the _Action_ switch in the flow.  You would replace the steps there with those that put together the information you want to show in the Tab.  

### <a name='KeyAreasforReviewUpdate'></a>Key Areas for Review / Update
This would be the areas that you would need to review and update as you create your own tab: 
1. When a HTTP request is received
    * Whenever you copy the example flow as the basis of your new flow, the corresponding URL will be different.  This will be the address you'll need to copy and paste into the Blackbaud CRM / Altru tab configuration. 
2. Additional Variables
    * Variables can not be initialized inside a Switch.  If you need to initialize any new variables as part of your flow, you can do so anywhere before the _Compose - STOP HERE - README_ action.     
3. Switch - WhichFunction -> Default Case
    * Do _not_ alter this unless directed to do so for troubleshooting. 
4. Switch - WhichFunction -> Action Case
    * Put all of your tile-specific actions here.  
    * The variable _SystemRecordId_ has already been initialized and defined for you. 
5. The _Response_ Variable
    * The _Response_ Variable is used to hold the results of your flow to show in your tile. 
    * You need to use a _Set Variable_ step, specifying that variable, and include any outputs of your custom steps that you want to appear in the tab. 
    * If you have multiple possible outcomes of your actions, such as in the example flow in which there may or may not be a post code on file, you will need to have multiple instances of the _Set Variable_ step, one for each outcome.  It's recommended that you rename the step (but not the variable) for clarity on which is which. 
    * To format your tab, either directly in the Response Variable or in the outputs included in it, HTML is required.  Some CSS styles are alerady included in the flow to mimick (but not exact) SKY UI styling.  You can use HTML like the following to put in subsection headings: 
```
    <div class="sky-subsection-heading">A Heading</div>

```


