/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({
    data(){
        return {
            messages: [],
            friendlist: [],
            requested: [],
            chatwithuserid : null,
            chatwithuser : null,
        }
    },

    created() {
        this.fetchMessages();
        this.friendList();
        Echo.channel('chat').listen('MessageSent', (e) => {
            this.messages.push(e.message); 
            console.log("test::",this.messages)
        });
    },
    
    methods:{
        friendList() {
            axios.get('/friendlist').then(response => {
                this.friendlist = response.data;
            });
        },

        fetchMessages() {
            axios.get('/messages').then(response => {
                this.messages = response.data;
            });
        },

        addMessage(message) {
           // this.messages.push(message);
            axios.post('/messages', message).then(response => {
              console.log(response.data);
            });
        },

        selectUser(user) {
            this.chatwithuser = user;
            this.chatwithuserid = user.id;
        }
    }

});

import ChatMessages from './components/ChatMessages.vue';
import ChatForm from './components/ChatForm.vue';
import friendList from './components/friendList.vue';

app.component('chat-messages', ChatMessages);
app.component('chat-form', ChatForm);
app.component('friend-list', friendList);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.globEager('./**/*.vue')).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
//app.init();