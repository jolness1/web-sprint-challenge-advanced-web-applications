import { axiosWithAuth } from "./axiosWithAuth";

export const fetchColorsAxios = () => {
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