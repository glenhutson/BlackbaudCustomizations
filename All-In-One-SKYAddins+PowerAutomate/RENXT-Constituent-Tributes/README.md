# RENXT Constituent Tile

<!-- vscode-markdown-toc -->
* [Summary](#Summary)
* [Installation](#Installation)
* [Notes](#Notes)
* [Where to go for support](#Wheretogoforsupport)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=false
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Summary'></a>Summary
Honor/Memorial information is currently managed through the Database View.  This Add-In displays an Honor/Memorial tile in the Web View with basic Tribute information such as Tribute Type, Description, Notes, Dates, and if it's active.  

## <a name='Installation'></a>Installation
See the [Tile SKY Add-ins](https://github.com/glenhutson/BlackbaudCustomizations/blob/main/All-In-One-SKYAddins%2BPowerAutomate/TileSKYAddins.md) documentation on how to install this Add-in.  The Extension Point for this will be _Development Office_ -> _Constituents_ -> _Constituent Tile Dashboard_ . 

## <a name='Notes'></a>Notes
1. There's currently not an efficient way to be able to show additional summary data (links to gifts, total amount, etc) at this time.  If/when additional options become available, it will be revisited. 
2. See the [June 2022 Release Notes](https://developer.blackbaud.com/skyapi/support/changelog/power-platform#june-2022), specifically:
   ```
   Several of the new actions in this release do not evaluate end-user feature-level permissions, such as view, add, edit or delete. Instead, they require that the user have environment-administrator-level permissions. Non-admin users who have feature-level permissions for certain operations within the Raiser's Edge NXT may not be able to use the new connector actions to perform those operations. This limitation is currently an internal implementation detail that we hope to address in the future.
   ```
   Translated: Someone has to be an Environment Admin in order to use _some_ Connector Actions (not an entire connector and not all items in the connector) due to the way the underlying API is setup. Tribute Functionality is one of those features that require Environment Admin rights.   This does _not_ mean "every" user needs to be an Environment Admin, rather the credentials supplied to the relevent Raiser's Edge NXT Connector, in this case Raiser's Edge NXT Constituents Connector, has to be those of an Environment Admin.  For more information on the different types of Admin and how to become an Environment Admin, see https://kb.blackbaud.com/knowledgebase/articles/Article/190614 . 

## <a name='Wheretogoforsupport'></a>Where to go for support
See https://github.com/glenhutson/BlackbaudCustomizations/blob/main/All-In-One-SKYAddins%2BPowerAutomate/AllInOne-SKYAddIns-Background.md#important-note