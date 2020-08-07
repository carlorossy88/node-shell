const pwd = require('./pwd');

process.stdin.write('promp>');//function executes

process.stdin.on('data', (data) => {
    
    if(data.toString().trim() === 'pwd') {
        pwd();
    }
    process.stdout.write('\nprompt > ');
}) 

