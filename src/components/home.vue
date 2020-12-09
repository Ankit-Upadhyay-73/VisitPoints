<template>
    <v-app>
        <v-row>
            <v-col cols="12" align="center" md="6" class="mt-10">
                <span  style="font-size: 30px;font-family: Consolas;font-weight:bold;color: #071013">Visit nearest points and navigate on locations with Visit Points.....</span>
                <v-autocomplete class="ml-10 mr-10 "  dense color="black" outlined label="City"></v-autocomplete>
            </v-col>

            <v-col cols="12" md="6" class="ml-auto">
                <v-img  :src="require('../assets/SearchPlaceInd.svg')"></v-img>
            </v-col>
        </v-row>
        <span style="color: #eb5160;font-family:Candara;font-style: italic;font-size: 20px">Places you may Like</span>
        <v-row>
            <v-col sm="6" md="4" cols="12" v-for="cities in citiesInState" :key="cities.id">
                <v-card>
                    <v-card-text>
                        <v-img height="420px" :src="cities.src">
                            <v-row align="end" justify="end">

                            </v-row>
                        </v-img>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
    export default {
        data()
            {
                return{
                    citiesInState:[{id:1,details:'This is Sample place',src:'https://www.justkerala.in/wp-content/uploads/2012/10/Thirteen-Arch-Railway-Bridge.jpg'},
                        {id:2,details:'This is Sample place',src:'https://content.jdmagicbox.com/comp/pathanamthitta/j2/9999px468.x468.141218131603.u9j2/catalogue/konni-forest-reserve-pathanamthitta-ho-pathanamthitta-tourist-attraction-gxvvwfb.jpg'},
                        {id:3,details:'This is Sample place',src:'https://www.keralatourism.org/images/destination/mobile/mannadi_adoor20131127130430_50_1.jpg'},
                        {id:4,details:'This is Sample place',src:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d4/be/0c/ezhamkulam-temple-festival.jpg?w=1000&h=600&s=1'}],
                    location:'',
                    stateAndCity:[]
                    }
            },
        methods:
            {
                getAreaDetails()
                {

                }
            },
        created()
        {

        }
    }
</script>

<style>

</style>