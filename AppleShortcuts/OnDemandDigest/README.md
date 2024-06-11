# On Demand Digest via Apple Shortcut
This is an example of how one can kick off an on-demand process via Apple Shortcuts.  Power Automate will be used as the tool to access SKY API.  This will kick off a gift digest on demand and deliver the results via email. [See the main readme](../README.md) for more details on the approach. 

There are a number of scheduled and on-demand examples of email digests shared in both the [Blackbaud Specific Microsoft Power Platform Community](https://community.blackbaud.com/forums/viewcategory/586) as well as the [Template Showcase](https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/showcase).  The digest here will be a more simplistic one with the focus of the excercise on linking Apple Shortcuts to Power Automate. 

## The Dataflow
The dataflow in this scenario will start off with the Apple Shortcut that will gather and send data to the Power Automate Flow.  The Power Automate Flow will send an acknowledgement back to the user via the Apple Shortcut, pull a Donation list from Raiser's Edge NXT, and email the results. 

## Installation
### Power Automate Flow
1. Import the AppleShortcut-DonationsDigest zip file into your Power Automate Environment.  See https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/basics/import-flows on how to import flows if you haven't imported a flow before. 
2. Open the README and follow the instructions. 
3. Open the _Compose - Allowed Users_ step and update that with all the email addresses that are authorized to receive this report.  A shortcut will be setup for each user / email, though all authorized emails will need to be listed here. 
    * Alternately, you can hardcode the email in the last step to go to a pre-determined group of individuals. 
4. Skip all the way down to the _Send an email notification_ step.  As of this writing, per https://learn.microsoft.com/en-us/connectors/sendmail/ , this connector may not work for new tenants. Consider swapping this out for an Outlook or Gmail Connector. Make note of how this is put together before deleting. If you want to hardcode a predetermined series of emails this goes to, you can also do it here. 
5. Save the flow. 
6. Go all the way back to the top and copy the URL from the _When a HTTP request is received_ step. 
7. You may have to go back to the details screen and turn on the flow. 

### The Shortcut
1. Go to https://www.icloud.com/shortcuts/12f84ac0206a409db7e8415ee09e3548 and when prompted, import the shortcut. 
2. Upon import, you should be asked to enter the email address of the recipient for whom you're setting this up for as well as the URL copied from the Power Automate Flow.  If not, in the Shortcut, update the "Text" box with the email and the _Get contents of_ step with the URL obtained from Power Automate. 
3. Do a test run on both Mac and iPhone/iPad (as appropriate).  Note for each device the first run will ask your permission to access your default web browser and/or the Power Automate URL. 

## Support
This is not an official Blackbaud production. Support is only available via the Blackbaud Power Platform Community forum.  Preferably reply to the original posting. 

## Disclaimer
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.