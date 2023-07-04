import axios from "axios";

//Spring API Endpoint Config

const URI = "localhost:8080/api";


//Products API Calls

const getProducts =() => axios.get(URI+"/product/getall")

const findProduct = (id)=> axios.get(URI+`/product/${id}`)

const addProduct = (product)=> axios.post(URI+"/product/add",product)

const updateProduct = (id,product) => axios.put(URI+`/product/edit/${id}`,product)

const deleteProduct = (id)=> axios.delete(URI+`/product/delete/${id}`)



// User API Calls

const getUsers = () => axios.get(URI+"/user/getall")

const findUser = (id) => axios.get(URI+`/user/find/${id}`)

const addUser = (user) => axios.post(URI+"/user/add",user)

const updateUser = (id,user) => axios.put(URI+`/user/edit/${id}`,user)

const deleteUser = (id) => axios.delete(URI+`/user/delete/${id}`)

const loginUser = (user) => axios.post(URI+"/user/login",user)

const resetpassUser = (user)=> axios.post(URI,"/user/resetpassword",user)



// Admin API Calls

const getAdmins = () => axios.get(URI+"/admin/getall")

const loginAdmin = (admin) => axios.post(URI+"/admin/login",admin)

const addAdmin = (admin) => axios.post(URI+"/admin/add",admin)

const resetpwdAdmin = (admin) => axios.put(URI+"/admin/resetpassword")



// Orders API Calls

const addOrder = (order) => axios.post(URI+"/orders/add",order)

const getOrders = () => axios.get(URI+"/orders/getall")

const findOrders = (id) => axios.get(URI+`/orders/find/${id}`)