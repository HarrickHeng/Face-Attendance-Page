   var arr = [112,112,34,'你好',112,112,34,'你好','str','str1'];  
        alert(arr.method3());  
 
 Array.prototype.method4 = function(){
            //将数组进行排序  
            this.sort();  
            //定义结果数组  
            var arr[this[0]];  
            for(var i = 1; i < this.length; i++){    //从数组第二项开始循环遍历数组  
                //判断相邻两个元素是否相等，如果相等说明数据重复，否则将元素写入结果数组  
                if(this[i] !== arr[arr.length - 1]){  
                    arr.push(this[i]);  
                }              
            }  
            return arr;  
              
        }  