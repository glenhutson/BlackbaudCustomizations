# Send HTTP Request

Similar to various comperable actions in Microsoft Connectors (such as for [Sharepoint](https://learn.microsoft.com/en-us/connectors/sharepointonline/#send-an-http-request-to-sharepoint)), the [Send an HTTP Request available in the Blackbaud SKY Add-ins Connector](https://learn.microsoft.com/en-us/connectors/blackbaudskyaddins/#send-an-http-request) allows you to construct a REST API call to any SKY API endpoint (other than Payments related). This allows access to areas not available in Connectors while still leaving the heavy lifting of authentication to Power Automate.    

Though it does open up additional possibilities, it needs a bit of expereince in advanced features of Power Automate, such as working with JSON, the native _HTTP Request_ / _Parse JSON_ actions and working with Expressions. Though the intenet is that most examples will need little or no direct interaction with these areas, any modifications will need knowledge of these as well as the underlying API.   

Examples added here that utilize the _Send HTTP Request_ will include an "SHR" identifier. 

## Support and Disclaimer
See the [README.md](./README.md) file for information on support and disclamier. 