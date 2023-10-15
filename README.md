# Overview

This template provides a responsive web app with a fully customizable banner, a top bar, navigation links, main content area, and bottom bar.  It also comes with additional goodies like icons and links for social media, placeholders for contact details (address, e-mail, phone numbers), etc.  It also comes with the Dark Mode option.

## Important Changes from V1.1.3 to V1.2.0
 
* Upgraded to latest versions of Dependencies

## Using the template

To create a WebApp with this template, you can run:

### `npx create-react-app [app-name] --template cra-template-layout-with-navigation`

This will create a new react app with the name as app-name.  It will install all required dependencies also ("react","react-dom","react-router","react-router-dom", and "react-scripts").

Once you install, run `npm start` for Windows developers or `sudo npm start` for Mac or Linux developers to view it in the browser.  This will open the app at [http://localhost:3000/](http://localhost:3000/).

## Features of the template

Following are the features of this React Web App template.

### Core Application Structure

The created Web app will have a Tool Bar at the top, a main content section in the middle, and a bottom bar. You can uncomment line 10 of \src\components\UI\Layout\Layout.js if any special announcements are to be shown. This will enable a fully customizable banner above the Tool Bar where you can show special announcements and it is closable.

#### Tool Bar
The Toolbar contains place holders for a Logo, Name of the WebApp, a tagline for the WebApp, e-mail, phone numbers, and Social Media links (icons) for Facebook, Twitter, YouTube, and Instagram. Please change the Name of the WebApp and tagline for the WebApp by customizing the \src\helpers\websiteDetailsConfig file. The Toolbar also contains Dark Mode icon and that will turn the WebApp's theme to Dark Mode.

The Toolbar also contains a menu section with place holders for 5 menu links.  If you need more menu items, you will need to customize the \src\components\UI\Layout\ToolBarWrapper\Toolbar\Navigation\NavigationItems\
NavigationItems.module.css for increasing the number of grid items.  Also, you will need to update the \src\helpers\menuHelper and \src\helpers\navHelper files appropriately.

#### Main Content
The Main Content section is rendered through the components in the \src\components\Content folder.  Each of the components corresponds to the corresponding menu item router link, as can be seen in the \src\helpers\navHelper file.  Essentially, it renders an empty div and you are free to add any content you want to in each of these components.

#### Bottom Bar
The Bottom Bar comes with four sections - Contact Us section (for Physical Address), Email/Call Section, Social Media Section, and Other Links (place holder for any other links that you may have in your application - for example a Terms & Conditions page, etc).
The Bottom Bar also has a placeholder for the Copyright statement.

### Responsive out of the box!!

The application renders fully responsive.  On the Mobile version, it will forego the TopBar contact details and social media icons and Menu display.  Instead, a hamburger menu icon is provided and upon touching it, the menu opens up for navigation.

## Build the app for production: `npm run build`
After you have modified the placeholders and main content, it's time to build the app for production to the build folder! By running this command, it correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

See the section about [deployment](https://create-react-app.dev/docs/deployment/) for more information.

## Here's how the website looks! (Updated)

![Screen Shot Light Mode](./template/public/images/ScreenShotDef.png?raw=true "Screen Shot Light Mode")
<figcaption>Desktop View (Light Mode/Default)</figcaption>

<br>

![Screen Shot Dark Mode](./template/public/images/ScreenShotDark.png?raw=true "Screen Shot Dark Mode")
<figcaption style="text-align: center;">Desktop View (Dark Mode)</figcaption>

<hr>

![Screen Shot Light Mode Phone](./template/public/images/ScreenShotDefMob.png?raw=true "Screen Shot Light Mode Mobile")
<figcaption style="text-align: center;">Mobile View (Light Mode/Default)</figcaption>

<br>

![Screen Shot Dark Mode Phone](./template/public/images/ScreenShotDarkMob.png?raw=true "Screen Shot Dark Mode Mobile")
<figcaption>Mobile View (Dark Mode)</figcaption>

## Provide your Valuable Feedback

I am 16 years old and this is my first React Application Template.  So, please be kind in your feedback.  You can send all your feedback to [my e-mail](mailto:surya.kasibhatla@gmail.com)! Thank you!