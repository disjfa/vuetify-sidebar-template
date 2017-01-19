<template>
    <v-app top-navbar left-fixed-sidebar>
        <header>
            <v-navbar>
                <v-navbar-side-icon v-sidebar:sidebar class="hidden-md-and-up px-2"></v-navbar-side-icon>
                <v-navbar-logo>
                    Sidebar
                </v-navbar-logo>
            </v-navbar>
        </header>
        <main>
            <v-sidebar left fixed id="sidebar" class="white--text">
                <div class="px-3">
                    <h3 class="white--text mt-3">Sidebar</h3>
                    <p>This is just an example sidebar.</p>
                </div>
                <v-list v-bind:items="items">
                </v-list>
            </v-sidebar>
            <v-content class="pt-0">
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
                    title: 'Home',
                    action: {
                        icon: 'home'
                    }
                }, {
                    href: 'examples',
                    router: true,
                    title: 'Example',
                    action: {
                        icon: 'extension'
                    }
                }, {
                    href: 'about',
                    router: true,
                    title: 'About',
                    action: {
                        icon: 'domain'
                    }
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
    @import 'css/main.css';
</style>