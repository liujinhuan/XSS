var express = require('express');
var router = express.Router();

var comments = {}; // 保存在缓存中

// 用户数据的编码转义
function html_encode(str){
	var temp = '';
	if(str.length===0) return "";
	temp = str.replace("/&/g","&amp;");
	temp = str.replace("/</g","&lt;");
	temp = str.replace("/>/g","&gt;");
	temp = str.replace("/\s/g","&nbsp;");
	temp = str.replace("/'/g","&#39;");
	temp = str.replace("/\"/g","&quot;");
	temp = str.replace("/\n/g","<br/>");
	return temp;
}


/* GET home page. */
router.get('/', function(req, res, next) {
	// 不让浏览器对其拦截
	res.set('X-XSS-Protection','0')
	// 反射型
  	res.render('index', { title: 'XSS攻击实战', xss:req.query.xss});
  	// 存储型：存储在服务器端
});

router.get('/comment',function(req,res,next){
	// 对请求的数据编码，保存在缓存中
	var a = html_encode(req.query.comment);
	comments.v = a;
	res.json({
		code:1
	});
});

router.get('/getComment',function(req,res,next){
	// 直接返回数据给前端
	res.json({
		comment:comments.v
	});
});


module.exports = router;
