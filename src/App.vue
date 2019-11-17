<template>
    <div>
        <h3>{{msg}}</h3>
        <button @click="upper">大写</button>
        <button @click="lower">小写</button>
    </div>
</template>

<script>
    export default {
        name: "App",
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
</script>

<style scoped>

    h3{
        color: green;
    }

</style>