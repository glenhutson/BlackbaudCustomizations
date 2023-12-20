# BBCRM Altru SKY Menu
## The Example
This is a quick proof of concept that embeds a Power Automate generated menu into BBCRM and Altru.  The main focus of this is Altru customers that can't embed SKY Page Add-ins directly.  With this menu, you can create links to the "stand alone" Page Add-ins that passes along the context_recordId in order to facilitate pulling in any record specific data.  This could potentially also be used by BBCRM customers that want a single menu rather than multiple tabs or a BBCRM page that links out to stand-alone Power BI reports embedded in SKY Page Add-ins, as well as initial testing. 

## Prerequisites
Please review the information in the [SKYPageAddins](../SKYPageAddIns.md) documentation.  This includes information about SKY Page Add-ins and links/specifics to Blackbaud's Approach to the Power Platform for which this is utilizing.  

## Overall Process
The overall process has two general phases.  

The main steps are: 

1. Install / Configure the Power Automate Flow
2.  Add the flow to an Altru or BBCM Page / Tab 

## Installation
1. Download the associated `BBCRM-Altru-SKYMenu-VX.zip` file located in this same repository (where "X" is the version number.) Do _not_ unzip the file (it should stay as one file).  
2. Review the instructions at https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/basics/import-flows for Importing flows into your Power Automate account. Stop before the "Next Steps" section. 
3. Edit the flow if it doesn't already take you to the editor. 
4. Open up the area that starts with "README - ACTION REQUIRED" to review that information and take associated steps.  Not doing this will cause your application to immediately terminate when it tries to run. 
5. Open the _Compose - MenuItems_ action.  This is where you define the links to the various SKY Page Add-ins.  These are in a "key": "value" setup where the key is how you want to label it and the value is the link to the SKY Page Add-In.  If you have a skingle SKY Page Add-In at `https://app.blackbaud.com/pages/applications/946dab7b-3635-473f-9c2a-6accf8d2c002/pages/ConstituentWeather?envid=t-oig70q-nLUativMxcSkcSg&svcid=ecrm`, then this field would look like (there should be no return / newline after the colon, if it appears in the example, it's purely due to text wrapping): 
```
{
    "Constituent Weather": "app.blackbaud.com/pages/applications/946dab7b-3635-473f-9c2a-6accf8d2c002/pages/ConstituentWeather?envid=myEnvironmentId&svcid=ecrm"
}
``` 
If you have multiple links it would be similar to:

```
{
    "Constituent Weather": "app.blackbaud.com/pages/applications/946dab7b-3635-473f-9c2a-6accf8d2c002/pages/ConstituentWeather?envid=myEnvironmentId&svcid=altru", 
    "Something Else": "app.blackbaud.com/pages/applications/946dab7b-3635-473f-9c2a-6accf8d2c002/pages/SomethingElse?envid=myEnvironmentId&svcid=altru"
}
``` 
### WARNINGS
* Do _not_ put the "https://" at the beginning.
* Do _not_ include a ":" in the label
* DO _not_ include "&addin=1" as part of the URL so that the Omnibar can render. 
* Switch "svcid=altru" to "svcid=ecrm" if you're using BBCRM rather than Altru. 
* After editing Return to your list of flows and "turn on" your flow. 

## Embedding in Altru / BBCRM

See the instructions at [SKYPageAddins](../SKYPageAddIns.md) for embedding this into Altru / BBCRM. DO put `context_recordId=@@PAGECONTEXTRECORDID@@` at the end of the URL as applicable.  