# Basic-Backend

for a purpose

## Deposit and withdrawal system

- Register User

localhost:4000/registerUser
  
  body :
  
    {
      "userName" : "user_1"
    }

  response
  
    {
      "message": "user created",
      "user": {
        "userName": "user_1",
        "createAt": "2022-11-03T17:09:26.260Z",
        "balanceAmount": 0,
        "_id": "6363f6586b0448d56a557f06",
        "__v": 0
      }
    }

- Deposit

localhost:4000/deposit
  
  body :
  
    {
      "userId" : "6363f6586b0448d56a557f06",
      "amount" : 10
    }    
  response

    {
      "message": "amount Deposited",
      "totalAmount": 40
    }

- Withdraw

localhost:4000/withdraw
  
  body :
  
    {
      "userId" : "6363f6586b0448d56a557f06",
      "amount" : 10
    }    
  response 1

    {
      "message": "withdraw successful",
      "totalAmount": 0
    }
    response 2     
    {
      "message": "withdrawl amount exceed than current amount"
    }
