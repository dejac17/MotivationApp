const baseUrl = `${process.env.REACT_APP_API_URL}/todos`;

// Fetch todos from url then return response as json
export const loadTodos = async () => {
    const res = await fetch(baseUrl);
    return await res.json();
}
// Fetch todos by id
export const getTodo = async (id) => {
    const res = await fetch(`${baseUrl}/${id}`);
    return res.json;
}

// Create todo using post method
export const createTodo = async (todo) => {
    const res = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: todo.title,
            completed: todo.completed
        }),
    });
    return await res.json();
}

// Update todo using put method
export const updateTodo = async (todo) => {
    const res = await fetch(`${baseUrl}/${todo.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: todo.id,
            title: todo.title,
            completed: todo.completed
        }),
    });
    return await res.json();
};

// Delete using delete method
export const deleteTodo = async (id) => {
    const res = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
    });
    return await res.json();
}