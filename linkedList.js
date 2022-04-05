// const n1 ={
//     data:100
// }

// const n2 ={
//     data:200
// }

// n1.next = n2
// console.log(n1)

class Node{
    constructor(data,next=null){
        this.data= data
        this.next = next
    }
}
const n1 = new Node(100);


class LinkedList{
    constructor() {
            this.head= null
            this.siz =0;
    }
    // Insert First node 
    insertFirst(data){
        this.head= new Node(data,this.head);
    }
    // Insert Last node 

    // Insert at index


    // Get at index

    // Remove at index

    // clear list 

    // Print list data
    printListData(){
        let current = this.head;

        while(current){
            console.log(current.data)

            current = current.next
        }
    }
}

const ll = new LinkedList();


ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)

ll.printListData();