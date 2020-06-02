<template>
    <v-container>
    It is Intro
        <div v-html="compiledMarkdown"></div>
        <div class="video-container">
            <v-layout  justify-center>
                <video id="videoPlayer" controls>
                    <source src="http://mllibra.sogang.ac.kr:3000/video" type="video/flv">
                </video>
            </v-layout>
            <v-layout  justify-center>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/D7-VbYxvCAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </v-layout>
            <v-layout  justify-center>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4h7jhdbEWcs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </v-layout>
            <v-layout  justify-center>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4n7RoG2M4ao" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </v-layout>
            <v-layout  justify-center>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/v9h0ghAUNKg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </v-layout>
            <v-layout  justify-center>
            <iframe width="100%" height="550px" src="https://youtube.com/embed/0izrTHjLQKw"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </v-layout>
        </div>
    </v-container>
</template>

<script>
    const marked = require('marked');

    export default {
        name: "Intro",
        computed: {
            compiledMarkdown: function () {
                return marked("# hello\n ## H2 2 title\n ?? ![](https://www.youtube.com/watch?v=plme_oDCpHc)")
            }
        },
    }
</script>

<style scoped>
.body {
    background-color: #00B7FF;
    padding: 10%;
}


</style>