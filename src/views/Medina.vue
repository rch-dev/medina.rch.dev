<template>
    <div class="about">
    <h1>Test {{protocol_name}} protocol here.</h1>
    <h1>{{handshake}}</h1>
    <br>
    <button @click="getIntent">GET</button>
    <button @click="runParse">RUN</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import VueAxios from "vue-axios";
import axios from 'axios';
import store from '@/store.ts'

export default Vue.extend({
    //props: ['name', 'protocol_name'],
    data() {
        return {
            name: "medina_view",
            protocol_name: "medina",
            handshake: store.state.medinaState,
        }
    },
    methods: { 
        getIntent() {
            store.commit('medinaInit');
        },
        runParse() {
            axios.get('http://localhost:1001/parse')
                .then(res => {
                    console.log(res);
                })
                .catch(e => {
                    console.log(e);
                })
        }
    },
    computed: {

    }
});

</script>

<style scoped>

</style>
