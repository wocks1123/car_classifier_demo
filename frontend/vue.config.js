module.exports = {
  "outputDir": "../backend/public",
  "configureWebpack": {
    "devServer": {
      "host": "0.0.0.0",
      "port": "8000",
      "disableHostCheck": true
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}