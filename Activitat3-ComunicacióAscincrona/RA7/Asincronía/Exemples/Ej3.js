function task1(callback){
    setTimeout(() => {
        console.log("Task 1 complete");
    }, 2000);
}

function task2(callback){
    setTimeout(() => {
        console.log("Task 2 complete");
    }, 1000);
}

function task3(callback){
    setTimeout(() => {
        console.log("Task 3 complete");
    }, 3000);
}

function task4(callback){
    setTimeout(() => {
        console.log("Task 4 complete");
    }, 1500);
}

task1();
task2();
task3();
task4();