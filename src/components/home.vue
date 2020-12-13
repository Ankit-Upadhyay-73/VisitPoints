<template>
    <v-app>
        <span style="color: #eb5160;font-family:Candara;font-style: italic;font-size: 20px">Places you may Like</span>
        <v-progress-circular align="center"
                v-if="loadValue<=100"
                :rotate="180"
                :size="100"
                :width="15"
                :value="loadValue"
                color="black" >
            {{ loadValue }}
        </v-progress-circular>

        <v-row>
            <v-col cols="12" md="4" sm="6" v-for="(place,ind) in places" :key="place.id" @click="navigateTo(place.place_name)">
                <v-card elevation="10" >
                    <v-card-text class="black">
                        <v-img class="v-icon" :src="place_images[ind]['place_icon']"  v-if="place_images[ind]['img_src']==''"></v-img>
                        <p v-if="place_images[ind]['img_src']==''" :id="place.id" style="font-family: 'Comic Sans MS';color: azure" v-text="place.place_name"></p>
                        <v-img :src="place_images[ind]['img_src']" height="300px" width="350px" v-if="place_images[ind]['img_src']!=''" >
                            <p  :id="place.id" style="font-family: 'Comic Sans MS';color: azure;background-color: #071013" align="right" v-text="place.place_name"></p>
                        </v-img>
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
    </v-app>
</template>


<script>
    export default {
        data(){
            return{
                places:[],
                place_images:[],
                place_type:[],
                loadValue:0
            }
        },
        methods:
            {
                getPos(ref)
                {
                    for (var k=0;k<this.place_images.length;k++)
                    {
                        if (this.place_images[k]['imgRef']==ref)
                            return k;
                    }
                },

                navigateTo(place_name)
                {
                    this.$router.push('/places/'+place_name);
                },
                async setImageRequestDelay(i)
                {
                    this.$http.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth='+this.place_images[i]['place_width']+'&photoreference='+this.place_images[i]['imgRef']+'&key=AIzaSyCICaw8WPaKExjI4pOo2YeoKM4rV1CzMc4').then(function (data) {
                        console.log(data);
                        var ref = data['url'].toString().split("/")[9].split("?")[1].split("&")[1].split("=")[1];
                        var index = this.getPos(ref);
                        var img_src = data['headers']['map']['x-final-url'][0];
                        this.place_images[index]['img_src'] = img_src;
                    });
                }
            },
        created()
        {
            this.$http.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=top+cities+in+india&key=AIzaSyCICaw8WPaKExjI4pOo2YeoKM4rV1CzMc4').then(function (data) {
                console.log(data);
                for (var i=0;i<data['body']['results'].length;i++)
                {
                    this.loadValue +=10;
                    var imgWidht =      data['body']['results'][i]['photos'][0]['width'];
                    var imgRef =        data['body']['results'][i]['photos'][0]['photo_reference'];
                    var place_id =      data['body']['results'][i]['place_id'];
                    var place_name =    data['body']['results'][i]['name'];
                    var address =       data['body']['results'][i]['formatted_address'];
                    var icon =          data['body']['results'][i]['icon'];
                    var types =         data['body']['results'][i]['types'];
                    var imagesDetails = {place_id:place_id,imgRef:imgRef,place_icon:icon,place_width:imgWidht,img_src:''};
                    this.place_images.push(imagesDetails);
                    var jsonWhole = {place_name:place_name,place_id:place_id,place_addr:address,type:types};
                    this.places.push(jsonWhole);
                    this.setImageRequestDelay(i);
                }
            });
        }
    }
</script>




<style>

</style>