const EventEmitter =  require('events');
const emmitter = new EventEmitter();

//Register a listener
// emmitter.on('saved',(arg)=>{
//     console.log(`A saved event occurred: name: ${arg.name}, id: ${arg.id}`);
    
// });


// OR

function log(arg)
{
    console.log(`A saved event occured: name ${arg.name}, id: ${arg.id}`);
}

emmitter.on('saved',log);

// Raise a Event'
emmitter.emit('saved', {
    id: 1,
    name: 'Akash Kushwaha'
});


emmitter.off('saved', log)

emmitter.emit('saved',{
    id: 2,
    name:"Mustfa"

})

//after emmit.off() method it will not take any another raise event. 

