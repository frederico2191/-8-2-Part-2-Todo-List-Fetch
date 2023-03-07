export const fetchTasks = () => (
    fetch('https://assets.breatheco.de/apis/fake/todos/user/fredericorodrigues', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
)

export const updateTasks = (body) => (
    fetch('https://assets.breatheco.de/apis/fake/todos/user/fredericorodrigues', {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
)