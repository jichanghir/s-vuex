<template lang="pug">
    div
        div {{ count }}
        button(@click="inc(2)") +
        button(@click="doSomething(2)") doSomething
</template>

<script>
export default {
    props: {},
    data(){
        return {}
    },
    computed: {
        count() {
            return this.$store.getters.count;
        }
    },
    methods: {
        inc(v) {
            this.$store.commit('inc', v);
        },
        doSomething(v) {
            this.$store.dispatch('doSomething', v);
        }
    },
    components: {}
}
</script>
