# LOLX-RENXT-Sort-Membership
Custom Connector for Raiser's Edge NXT for ListGifts Sort and Membership

 Until the Official Raiser's Edge NXT Connector is updated with the Membership and List Gifts sort capabilities, this one can be used in the iterim.  It is meant only for those two areas: for everything else, use the Official Connector

## Installation
As this is a custom connector, it won't be able to connect to the official Power Platform App, so you will need to create your own. If you have not yet created a SKY Developer account, you will need to do so.  This is a two part process: First Creating the App, and then installing the custom connector. 


### The App
1. [Follow these instructions](https://developer.blackbaud.com/skyapi/docs/getting-started#create-an-application) for creating a new application. You can call it whatever you want, but may want to label it something meaningful such as "Power Automate RENXT Custom Connector".  Note the Application ID and the Application Secret.  You can retrieve those whenever needed via the [My Applications](https://developer.blackbaud.com/apps/) area of the SKY Developer Portal.  
2. After the application is created, in the Redirect URIs section, click edit and add https://global.consent.azure-apim.net/redirect. 
3. Go to the instance of Raiser's Edge NXT you will be using for this project.  Click the "accordian" menu to the left of where it says "Raiser's Edge NXT", and select "Marketplace"
4. At the top you will see "Marketplace", "Browse", and "Manage".  Click on "Manage". 
5. Click on "Connect App"
6. Enter the Application ID of the app you just created.  

### The Connector \(There are a couple of ways to install a custom connector.  This is a bit more straight forward.\)
1. Download the LOLX-RENXT-Sort-Membership.swagger.json file. 
2. Log into Microsoft Power Automate via https://flow.microsoft.com
3. Click on "Data" -> "Custom Connectors" on the left
4. In the upper-right, click "New Connector" -> "Import an OpenAPI file"
5. Name the Connector \(30 characters max\), then click on "Import" and browse for the file just downloaded. 
6. Once imported, click on the Security tab. 
   - Make sure "Generic Oauth 2" is selected under Identity Provider
   - Copy/pate the Client id and Client secret from your application 
   - Copy/paste the URL under "Token URL" into "Refresh URL"
   - Click "Create Connector" at the top. 
7. Go to the "Definitions" Page
   - Scroll to the bottom left and click "New Policy"
   - Name it something like "Authentication"
   - Template: "Set HTTP Header"
   - Operations - leave blank
   - Header Name - "Bb-Api-Subscription-Key"
   - Header Value - Enter the Primary Access Key or Secondary Access key from your developer account: https://developer.blackbaud.com/subscriptions/ 
   - Action if header exists - override
   - Run poicy on - Request
   - Click "Update Connector"


You now have a custom connector you can use for retrieving memberships and access to the sort field for List Gifts.  
