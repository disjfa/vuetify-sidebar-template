<template>
    <v-app top-navbar left-fixed-sidebar>
        <header>
            <v-toolbar>
                <v-toolbar-side-icon @click.native.stop="openSidebar()" class="hidden-md-and-up px-2"></v-toolbar-side-icon>
                <v-toolbar-logo class="px-3">
                    Sidebar
                </v-toolbar-logo>
            </v-toolbar>
        </header>
        <main>
            <v-sidebar fixed class="white--text" v-model="sidebar">
                <div class="px-3">
                    <h3 class="white--text mt-3">Sidebar</h3>
                    <p>This is just an example sidebar.</p>
                </div>
                <v-list>
                    <v-list-tile v-for="item in items" :href="item.href" :router="item.router" avatar>
                        <v-list-tile-avatar>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            {{ item.title }}
                        </v-list-tile-content>
                    </v-list-tile>
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
    import Vue from 'vue';
    export default {
        data () {
            return {
                sidebar: false,
                items: [{
                    href: 'home',
                    router: true,
                    title: 'Home',
                    icon: 'home'
                }, {
                    href: 'examples',
                    router: true,
                    title: 'Example',
                    icon: 'extension'
                }, {
                    href: 'about',
                    router: true,
                    title: 'About',
                    icon: 'domain'
                }]
            }
        },
        methods: {
            openSidebar() {
                this.sidebar = !this.sidebar;
            }
        }
    }
</script>

<style lang="stylus">
    @import '../node_modules/vuetify/src/stylus/main';
    @import 'css/main.css';
</style>
