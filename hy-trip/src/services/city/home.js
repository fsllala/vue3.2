import FSLRequest from "../index";

// 热门建议
export function hotSuggest() {
    return FSLRequest.get({
        url: "/api/home/hotSuggests"
    })
}

// 推荐类别
export function recommendedCategories() {
    return FSLRequest.get({
        url: "/api/home/categories"
    })
}
// 房屋列表
export function listOfHouses(params) {
    return FSLRequest.get({
        url: "/api/home/houselist",
        params,
    })
}   