// 先导入需要的模块
var express = require('express')
// express 模块是nodejs的http框架，他封装了nodejs模块,使创建的服务器更简单方便,
var multer = require('multer')
// multer模块,nodejs中间件,用于上传图片
var bodyParser = require('body-parser')
// 如果使用POST方法，就必须导入bodyParser,body-parser请求体解析模块，是express的中间件用于接受请求体中的数据，并解析为对象，解析之后的对象会将作为body属性添加给rep对象

var web = express()
web.use(express.static('public'))
// 设置服务器静态文件夹,里面的文件都是呈现给人们看的网页
web.use(bodyParser.urlencoded({extended:false}))
// 插入中间件 ,bodyParser.urlencoded 用来解析 request 中的body中的urlencoded字符
// 设置随机名字
var index =Math.floor(Math.random()*100)
var fullName = ''

// 思路
// 上传内容并储存——1.设置存储的地方——2.设置存储时的名字{1.获取原来名字的后缀，2.再重新命名}
var headerConfig = multer.diskStorage({
    destination: '../pic',// destination目的地//设置存储的地方
    filename: function (req, file, callback) {// fliename 文件名 后面跟函数// file为当前上传的图片 

        var nameArray = file.originalname.split('.');//  1.选找到图片的名字,并进行分割
        var type = nameArray[nameArray.length - 1];// 先获取原来图片的后缀名
        fullName =req.query.pic_name+'.jpg';// '.' + type;// 新的名字
        callback(null, fullName)// 设置回调的内容,参数1：错误信息，参数2：图片新的名字
    }
});

// 设置使用当前的配置信息
// 上传完照片后要使用的配置信息
var upload = multer({storage:headerConfig})

// single 上传单个文件; photo 为前端上传图像的input标签的name值
// upload.single('photo')每次上传单个照片的配置信息
web.post('/upload',upload.single('photo'),function(req,res){
    res.send('')
    console.log('上传成功')

})
web.get('/getMyHeader',function(req,res){
    res.send('headers/'+ fullName)

})

web.listen('8888',function(){
    console.log('服务器开启：http://localhost:8888')
})