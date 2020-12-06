<template>
    <v-app>
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
                <v-col sm="4" md="3" cols="12" v-for="cities in citiesInState" :key="cities.id">
                    <v-card>
                        <v-img height="420px" :src="cities.src">
                            <v-row align="end" justify="end">

                            </v-row>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-footer>
            <v-row  justify="center">
                <v-col cols="6">
                    <strong style="color: #071013">We are the next point for you Near Point Search.. Be with us</strong>
                </v-col>
                <v-col cols="6">
                    <span style="color: #aaaaaa;font-family: 'Segoe Script'">Get More about us on</span><v-btn text style="color: #eb5160;font-family: Candara;font-style: italic;" class="text-capitalize" shaped rounded>About us</v-btn>
                </v-col>
                <v-col cols="6">
                    <span style="color: #aaaaaa;font-family: 'Segoe Script'">Wants to connect with us..</span><v-btn text style="color: #eb5160;font-family: Candara;font-style: italic;" shaped rounded class="text-capitalize">Contact Us</v-btn>
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: "HomeComp.vue",
        data(){
            return{
                citiesInState:[{id:1,details:'This is Sample place',src:'https://www.justkerala.in/wp-content/uploads/2012/10/Thirteen-Arch-Railway-Bridge.jpg'},
                    {id:2,details:'This is Sample place',src:'https://content.jdmagicbox.com/comp/pathanamthitta/j2/9999px468.x468.141218131603.u9j2/catalogue/konni-forest-reserve-pathanamthitta-ho-pathanamthitta-tourist-attraction-gxvvwfb.jpg'},
                    {id:3,details:'This is Sample place',src:'https://www.keralatourism.org/images/destination/mobile/mannadi_adoor20131127130430_50_1.jpg'},
                    {id:4,details:'This is Sample place',src:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d4/be/0c/ezhamkulam-temple-festival.jpg?w=1000&h=600&s=1'}],
                location:'',

            }
        },
        methods:
            {
                showPosition(position)
                {
                    this.location+=position.coords.latitude+'   '+position.coords.longitude;

                    //get cities in current state;

                },

                getLoc()
                {
                    if(navigator.geolocation)
                    {
                        navigator.geolocation.getCurrentPosition(this.showPosition);
                    }
                },
            },
        created()
        {

        }
    }
</script>

<style scoped>

</style>