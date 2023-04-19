import http from '../http-common';


const create = data => {
    console.log('data',data);
    return http.post('/signup',data);

}

const Serices ={
    create
}
export default Serices;