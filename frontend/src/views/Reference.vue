<template>
    <v-container>
        <article class="markdown-body">
            <div v-html="this.postBody"></div>
        </article>
    </v-container>
</template>

<script>
    import axios from 'axios';
    import marked from 'marked';

    export default {
        name: "Reference",
        data() {
            return {
                postBody: "test"
            }
        },
        mounted () {
            const url = 'http://mllibra.sogang.ac.kr:3000/posts/yolo';
            axios.get(
                url
            ).then((response) => {
                //console.log(response.data);
                console.log(this.postBody);
                this.postBody = marked(response.data);
                console.log(this.postBody);
            }).catch((ex)=> {
                console.log("AXIOS ERR : ", ex)
            });
        }


    }
</script>

<style scoped src="@/assets/css/github-style.css"></style>

<style scoped>
    .markdown-body {
             box-sizing: border-box;
             min-width: 200px;
             max-width: 980px;
             margin: 0 auto;
             padding: 10px;
         }
</style>

