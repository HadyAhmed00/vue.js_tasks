var todolist = new Vue({
    el: '#big',
    data: {
        mainDiv: {
            backcolor: '#7d2b2b',
            textColor: '#FFF',
            borderColor: '#434343',
            borderRd: '0',
        },
        li: {
            backcolor: '#434343',
            textColor: '#FFF',
            borderRd: '0',
        },
        btn: {
            backcolor: '#434343',
            textColor: '#FFF',
            borderRd: '0',
        },
        newitem: '',
        isEmpty: true,
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
        newItemValed: function() {
            if (!this.newitem == '') {
                this.addItem();
                this.isEmpty = true;
            } else {
                this.isEmpty = false;
            }
        }

    },

});