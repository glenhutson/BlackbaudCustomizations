# BBCRM Altru Constituent Weather
## The Example
This examples uses the constituent's zip / postal code to provide current and forecasted weather information for their area.  This is an example of using a common element (zip / postal code) between two separate systems (BBCRM and MSN Weather), to display data in the system without having to import it directly. 

## Prerequisites
Please review the information in the [SKYPageAddins](../SKYPageAddIns.md) documentation.  This includes links/specifics for creating a SKY Developer Application, Adaptive Cards, and Blackbaud's Approach to the Power Platform for which this is utilizing.  

## Overall Process
The overall process has three general phases.  

The main steps are: 

1. Install / Configure the Power Automate Flow
2. Register the Flow as a Page SKY Add-in
3. Add the SKY Add-in to a BBCRM Page / Tab (for BBCRM optional if you want it accessible directly within the BBCRM shell) or a [SKY Menu](../BBCRM-Altru-SKYMenu/). 

## Installation - Constituent Weather
1. Download the associated `BBCRM-Altru-ConstituentWeather-VX.zip` file located in this same repository (where "X" is the version number.) Do _not_ unzip the file (it should stay as one file).  
2. Review the instructions at https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/basics/import-flows for Importing flows into your Power Automate account. Stop before the "Next Steps" section. 
3. Edit the flow if it doesn't already take you to the editor. 
4. Open up the area that starts with "README - ACTION REQUIRED" to review that information and take associated steps.  Not doing this will cause your application to immediately terminate when it tries to run. 
5. Open the _Validate a user identity token_ step and replace the fake _Application ID_ with that of the SKY Developer App you created. 
6. For Altru Users: Open the _Initialize variable - BBCRMorAltru_ action and change the "crm" value to "alt".
7. There shouldn't be the need to edit anything else in the flow.  You may need to review the steps for any exclamation marks indicating you have to reestablish a connection to the MSN Weather or SKY Add-ins Connector. 
8. Save your flow. (But don't exit it yet)  
9. Scroll all the way back to the top of the flow, open the _When a HTTP request is received_ step, and copy the _HTTP POST URL_.  You should see a copy icon (what looks like two pages on top of each other).  Clicking on that will save the entire address to your clipboard.  You'll need this in a moment. 
10. Return to your list of flows and "turn on" your flow. 
11.  See the [SKYPageAddins](../SKYPageAddIns.md) information on how to construct the required Adaptive Card URL, how to use that to create a SKY Add-in Page, and how to embed that into BBCRM. See the [SKYMenu ](../BBCRM-Altru-SKYMenu/)instructions for Altru Customers.  
