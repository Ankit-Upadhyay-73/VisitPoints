<template>
    <div>
        <v-toolbar>
            <v-row>
                <v-col cols="6" md="2" sm="4">
                    <v-img :src="require('../assets/HomeLogo.svg')"></v-img>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="6" sm="4" md="2">
                    <v-btn text style="font-family: 'Segoe Script'" rounded class="text-capitalize">Near Points</v-btn>
                </v-col>
            </v-row>
        </v-toolbar>

        <v-container>
            <slot  name="header"></slot>
            <slot  name="list contents"></slot>
            <slot name="briefcont"></slot>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "TemplateComponent",
        data()
            {
                return{
                    toScroll:false,
                }
            }
    }
</script>

<style scoped>

</style>