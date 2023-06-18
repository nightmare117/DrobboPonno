import axios from "axios";

const authService = {
    login: function (data) {
        return axios.post("/signup", data);
    },
    logout: function () {
        return axios.post(URL.auth.signout);
    },
    getAllDepartments(success, error) {
        axios
            .post(API.department.all)
            .then((responseData) => {
                success(responseData.data);
            })
            .catch((errorResponse) => error(errorResponse));
    },
    updateDepartment(success, error, data,id) {
        axios
            .post(API.department.list+id,data)
            .then((responseData) => {
                success(responseData.data);
            })
            .catch((errorResponse) => error(errorResponse));
    },
    signup(success, error, data) {
        axios
            .post('/signup', data)
            .then((responseData) => {
                success(responseData.data);
            })
            .catch((errorResponse) => error(errorResponse));
    },
    signin(success, error, data) {
        axios
            .post('/signin', data)
            .then((responseData) => {
                success(responseData.data);
            })
            .catch((errorResponse) => error(errorResponse));
    },
};
export default authService;