new Vue({
  el: '#app',
  data: {
      myImage: "icons/eye-closed.svg",
      otherImage: "icons/eye.svg",
      eye:"",
      type: "password",
      passType: "password",
      textType: "text",
  },
    methods: { 
     changeImg(){
        this.eye = this.myImage,
        this.myImage = this.otherImage,
        this.otherImage = this.eye,
        this.type = this.passType,
        this.passType = this.textType,
        this.textType = this.type,
     }
}
});