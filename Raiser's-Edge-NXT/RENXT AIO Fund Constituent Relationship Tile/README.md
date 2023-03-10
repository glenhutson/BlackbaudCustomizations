# RENXT AIO Fund Constituent Relationship Tile

This flow creates two custom tiles: 
1. A tile on the Constituent Record showing any Fund relationships. 
2. A tile on the Fund Record showing any Constituent Relationships. 

Each entry will also include a link that generates a fly-out to the corresponding record, along with a way to open the full record. 

This is a single flow that uses a switch statement to determine the appropriate rendering. 

## Installation
See the [Raiser's Edge NXT Readme](../README.md) for links discussing the various aspects of Tile Add-ins, "All In One" flows, disclaimer, and how to get help. 

### Flow-specific installation instructions
This requires setting up two tile add-ins, using the same URL generated in the _When a HTTP request is received_ for both with one difference for each. 

* For the _Fund Constituent Relationships_ version (the one that will show on the Fund Record), set this up as a _Constituent Tile Dashboard_ Extenstion Point.  Paste in the URL from the When a HTTP request is received, and add `&recordType=fund` to the end.

* For the _Constituent Fund Relationships_ version (the one that will show on the Constituent Record), set this up as a _Fund Tile Dashboard_ Extenstion Point.  Paste in the URL from the When a HTTP request is received, and add `&recordType=constituent` to the end. 

### Flow-specific considerations
1. These involve actions that require that the user connecting this to Raiser's Edge NXT be an Environment Admin (see above link for more information). 

2. The concept of Relationship/Reciprocal Relationship can get a bit varied.  If the tiles are not showing up the way you would expect, you can flip these:
   * In the flow, open the _Switch - Which Function_.
   * Open the _FundRecord_ option. 
   * Open the _GetFundConstituentRelationships_ Scope.
   * Open the _Create HTML table_ action. 
   * Either swap the Header or Values for the Relationship Entries. 
   * Repeat for the _ConstituentRecord_ option under the switch. 
