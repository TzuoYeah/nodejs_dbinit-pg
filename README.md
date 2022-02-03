# PostgreSQL init
`node dbinit`  
用來建立Postgre的資料表與seed資料。
# 使用步驟
1. 建立.credentials.development.json，設定組態。
2. 在create-script 加入新增table的SQL。
3. \[可選]在seed新增需要的初始資料。  
# 檔案結構
### .credentials.development.json
資料庫的組態  
``` json
{
    "postgres":{ 
        "user": "",
        "host": "",
        "database": "",
        "password": "",
        "port": ""
    }
}
```
### create-script
放建立Table的SQL  
### seed
放預設初始資料，不同table用不同方法  