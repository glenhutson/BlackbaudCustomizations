# BBCRM and Altru Customizations
The examples found here focus on the SKY APIs for BBCRM and Altru released in 2023.  Many of these, at least initially, rely on the "Send HTTP Request" action in the SKY Add-Ins Connector.  See [Send-HTTP-Request.md](./Send-HTTP-Request.md) for more information. 

> Note that for BBCRM Customers in Blackbaud Cloud Operations, you must be on Service Pack 33 and have Blackbaud ID enabled. 

> For those BBCRM customers not hosted by Blackbaud, see https://kb.blackbaud.com/knowledgebase/articles/Article/202277 

## A note about BBCRM and Altru using the Send HTTP Request Action
The initial SKY APIs for BBCRM and Altru were developed at the same time.  As such, a majority are structured the same way, with only slight differences designating either BBCRM or Altu.  For example, to get information about an individual, the Request URL for "Get an Individual" in BBCRM is:

```
https://api.sky.blackbaud.com/crm-conmg/individuals/{constituent_id}
```

Whereas the Request URL for the corresponding action in Altu is:

```
https://api.sky.blackbaud.com/alt-conmg/individuals/{constituent_id}

```
Notice that for BBCRM, the first part of the URL after the host `https://api.sky.blackbaud.com` is `/crm-` whereas the first part of the URL for Altru is `/alt-` . 

This means, that with a slight tweak, many examples can be used for either.  For examples that can be used for either, only one example will be created, but instructions will be given on how to switch it from BBCRM to Altru or vice versa.  As possible, this will be changing a single variable.  

## SKY Page Add-Ins
Some of these utilize SKY Page Add-Ins to extend the functionality of BBCRM / Altru.  These are available to Altru as well as BBCRM in Blackbaud Cloud Operations with BBID enabled.  Those BBCRM customers can also embed these directly within BBCRM. For a brief synopsis and links to more details, see [SKYPageAddIns.md](./SKYPageAddIns.md) . 

## Support
As with all examples in this repository, support is given exclusively via the Microsoft Power Platform discussions at https://community.blackbaud.com/forums/viewcategory/586 (URL accurate as of the time of this writing).  This can be done either via replying to the original post dicussing a specific example or via a new discussion and "tagging" the author.  Direct messages to the author will be redirected back to the main discussion area. 

## Disclaimer
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
