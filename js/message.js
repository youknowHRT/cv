!function(){
  var view = document.querySelector('section.messageBoard')

  var model ={
    init:function(){
      var APP_ID = '8cTwMRUmk2S0Qjm4mPkKH9Ci-9Nh9j0Va'
      var APP_KEY = 'B4I3dDuL8OfPOG85amvJrjYf'
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    fetch:function(){
      var query = new AV.Query('Message');
      return query.find()
    },
    save:function(){
      
    }
  }

  var controller ={
    view:null,
    model:null,
    messageList:null,
    init:function(view,model){
      this.view=view;
      this.model=model;
      this.messageList=view.querySelector('#messageList')
      this.form=view.querySelector('form')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },
    
    loadMessages:function(){
      this.model.fetch().then(
        (messages)=>{
          let array=messages.map((item)=>item.attributes)
          array.forEach((item)=>{
            let li =document.createElement('li')
            li.innerText=`${item.name}: ${item.content}`
            this.messageList.append(li)
          })
        }
      )
    },
    bindEvents:function(){
        this.form.addEventListener('submit',(e)=>{
        e.preventDefault()
        this.getMessage()
      })
    },
    getMessage:function(){
      let myForm=this.form;
      let content=myForm.querySelector('input[name=content]').value;
      let name=myForm.querySelector('input[name=name]').value;
      var Message = AV.Object.extend('Message')
      var message = new Message();
      message.save({
        'name': name,
        'content': content,
      }).then(function(object) {
        let li =document.createElement('li')
        li.innerText=`${object.attributes.name}: ${object.attributes.content}`
        messageList.append(li)
        myForm.querySelector('input[name=content]').value = '';
      })
    }
  }

  controller.init(view,model)

  

  
}.call()