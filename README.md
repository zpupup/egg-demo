# Initialize the database

`cd docker-compose && docker-compose up -d`

## Sql script
`docker-compose/mysql/initdb.d/inventory.sql`

# Start server

`npm run dev`

# Test path

## Route matching rule
`http://localhost:7001/inventories/:id/order`

## Example
- [item1](http://localhost:7001/inventory/item1/order)
- [item2](http://localhost:7001/inventory/item2/order)

