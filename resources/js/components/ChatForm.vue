
<template>
    <div class="card-footer">
         <div class="input-group">
            <!-- <div class="input-group-append">
               <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
            </div> -->
            <textarea v-model="newMessage" @keyup.enter="sendMessage" id="btn-input" name="message"  class="form-control type_msg" placeholder="Type your message here..."></textarea>
            <div class="input-group-append" id="btn-chat" @click="sendMessage">
               <span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
            </div>
         </div>
      </div>
</template>

<script>
    export default {
        props: ['user','chatwith'],

        data() {
            return {
                newMessage: ''
            }
        },

        methods: {
            sendMessage() {
                this.$emit('messagesent', {
                    chatwith: this.chatwith.id,
                    message: this.newMessage
                });

                this.newMessage = ''
            }
        }    
    }
</script>