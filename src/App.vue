<template>
    <v-app top-navbar left-fixed-sidebar>
        <header>
            <v-navbar>
                <v-navbar-side-icon v-sidebar:sidebar class="hidden-md-and-up"></v-navbar-side-icon>
                <v-navbar-logo>
                    Vuetify sidebar
                </v-navbar-logo>
            </v-navbar>
        </header>
        <main>
            <v-sidebar left fixed id="sidebar" class="white--text">
                <h3 class="white--text mt-3">Sidebar</h3>
                <p>This is just an example sidebar.</p>
                <v-sidebar-items>
                    <v-sidebar-item v-for="item in items" v-bind:item="item"></v-sidebar-item>
                </v-sidebar-items>
            </v-sidebar>
            <v-content>
                <v-container fluid>
                    <transition mode="out-in">
                        <router-view></router-view>
                    </transition>
                </v-container>
            </v-content>
        </main>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                items: [{
                    href: 'home',
                    router: true,
                    text: 'Get Started'
                }, {
                    href: 'about',
                    router: true,
                    text: 'Get Started2'
                }]
            }
        },

        mounted () {
            this.$vuetify.init()
        }
    }
</script>

<style lang="stylus">
    @import '../node_modules/vuetify/src/stylus/main';
    @import './css/main.css';
</style>