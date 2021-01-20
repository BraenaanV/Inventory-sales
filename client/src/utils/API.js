import axios from 'axios'

export default {
    findAll: () => axios.get("/api/inventory"),
    create: (newItem) => axios.post("/api/inventory", newItem),
    findById: (id) => axios.get("/api/inventory/" + id),
    update: (editedItem) => axios.put("/api/inventory/" + editedItem._id, editedItem),
    remove: (id) => axios.delete("/api/inventory/" + id),
}