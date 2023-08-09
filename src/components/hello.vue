<template>
    <div class="hello">
        <div class="hello-text">
        Hello World!
        </div>
        <button @click="back" class="back-button">
            back
        </button>
    </div>
    
</template>

<style scoped>
    .hello{
        width: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    .hello-text{
        font-size: 48px;
        font-weight: 500;
        text-align: center;
    }
    .back-button{
        position: absolute;
        top: 80px;
        flex: none;
        border: 2px solid #313131;
        border-radius: 9999px;
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 12px;
        padding-bottom: 12px;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        color: white;
        font-size: 20px;
        font-weight: 300;
        background: linear-gradient(90deg, #7BAFEE 3%, #7786EB 99%);
    }
</style>

<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        back(){
            this.$router.replace('/new_homepage')
        }
    }
}
</script>