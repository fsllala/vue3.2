import { onBeforeUnmount, onDeactivated, onMounted, ref } from "vue";
import _ from 'lodash';

export default function useScroll() {
    const reachBottom = ref(false);
    const clientHeight = ref();
    const scrollHeight = ref();
    const scrollTop = ref();
    const loadMore = _.throttle(() => {
        clientHeight.value = document.documentElement.clientHeight;
        scrollHeight.value = document.documentElement.scrollHeight;
        scrollTop.value = Math.round(document.documentElement.scrollTop);
        // console.log(1111);
        if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
            // homeStore.fetchListOfHousesData();
            reachBottom.value = true;
        }
    }, 100)

    onMounted(() => {
        window.addEventListener("scroll", loadMore,);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("scroll", loadMore);
    })
    onDeactivated(() => {
        window.removeEventListener("scroll", loadMore);
    })
    return {
        reachBottom, scrollTop
    };
}       