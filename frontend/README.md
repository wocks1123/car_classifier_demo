# frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Devlog

### markdown 추가
- marked 모듈 사용

```html
const marked = require('marked');
marked("# hello\n ## H2 title\n")
```


### axios

```bash
npm install --save axios
```

```js
const url = 'http://127.0.0.1';
axios.get(
    url
).then((response) => {
    console.log(response.data);
}).catch((ex)=> {
    console.log("AXIOS ERR : ", ex)
});
```


### css 추가

가져오고 싶은 css파일을 `main.js`에 등록

```js
require('@/assets/css/github-style.css');
```

vue파일에서 style에 추가

```vuejs
<style scoped src="@/assets/css/github-style.css"></style>

# style 태그 여러개도 적용됨
<style scoped>
    .markdown-body {
             box-sizing: border-box;
             min-width: 200px;
             max-width: 980px;
             margin: 0 auto;
             padding: 10px;
         }
</style>
```
