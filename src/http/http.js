import axios from 'axios';
const api = import.meta.env.VITE_APP_URL
// axios.defaults.withCredentials = true



export default {
    md: {
        path: `${api}/md/md`,
        get: function () { },
        del: async function (fileName) {
            console.log(`${this.path}/${fileName}`);
            return await axios.delete(this.path, { params: { fileName: fileName } })

        },
        put: function () { },
        post: async function (info) {
            return await axios.post(this.path, { files: info.file }, {
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: (progressEvent) => {
                    info.onProgress(({ percent: (((progressEvent.loaded / progressEvent.total) * 100) || 0) }))
                },
            })
        }
    }
}


