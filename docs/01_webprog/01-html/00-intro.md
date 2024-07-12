---
sidebar_position: 1
---

# What is Hypertext Markup Language (HTML)?

 Imagine you're at a fancy dinner party, and you're in charge of setting up the tables. Each plate, fork, knife, and napkin has a specific place and purpose. Hypertext Markup Language (HTML) is kind of like being the party planner for a webpage - so let's get the party started!

 To plan a fancy dinner party, we need labels - they help us to organize everything neatly so that each and every item has its own place (and also appears at the right location). Such a label might tell our guests where to sit, or indicate where the plates and cutlery should be - after all, we don't want the cutlery to be on the floor and the plate to be on the ceiling, right? So how can we ensure that everything goes exactly as planned? In HTML, we use so-called **tags** to indicate the position of items - just as we would use placement cards to indicate the seating of our guests:

 ![Guests as HTML Tags](/img/01_webprog/html_guests.png)

 In this example, you can see our very first HTML tags - these are subdivided into an **opening** and **closing** tag, where ```<guest1>``` is an opening tag and ```<\guest1>``` is its corresponding closing tag. The only difference between an opening and closing tag is the backslash ```\``` before the tag's name when using the closing tag.
 We can also nest tags within another tag, so that we can bring some more structure into our webpage. Keeping the example of our dinner party in mind, such a nesting of tags might look like the following:

 ![Guests as nested HTML Tags](/img/01_webprog/html_guests_table.png)

 Now we have a so-called **parent tag** (the table) and four children of that table, which are still representing our party guests. This nesting of tags (and therefore webpage components) is a crucial component of HTML and enables us to create webpages in a hierarchical manner - this leads to a webpage being represented as a tree-like structure, as the child tags can be considered child nodes of the parent tag in a tree representation:

 ![HTML tree example](/img/01_webprog/html_tree.png)