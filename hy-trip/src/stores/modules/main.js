import { defineStore } from "pinia";
import { Types } from "../enum";

const startDate = new Date();
const endDate = new Date();
endDate.setDate(startDate.getDate() + 1);

export const useMainStore = defineStore(Types.theMain, {
    state: () => {
        return {
            showLoading: false, //loading
            startDate: startDate,
            endDate: endDate
        }
    },
    getters: {},
    actions: {}
})