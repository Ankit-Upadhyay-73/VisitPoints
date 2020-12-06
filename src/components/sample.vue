<template>
    <v-app>
        <TemplateComponent>
            <v-row slot="header" style="margin-top: 2%;"> <span class="text-h6" >Visit Places in </span></v-row>
            <v-row slot="list contents" style="margin-top: 1%;" justify="center" align="center">
                <v-col cols="12" md="8" sm="10">
                    <span style="font-family: Cambria;color: #7a9e7e"></span>
                </v-col>
            </v-row>
            <div slot="briefcont">
                <v-row>
                    <v-col cols="12" md="4" sm="6" v-for="place in places" :key="place.id">
                        <v-card>
                            <v-card-text>
                                <v-img :src="place.place_image" height="300px" width="350px">
                                    <p style="margin-top: 98%;font-family: 'Comic Sans MS'" align="center" v-text="place.place_name"></p>
                                </v-img>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </TemplateComponent>
    </v-app>
</template>


<script>
    import TemplateComponent from "@/components/TemplateComponent";

    export default {
        components: {TemplateComponent},
        data()
            {
                return{
                    places:[],
                    map:null,
                    service:null,
                    infowindow:null,
                }
            },
        methods:
            {

            },
        created()
        {
            this.$http.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractive+places+in+mumbai&key=AIzaSyCICaw8WPaKExjI4pOo2YeoKM4rV1CzMc4').then(function (data) {
                for (var i=0;i<data['body']['results'].length;i++)
                {
                    var imgWidht =      data['body']['results'][i]['photos'][0]['width'];
                    var imgRef =        data['body']['results'][i]['photos'][0]['photo_reference'];
                    var place_id =      data['body']['results'][i]['place_id'];
                    var place_name =    data['body']['results'][i]['name'];
                    var address =       data['body']['results'][i]['formatted_address'];
                    var img_src = '';

                    this.$http.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth='+imgWidht+'&photoreference='+imgRef+'&key=AIzaSyCICaw8WPaKExjI4pOo2YeoKM4rV1CzMc4').then(function (data) {
                        img_src = data['headers']['map']['x-final-url'][0];
                    });
                    var jsonWhole = {place_id:place_id,place_name:place_name,address:address,place_image:img_src};
                    this.places.push(jsonWhole);
                }
            });
        }
    }
</script>

<style scoped>

</style>