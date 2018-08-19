<template>
    <section>
        <input type="file" @change = "getFile" multiple />
        <button @click="upload">上传</button>
    </section>
</template>
<script>
export default {
    name:'Upload',
    data(){
        return {
            file:{},
            formData:new FormData(),
        }
    },
    methods:{
        getFile(e){
            const files = e.target.files;
            if(files.length > 0){
                for(let i of files){
                    this.formData.append(i.name,i);
                }
            }
        },
        upload(){
            this.$http({
                url:'./api/upload',
                method:'post',
                headers:{"Content-Type":"application/x-www-form-urlencoded"},
                data:this.formData
            }).then(res=>console.log(res)).catch(err=>console.log(err));
        }
    }
}
</script>
