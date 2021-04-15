var todolist = new Vue({
    el: '#todolist',
    data: {
        newitem: '',
        sortByStatus: false,
        todo: [
            { id: 1, label: "Learn VueJs", done: true },
            { id: 2, label: "Code a todo list", done: false },
            { id: 3, label: "Learn something else", done: false }
        ]
    },
    methods: {
        addItem: function() {
            this.todo.push({ id: Math.floor(Math.random() * 9999) + 10, label: this.newitem, done: false });
            this.newitem = '';
        },
        markAsDoneOrUndone: function(item) {
            item.done = !item.done;
        },
        deleteItemFromList: function(item) {
            let index = this.todo.indexOf(item)
            this.todo.splice(index, 1);
        },
        clickontoogle: function(active) {
            this.sortByStatus = active;
        }
    },
    computed: {
        todoByStatus: function() {

            if (!this.sortByStatus) {
                return this.todo;
            }

            var sortedArray = []
            var doneArray = this.todo.filter(function(item) { return item.done; });
            var notDoneArray = this.todo.filter(function(item) { return !item.done; });

            sortedArray = [...notDoneArray, ...doneArray];
            return sortedArray;
        }
    }
});