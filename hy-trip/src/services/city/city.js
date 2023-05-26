import FSLRequest from "../index";

export function getCityAll() {
    return FSLRequest.get({
        url: "/api/city/all",
    })
}