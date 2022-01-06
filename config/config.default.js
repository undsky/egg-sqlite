/*
 * @Author: 姜彦汐
 * @Date: 2021-04-21 16:24:04
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2022-01-06 13:29:14
 * @Description: 
 * @Site: https://www.undsky.com
 */
module.exports = appInfo => ({
    sqlite: {
        default: {
            path: ':memory:',
            options: null
        },
        // Single
        // client: {

        // },
        // Multi
        // clients: {
        //     mysql1: {

        //     },
        //     mysql2: {

        //     }
        // }
    }
});