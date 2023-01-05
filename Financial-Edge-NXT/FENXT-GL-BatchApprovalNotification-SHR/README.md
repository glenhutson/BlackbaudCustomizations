# Financial Edge NXT Batch Approval Notification
This [Send HTTP Request](../Send-HTTP-Request.md) based Power Automate flow will periodically check for Journal Entry Batches that are in a designated status and will send an email notification should any be found. 

## API Documentation
This utilizes the [Get Journal entry batch (List)](https://developer.sky.blackbaud.com/docs/services/56eb17a0a9db9516c46bff6f/operations/ListJournalEntryBatches) Financial Edge NXT Endpoint.  

## Inputs
The default query paramater used is "status". 

## Outputs
An email to a designated recipent that contains a table with the following fields for each relevant batch produced by the above mentioned API Endpoint: 

* Batch ID - The System Record ID of the Batch
* Batch UI ID - The user definable ID of the Batch seen while editing it. This is linked to the specific batch. 
* Create Interfund Sets - A true/false
* Create Bank Account Adjustments - A true/false
* Added - Combines the Date Added and Added By into one field. 
* Modified - Combines the Date Modified and Modified By into one field

## Initial Setup
After [importing the flow](https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/basics/import-flows), you will need to edit the following pieces:

* Open the initial _Recurrence_ step and edit that to match when you would like the flow to periodically check the Batches. 
* Open the "README" Section in the flow and follow the instructions. 
* Open the _Initiailze variable - NotificationRecipient_ action and enter the email address that should get notifications. 
* Open the _Initialize variable - EnviornmentID_ action and enter your Environment ID.  To get your Enviornment ID, log into Financial Edge NXT Web View, and copy the string of characters after "envid=" in the address bar.  
* Open the _Initiailze variable - BatchStatus_ action and enter the specific status that you wish to have the flow check for.  
* Open the _Initiailze variable - TimeZone_ action

After saving the flow, make sure you turn it on (it's off by default)

## Optional Configuration
You do not need to make any further changes to have the flow working.  To edit what is displayed in the actual email notification: 

* Open the _Condition - Pending Approval_ conditional. 
* Open the _Create HTML Table_
  - Click the "X" beside any field you do not want shown in the table.  (Note, that once you delete it, there is not an easy way to reinsert it to where it was before)
  - Relabel the Headers as desired.  Note that since the Create HTML Table action does not allow for inserting spaces, place a ^ in lieu of a space.  When it's added to the email, each ^ will be replaced by a space. 
* Open the _Send an email notification_ action
  - Edit the Subject and body as desired.  Do not remove the "CSS" variable or "replace" expression. 
