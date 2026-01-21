Data storage:
- Database (json server)
- BFF (Backend for Frontend)
- Redux store

Application entities:
- User: Database (list of users), BFF (current session), Store (display in browser)
- User role: Database (list of roles), BFF (user session with role), Store (client use)
- Post: Database (list of posts), Store (display in browser)
- Comments: Database (list of comments), Store (display in browser)

Database tables:
- Users: id / login / name / password / registered_at / role_id
- Roles: id / name
- Posts: id / title / image_url / content / published_at
- Comments: id / author_id / post_id / content

BFF state structure:
- Current user session: login / password / role

Redux store schema (on client):
- user: id / login / roleId
- posts: array of post: id / title / imageUrl / published_at / commentsCount
- post: id / title / imageUrl / content / published_at / comments: array of comment: id / author / content / published_at
- users: array of user: id / login / name / registered_at / role
