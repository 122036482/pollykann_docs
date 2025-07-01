<template>
    <div class="polly_video_player">
        <video ref="videoPlayer" class="video-js"></video>
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
    width: 100%;
    aspect-ratio: 16 / 9;
}

.video-js {
    width: 100%;
    height: 100%;
}
</style>