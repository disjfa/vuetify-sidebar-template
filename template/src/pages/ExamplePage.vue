<template>
    <v-container>
        <h3 class="my-3">Examples</h3>
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
        <br>
        <h4>Modals</h4>

        <v-modal id="modal" v-model="modal">
            <v-btn slot="activator" class="primary white--text">Regular</v-btn>
            <v-card>
                <v-card-text>
                    <p class="text-xs-center">What is your age?</p>
                    <v-select v-bind:options="[{ text: '10-19', value: 1 }, { text: '20+', value: 2 }]" label="What is your age?"></v-select>
                    <p>This information is used to improve your experience on our site.</p>
                </v-card-text>
                <v-card-row actions>
                    <v-btn v-on:click.native="modal = false">Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn v-on:click.native="modal = false" class="green white--text">Submit</v-btn>
                </v-card-row>
            </v-card>
        </v-modal>

        <v-modal id="modal2" bottom v-model="modal2">
            <v-btn slot="activator" class="secondary white--text">Bottom</v-btn>
            <v-card class="secondary white--text">
                <v-card-row actions>
                    <div>This is an example of a bottom modal.</div>
                    <v-spacer></v-spacer>
                    <v-btn v-on:click.native="modal2 = false" class="primary white--text">Close</v-btn>
                </v-card-row>
            </v-card>
        </v-modal>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                modal: false,
                modal2: false
            }
        },

        mounted () {
        }
    }
</script>
