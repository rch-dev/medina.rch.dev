<template>
    <div class="about">
    <h1>Test {{protocol_name}} protocol here.</h1>
    <h1>{{handshake}}</h1>
    <br>
    <button @click="getIntent">GET</button>
    <br>
    Init: <button @click="initSite">SITE</button> | <button @click="initMotifs">MOTIFS</button>
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
        initSite() {
            axios.get('http://localhost:1001/init/site')
                .then(res => {
                    console.log(res);
                })
                .catch(e => {
                    console.log(e);
                })
        },
        initMotifs() {
            axios.get('http://localhost:1001/init/motifs')
                .then(res => {
                    console.log(res);
                })
                .catch(e => {
                    console.log(e);
                })
        },
    },
    computed: {

    }
});

</script>

<style scoped>

</style>
