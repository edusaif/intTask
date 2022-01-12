# Task Explain

### Problem 1 Task
#### API
- Get all folders `/folder`
- Create a new folder and Update parant folder `/folder/create`
```
Example of data for post request
{
    "folderName": "4u9d48093459fu9uv8g945g9",
    "parantFolderId":  "89fer98g493439qu943g943g"
}
```
- Delete  folder `/folder/delete`
```
Example of data for delete folder
{
    "folderName": "4u9d48093459fu9uv8g945g9",
    "parantFolderId":  "89fer98g493439qu943g943g"
}
```


### Problem 2 Task
#### API
- Get all Orders `/order`
```
Sample Response

{
    "orderItems" : [
        {
            "quantity": 2,
            "product" : "Banana"
        },
        {
            "quantity": 4,
            "product" : "Apple"
        }
    ],
    "phone": "+8801843254531",
}

```
- Create a new order with order items `/order/create`
```
Example of data for post request
{
    "phone": "8801843254531",
    "orderItems": [
        {
            "product": "Banana",
            "quantity": "2"
        },
        {
            "product": "Apple",
            "quantity": "4"
        }
    ]
}
```

#### Note: All api response data and request data are JSON Format

