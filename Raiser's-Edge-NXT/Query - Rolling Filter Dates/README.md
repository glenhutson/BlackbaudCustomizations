# Query - Rolling Filter Dates
## Purpose
This shows an example of how you can use Power Automate to periodically leverage the Query API to update Query Date Filters to enable a "rolling" time period such as "last 30 days", etc.  

## Method
The [Patch Query endpoint](https://developer.sky.blackbaud.com/api#api=query&operation=EditQuery) allows you to edit an existing query.  This means on a regular (ie: nightly) basis, you can run a flow to compute start (and end) dates for a Date Query filter that aren't available via standard Query options.  

## The Example
The example included here is a simple Gift Query which filters for gifts on or after a certain date.  When a Flow recurrence is setup, this can be automatically updated on a nightly basis, creating a "rolling" timeframe.  This eliminates the need for an "ASK" or manually updating the query.   

## Instructions
1. Refer to the [documentation about Importing Flows](https://docs.blackbaud.com/microsoft-connectors-docs/microsoft-power-platform/basics/import-flows) to import the associated .zip file into your environment.  

2. Review the Readme part of the flow and follow the instructions.  

3. Open the _Compose - ExampleRENXTQuery_ action.  This contains the specs of the example query.  Use this JSON to create the example via the SKY API Console, also known as the "Try It".  Don't forget you may need to do an additional login at the upper-right before clicking "Try It".  https://developer.sky.blackbaud.com/api#api=query&operation=AddQuery . Make note of the ID that is given in the results.  This will be needed in a few moments.  

4. Go to the Query in WebView and note the date listed in the Criteria.  If you wish, you can also rename it and move it to another category. 

5. Go back to the Flow and edit the _Compose - QueryID_ action.  Update that with the ID you copied from the SKY API Console. 

6. Open the _Subtract from time_ action and note the settings.  This will be what determines what the updated Date Query filter will be.

7. Save and run the query.  You may have to make sure the query is "on" before running it. 

8. Go back to the example query and note that the date has been adjusted.  

## Next Step
Switch out the _Manually trigger a flow_ with a recurrence trigger to have this run automatically each day (eg: 12:01 am).  

## Using this Method on Your Own Queries
1. If you have a query you would like to use this with, it's _**strongly**_ recommended you duplicate the query as a new one. 

2. To find the System Record ID of an existing query, you may have to enable that column in the Query List (click "Columns" near the top) in the WebView. 

3. To get the JSON for an existing query, click on "Options" in the Query Editor and scroll down to the "Copy query JSON" button. 

4. Replace the JSON in _Compose - UpdatedQuery_ with the JSON from your query and then substitute the included dates with any calculated ones.  

5. Consider creating a new Compose action to store the unaltered version of the Query for easy reference.  

6. If you update your query, you'll need to immediately update it in the flow as the next run will overwrite it with the older version. 

7. As you perform your experimentation, you may find that you don't need the entire Query in the _Updated Query_ action.  For example, if you don't include the "Name" field, then it won't touch/update the Query name.  The sections of the Query spec you need to include is dependant on the structure of the Query and what is updated via the Flow.  Leaving off the wrong items may inadvertently delete part of the Query.  

## Support
This example is not covered by Blackbaud Support.  For any questions, it is recommended you reply to the Blackbaud Community post that introduced this example.  Direct Messages and/or Emails for assistance may not be replied to or may redirect you to the Community.  

## No Warranty
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
