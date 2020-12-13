<template>
    <v-app>
        <TemplateComponent>
            <v-row slot="header" style="margin-top: 2%;">
                <v-col cols="6">
                    <h2 style="font-family:Cambria;color:#eb5160">Visit Places in Sujanpur</h2>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="6" md="3" sm="4">
                    <v-autocomplete outlined label="Place Type" v-model="selectedValue" :items="place_type" dense multiple color="black"></v-autocomplete>
                </v-col>
            </v-row>
            <v-row slot="list contents" style="margin-top: 1%;" justify="center" align="center">
                <v-col cols="10">
                    <a  style="font-family: 'Times New Roman';color: #aaaaaa" v-for="place in places" :key="place.id" @click="clickedElement(place.place_id)">
                        {{place.place_name}}
                    </a>
                </v-col>
            </v-row>
            <div slot="briefcont">
                <v-row>
                    <v-col cols="12" md="4" sm="6" v-for="(place,ind) in places" :key="place.id" v-show="isInclude(place.type) || selectedValue.length==0">
                        <v-card elevation="10" >
                            <v-card-text class="black">
                                <v-img class="v-icon" :src="place_images[ind]['place_icon']"  v-if="place_images[ind]['img_src']==''"></v-img>
                                <p v-if="place_images[ind]['img_src']==''" :id="place.id" style="font-family: 'Comic Sans MS';color: #071013" v-text="place.place_name"></p>
                                <v-img :src="place_images[ind]['img_src']" height="300px" width="350px" v-if="place_images[ind]['img_src']!=''" >
                                    <p  :id="place.place_id" style="font-family: 'Comic Sans MS';color: azure;background-color: #071013" align="right" v-text="place.place_name"></p>
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
                place_images:[],
                place_type:[],
                selectedValue:[],
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
                isInclude(place)
                {
                    for (var k=0;k<this.selectedValue.length;k++)
                    {
                        if (place.includes(this.selectedValue[k]))
                            return true;
                    }
                    return false;
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
                },
                clickedElement(ele)
                {
                    var e = document.getElementById(ele);
                    e.scrollIntoView();
                }
            },
        created()
        {
            // var img_src;
            this.place_type.push("tourist_attraction","museum","point_of_interest","establishment");
this.$http.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractive+places+in+Sujanpur&key=AIzaSyCICaw8WPaKExjI4pOo2YeoKM4rV1CzMc4').then(function (data) {
                for (var i=0;i<data['body']['results'].length;i++)
                {
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
<style scoped>
    a:hover{
        color: #071013;
    }
</style>
