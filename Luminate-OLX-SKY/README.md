# Luminate-OLX-SKY
Here you will find examples to extend the capabilities of Luminate Online utilizing Online Express and Blackbaud SKY API.  

## Features
* Embedd Online Express forms in Luminate Online and leverage S-Tags to auto-fill information in a similar constituent experience with native Luminate Online Donation Forms.  This operates via both manual and email auto-login. 
  * "Bill Me Later" Pledges
  * Event Registrations w/ Guests
  * Membership Registration and renewals/upgrades
  * Multi-Native-Currency \(Requires additional Blackbaud Merchant Services Setup & bank accounts in corresponding currency\) 
* SKY API Enhancements
  * Outstanding Pledge Listings and Payments
  * Online and Offline Giving History
  * "Smart" Membership Renewal / Upgrade
  * Online Constituent Search

## Requirements
At a minimum you will need:
* Access to Online Express Donation, Event, and/or Membership forms as appropriate
* Understanding of Online Express [Magic Links](https://webfiles.blackbaud.com/files/support/helpfiles/onlineexpress/online-help/Content/donations-magic-links.html)
* Understanding of [Luminate Online S-Tags](https://www.blackbaud.com/support/howto/coveo/luminate-online/Subsystems/S-Tags/Concepts/Admin_S-Tags.html)
* Understanding of [SKY API](https://developer.blackbaud.com/skyapi) and/or use of the [Raiser's Edge NXT Connector for Power Automate](https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform)
  * Power Automate will be used in these examples
* Creation / editing permissions of Lumiante Online PageBuilder Pages
* Creation / editing permissions of Luminate Online Donation forms \(Optional, depending on scenario\)

Most examples can be dropped into a standard PageBuilder Page and updated for your scenario.  The exception is the "LOLX-Pledge-Hybrid.html" \(to be added\) which is added to an HTML Caption of a Donation Form.  

Instructions are included with each file indicating what needs to be created/updated. 

### Notes on Luminate Member ID, Raiser's Edge System Record Id, and transaction processing
1. References in this project assume that the Member ID in Luminate Online is the same as the Raiser's Edge System Record ID as is the case in the standard "RELO" integration.  If other integration/datasync options are employed, then Power Automate / API calls and some S-Tag usages may need to be adjusted accordingly. 

2. All transactions in these scenarios are processed via Online Express with its corresponding methods of matching incoming transactions with the corresponding Constituent in Raiser's Edge. Methods of capturing the Luminate Online Member ID / Raiser's Edge System Record ID as a Gift Attribute are to allow for "double checking" but do not automatically match records. 

## Included Power Automate Flow
Included in this projected is a Power Automate Flow for the LOSKY-Directory.html .  This is a simple example of how one can use HTTP calls to Power Automate to facilitate working with SKY API. 

## Custom Connector
In the LOLX-RENXTCustom directory is a custom RENXT connector that enables the sort field in List Gits and access to Membership information.  This is only to be used in the interim until the official connector is updated.  

## LOLX-Membership-Simple
This is a version of the LOLX Membership form that does not call upon Power Automate / SKY API for further personalization.  Relies on S-Tags for pre-fill in. 