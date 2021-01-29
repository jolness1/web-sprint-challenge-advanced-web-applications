import axiosWithAuth from "./axiosWithAuth";

const fetchColorsAxios = () => {
    return axiosWithAuth()
        .get("/colors")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
}

export default fetchColorsAxios;