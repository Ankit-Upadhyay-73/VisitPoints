<template>
    <div>
        <v-toolbar>
            <v-toolbar-title>
                <span style="font-family: 'Comic Sans MS'">Visit Places</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-container>
            <span style="font-size: 30px;font-family: Cambria">Start Visiting different locations in Your City State And Country..</span>
            <span>What we do ??</span>
            <v-row justify="center" align="center">
                <span  style="font-family: 'Comic Sans MS';margin-top: 30px;font-size: 20px">
                    In Our Country or even world, different places having different type of festivals and geographical views and even the people having different nature are present in our world.
                    Sometimes it becomes necessary to visit places that have different culture.
                    Places you would like.
                </span>
                <span>get location here and show the points in their locations</span>
            </v-row>
            <v-btn text class="text-capitalize blue--text" @click="onPressed()">Show Locations</v-btn>
            <div id="map"></div>
        </v-container>
    </div>
</template>

<!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDcUQnQPhs3q6xLKqL2N1-RNFs9Q9rlePE&libraries=places&v=weekly" defer type="text/javascript"></script>-->
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
