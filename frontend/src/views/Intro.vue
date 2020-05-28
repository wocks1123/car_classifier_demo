<template>
    <div>
    It is Intro
        <div v-html="compiledMarkdown"></div>
        <div class="video-container">
            <iframe width="100%" height="500" src="https://youtube.com/embed/0izrTHjLQKw"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
    const marked = require('marked');

    export default {
        name: "Intro",
        computed: {
            compiledMarkdown: function () {
                return marked("# hello\n ## H2 title\n ?? ![](https://www.youtube.com/watch?v=plme_oDCpHc)")
            }
        },
    }
</script>

<style scoped>

</style>