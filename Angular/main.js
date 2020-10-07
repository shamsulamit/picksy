angular.module("todoApp",[]).controller("todoCont",function(){
var root=this;

//array of object
root.todo=[];

  root.add=function(){
 
 //alert(root.txtTask);  
     var json={'task':root.txtTask,'done':false};

    root.todo.push(json);

   };

  
  root.remove = function() {
          var oldTodos = root.todo;
          root.todo = [];
          angular.forEach(oldTodos, function(todo) {
            if (!todo.done) root.todo.push(todo);
          });
    };

  root.remaining = function() {
          var count = 0;
          angular.forEach(root.todo, function(item) {
            
      //count += item.done ? 0 : 1;
      
      if(!item.done){
        count +=1;
      }
      
          });
          return count;
  };

  
});