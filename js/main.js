!function () {
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if(n >= code.length){
                window.clearInterval(id)
                fn&&fn.call()
            }
        }, 50)
    }
    let code = `
/*
 *我们来用css画一只皮卡丘吧
 */    

/*
 *首先给一点皮卡丘的颜色
 */
.preview{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FEE433;
}
.wrapper{
  width: 100%;
  height: 165px;
  position: relative;
}
/*
 *然后画皮卡丘的鼻子
 */
.nose{
  width: 0px;
  height: 0px;
  border: 11px solid red;
  border-radius: 11px;
  border-width: 12px;
  border-color: black transparent transparent;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 28px;
}
/*
 *接着画皮卡丘的眼睛
 */
.eye{
  height: 49px;
  width: 49px;
  background: #2E2E2E;
  position: absolute;
  top: 0;
  border-radius: 50%;
  border: 2px solid #000000;
}
/*
 *皮卡丘的眼睛要亮晶晶的
 */
.eye::before{
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  border: 2px solid #000;
  position: absolute;
  left: 6px;
}
/*
 *左眼在左边
 */
.eye.left{
  right: 50%;
  margin-right: 90px;
}
/*
 *右眼在右边
 */
.eye.right{
  left: 50%;
  margin-left: 90px;
}
/*
 *然后画皮卡丘的脸蛋子
 */
.face{
  width: 68px;
  height: 68px;
  background: #FC0D1C;
  position: absolute;
  top: 85px;
  border-radius: 50%;
  border: 2px solid #000;
}
/*
 *把脸蛋放到正确的位置
 */
.face.left{
  right: 50%;
  margin-right: 116px;
}
.face.right{
  left: 50%;
  margin-left: 116px;
}
/*
 *画嘴巴，上嘴唇
 */
.upperLip{
  width: 80px;
  height: 25px;
  border: 3px solid black;
  top: 50px;
  background: #FEE433;
}
.upperLip.left{
  border-bottom-left-radius: 40px 25px;
  border-top: none;
  border-right: none;
  transform: rotate(-20deg);
  position: absolute;
  right: 50%;
}
.upperLip.right{
  border-bottom-right-radius: 40px 25px;
  border-top: none;
  border-left: none;
  transform: rotate(20deg);
  position: absolute;
  left: 50%;
}
/*
 *下嘴唇
 */
.lowerLip-wrapper{
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -150px;
  height: 110px;
  width: 300px;
  overflow: hidden;
}
.lowerLip{
  width: 300px;
  height: 3500px;
  background: #990513;
  border-radius: 200px/2000px;
  border: 2px solid black;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}
/*
 *最后画上皮卡丘的小舌头
 */
.lowerLip::after{
  content: '';
  display: block;
  width: 100px;
  height: 100px;
  background: #FC4A62;
  position: absolute;
  bottom: -20px;
  left: 50%;
  margin-left: -50px;
  border-radius: 50%;
}
/*
 *画好了，一只可爱的皮卡丘送给你~
 */
    `
    writeCode('', code)
}.call()