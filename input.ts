const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event)=>{
    const inputEvent = event.currentTarget as HTMLInputElement;
    console.log(inputEvent.value)
})