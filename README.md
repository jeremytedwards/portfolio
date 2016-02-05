## Week 1:
Build out the initial files and include some of the methods learned during the group assignment.

## User Stories: Minimum Viable Product (MVP)
Let these user stories guide your development:
  1. As a developer, I want my site to use valid and semantic markup, so that employers will love me.
  2. As the creator, I want the page to link to my social and GitHub pages, so that visitors can follow me, and I can build my audience.
  3. As a developer, I want portfolio items displayed with a repeatable template, so that I can reuse it, and abstract out the details for individual projects.

## User Stories: Stretch Goals
  1. As a visitor, I want the site to look reasonable, so that I can read it on any device.
  2. As a visitor, I want the portfolio to show the newest projects on top so that I can easily see the developers recent work.
  3. As a visitor, I want relative timestamps on projects to give me a idea of how many days ago something was created.

## Technical Requirements
  - Use good Object Oriented code: Create a constructor function for projects.
  - Leave as little in the `window` (global) namespace as possible: attach functions to objects, etc.
  - Use jQuery to `clone` the example markup for each project, as you add additional content.
  - Your Project prototype should have a `.toHtml()` function that adds new data to the DOM.
  - To make it look better, include basic styles: a css reset, content in a single centered column, reasonable margins, etc.


## Week 2:
Create a single page web application. Using jQuery/JS to allow the page to show|hide content when menu items are clicked.

## User Stories: MVP
  1. As the creator, I want the Home and About nav links to act as tabs, so my story is revealed FAST.
    - This means your links to NOT navigate to a new page.
    - Instead, your "single page app" shows only the section related to the navigation tab that is selected.
    - You can use data- attributes to associate a content section with a particular tab
    - Then use jQuery so when the tab is clicked, you hide all the sections, then reveal the associated section only.
  2. As a reader, I want the portfolio to use a nice color scheme, so that it stands out visually.

## User Stories: Stretch Goals
  1. As a reader, I want project descriptions truncated to the first paragraph so that I can easily scroll though the whole list.
  2. As a reader, I want to click the "More" button so that I can expand the entire description.
  3. As a reader, I want projects filterable by category so that I can review just the things that interest me.

## Technical Requirements
  - Use event delegation whenever appropriate.
  - Add your filters to the Nav section.
  - Do as much work as you can with advanced selectors, rather than littering your markup with classes and ids.
  - When classes and IDs are needed, pick semantic names. There is to be no `$('#content .content')` nonsense!
  - Add color and icons where appropriate.


## Week 3:
Add functionality to the site to make it more responsive.

## User Stories: MVP
  1. As a visitor, I want the images to be responsive, so that content stays properly proportioned.
  2. As a visitor, I want the viewport properly sized, so that content fits all the size I have available.
  3. As a visitor, I want the primary nav to be responsive, so that I can get around using any device.

## User Stories: Stretch Goals (adapt to fit your portfolio's design)
  1. As a visitor, I want to see projects one per row on mobile, so that I can read the detail easily.

## Technical Requirements
  - Be sure to use proper `viewport` settings.
  - Use mobile-first design principles when adding CSS.
  - Add new styles in any media queries as needed to make the page look good on desktop screens.


## Week 4:
Add SMACSS and Handlebars.js to your portfolio project

## User Stories: MVP
  1. As a developer, I want to use Handlebars for my project template, so that I can include new projects more easily.
  2. As a developer, I want my CSS styles to follow SMACSS organization, so that I know where to look for creating and editing styles.

## User Stories: Stretch Goal
  1. As a visitor, I want the site to use great typography, so that I have an enjoyable reading experience.
  2. Set up your h1, h2, h3 elements according to a type scale.
  3. Include some good fonts, that work well together.

## Technical Requirements and Grading Rubric
   - Add Handlebars to your blogging system.
   - Organize your CSS code according to SMACSS, with at least a file for base, layout, and modules.

## Helpful Resources
   - Handlebars: http://handlebarsjs.com
   - SMACSS: https://smacss.com/
