const baseUrl = `${process.env.REACT_APP_API_URL}/todos`;

// Fetch todos from url then return response as json
export const loadTodos = () => {
    return fetch(baseUrl).then((res) => res.json());
}
// Fetch todos by id
export const getTodo = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json);
}