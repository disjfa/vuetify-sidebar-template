<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app temporary>
            <v-list>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <span>Menu</span>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <template v-for="(item, index) in items">
                    <v-list-tile :href="item.href" :to="{name: item.href}">
                        <v-list-tile-action>
                            <v-icon light v-html="item.icon"></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar class="indigo" dark app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Sidebar template</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.native.stop="openGithub()">
                <v-icon>home</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content>
            <v-fade-transition mode="out-in">
                <router-view></router-view>
            </v-fade-transition>
        </v-content>
        <v-footer class="indigo pa-3" dark app>
            <span>© 2018 - <a href="https://github.com/disjfa" class="indigo text--lighten-5">disjfa</a></span>
        </v-footer>
    </v-app>
</template>

<script type="text/babel">
  export default {
    data() {
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
        }],
      };
    },
    methods: {
      openGithub() {
        window.open('https://github.com/disjfa/vuetify-sidebar-template');
      },
    },
  };
</script>

<style lang="stylus">
    @import '../node_modules/vuetify/src/stylus/main';
    @import 'css/main.css';
</style>
