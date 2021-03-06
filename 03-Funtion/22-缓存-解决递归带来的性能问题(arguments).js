// 使用缓存思想解决递归带来的性能问题(多次重复调用)

// 首先我们来观察一下 当n从20到21时,调用此函数 内部会多调用多少次此函数?
/*
    var count=0; // 计数器

	function feibonaqi(n){
		count++;
		if(n===1){
			return 1;
		}
		if(n===2){
			return 1;
		}
		if(n>2){
			return feibonaqi(n-1)+feibonaqi(n-2);
		}
    }

	console.log(feibonaqi(20));
	console.log(count); // 13529次
	console.log(feibonaqi(21));
	console.log(count); // 35420次  从20到21 调用次数增加一万余次
*/
/*
    var count=0;
    var cache=[0,1,1];
    function feibonaqi(n){
    	count++;
    	// 1. 从cache中获取数据
    	if(n in cache){
    		// 如果缓存中存在 直接返回
    		return cache[n];
    	}else{
    		// 如果缓存中不存在 进行递归
			temp= feibonaqi(n-1)+feibonaqi(n-2);
			// 将递归结果存入缓存
			cache[n]=temp;
			return temp;
    	}
    }
    // 效率的提升  显而易见
    console.log(feibonaqi(20));
	console.log(count); // 37次
	console.log(feibonaqi(21));
	console.log(count); //  40次
*/

// 为了安全 我们将缓存放入闭包中,只开放斐波那契方法

var feibonaqi = (function () {
    var cache = [0, 1, 1];
    return function feibonaqi(n) {
        // 1. 从cache中获取数据
        if (n in cache) {
            // 如果缓存中存在 直接返回
            return cache[n];
        } else {
            // 如果缓存中不存在 进行递归
            temp = feibonaqi(n - 1) + feibonaqi(n - 2);
            // 将递归结果存入缓存
            cache[n] = temp;
            return temp;
        }
    }
})();


console.log(feibonaqi(20));

