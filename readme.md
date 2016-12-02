监听端口:3001
mongodb: ./bin/mongod --dbpath ./blog/   需要启动
启动:node app.js
数据库:myblog

~~~~~~~~~~~~~~~~~~~~~~~~~~问题一~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/Users/chinaskin/myblog/web-blog-express/node_modules/mongodb/lib/utils.js:97
    process.nextTick(function() { throw err; });
                                  ^
TypeError: Cannot read property 'slice' of undefined
    at convert_tree_to_html (/Users/chinaskin/myblog/web-blog-express/node_modules/markdown/lib/markdown.js:1556:20)
    at Object.toHTMLTree (/Users/chinaskin/myblog/web-blog-express/node_modules/markdown/lib/markdown.js:112:14)
    at Object.toHTML (/Users/chinaskin/myblog/web-blog-express/node_modules/markdown/lib/markdown.js:82:22)
    at /Users/chinaskin/myblog/web-blog-express/model/post.js:100:45
    at Array.forEach (native)
解决:
应该docs是null，查询失败，应该是，js出这种错误一般就是因为调用slice的对象为null
查一下数据库，doc.post这个可能是null的   我遇到这样的问题就是这样的
修改如下：
docs.forEach(function(doc){
if(doc.post){
doc.post = markdown.toHTML(doc.post);
}
});
执行之前加个判断即可. 报错是提示doc.post为null导致后续出错
