// /js/core.js

function todoController ($scope, $http) {
    $scope.formData = {};

    $http.get('/todo/todos')
        .success(function (data) {
            $scope.todos = data;
        })
        .error(function (data) {
            console.log("Error" + data);
        });

    $scope.createTodo = function () {
        if( $scope.formData.text !== undefined ) {
            $http.post('/todo/new', $scope.formData)
                .success(function (data) {
                    $scope.formData = {};
                    $scope.todos = data;
                })
                .error(function (data) {
                    console.log("Error" + data);
                });
        }else{
            alert("텍스트를 입력하세요");
        }
    };

    $scope.completeTodo = function($event, id){
        var done = $event.target.checked;
        $http.put('/todo/updateTodo/' + id, {done: done})
            .success(function (data) {
                $scope.formData = {};
                $scope.todos = data;
            })
            .error(function (data) {
                console.log("Error" + data);
            });
    }

    $scope.deleteTodo = function (id) {
        $http.delete('/todo/delete/' + id)
            .success(function (data) {
                $scope.todos = data;
            })
            .error(function (data) {
                console.log("Error" + data);
            });
    }

    $scope.modalClose = function(){
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    }

    $scope.updateView = function (id, text) {

        var modal = document.getElementById('myModal');
        $('#id').text(id);
        $('#modal_text').val(text);
        modal.style.display = "block";

    }

    $scope.updateTodo = function(){
        var id = $('#id').text();
        var text = $('#modal_text').val();
        if(text != undefined && text != "") {
            $http.put('/todo/updateTodo/' + id, {text: text})
                .success(function (data) {
                    $scope.formData = {};
                    $scope.todos = data;
                })
                .error(function (data) {
                    console.log("Error" + data);
                });

            var modal = document.getElementById('myModal');
            modal.style.display = "none";
        }else{
            alert("텍스트를 입력하세요");
        }
    }

};