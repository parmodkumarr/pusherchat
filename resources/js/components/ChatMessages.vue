<template>
    <div class="card-header msg_head">
        <div class="d-flex bd-highlight">
            <div class="img_cont">
            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img">
            <!-- <span class="online_icon"></span> -->
            </div>
            <div class="user_info">
                <span>{{chatwith.name}}</span>
                <!-- <p>1767 Messages</p> -->
            </div>
            <!-- <div class="video_cam">
                <span><i class="fas fa-video"></i></span>
                <span><i class="fas fa-phone"></i></span>
            </div> -->
        </div>
        <!-- <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
        <div class="action_menu">
            <ul>
            <li><i class="fas fa-user-circle"></i> View profile</li>
            <li><i class="fas fa-users"></i> Add to close friends</li>
            <li><i class="fas fa-plus"></i> Add to group</li>
            <li><i class="fas fa-ban"></i> Block</li>
            </ul>
        </div> -->
    </div>

    <div class="card-body msg_card_body">
        <div :key="message.id" v-for="message in messages">
            <div v-if="user.id != message.send_by" class="d-flex justify-content-start mb-4">
                <div class="img_cont_msg">
                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg">
                </div>
                <div class="msg_cotainer">
                    {{ message.message }}
                    <span class="msg_time" v-dateshow="message.created_at"></span>
                </div>
            </div>

            <div v-else class="d-flex justify-content-end mb-4">
                <div class="msg_cotainer_send">
                    {{ message.message }}
                    <span class="msg_time_send" v-dateshow="message.created_at"></span>
                </div>
                <div class="img_cont_msg">
                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg">
                </div>
            </div>

        </div>
    </div>

</template>

<script>
import moment from 'moment';

    const dateshow = (el,value)=> {
        var date=moment(value).fromNow();
        el.innerText=date;
    }

    export default {
        directives: {
            dateshow
        },
        props: ['messages','user','chatwith']
    };
</script>