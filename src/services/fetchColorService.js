import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    return(axiosWithAuth());
}

export default fetchColorService;