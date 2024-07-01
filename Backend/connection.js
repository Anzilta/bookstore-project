var mongoose=require('mongoose')
mongoose.connect("mongodb+srv://anzil:anzilqwerty@cluster0.kvkjjrl.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log('connected to DB')})
.catch((error)=>{console.log(error)})