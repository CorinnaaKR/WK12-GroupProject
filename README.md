# Week 12 Assignment

## story based learning tool focused on the prevent scheme

Thursday: After choosing groups, we were put in breakout rooms and began discussing ideas. We agreed on the idea and then broken down the planning tasks. We created a trello board for tasks to be completed and assigned, a google doc for our communication plan, user stories and general planning + mark scheme, a figma for the wireframe, canva for the web site map with an initial table to track what information we would need for the database, and then DrawSQL to template the database structure.
Steph did the canva (site map) & set up documentation (trello, google docs ect.)
Corinna did the figma (wireframe)
Callum did the draw SQL.
Once a large portion of the paperwork was done, Corinna started researching radicalisation and creating a story template with setting, context, signs and contacts - all the information needed for creating the story. Steph has been looking through the ink documentation and structure, as well as alternative methods of structuring the website if we can’t use ink or struggle to make it compatible with the website. Callum downloaded ink and started playing around with it to gauge structuring, compatibility and any plugins it would need.

Friday Plan: Test repo with Ink and deployment - deep div into Ink documentation and creating a story structure - based on how ink creates structure when coding the story e.g. knotts, diverts ect.

Friday:
Callum to use the test repo he made yesterday to figure out how to pull/highlight sections of the text or key words and store them in a side bar for the user to review later.
Steph to deep dive into ink documentation with a focus on components and features, looking for anything that would be useful to have in our story - looking a the demons provided by an online tutorial from codebar.
Corinna also to deep dive into next documentation with focus on story story and layout - using components to create story template structure

We used a youtube tutorial produced by code bar on how to use inky as a reference point.

Callum successfully managed to select text to put into a sidebar that displayed on the page and could be referred back to. We as a team discussed dynamic routes and folder structure which Steph then added into canva. Corinna began templating the story in inky, researching to see if there's a way to display text messages as an actual text thread. Before lunch, we were all reading the documentation to establish structures, features and any limitations there might be.

Callum to play around with the test repo and css styling for the ink components for mobile.
Steph to look at accessibility features we might include, such as aria labels - screen reader.
Corinna to continue writing first draft of the story ready for ready through at the end of the day so group can collaborate on decide choices within the story.

At the end of the end, we did a run through of the first draft of the story, made some word changes, and went through the choices to check if all group members agreed on the content. Callum confirmed react avatar would be easy to import and use as a component. Steph drew up our file structure template in canva to map out our files and dynamic routes.

At the very end of the day, Corinna set up the repository and added Callum & Steph as collaborators ready to hit the ground running on Monday.

Monday:
Monday morning, we established a plan for the day and divided up tasks.
Callum was on creating the file structure in the repo, and then agreed to move onto clerk and setting it up. Corinna had structured the story in ink over the weekend but couldn’t see it in the output window so she put it in discord, and Steph agreed to have a play about with it to get it working and then would get it imported to the repo. Corinna agreed to set up the supabase tables, put the secret keys in the repo then get it deployed on vercel.

Corinna had a couple issues setting up the git repo so had to redo the setup three or four times due to errors with git. Callum completed the file set up and pushed it all to the repo, small error with deploying on vercel due to the change of name with middleware, due to there being an update to next which changed the middleware name to proxy. It errored again due to needing to add the clerk keys to vercel. Vercel then deployed without issue.

Corinna set up the tables, ready to move on to querying the database. Steph finished making edits and changes to the story and imported it to the repo. Callum set about implementing clerk.
Corinna made several changes to the database through on going discussions with the team
trying to get the tables to match the clerk set up. However, the clerk info wasnt rendering in the database tables so Corinna and Callum spent the afternoon searching the code for the reason why. Steph got working on the feedback form and comments for the users to talk about how they found the experience of the website.

Tuesday:
Started Tuesday by agreeing tasks but also asked for Bertie to help with our database issue. Callum had tried testing the issue by creating another repo and importing all the packages again (our error says its trying to call pg before its been initalized) and he had no issues. Corinna went through the trello board, added tasks based on tasks we'd already completed. Everyone did pull of the code to start from the same point.

We were still having issues with connecting the database with clerk. We double checked all the code, went through the error messages, Callum tried multiple fixes in a test repo he made and he couldnt replicate the errors. Corinna tried resetting the transaction pooler and database password but that didn't change anything. Corinna then tried moving the tables into a different database and then resetting the URL and password again. This seemed to fix the problem as clerk data then began appearing in the tables. While Corinna and Callum were doing that, Steph was working on the comment form to make it serverside ready for querying the database. Callum then moved to fixing an error with loging page.

Tasks for the rest of the day:
Callum - user profile
Steph - feedback and comments forms
Corinna - Error page

Wednesday

We started Wednesday all pitching to solve the error problem with the sotry when it loads. Callum tried addiung a defer but that didnt change anything. Bertie suggested using an iframe which we tried but that created a duplicate of the nav bar, and the code still errored. We also asked joe and he had a look through our code, pointed out that there was a loop around the sign up page, and then suggested we use 'useState' and 'onLoad'. We made those changes and it fixed the problem. Corinna agreed to work on the metadata, and also design a logo to use in the metadata. Steph agreed to look at completeing the home page and about page.

Before lunch we managed to solve the story load error, Corinna finished the metadata and a logo - although encountered an error when trying to add metadata to the story page because its a page that has 'use client'so Corinna removed it and just kept the metadata on the layout page. Steph created the extra pages and added them to the navbar ready for coding after lunch.

After lunch agreed tasks:
Steph - Home Page & About Page
Corinna - Resources Page
Callum - Styling the story page and adding instructions for the snippets and how to use them to the user profile page.

Corinna ran npm run dev and was greeted with an error saying the page couldnt connect due to clerk being keyless and Econnrefused. When the error showed on the page is came down to there being an issue with the naming of the middleware file being called proxy (part of an update in vs code). Corinna changed the file name back to middleware and the page ran without issues. However Callum and Steph found they could both run the page with the file named proxy without issues.

Callum discovered an issue with the story page in that once the sotry was loaded, if the user leaves the story page then tries to go back into it the story doesnt load again. As a group we tried to troubleshoot, then ended up asking Bertie. Callum and Bertie tried troubleshooting, while Corinna worked on the resources page and Steph worked on the Home & About pages.

Thursday
We started the day byt agreeing tasks: Callum wanted to continue orking on the erro0r from yesterday, steph is going to start of the styling for the home home and the abou page. Corinna is going to finish the resources page and then begin styling it.

We asked for help from Manny for the refresh issue and he had a couple of suggestions, Bertie also joined, but after experimenting with useEffect and useState for a while, Manny said a better solution given the time constraits would be to hide the header while the user is in story mode and then redisplay it when the user is finished with the story. Callum set about trying to do that, with Corinna and Steph pitching in solutions. Steph finished styling the about and home page, then moved on to styling the user page. Corinnas finished the resources page and then set about styling the resources page.

Before lunch, Callum is still trying to make it so that the user can't navigate off the story page while in the story. Steph finished styling the story , home and about pages. Corinna finished styling the resources but found that some of styling elements were affecting other pages so the team collaborated to solve those issues. Steph and Corinna are also pitching in to help Callum.
