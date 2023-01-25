const mongoose=require("mongoose")

 const GetConnectOfDb=async(URI)=>{
    mongoose.set('strictQuery', true);
        // mongoose.set("strictQuery",true);
       try {
        await  mongoose.connect(URI,()=>{
            console.log(`server connected`);
        })
       } catch (error) {
        console.log(`error ${error.message}`)
       }
        
}
module.exports = { GetConnectOfDb }