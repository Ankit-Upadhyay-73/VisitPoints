<template>
    <v-app>
        <v-toolbar extended>
<!--            <v-row align="center" >-->
<!--                <v-col  cols="4" md="2" sm="2">-->
<!--                    <v-img class="v-icon pb-0 pt-0 pl-0 pr-0" :src="require('../assets/HomeLogo.svg')"></v-img>-->
<!--                </v-col>-->
<!--                <v-spacer></v-spacer>-->
<!--                <v-col cols="4" >-->
<!--                    <v-autocomplete dense ></v-autocomplete>-->
<!--                </v-col>-->
<!--                <v-spacer></v-spacer>-->
<!--                <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
<!--            </v-row>-->
            <v-toolbar-title>
                <v-img class="v-icon" :src="require('../assets/HomeLogo.svg')"></v-img>
            </v-toolbar-title>
            <v-autocomplete
                class="mx-4"
                flat
                hide-details
                color="white"
                cache-items
                solo-inverted
                label="Search Place">
            </v-autocomplete>
        </v-toolbar>
        <v-container>
            <router-view></router-view>
        </v-container>
        <v-footer>
            <v-row  justify="center">
                <v-col cols="6">
                    <strong class="heading" style="color: #071013;font-family: Cambria">We are the next point for you Near Point Search.. Be with us</strong>
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
        components:{

        },
        data()
        {
            return{
                collapseOnScroll:true
            }
        },
        methods:
            {
                showPosition(position)
                {
                    var lati  =  position.coords.latitude;
                    var longi = position.coords.longitude;
                    var loc = lati+","+longi;
                    this.$http.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=state+name&location="+loc+"&radius=1500&key=AIzaSyCICaw8WPaKExjI4pOo2YeoKM4rV1CzMc4").then(function (data) {
                        this.state = data['body']['results'][0]['plus_code']['compound_code'].toString().split(',')[1];
                    });
                },

                getLoc()
                {
                    if(navigator.geolocation)
                    {
                        navigator.geolocation.getCurrentPosition(this.showPosition);
                    }
                },

                onNearbyPoints()
                {
                    this.getLoc();
                },
            },
        created()
        {
        }
    }
</script>

<style scoped>

</style>