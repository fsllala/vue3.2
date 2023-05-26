import { defineStore } from "pinia";
import { getCityAll } from "@/services/city/city.js";
import {Types} from "../enum";
export const useCityStore = defineStore(Types.city, {
    state() {
        return {
            allCitys: {},
            selectedCity: {},
        }
    },
    getters: {},
    actions: {
        async fetchAllCitysData() {
            const res = await getCityAll();
            this.allCitys = res.data;
        },
        getSelectedCity(city) {
            this.selectedCity = city;
        }
    },
})

