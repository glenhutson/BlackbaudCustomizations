# BBCRM and Altru Customizations
The examples found here focus on the SKY APIs for BBCRM and Altru released in 2023.  Many of these, at least initially, rely on the "Send HTTP Request" action in the SKY Add-Ins Connector.  See [Send-HTTP-Request.md](./Send-HTTP-Request.md) for more information. 

> Note that for BBCRM Customers, you must be on Service Pack 33 and in Blackbaud Cloud Operations to take advantage of SKY APIs at this time. 

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

## Support
As with all examples in this repository, support is given exclusively via the Microsoft Power Platform dicussions at https://community.blackbaud.com/forums/viewcategory/586 (URL accurate as of the time of this writing).  This can be done either via replying to the orignal post dicussing a specific example or via a new dicussion and "tagging" the author.  Direct messages to the author will be redirected back to the main disscussion area. 

## Disclaimer
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
