---
sidebar_position: 10
---

# Use Cases for the assignment

1. Online Course Enrollment System
   Use Case: Build a system that allows students to browse, enroll, and track courses. Instructors can upload course materials, and admins can manage the entire system.

Instructions:

Design the main entities: Think about the key components of the system (e.g., students, courses, enrollments, instructors, materials, progress tracking, etc.).
Define possible user roles: Identify the different types of users (e.g., students, instructors, admins) and the tasks they need to perform.
User Stories:
Consider actions a user might want to perform (e.g., enrolling in a course, tracking progress, uploading materials).
Define a few key interactions and use these to write user stories.
Endpoints:
Identify the core functionalities and define endpoints (e.g., course list, enrollment, course material upload).
Consider how to organize data retrieval, creation, and updates (e.g., GET, POST, PUT).
Additional Logic: Think about how to handle enrollments (e.g., limited course capacity, waiting list) and progress tracking for each student. 2. Distributed Hotel Booking System
Use Case: Create a system for users to search for, book, and cancel hotel room reservations. Hotel managers should be able to update room availability and pricing.

Instructions:

Entities to Consider: Identify key entities in the system, such as hotels, rooms, bookings, users (travelers), and admins.
User Roles: Define who will use the system (e.g., travelers, hotel managers, admins) and their tasks (e.g., booking rooms, checking availability, modifying listings).
User Stories:
Think about how a traveler might interact with the system (e.g., searching for rooms, canceling a booking).
How should a hotel manager handle room availability updates?
How will the system track reservations and pricing changes over time?
Endpoints:
Focus on endpoints for searching hotels, viewing room details, making bookings, and modifying reservations.
Consider security and role-based access for sensitive actions like modifying availability or viewing user data.
App Logic:
Handle things like booking conflicts, room availability, and pricing updates.
Consider how to manage booking histories and cancellations. 3. Collaborative Note-Taking Application
Use Case: Develop an application that allows users to create, edit, and share notes. Multiple users should be able to collaborate on the same note in real-time.

Instructions:

Core Entities: Consider entities like notes, users, folders, and permissions (for sharing and accessing notes).
Roles and Permissions: Determine user roles (e.g., authors, viewers) and their rights to create, edit, or share notes.
User Stories:
Identify how users might interact with notes (e.g., creating new notes, sharing with others).
Think about features like real-time collaboration, version control, and organizing notes into folders.
Endpoints:
Define endpoints for creating, viewing, editing, and sharing notes.
How will users share notes, and how will the system handle access control?
What API endpoints will enable collaboration in real-time (e.g., WebSockets)?
App Logic:
Think about how to implement collaboration features, including conflict resolution for simultaneous edits.
Handle note versioning and how the system will track changes over time. 4. Social Media Analytics Dashboard
Use Case: Create a system that analyzes user engagement, trending posts, and overall activity on a social media platform.

Instructions:

Entities to Define: Think about users, posts, engagement metrics (likes, shares, comments), and reports.
Roles: Determine roles like analysts, admins, and users. Each may have different access to data (e.g., admins view all data, while users only see their engagement).
User Stories:
Consider how different roles will interact with the analytics dashboard (e.g., a user might see their engagement stats, while an admin tracks trends across the platform).
What types of reports should users generate? Are these real-time or historical?
Endpoints:
Focus on endpoints for retrieving analytics, viewing post engagement, and generating reports.
Consider filtering options (e.g., viewing trends by date, user, or engagement level).
App Logic:
Think about how to aggregate and calculate engagement data.
What additional logic is needed to display trends and insights (e.g., ranking posts by engagement or predicting future trends)? 5. E-Commerce Order Processing System
Use Case: Design a system to manage product listings, process customer orders, and handle inventory across multiple warehouses.

Instructions:

Core Entities: Identify entities like products, orders, customers, payments, and inventory.
User Roles: Think about different users like customers, admins, and warehouse managers.
User Stories:
What tasks will customers perform (e.g., browsing products, placing orders)?
How will admins manage inventory and order fulfillment?
What happens if there’s an issue with inventory levels or order processing?
Endpoints:
Identify endpoints for browsing products, placing orders, viewing order status, and updating inventory.
How will users track their orders, and how will warehouse managers update stock levels?
App Logic:
Consider how to handle out-of-stock items, managing inventory across multiple warehouses, and processing payments.
Think about how the system will handle promotions, discounts, and shipping. 6. Peer-to-Peer File Sharing System
Use Case: Create a decentralized file-sharing system where users can upload, download, and securely share files with others.

Instructions:

Entities to Define: Focus on entities like users, files, permissions (for sharing), and file history (downloads).
Roles: Consider different user roles (e.g., file uploader, downloader, admin).
User Stories:
What actions will users take (e.g., uploading files, sharing them securely)?
How will users track who has downloaded their files?
What actions will an admin be able to perform (e.g., monitoring uploads)?
Endpoints:
Identify endpoints for uploading, downloading, sharing files, and managing user access.
Think about security features (e.g., user authentication, file sharing permissions).
App Logic:
Consider how to ensure secure peer-to-peer file transfers, such as using encryption or distributed networks.
Think about how to handle file sharing restrictions and download tracking.
