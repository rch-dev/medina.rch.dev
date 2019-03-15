<template>
    <div class="about">
    <h1>Test {{name}} protocol here.</h1>
    <h1>{{handshake}}</h1>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import VueAxios from "vue-axios";
import axios from 'axios';

@Component
export default class Medina extends Vue {
    @Prop() name!: string;
    @Prop() handshake!: string;

    created() {
        this.name = "medina";

        axios.get('http://localhost:1001/')
        .then(res => {
            console.log(res)
            this.handshake = res.data
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>

<style scoped>

</style>
