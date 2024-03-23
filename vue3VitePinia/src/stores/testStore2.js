import { defineStore } from 'pinia'
import { v4 } from 'uuid'

const id = v4()
export default defineStore(`${id}`, {
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