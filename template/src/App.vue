<template>
    <v-app id="example-1">
        <v-navigation-drawer persistent v-model="drawer">
            <v-list>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title >
                            <span>Menu</span>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-item v-for="item in items" :key="item">
                    <v-list-tile :href="item.href" :router="item.router">
                        <v-list-tile-action>
                            <v-icon light>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar class="indigo">
            <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Sidebar template</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn light icon @click.native.stop="openGithub()">
                <v-icon>home</v-icon>
            </v-btn>
        </v-toolbar>
        <main>
            <v-fade-transition mode="out-in">
                <router-view></router-view>
            </v-fade-transition>
        </main>
        <v-footer class="indigo">
            <span>© 2017 - disjfa</span>
        </v-footer>
    </v-app>
</template>

<script type="text/babel">
  import Vue from 'vue';
  export default {
    data () {
      return {
        drawer: true,
        items: [{
          href: 'home',
          router: true,
          title: 'Home',
          icon: 'home',
        }, {
          href: 'examples',
          router: true,
          title: 'Example',
          icon: 'extension',
        }, {
          href: 'about',
          router: true,
          title: 'About',
          icon: 'domain',
        }]
      }
    },
    methods: {
      openSidebar() {
        this.sidebar = !this.sidebar;
      },
      openGithub() {
        window.open('https://github.com/disjfa/vuetify-sidebar-template');
      }
    }
  }
</script>

<style lang="stylus">
    @import '../node_modules/vuetify/src/stylus/main';
    @import 'css/main.css';
</style>
