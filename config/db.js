const mongoose=require("mongoose")

mongoose.set("strictQuery",false);
module.exports.mongoconnect=mongoose.connect(
    "mongodb+srv://AmitOreo:ChineseOreo@cluster0.qcywqei.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) {
            console.log("Db connection successful");
        } else {
            console.log("Db failed to connect");
            console.log(err,"err");
        }
    }
)