import { axios } from "../../core";

export default {
    upload: (files) => {
        const formData = new FormData();

        formData.append("image", files);
        return axios.post('/files', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
};