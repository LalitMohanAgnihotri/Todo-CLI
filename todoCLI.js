import readline from 'readline';

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let todoList=[];

const showMenu=()=>{
    console.log('\nTodo CLI Application');
    console.log('1. View Todo List');
    console.log('2. Add Todo Item');
    console.log('3. Remove Todo Item');
    console.log('4. Exit');
    rl.question('Choose an option: ',(option)=>{
        switch(option){
            case '1':
                viewTodoList();
                break;
            case '2':
                addTodoItem();
                break;  
            case '3':
                removeTodoItem();
                break;
            case '4':
                rl.close();
                break;
            default:
                console.log('Invalid option. Please try again.');
                showMenu();
        }

    });
};

const viewTodoList=()=>{
    console.log('\nYour Todo List:');
    if(todoList.length===0){
        console.log('No items in the todo list.');  
    }else{
        todoList.forEach((item,index)=>{
            console.log(`${index+1}. ${item}`);
        });
    }
    showMenu();
};

const addTodoItem=()=>{
    rl.question('Enter the todo item: ',(item)=>{
        todoList.push(item);
        console.log(`'${item}' has been added to your todo list.`);
        showMenu();
    });
};  
const removeTodoItem=()=>{
    rl.question('Enter the number of the item to remove: ',(number)=>{
        const index=parseInt(number)-1;
        if(index>=0 && index<todoList.length){
            const removedItem=todoList.splice(index,1);
            console.log(`'${removedItem}' has been removed from your todo list.`);
        }else{
            console.log('Invalid item number. Please try again.');
        }
        showMenu();
    });
};

showMenu();
