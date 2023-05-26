import { defineStore } from "pinia";
import { hotSuggest, recommendedCategories, listOfHouses } from "@/services/city/home.js";
import { Types } from "../enum";
export const useHomeStore = defineStore(Types.home, {
    state: () => {
        return {
            hotSuggestData: [], //热门建议
            recommendedCategoriesData: [],//推荐类别
            listOfHousesData: [], // 房屋列表
            currentPage: 1,
        }
    },
    getters: {},
    actions: {
        async fetchHotSuggest() {
            const res = await hotSuggest();
            if (res.errcode == 0) {
                this.hotSuggestData = res.data;
            } else {
                this.hotSuggestData = [];
            }

        },
        async fetchRecommendedCategories() {
            const res = await recommendedCategories();
            if (res.errcode == 0) {
                this.recommendedCategoriesData = res.data;
            } else {
                this.recommendedCategoriesData = [];
            }
        },
        async fetchListOfHousesData() {
            const params = {
                page: this.currentPage++,
            }
            const res = await listOfHouses(params);
            if (res.errcode == 0) {
                this.listOfHousesData.push(...res.data);
            } else {
                this.listOfHousesData = [];
            }
        }
    }
})
