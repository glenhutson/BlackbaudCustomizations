# SKY Page Add-ins

<!-- vscode-markdown-toc -->
* [Background](#Background)
	* [Setting Up a SKY Page Add-in](#SettingUpaSKYPageAdd-in)
* [Adaptive Cards](#AdaptiveCards)
	* [Registering Adaptive Cards](#RegisteringAdaptiveCards)
* [BBCRM Bonus Feature: Embedded Page SKY Add-ins](#BBCRMBonusFeature:EmbeddedPageSKYAdd-ins)
	* [The Benefit](#TheBenefit)
	* [How to embed a Page Add-in into BBCRM](#HowtoembedaPageAdd-inintoBBCRM)
* [Power Platform and Importing Flows](#PowerPlatformandImportingFlows)
* [Altru Alternative](#AltruAlternative)
* [Support](#Support)
* [Disclaimer](#Disclaimer)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=false
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Background'></a>Background
[SKY Add-ins](https://developer.blackbaud.com/skyapi/docs/addins) have previously been associated with the likes of Raiser's Edge NXT and Financial Edge NXT.  

However, Altru customers and BBCRM customers _who are in Blackbaud Cloud Operations with BBID enabled_ can utilize [Page add-ins](https://developer.blackbaud.com/skyapi/docs/addins/get-started/page-addins). 

Page Add-ins, like the other SKY Add-ins, do not require any SDK specific knowledge.  Developers can use familiar web development technologies such as HTML, CSS, and JavaScript to augment the solution with new functionality.

In a nutshell, Page add-ins are independent full pages that technically live outside the host application. They are technically connected to the environment. In the case in which someone accesses a link to that Page add-in, they still have to first authenticate through the host environment if they haven't already done so. They are connected to the host environment via a Developer App, similar to other common add-in types. The "frame" of the page runs on Blackbaud servers, though the content is powered externally (either through self-created web app or the outputs of tools such as Power Automate) and can use both Blackbaud-based and non-Blackbaud-based data.  Unlike items such as tile add-ins, they do _not_ get any contextual information such as recordId automatically. When one creates a link to that page, they can include as a URL parameter key information that the add-in will need, such as recordId.  

Page add-ins utilize SKY UX which means they can include the likes of their own fly-outs, modals, etc.  They can also utilize the same low-code options available such as Power Apps and Adaptive Cards. 

If you're new to working with SKY Applications, etc, you can find a getting started at https://developer.blackbaud.com/skyapi/docs/getting-started . 

To use many of these examples, you need to have already created a SKY Developer App (see https://developer.blackbaud.com/skyapi/docs/getting-started#create-an-application) and installed it in your environment.  _Ensure the Scopes for the application are set to at least Read/Write for BBCRM._  Keep the Application page open in a tab as you'll need access to it. In some scenarios, you will be asked for your Application ID, you can find this in the upper-left of your SKY Developer App screen. 

![SKY Developer App Application ID](./SKYDeveloperAppApplicationID.png)

### <a name='SettingUpaSKYPageAdd-in'></a>Setting Up a SKY Page Add-in
Page Add-ins are established under the Add-in area of a SKY Developer App by Giving it a name, the Add-in URL (the external source that's actually powering the content/features), and select _Navigation_ => _Page_ under the Extension Point. 

![Setting up a Page add-in](./ConfigurePageAddIn.png)

Want to kick the tires a bit on what's available via a SKY Page Add-in?  Create an app and add `https://glenhutson.github.io/BlackbaudCustomizations/SKYAddinHelloWorld/helloworldpage.html` as a Page add-in.  This sample page contains many of the elements available to SKY Page add-ins. 

The resulting direct link for the Page add-in is

```
https://app.blackbaud.com/pages/applications/SKYAPPID/pages/PAGENAME?envid=ENVID&svcid=SVCID
```
Where: 
* "SKYAPPID" = The Application ID listed at the top of your App's configuration Page. 
* "ENVID" =  Your Environment ID
* "PAGENAME" = The name you gave to the Add-in with "%20" Replacing any spaces
* "SVCID" = the solution you're connecting to.

The svcid for Blackbaud CRM is _ecrm_ whereas the svcid for Altru is _altru_. 

If you want to include some context, such as a recordId, you'd add `&context_recordId=` to the end.  Example resulting URL will look like: 

```
https://app.blackbaud.com/pages/applications/4d540b94-1854-45fa-b1d6-c2039d94b681/pages/PAGENAME?envid=p-12345678&svcid=ecrm&context_recordId=f9ca8058-4956-9b99-aa5e-e1bd4f5b99cc 

```
In the example URL above, the recordId in this case may be an Individual.  As the page is loaded, it can use that recordId + SKY API to retrieve information about that individual and display it. 

## <a name='AdaptiveCards'></a>Adaptive Cards
Some examples use [Adaptive Cards](https://developer.blackbaud.com/skyapi/docs/addins/get-started/adaptive-card-addins) which is a platform-agnostic option of creating content and interactive elements without needing to deal with HTML or other app-creation methods.  Though it is JSON based, the free designer gives a drag-and-droppable interface for creating the content. Authoring can also be done within the "Card" design feature of Power Apps, though you will need to make sure you're copying only the "body" part into the corresponding flow. Adaptive Cards are often used in Outlook and Teams.  SKY Add-ins have a built-in framework for delivering Adaptive Card content.  Though it doesn't have as many features as Power Apps, it does not have any licensing requirements for authors or viewers/users. Using Adaptive Cards also makes for a simpler process than the "All In One" version previously published. 

### <a name='RegisteringAdaptiveCards'></a>Registering Adaptive Cards
[See these instructions](https://developer.blackbaud.com/skyapi/docs/addins/get-started/adaptive-card-addins#use-the-adaptive-card-host-spa) for creating the appropriate URL for invoking the Adaptive Card Features.  You will use the resulting URL as the "Add-in URL" in the above example.  For _Add-in type_ use "tile".  There isn't a Page specific option, but this will work the same way.  Your resulting URL will begin with:
```
https://app.blackbaud.com/addin-adaptivecard-host/tile?cardServiceUrl=
```
## <a name='BBCRMBonusFeature:EmbeddedPageSKYAdd-ins'></a>BBCRM Bonus Feature: Embedded Page SKY Add-ins
BBCRM Customers can use native Page Designer functions to embed the SKY Page add-ins directly into the BBCRM shell.  SKY Page add-ins are mobile responsive by nature, so they can also be added as a tab on record pages.  This hybrid approach allows one to take advantage of many of the SKY Add-in features in the native BBCRM framework. In some cases, using the [Power BI Host SPA ](https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/power-bi/power-bi-addins) on a Page Add-In embedded on a BBCRM page may cause better results in working with those reports. 

> Note this is only applicable to BBCRM instances in Blackbaud Cloud Operations with BBID enabled and does not apply to Altru customers. 

### <a name='TheBenefit'></a>The Benefit
This  approach enables the potential delegation of building customizations to developers who may not be familiar with the SDK.  As SKY Add-ins have a number of built in hooks for the Power Platform, this means even low-coders / Business Analysts / etc can address some customization and automation needs.  This can help free up time for the pro-coders to focus on those elements that do require SDK knowledge.  Since in many cases access to even the Page Designer isn't needed until final deployment, the development lifecycle can also be shorter. 

> Heads up: though this embedding method can help approximate many use cases of SKY Add-ins within BBCRM, it's still an embedded page.  This means any fly-outs, modals, etc will be bound within the context of the embedded piece.  For example, fly-outs triggered from a tab will only fly-out within the tab, not the full BBCRM page.  If using any of our pre-configured Host SPAs, you will always be configuring it as if it was a tile.  

### <a name='HowtoembedaPageAdd-inintoBBCRM'></a>How to embed a Page Add-in into BBCRM

Once you've created your Page Add-in, you can embed it into a page/tab/section similar to embedding any other web page: 

1. Go to the page where you wish to embed the Add-In (existing or newly created) and activate Page Designer. 
2. Click On _Edit Tabs_
3. Click on _Add_ (or edit an existing)
4. Give it a caption, and set to visible.
5. Click "..." next to _Sections_
6. Add or edit an existing section with the following settings: 
   * SectionType = Web Page
   * SectionDisplayStyle = Block
   * Collapsible = False (usually)
   * Collapsed = False
   * HideRefresh = False
   * Context Type = PageContext (only if you need to pass it the likes of the recordId)
   * URL:
     * The URL will be constructed as per [Setting Up a Page SKY Add-in](#SettingUpaPageSKYAdd-in). However, you will _add_ the URL parameter `&addin=1`.  If this is going to be embedded on a record page and you wish to pass it the record ID, you will need to make sure `&context_recordId=@@PAGECONTEXTRECORDID@@` is at the end. This will give it a structure similar to: 

     ``` 
     https://app.blackbaud.com/pages/applications/SKYAPPID/pages/PAGENAME?envid=ENVID&svcid=ecrm&addin=1&context_recordId=@@PAGECONTEXTRECORDID@@ 
     ```
    * IsScrollable = True
    * AllowNavigation = True
    * AllowWebBrowserDrop = True
    * ContextMenuEnabled = True
    * See Also https://kb.blackbaud.com/knowledgebase/articles/Article/107347 

7. Click / OK / Save until you are back to the BBCRM page.  

![Embedding The Page](./BBCRM-SKYEmbedExample.png)

## <a name='PowerPlatformandImportingFlows'></a>Power Platform and Importing Flows
Unless otherwise indicated, all these examples use the Power Platform to do the heavy lifting.  The .zip files included along side this README need to be first imported into the system.  See https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform for an introduction to Blackbaud's Approach to the Power Platform and https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/basics/import-flows for instructions on importing Power Automate Flows.  

## <a name='AltruAlternative'></a>Altru Alternative
See the [SKYMenu example](./BBCRM-Altru-SKYMenu/) of a way to embed a "menu" of SKY Page Add-ins in both Altru and BBCRM.  

## <a name='Support'></a>Support
As with all examples in this repository, support is given exclusively via the Microsoft Power Platform discussions at https://community.blackbaud.com/forums/viewcategory/586 (URL accurate as of the time of this writing).  This can be done either via replying to the original post dicussing a specific example or via a new discussion and "tagging" the author.  Direct messages to the author will be redirected back to the main discussion area. 

## <a name='Disclaimer'></a>Disclaimer
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.