## Explain Output:-

### Code Snippet:-

```
function createIncrement()
{
    letcount=0;
    functionin crement() {
        count++;
    }
    let message=`Count is${count}`;
    function log() {
        console.log(message);
    }
    return [increment,log];
}

const [increment,log] =createIncrement();
increment();
increment();
increment();
log();// What is logged?

```

### Concepts:-

`Scope`, `Lexical Env`.

### Output:-

The output of this code is going to be `Count is 0`.

### Explanation:-

- Both the count variable and message variable are declared inside the createIncrement method which is the parent function of the increment & log methods.

- Because of this we can say that both variables are within the block of the increment and log methods or they are within the lexical env of the increment and log methods.

- So both the methods can access the count and message variables & modify them as well.

- The increment method is called thrice & because of the count++ inside the increment the value of count will be 3.

- But because the message variable is already constructed with the initial value of count which is 0, it will be printed as `Count is 0`,
