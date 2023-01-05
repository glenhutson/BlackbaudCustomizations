# Financial Edge NXT Projects Incomplete Actions
This [Send HTTP Request](../Send-HTTP-Request.md) based Power Automate flow will periodically check _a specific Project_ for any incomplete actions and send an email with the results. If you wish to track multiple projects, you can copy/update the first one created as appropriate. 

## API Documentation
This utilizes the [Get Project notes](https://developer.sky.blackbaud.com/docs/services/56eb17a0a9db9516c46bff6f/operations/GetProjectNotes) and [Get Project](https://developer.sky.blackbaud.com/docs/services/56eb17a0a9db9516c46bff6f/operations/GetProject) Financial Edge NXT Endpoints. Actions and Notes are pulled via the same Get Project notes endpoint. 

## Inputs
The System Record ID of the Project is used to locate the appropriate Project. No query paramaters are used.  

## Outputs
An email to a designated recipent that contains a table with the following fields for each relevant action along with a link to the Project: 

* Due Date 
* Type 
* Description
* Assigned to


## Initial Setup
Download the .zip file in the files list above. After [importing the flow](https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/basics/import-flows), you will need to edit the following pieces:

* Open the initial _Recurrence_ step and edit that to match when you would like the flow to periodically check the Batches. 
* Open the "README" Section in the flow and follow the instructions. 
* Open the _Initialize variable - EnviornmentID_ action and enter your Environment ID.  To get your Enviornment ID, log into Financial Edge NXT Web View, and copy the string of characters after "envid=" in the address bar.  
* Open the _Initiailze variable - ProjectID_ action and enter the specific ProjectID that you wish to have the flow check for.  Note that this is the "System Record ID" of the project and not the Project ID seen in the Projects list or in the Project record itself.  To get the System Record ID of the project, log into Financial Edge NXT Web View, and observe the number after "/ledger/project" in the address bar. 
* Open the _Initiailze variable - NotificationRecipient_ action and enter the email address that should get notifications. 
* Open the _Convert time zone_ action and adjust as needed. 

After saving the flow, make sure you turn it on (it's off by default)

## Optional Configuration
You do not need to make any further changes to have the flow working.  To edit what is displayed in the actual email notifications: 

* Open the _Condition - AnyActionsAtAll_ conditional. 
  - In the "If no" side, you can edit the contents of the email that will be sent out if there are no actions at all. Do not remove the "CSS" variable or "replace" expression. 
* Open the _Condition - AnyIncompleteActions_ conditional. 
  - In the "If no" side, you can edit the contents of the email that will be sent out if there are no incomplete actions. Do not remove the "CSS" variable or "replace" expression. 
* Open the _Create HTML Table - IncompleteActions_
  - Click the "X" beside any field you do not want shown in the table sent as part of the incomplete actions email.  (Note, that once you delete it, there is not an easy way to reinsert it to where it was before)
  - Relabel the Headers as desired.  Note that since the Create HTML Table action does not allow for inserting spaces, place a ^ in lieu of a space.  When it's added to the email, each ^ will be replaced by a space. 
* Open the _Send an email notification_ action
  - Edit the Subject and body as desired.  Do not remove the "CSS" variable or "replace" expression. 
