const jsonData = `
{
    "users": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "address": {
                "city": "New York",
                "zipcode": "10001"
            }
        }
    ],
    "products": [
        {
            "id": 101,
            "name": "Laptop",
            "price": 999.99
        },
        {
            "id": 102,
            "name": "Smartphone",
            "price": 499.99
        }
    ]
}
`;

//  parse JSON data into JavaScript objects
const parsedJSON = JSON.parse(jsonData);
// log the parsed data to the console
console.log(parsedJSON);
