---
sidebar_position: 15
---

# Group Assignment: Deepdive into APIs

For the following tasks, create a live code example for the task implementation and, additionally, create a short Word document highlighting and documenting your approach so that your peers can use this document as a reference when implementing the same on their own. The presentation should not be longer than 8 minutes. You have 80 minutes plus 10 minutes break of preparation time.

### **Task 1: API Rate Limiting & Authentication**

**Objective:** Deepen understanding of security mechanisms in REST APIs.

1. **Theory:** Research why rate limiting and authentication are important for REST APIs. What are common methods (e.g., API keys, OAuth, JWT)?
2. **Practice:**
   - Create a REST API with a protected route.
   - Implement API rate limiting (e.g., using `express-rate-limit` in Node.js or `Flask-Limiter` in Python).
   - Add simple authentication (e.g., JWT or API key).
3. **Presentation:** Explain your approach, show code examples, and discuss the pros and cons of the implemented methods.

---

### **Task 2: Caching in REST APIs**

**Objective:** Understand the importance of caching for API performance.

1. **Theory:** Research different caching strategies (client-side caching, proxy caching, server-side caching with Redis or Memcached).
2. **Practice:**
   - Create a REST API with a route that loads data from a slow source (e.g., a file or an external API).
   - Implement server-side caching with Redis or a similar tool.
   - Compare response times with and without caching.
3. **Presentation:** Explain how your caching works and show performance improvements with measurements.

---

### **Task 3: Error Handling & Logging in REST APIs**

**Objective:** Learn the importance of structured error handling and logging for robust APIs.

1. **Theory:** Research best practices for API error handling (HTTP status codes, exception handling, error logging).
2. **Practice:**
   - Create a REST API with multiple endpoints.
   - Implement robust error handling (e.g., try-catch blocks, error classes, specific HTTP status codes).
   - Add logging (e.g., using Winston in Node.js or Python’s logging module).
3. **Presentation:** Demonstrate how your error handling works, show log examples, and discuss best practices.

---

### **Task 4: API Monitoring & Health Checks**

**Objective:** Learn about monitoring tools to track API performance and availability.

1. **Theory:** Research methods to monitor APIs (health check endpoints, tools like Prometheus, Grafana, or the ELK stack).
2. **Practice:**
   - Create a REST API with a health check endpoint (`/health`).
   - Integrate your API with a monitoring tool (e.g., Prometheus + Grafana or a simple logging solution).
   - Simulate API failures and demonstrate how monitoring helps.
3. **Presentation:** Showcase the implemented solutions and explain how monitoring tools are used.

---

### **Task 5: Asynchronous Processing with Message Queues**

**Objective:** Understand how asynchronous processing works with message queues.

1. **Theory:** Research why asynchronous processing is important. What are common message queues (RabbitMQ, Kafka, Redis Streams)?
2. **Practice:**
   - Create a REST API that triggers a time-consuming task (e.g., image processing or large database queries).
   - Decouple processing using a message queue (e.g., RabbitMQ or Redis Queue).
   - Implement a separate worker process to handle queued jobs.
3. **Presentation:** Explain your concept, show the code, and compare performance with and without a message queue.

---

### **Task 6: API Versioning & Documentation**

**Objective:** Learn how to version and document APIs.

1. **Theory:** Research API versioning methods (URL versioning, header versioning, media type versioning).
2. **Practice:**
   - Create a REST API with at least two versions (`v1` and `v2`).
   - Document your API using Swagger/OpenAPI.
   - Create a small frontend or demo to show the differences between `v1` and `v2`.
3. **Presentation:** Showcase your versioning approach, present the documentation, and discuss the benefits.
