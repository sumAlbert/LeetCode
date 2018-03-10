(function () {

    //堆
    var $heapTree = (function () {
        var $$heapArray = [];//存储heap的数组
        var $$heapDirection = true;//堆的方向；true---大根堆,false---小根堆



        var $$heapTree = function (arr,dirt) {
            $$heapArray=arr;
            $$heapDirection=dirt;
            this.$$buildTree();
        };

        //从某一个节点开始调整下面的堆
        $$heapTree.prototype.$$adjustTreeUnder = function ($$index) {
            if( $$index >= $$heapArray.length){
                return null;
            }
            var leftChild = 2 * $$index + 1;
            var rightChild = 2 * $$index + 2;
            var tempRoot = $$index;


            if( rightChild < $$heapArray.length && (($$heapDirection && Number($$heapArray[rightChild]) > Number($$heapArray[tempRoot])) ||(!$$heapDirection && Number($$heapArray[rightChild]) < Number($$heapArray[tempRoot])))){
                tempRoot = rightChild;
            }
            if( leftChild < $$heapArray.length && (($$heapDirection && Number($$heapArray[leftChild]) > Number($$heapArray[tempRoot]))||(!$$heapDirection && Number($$heapArray[leftChild]) < Number($$heapArray[tempRoot])))){
                tempRoot = leftChild;
            }
            if(tempRoot !== $$index){
                var tempSwitch = $$heapArray[$$index];
                $$heapArray[$$index] = $$heapArray[tempRoot];
                $$heapArray[tempRoot] = tempSwitch;
                arguments.callee(tempRoot);
            }
        };

        //建堆
        $$heapTree.prototype.$$buildTree = function(){
            var leafEnd = Math.floor(($$heapArray.length - 2)/2);//获取第一个非叶节点


            for(var $$index = leafEnd; $$index >= 0 ; $$index--){
                this.$$adjustTreeUnder($$index);
            }
            console.log($$heapArray);
        };

        //获取数组
        $$heapTree.prototype.$$getHeapNode = function ($index) {
          return $$heapArray[$index];
        };

        //获取元素个数
        $$heapTree.prototype.$$length = function () {
            return $$heapArray.length;
        };

        //只保留前面k项
        $$heapTree.prototype.$$saveTopK=function (k) {
          $$heapArray.length=k;
        };

        //输出数组
        $$heapTree.prototype.$$consoleTree = function () {
          console.log($$heapArray);
        };

        //修改结点
        $$heapTree.prototype.$$setNodeValue = function ($index,$value){
          if($index < $$heapArray.length){
              $$heapArray[$index] = $value;
              return true;
          }
          else{
              return false;
          }
        };

        return $$heapTree;
    })();





    window.$jsSTL={
        $heapTree:function(arr,dirt){
            return new $heapTree(arr,dirt);
        }
    }
})(window);


