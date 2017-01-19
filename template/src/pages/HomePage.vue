<template>
    <div class="text-center">
        <div class="indigo pa-3">
            <img src="public/v.png">
        </div>
        <div class="pa-5">
            <h2>Sidebar template</h2>
            <p>Welcome to the Vuetify Sidebar Template</p>
            <p>You can check out the links in the sidebar for more information</p>
            <p></p>

            <h2>Inspired by</h2>
            <v-list>
                <v-list-item>
                    <v-list-tile-title>
                        <a href="http://vuetifyjs.com" target="_blank">Vuetify</a>
                    </v-list-tile-title>
                    <v-list-tile-title>
                        <a href="http://vuejs.org" target="_blank">Vue.js</a>
                    </v-list-tile-title>
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },

        mounted () {
        }
    }
</script>
