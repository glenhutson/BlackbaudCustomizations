# FENXT Vendor Giving Tile

<!-- vscode-markdown-toc -->
* [Summary](#Summary)
* [Financial Edge NXT / Raiser's Edge NXT Record Linking](#FinancialEdgeNXTRaisersEdgeNXTRecordLinking)
* [Installation](#Installation)
* [Where to go for support](#Wheretogoforsupport)
* [To-Dos](#To-Dos)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=false
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Summary'></a>Summary
This All-In-One flow creates a tile on a Vendor record in Financial Edge NXT to surfach high level giving data pulled from its Raiser's Edge NXT data. Those viewing the information from Financial Edge NXT do not need to have log-in privileges to Raiser's Edge NXT.  Though the data surfaces in Financial Edge NXT, it only requires the official Raiser's Edge NXT connectors. Data includes:
* First Gift Amount, Date, Type, and Fund
* Latest Gift Amount Date, Type, and Fund
* Greatest Gift Amount Date, Type, and Fund
* Consecutive Years Given
* Total Years Given
* Total Givng Amount
* Total Pledge Balance
* Total Recieved Amount
* Total Commited Matching Gifts
* Total Received Matching Gifts
* Total Soft Credits
* Total Number Gift-in-Kind Donations
* Total Amount of Gift In Kind Donations

## <a name='FinancialEdgeNXTRaisersEdgeNXTRecordLinking'></a>Financial Edge NXT / Raiser's Edge NXT Record Linking
To use this flow as-is, you will need to create a new _alias_ in _Raiser's Edge NXT_ called "FENXT ID" (though you can technically  name it whatever you want) that is filled in with "FENXT-[VendorSystemRecordId]" (that format is required) for each Vendor that has a record in both systems.  This is due to the specific fields that are available for searching in the Connector and Underlying API.  

## <a name='Installation'></a>Installation
See the [Tile SKY Add-ins](https://github.com/glenhutson/BlackbaudCustomizations/blob/main/All-In-One-SKYAddins%2BPowerAutomate/TileSKYAddins.md) documentation on how to install this Add-in.  The Extension Point for this will be _Financial Office_ -> _Payables_ -> _Vendors_ -> _Vendor Tile Dashboard_ . 

> If your Raiser's Edge NXT and Financial Edge NXT is in the scenario that they are in different environments (when looking at the address bar when logged into each, the characters after "envid=" are different), you may have to create a new connection for the _Validate a user identity token_ action specifically for the environment your Financial Edge NXT is in.  To do this:
 1. Open up the _Switch - Which Function_ -> _Validate_ -> _Scope - Validation_ -> _Validate a user identity token_.  
 2. Click on the three dots to the upper-right of the _Validate a user identity token_ step
 3. Click _Add new connection_
 4. Select the Environment your Financial Edge NXT is in as well as your Financial Edge Database instance
 5. Log in with your credentials. 

 When establishing multiple connections, Power Automate does not label which is which. 


## <a name='Wheretogoforsupport'></a>Where to go for support
See https://github.com/glenhutson/BlackbaudCustomizations/blob/main/All-In-One-SKYAddins%2BPowerAutomate/AllInOne-SKYAddIns-Background.md#important-note

## <a name='To-Dos'></a>To-Dos
Not guranteed to make it into a future release, but already on the mind. 
* Include Fly-out previews of gifts/constituent data. 