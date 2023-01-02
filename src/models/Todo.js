import axios from 'axios';
const endPoint = `https://ga-super-crud.herokuapp.com/todos`;
class TodoModel {
  static all = () => {
    let request = axios.get(endPoint);
    return request;
  };
  static one = (id) => {
    let request = axios.get(`${endPoint}/${id}`);
    return request;
  };
  static create = (todo) => {
    let request = axios.post(endPoint, todo);
    return request;
  };  
  static delete = (todo) => {
    let request = axios.delete(`${endPoint}/${todo._id}`)
    return request;
  };  
};

export default TodoModel;