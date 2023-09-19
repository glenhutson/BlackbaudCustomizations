# Raiser's Edge NXT Customizations

This area contains customizations specific to or including Raiser's Edge NXT.  This newer area was created after more products started adopting SKY API / SKY Add-ins and became accessible to the Power Platform. 

For earlier examples, see the [All-In-One-SKYAddins+PowerAutomate](../All-In-One-SKYAddins%2BPowerAutomate/) folder. 

If this is your first time working with Power Automate, be sure to check out the [Getting Started](https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/getting-started), [Creating Applications](https://developer.blackbaud.com/skyapi/docs/getting-started#create-an-application), as well as the basics of [Importing Flows](https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/basics/import-flows).  Blackbaud University has [eLearning for the Power Platform Overview](https://learn.blackbaud.com/learn/course/internal/view/elearning/14115/microsoft-power-platform-overview-elearning-blackbaud-raisers-edge-nxt) as well as working with [Power Platform Templates](https://learn.blackbaud.com/learn/course/internal/view/elearning/14114/microsoft-power-platform-templates-elearning-blackbaud-raisers-edge-nxt). 

## Stand-alone Flows
Many flows listed result in new features such as custom tiles and/or pages added to the system.  Some flows are stand-alone in that they may produce outputs (files, email) and don't add new items to the Raiser's Edge NXT User Interface.  

## All In One (AIO) Add-ins.
"All in One" Add-ins are those that uses a single Power Automate Flow to perform both actions and render the results to be used/displayed within Raiser's Edge NXT.  See the [Background Documentation](../All-In-One-SKYAddins%2BPowerAutomate/AllInOne-SKYAddIns-Background.md) for more information. 

## Tile SKY Add-ins
These Add-ins render as a tile on various Raiser's Edge NXT Pages.  See [TileSKYAddins](../All-In-One-SKYAddins%2BPowerAutomate/TileSKYAddins.md) for more information. 

# Page SKY Add-ins
These render as full pages within the "shell" of Raiser's Edge NXT.  See [PageSKYAddins](../All-In-One-SKYAddins%2BPowerAutomate/PageSKYAddIns.md) for more information. 

## Donor Portal SKY Add-ins
These render as either call-to-action boxes on the home page of the Raiser's Edge NXT Donor Portal or additional tabs under "My Profile".  Though there aren't specific pre-made content shortcuts for the Portal, items created as a "tile" will appear as tabs under My Profile.  See [Donor Portal Extension Point](https://developer.blackbaud.com/skyapi/docs/addins/concepts/extension-points#donor-portal) for more information.  

## Permissions
All actions performed by a Flow are done under the user account of the person who _connected_ the flow, rather than the one viewing/running the flow.  This means access to data/features will be based on the permissions of the one who setup/connected the flow.  Typically, 'anyone' who has a login to Raiser's Edge NXT can connect and run a flow, though what they can do will be based on their Raiser's Edge NXT Permissions. 

However, there are a subset of operations that require the one connecting the flow to be an Environment Admin.  These will be noted where possible.  See the [June 22 Release Notes](https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/changelog/2022#june-2022) and look under "Important notes about these enhancements" for more information. 

## Where to go for help
Please direct any questions to the [Blackbaud / Microsoft Power Platform Forum](https://community.blackbaud.com/forums/viewcategory/586). Any direct messages on GitHub, the Community, or other means will be pointed back to the forum.  _These are not covered by Blackbaud Support_. 

## Disclaimer
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
