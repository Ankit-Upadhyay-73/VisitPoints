<template>
    <div>
        <TemplateComponent>
            <v-row slot="header" style="margin-top: 2%;"> <span  style="font-family:Consolas;font-size: 40px;color: #001a23">Why to Visit Adoor ?</span></v-row>
            <v-row slot="list contents" style="margin-top: 1%;" justify="center" align="center">
                <v-col cols="12" md="8" sm="10">
                    <span style="font-family: Cambria;color: #7a9e7e">Adoor is one of the fastest growing towns in Pathanamthitta district of Kerala, India. It is the headquarters of Adoor Thaluk and Adoor Revenue Division. Adoor town comprises 28 wards of Adoor municipality. Adoor is one of the two revenue divisions of the Pathanamthitta district.</span>
                </v-col>
            </v-row>
            <div slot="briefcont">
                <v-row style="margin-top: 2%">
                    <v-col cols="12" md="4" sm="6" v-for="place in places" :key="place.id">
                        <v-card>
                            <v-card-text>
                                <v-img :src="place.src" height="400px">
                                    <p  v-text="place.details"></p>
                                </v-img>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </TemplateComponent>
    </div>
</template>

<script>
    import TemplateComponent from "@/components/TemplateComponent";
    export default {
        components: {TemplateComponent},
        data()
            {
                return{
                    places:[{id:1,details:'This is Sample place',src:'https://www.justkerala.in/wp-content/uploads/2012/10/Thirteen-Arch-Railway-Bridge.jpg'},
                        {id:2,details:'This is Sample place',src:'https://content.jdmagicbox.com/comp/pathanamthitta/j2/9999px468.x468.141218131603.u9j2/catalogue/konni-forest-reserve-pathanamthitta-ho-pathanamthitta-tourist-attraction-gxvvwfb.jpg'},
                        {id:3,details:'This is Sample place',src:'https://www.keralatourism.org/images/destination/mobile/mannadi_adoor20131127130430_50_1.jpg'},
                        {id:4,details:'This is Sample place',src:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d4/be/0c/ezhamkulam-temple-festival.jpg?w=1000&h=600&s=1'}]
                }
            }
    }
</script>

<style scoped>

</style>