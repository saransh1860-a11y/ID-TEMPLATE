# Security Specification for Aurum Studio

## Data Invariants
- A consultation lead must have a name, phone, and project type.
- The `createdAt` must be a server-side timestamp.
- The `status` must be 'pending' upon creation.

## The Dirty Dozen Payloads
1. Create with missing phone: `{"name": "John"}` -> DENIED
2. Create with invalid budget enum: `{"budget": "free"}` -> DENIED
3. Create with spoofed createdAt: `{"createdAt": "2020-01-01"}` -> DENIED
4. Create with status 'closed': `{"status": "closed"}` -> DENIED
5. Update an existing consultation (Public): -> DENIED
6. Delete an existing consultation (Public): -> DENIED
7. Read all consultations (Public): -> DENIED
8. Large name payload (resource exhaustion): `{"name": "A".repeat(2001)}` -> DENIED
9. Injecting extra fields: `{"name": "J", "isAdmin": true}` -> DENIED
10. Malformed ID: `/consultations/!!!@@@` -> DENIED
11. Path variable poisoning: `get(/consultations/SOME_HUGE_STRING)` -> DENIED
12. Read private lead (Public): -> DENIED
