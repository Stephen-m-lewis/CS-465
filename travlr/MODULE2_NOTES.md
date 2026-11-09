# CS 465 - Module Two

I used my Module One Travlr project as the starting point. For this module, I moved the routes and views into `app_server`, added controllers for the home and travel pages, and set up the `/travel` route. I also split the travel page header and footer into Handlebars partials so I do not have to keep the same code in multiple places.

## How I tested it

1. Run `npm install` if dependencies are missing.
2. Run `npm start` from the `travlr` folder.
3. Open `http://localhost:3000/travel` and check that the travel page, images, and navigation load.
4. Open `http://localhost:3000/` to check the original root route.

The original static `public/travel.html` is still there, as the guide instructs for this module. The new `/travel` address uses the Handlebars template.

I still need to run these checks on my Mac before submitting.
