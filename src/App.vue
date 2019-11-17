<template>
    <div>
        <h3>{{msg}}</h3>
        <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
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

<style lang="scss" scoped>
div{
    width: 300px;
    border: 1px red solid;
    h3{
        color: green;
    }
    p{
        font-size: 18px;
    }
}
</style>