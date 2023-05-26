import FSLRequest from "../index";
export function homeDetails(params) {
    return FSLRequest.get({
        url: "api/detail/infos",
        params
    })
}


