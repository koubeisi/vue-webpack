// import {add,multiply} from "./math.js"
//
// const tmp = "hello world"
// console.log(tmp)
// console.log(add(3, 2))
// console.log(multiply(3, 3))

import Vue from "vue"

const app = {
    template:`
        <div>
            <h3>{{msg}}</h3>
            <button @click="upper">大写</button>
            <button @click="lower">小写</button>
        </div>
    `,
    data(){
        return {
            msg:"I Love Vue."
        }
    },
    methods:{
        lower:function () {
            this.msg = this.msg.toLowerCase()
        },
        upper:function () {
            this.msg = this.msg.toUpperCase()
        }
    }
}

new Vue({
    el:"#app",
    template:"<app></app>",
    components:{
        app:app
    }
})