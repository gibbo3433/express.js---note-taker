# E-Commerce Back-End 

## ####################

### User Story

- AS A manager at an internet retail company
- I WANT a back end for my e-commerce website that uses the latest technologies
- SO THAT my company can compete with other e-commerce companies

### Acceptance Criteria

- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database

## Issues identified and corrected

- Using "model" and "through"

I could not remember how to add a model into my route so I needed to look into the express documentation and also back some previous lessons. I taught myself then
how to include my models to associate other data.

- POST new data

I needed to look into how to code the correct data in the body in JSON to then post it to the correct category, tag or product

## Future work
  
- Add some additional categories into the data

I have added  Javascript //notes to help any future edits by making it easier to see what the different elements are in the code so that if any collaboration work will be done in the future, it will be easiser to track and change.

## Video Demonstration

- Link to full video demonstration
https://drive.google.com/file/d/1HpSOkWRlzPDqF8qVn_liAi4InJf2pAle/view

## Link to deployed application

N/A

## Authors and acknowledgment

Jordan Gibbs - Novice Coder

## License

N/A
