import { defineStore } from 'pinia'

export default defineStore('testStore', {
    state: () => ({ count: 0 }),
    getters: {
        getCount: (state) => state.count,
    },
    actions: {
        addOne() {
            this.count++
        },
    },
})