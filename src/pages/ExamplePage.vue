<template>
    <div>
        <h3 class="my-3">Examples</h3>
        <v-container>
            <h4>Cards</h4>
            <v-card>
                <v-card-row class="blue-grey darken-1">
                    <v-card-title>
                        <span class="white--text">Card title</span>
                    </v-card-title>
                </v-card-row>
                <v-card-row img="https://images.unsplash.com/photo-1439886183900-e79ec0057170?dpr=1&auto=compress,format&fit=crop&w=991&h=608&q=80&cs=tinysrgb&crop=" height="300px"></v-card-row>
                <v-card-text>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet at cupiditate dolorem doloribus esse expedita ipsum magnam necessitatibus neque, optio perferendis placeat porro quas quisquam repellat repellendus reprehenderit ut.
                    </p>
                </v-card-text>
                <v-card-row actions class="blue-grey darken-1">
                    <v-btn flat class="white--text">This is a button</v-btn>
                    <v-spacer></v-spacer>
                    <v-icon class="white--text">explore</v-icon>
                </v-card-row>
            </v-card>
        </v-container>
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
