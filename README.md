### MyFoodApp

A simple React site for food & nutrition logging.

## Built With

`node v12.4.0`
`npm 6.9.0`
`react 16.9.0`

## Steps To Get Started

Check it out at https://jasonkalmeida.github.io/myfoodapp !

Or, you can set up a localhost with the following commands in the directory.

`npm install`
`npm start`

And then you should have a localhost running!

## Technical Requirements

This frontend project covers the following technical requirements:

- Display lists of food a user has eaten, by meal, for a single day
- Display the caloric value and nutritional information of each food item
- Display an overall summary of that day's nutrition
- Allow the user to add and remove food items
  - There is a "mini-DB" provided that currently contains  food items such as a Quarter Pounder, French Fries, Waffles, and a Grilled Chicken Sandwich (please judge this application and not my arguably poor food choices)
  - The user is also free to add their own custom food items
- Allow the user to switch between days
  - There is another "mini-log" that has 2 days of logs. Unfortunately, without a backend service it proved to be a little too hacky to maintain edits to logs, so the logs reset to their initial state upon switch
- Provide a user with a responsive design that works great on mobile devices, tablets, or desktops!

## Tests Performed

- Basic end-to-end flows for the above requirements were tested on Safari, Chrome, and Firefox on Mac as well as Safari on iOS.
