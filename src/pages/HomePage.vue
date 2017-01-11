<template>
    <div>
        <v-card class="secondary">
            <v-card-text>
                <img src="public/v.png">
            </v-card-text>
        </v-card>
        <h2>Sidebar template</h2>
        <p>Welcome to the Vuetify Sidebar Template</p>
        <p>You can check out the links in the sidebar for more information</p>
        <p></p>

        <h2>Inspired by</h2>
        <v-list>
            <v-list-item>
                <v-list-item-title>
                    <a href="http://vuetifyjs.com" target="_blank">Vuetify Documentation</a>
                </v-list-item-title>
                <v-list-item-title>
                    <a href="http://vuejs.org" target="_blank">Vue Documentation</a>
                </v-list-item-title>
            </v-list-item>
        </v-list>

    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },

        mounted () {
            console.log(this);
        }
    }
</script>
