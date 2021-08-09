const btn = document.getElementById("btn")

btn.onclick = function(){
  import('./hello.js').then(module=>{
    module.hello()
  })
}