<template>
    <div>
        <div class="polly_video_player">
            <video ref="videoPlayer" class="video-js"></video>
        </div>

        <div class="video-description" v-if="des">

            {{ des }}

        </div>
    </div>
</template>

<script>
import videojs from 'video.js';

export default {
    name: 'VideoPlayer',
    props: {
        url: {
            type: String,
            default() {
                return 'https://video.pollykann.com/da1.5x.mp4';
            }
        },
        des: {
            type: String,

        }
    },
    data() {
        return {
            player: null,
            defaultOptions: {
                controls: true,
                autoplay: false,
                preload: 'auto',
            }
        }
    },
    mounted() {
        this.player = videojs(this.$refs.videoPlayer, {
            ...this.defaultOptions, ...{
                sources: [{
                    src: this.url,
                    type: 'video/mp4'
                }]
            }
        }, () => {
            this.player.log('onPlayerReady', this);
        });
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose();
        }
    }
}
</script>

<style>
.polly_video_player {
    margin: 20px 0;
    width: 100%;
    aspect-ratio: 16 / 9;
}

.video-js {
    width: 100%;
    height: 100%;
}

.video-description {
    text-align: center;
    font-size: 14px;
    color: rgb(145, 150, 161)
}
</style>