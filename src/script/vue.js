const vueLessons = {
    data() {
        return {
            spanText: "Lorem ipsum dolor",
            seen: false,
        }
    },

    methods: {
        spanNewText() {
            this.seen = true;
            console.log(this.seen);
        }
    }
}

Vue.createApp(vueLessons).mount("#app");