# Luminate SKY Addins

Surface key Luminate Online Data in Raiser's Edge NXT via SKY Add-in Tiles. 

## Description

This project is an example of how you can surface information from Luminate Online in Raiser's Edge NXT via SKY Add-ins and facilitated by Power Automate. 

## NOTE
This version should be considered for testing/review as we await an update from Microsoft that will allow us to include an extra level of validation. 

## Getting Started

### Dependencies

* This assumes that Luminate Online and Raiser's Edge NXT is integrated in such a way as that, for Constituents, Raiser's Edge System Record ID = Luminate Online Member ID.  
* [Power Automate License](https://powerautomate.microsoft.com/) 
  * Only one license is needed, not one per Raiser's Edge NXT user.  
* [Blackbaud Developer's Account](https://developer.blackbaud.com/signup/) if you don't have one already. 
* Administrative Access to your Luminate Online Instance
* Your [LO API Key](https://webfiles.blackbaud.com/support/howto/coveo/luminate-online/subsystems/setup/concepts/admin_open_api_configuration_open_api_keys.html)
* (Optional) A Blank LO PageWrapper
* A "standard" (Not API) Luminate Online Admin User not associated with a specific staff member.  This will be the user that will be logging into the system on behalf of the SKY Add-ins. 
* Environment Admin Rights to your Raiser's Edge NXT Instance(s)
<BR>
<BR>
<BR>

### Installing

Due to the nature on how the Power Automate, Blackbaud Developer Account, Luminate Online, and Raiser's Edge NXT systems will be interacting in this, the initial setup may require visiting each area multiple times.  Ensure you have ongoing access to each of these areas or those that do are (proverbially) within arms reach.  After installation is complete, the admin access in each of these areas will only be needed for updates/adjustments.  

 

* In Power Automate
    1. Save the SKYAddin-LOConstituentStats_[MostRecentDate].zip and SKYAddin-TREventStats_[MostRecentDate].zip files to your local computer. 
    2. In the <em>My Flows</em> area of Power Automate, import each of those files. 
    3. Edit the SKYAddin-LOConstituentStats Flow
       * Under <em>When a HTTP request is received</em> click the stack of papers/the copy icon and paste that into a document or notepad for reference later, making sure to note this is for the LOConstituentStats Flow
       * Under <em>Initilize variable - Luminate URL</em> update the value to your Secure URL.  This may be either something similar to https://secureX.convio.net/shortname or your custom Luminate URL. 
       * Under <em>Initialize variable - Luminate APIKey</em> update the value to your Luminate Online API Key
       * Under <em>Initialize variable - Luminate User Login</em> and <em>Initialize variable - Luminate User Password</em>, update the values for the "standard" (Non API) Admin User created above. 
       * STOP HERE, DO NOT EDIT ANYTHING ELSE IN THIS FLOW
       * Save the flow
       * Ensure the flow is enabled / on
    4. Edit the SKYAddin-TREventStats Flow
       * Under <em>When a HTTP request is received</em> click the stack of papers/the copy icon and paste that into a document or notepad for reference later, making sure to note this is for the TREventStats Flow
       * Under <em>Initilize variable - LOAPIKey</em> update the value to your Luminate Online API Key
       * Under <em>Initilize variable - LOBaseURL</em> update the value to your Secure URL.  This may be either something similar to https://secureX.convio.net/shortname/site or your custom Luminate URL. Note that in this flow the <em>/site</em> part of the URL is included.
       * STOP HERE, DO NOT EDIT ANYTHING ELSE IN THIS FLOW
       * Save the flow 
       * Ensure the flow is enabled / on
       <BR>
       <BR>
       <BR>

* In Luminate Online
    1. Create a Single Component PageBuilder Page, for the purpose of this example, it will be assumed it's named "skyaddin_lo_power" and at the topmost content folder. Use the optional Blank PageWrapper mentioned above. 
       * For Title, optionally put in "LO SKY Add-in (Power)"
       * Create an HTML Content Element, ensure you select "Use Plain-Text Editor", and then copy-and-paste the code from the "skyaddin_lo_power.html" as-is from this repository (modifications will be done later). 
       * Search for the line that says <em>var LOConstituentStatsURL</em> and put URL copied from the above LOConstituentStats Flow <en>between</em> the tick marks.  
       * Search for the line that says <em>var TREventStatsURL</em> and put URL copied from the above TREventStats Flow <en>between</em> the tick marks.  
       * Save and publish this page. 
         * Note that when you're viewing this page from the PageBuilder editor, you'll see the SKY 'bouncing' animation and then nothing happening.  This is expected and OK.
       * Make note of the live URL of this page.  
    2. Create a Single Component PageBuilder Page, for the purposes of these examples, "pseudoTRAPI" will be used as the name. Use the optional Blank PageWrapper mentioned above
       * For the purposes of these examples and the configuration of the Flows, it it assumed it will be at the topmost Content Folder.  
       * For Title, optionally put in "Pseudo TR API"
       * Create an HTML Content Element, ensure you select "Use Plain-Text Editor", and then copy-and-paste the code from the "pseudoTRAPI.json" as-is from this repository. 
       * Save and publish this page.  
<BR>
<BR>
<BR>

* In the [My Applications](https://developer.blackbaud.com/apps/) of your developer account: 
    1. Click Add
       * For the application name, give it a straight forward one such as "Lumiante SKY Add-ins"
       * Application Details, give a description such as "Using SKY Add-ins to surface LO-Specific Data"
       * Under <em>Which organization owns this app?</em>, choose your (Primary) Organizations.  
       * Under <em>Publisher</em>, put your name (since you'll be the main contact). 
       * Under <em>Application Website URL</em>, put your organization's main address.  
       * Application Logo is not required.  
    2. On the resulting screen
       * Under <em>Redirect URIs</em>, add `https://global.consent.azure-apim.net/redirect`
       * Click Add under <em>Add-ins</em>
         *  Under <em>Add-in name</em>, put "Luminate Constituent Stats"
         *  Under <em>Extension Point</em>, select <em>Constituent Tile Dashboard</em>
         * Under <em>Add-in URL</em>, put in the full, live URL of the skyaddin_lo_power page created in LO AND <em>add to the end</em> "?pgwrap=n&whichtile=constituentstats".  The resulting URL will look like `https://secureX.convio.net/site/SPageNavigator/skyaddin_lo_power.html?pgwrap=n&whichtile=constituentstats` or (if you have a custom URL) something like `https://give.yourorg.org/site/SPageNavigator/skyaddin_lo_power.html?pgwrap=n&whichtile=constituentstats` 
         * Click Save
       * Click Add again under <em>Add-ins</em>
         *  Under <em>Add-in name</em>, put "TeamRaiser Event Stats"
         *  Under <em>Extension Point</em>, select <em>Event Tile Dashboard</em>
         * Under <em>Add-in URL</em>, put in the full, live URL of the skyaddin_lo_power page created in LO AND <em>add to the end</em> "?pgwrap=n&whichtile=teamraisereventstats".  The resulting URL will look like `https://secureX.convio.net/site/SPageNavigator/skyaddin_lo_power.html?pgwrap=n&whichtile=teamraisereventstats` or (if you have a custom URL) something like `https://give.yourorg.org/site/SPageNavigator/skyaddin_lo_power.html?pgwrap=n&whichtile=teamraisereventstats` 
         * Click Save
    3. At the top of the screen, copy the long string of characters under *Application ID* for use in the next step.  
     <BR>
     <BR>
     <BR> 
* In the [Blackbaud Marketplace](https://app.blackbaud.com/marketplace/): 
    1. Click *manage* at the top. (Make sure you're logged in with a Blackbaud ID that has Environmental Admin rights if you don't see it). 
    2. Click *Connect app* near the top. 
    3. Paste the Application ID copied from above. 
     <BR>
     <BR>
     <BR> 
* In Raiser's Edge NXT
    1. All Constituents will have a tile on their record labeled *Luminate Stats* that will have sections for Interests, Groups, Advocacy Reponses, and TeamRaiser Participation.  If the constituent is not (yet) linked to a Luminate Online User or has no data for a particular area, a corresponding message will show.  
       * You may have to scroll to the bottom of the page to see it for the first time.  
    2. **All** Event records will have a tile entitled *TeamRaiser Event Stats*. 
       * In order to link an Event in Raiser's Edge NXT to the corresponding Event in TeamRaiser, update the *Lookup ID* and append an asterisk (*) and the TeamRaiser ID (the fr_id= part of the address) to the end.   For example, if the Raiser's Edge NXT Event Lookup ID is "RunForIt2022" and the fr_id of the TeamRaiser Event is 1104, then you will need to update the Lookup ID to read `RunForIt2022*1104`. 
    
## Q&A
1. Why is everything done in the Power Automate Flows?  Why no connector?
   * A) One less thing to maintain / have to install and B) See next question
2. Why Client APIs and not Server APIs? Wouldn't have made things a bit easier?
   * When the creation of this example began, connections from Power Automate could be coming from a wide range and potentially changing series of IP addresses.  Furthermore, there is no FQDN asscociated with these connections.  This made the whitelisting options and requirements for Server APIs not very practical.  See [Microsoft's Power Automate IP Address Documentation](https://docs.microsoft.com/en-us/power-automate/ip-address-configuration) for more information. 
   * Since we have to rely on Client APIs, Power Automate Connectors (technically Swagger 2.0), do not support Cookie/Session authentication, so this also impacted any efforts for a connector. 
3. What's with the "pseudoTRAPI" file?
   * Pseudo TeamRaiser API - That page is a creative use of S-Tags to mimic an API call/response for various aspects of a TeamRaiser Event.  This information may have required multiple individual calls if using true-API or may not have been accessible via the Client API. 
4. Why was this method of linking a Raiser's Edge NXT Event with a TeamRaiser Event chosen?
   * Currently, Event Custom Fields are not accessible via SKY API / Power Automate.  "Embedding it" in the Lookup ID of the Event seems the most straight-forward.  Once those are added to SKY API / Power Automate, then that will probably change.  


## Version History

* 1
    * Initial Release - August/September 2021

## License

This project is licensed under the GNU General Public License v3 - see the LICENSE.md file for details

