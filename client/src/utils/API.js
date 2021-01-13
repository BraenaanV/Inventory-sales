import axios from 'axios'

export default {
    findAll: () => axios.get("/api/inventory"),
    create: (newItem) => axios.post("/api/inventory", newItem),
    findById: (id) => axios.get("/api/inventory/" + id),
    update: (id) => axios.get("/api/inventory/" + id),
    remove: (id) => axios.get("/api/inventory/" + id),
}