<template>
    <div>
        <v-toolbar>
            <v-toolbar-items>
                <v-img :src="require('../assets/pointedplaces.svg')"></v-img>
            </v-toolbar-items>
            <v-toolbar-title>
                <span style="font-family: 'Comic Sans MS'">Visit Places</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-row>
            <v-col cols="3" sm="3" md="3">
                <v-btn icon><v-icon>Home</v-icon></v-btn>
            </v-col>
            <v-col cols="6" sm="6" md="6">
                <v-combobox ></v-combobox>
            </v-col>
            <v-col cols="3" sm="3" md="3">
                <v-btn icon rounded shaped><v-icon>Locate</v-icon></v-btn>
            </v-col>
        </v-row>

        <v-container>
            <slot  name="header"></slot>
            <slot  name="list contents"></slot>
            <v-divider></v-divider>
            <slot name="briefcont"></slot>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "TemplateComponent",
    }
</script>

<style scoped>

</style>