<template lang="pug">
    div
        div {{ count }}
        button(@click="doSomething") do


</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('submodule');
//import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
    props: {},
    data(){
        return {}
    },
    computed: {
        ...mapGetters(['count'])
    },
    methods: {
        ...mapActions(['doSomething'])
    },
    components: {}
}
</script>
