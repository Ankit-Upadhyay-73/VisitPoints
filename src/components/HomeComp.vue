<template>
    <div>
        <v-toolbar>
            <v-row>
                <v-img  :src="require('../assets/ContentLogo.svg')"></v-img>
                <v-btn v-text="NearPoints"></v-btn>
                <v-combobox></v-combobox>
            </v-row>
            <v-row>
                
            </v-row>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "HomeComp.vue",
        data(){
            return{
            }
        },
        methods:
            {
            },
        created()
        {

        }
    }
</script>

<style scoped>

</style>