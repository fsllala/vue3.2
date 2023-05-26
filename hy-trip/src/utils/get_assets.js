/** 动态引入图片地址
 * 采用 new URL()方式
 * 第一个参数,相对当前模块(参数二)的路径
 * 第二个参数,当前模块的路径,固定写法: import.meta.url
 * 
 * 这里抽取出来的utils第一个参数路径和直接在tabbar.vue中写的路径不一样,
 *  因为第一个参数是相对于当前模块的路径,
 */
export const getAssetsUrl = (image) => {
    return new URL(`../assets/image/${image}`, import.meta.url);
}