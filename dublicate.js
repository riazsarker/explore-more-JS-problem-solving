const names =['abul','babul','sabul','abul','ebul','babul','abul','babul','sabul','abul','ebul','babul']

function remoteDuplicate(names){
    const unique = [];


    for(let i = 0; i<names.length;i++){
        const name = names[i];
        if(unique.includes(name)=== false){
            unique.push(name);
        }
    }
    return unique
}


const uniqueNames =remoteDuplicate(names);
