<template>
    <div>
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