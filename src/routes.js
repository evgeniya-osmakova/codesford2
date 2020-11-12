const host = '';

// Create new task
// POST /tasks
// { task: { text: 'your text' } }

// Get List Of Tasks
// GET /tasks

// Get Task
// GET /tasks/:id

// Remove Task
// DELETE /tasks/:id

export default {
  registrationUrl: () => [host, '/users/register'].join('/'),
  signInUrl: (id) => [host, '/users/login'].join('/'),
};
