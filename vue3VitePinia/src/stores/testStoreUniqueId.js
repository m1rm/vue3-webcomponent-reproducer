import { defineStore } from 'pinia'

export const useTestStore = (id) => {
    return defineStore(`${id}`, {
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
}