# Raiser's Edge NXT Campaign / Fund / Appeal Search (er.. filter)
<!-- vscode-markdown-toc -->
* [Background](#Background)
* [Nuances: Search versus Filter and Warning](#Nuances:SearchversusFilterandWarning)
* [Installation](#Installation)
	* [Multiple Add-ins](#MultipleAdd-ins)
* [A note about permissions](#Anoteaboutpermissions)
* [To Dos](#ToDos)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=false
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Background'></a>Background
Raiser's Edge NXT Web View currently has no way to directly search for Campaigns, Funds, and Appeals (or CFAs).  Each of these record pages are availble from an associated gift and dashboards, but there's no "listing" of those records.  This "All In One" flow provides for Campaign, Fund, and Appeal Search links from the Raiser's Edge NXT Home page and corresponding (Full) Page SKY Add-ins.  

## <a name='Nuances:SearchversusFilterandWarning'></a>Nuances: Search versus Filter and Warning
The Power Automate Connector simply has a "list" feature for CFAs without the ability to search on the typical criteria of (System) Record ID, Lookup ID, Description, and Catgory.  In order to achieve the ability to do this, all active records are first pulled in and then a table assembled.  

You will then have the chance to _filter_ that table based on the above mentioned criteria.  If you have a lot of records (especially a lot of funds and/or appeals), the time it takes to do that inital load may stretch for a while.  For comparison, the test data set of ~50 funds takes about 20 seconds to load.  However, some of that is taken up by work that'll be the same amount of time regardless of the number of records.  

If you have a lot of records, one option may be to split out this flow into two: one that runs nightly that generates and saves out the HTML tables and the "on-demand" one to pull in the results. 

## <a name='Installation'></a>Installation
This will be done via a (Full) Page SKY Add-in.  See the [General Page SKY Add-In Instructions](https://github.com/glenhutson/BlackbaudCustomizations/blob/main/All-In-One-SKYAddins%2BPowerAutomate/PageSKYAddIns.md) with the following modifications: 

### <a name='MultipleAdd-ins'></a>Multiple Add-ins
Though it's an "All in One flow", there will need to be up to 6 add-ins created.  Each record type will require a Main Add-In + Button/Link Add-in pair.  

1. After obtaining the URL from the _When an HTTP request is received_, you will create 3 Main add-ins, each will use the same URL with an additional paramater to determine which type of record to process.  These will be all using the _Page_ Extension point.  The following is record type, the suggested Main Add-in name and the required paramater to add at the end of the URL.  Both the Add-In name and Additional Paramater is a single string of characters, though the README may breakthem off into different lines.  


Record Type | Add-In Name | Additional Paramater
---------|----------|---------
 Campaigns | filter-campaigns | &cfa=campaigns
 Funds | filter-funds | &cfa=funds
 Appeals | filter-appeals | &cfa=appeals

 For example, if your main URL is 
```
https://prod-48.westus.logic.azure.com:443/workflows/5ed271155a1e4b9ca3bc101b71cd795c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=YAtzFzsVdpM7UbhTrs3fBwH4kZ3Au5navss50cG5TMQ 

```
Then the URL for the campaigns will be 
```
https://prod-48.westus.logic.azure.com:443/workflows/5ed271155a1e4b9ca3bc101b71cd795c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=YAtzFzsVdpM7UbhTrs3fBwH4kZ3Au5navss50cG5TMQ&cfa=campaigns 
```

2. After those are completed, then you will need to create 3 button/link Add-ins for each record type.  The name isn't super important, but suggest it describes it includes what it's pointing to. The Extension Point for each would be _Development Office Home Action_ .  For example, for campaigns: 

* **Add-In Name**: _Filter Campaigns - Button_
* **Add-In URL**: `https://app.blackbaud.com/addin-page-host-button?svcid=renxt&appId=YOURAPPID&pageName=filter-campaigns&title=Search%20Campaigns`

Note that when displayed on the Development Office Home Page, these will show as links in the _Tasks_ tile.  It's labled as "Button" as technically that's the feature we're using.  Make sure you replace "YOURAPPID" with the Application ID for which the SKY Add-Ins are attached.  

## <a name='Anoteaboutpermissions'></a>A note about permissions
Reiterating / Adding to the comments in the [Main PageSKYAddIns documentation](https://github.com/glenhutson/BlackbaudCustomizations/blob/main/All-In-One-SKYAddins%2BPowerAutomate/PageSKYAddIns.md#Anoteaboutauthorizationvalidation): 

1. _All_ users will see the links on the Home Page, regardless of who can read CFA records. 
2. If you've specified only certain users to access the search pages in the _Authorized Users_ step in the Flow, this will be taken into account once they click on the link. 
   * Authorized users will see the search screen
   * Non-Authorized users will get a messages stating they're not authorized. 
3. Inactive records are filtered out by default.  
4. The funds that show in the Fund search screen is based on the security of the credentials set in the Raiser's Edge NXT Connector.  If using _Gift security by fund_ settings, a user viewing that list may see Funds they don't have the rights to. 
5. If a user clicks on a fund link, that's when the user-specific permissions are checked.  If they don't have permission to see that fund, _then_ they'll get an error. 

## <a name='ToDos'></a>To Dos
These may or may not be addressed, but definitely already on the mind: 
1. Find a way to speed up the load time
2. Reducing the number of SKY Add-Ins needed.  There are additional context features availble to Page Add-ins that could be leveraged.  
3. Possibly move the links to a dedicated custom tile that then could be shown/hidden as needed to Authorized Users. 