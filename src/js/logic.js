export const fetchTasks = () => (
    fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
)

export const updateTasks = (body) => (
    fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
)