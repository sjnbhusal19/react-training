//event propagation : the event start form the root of the DOM and goes down upto the target element
<div>
    <div onClick={()=>console.log("div clicked")}>
        <p>
            <button onClick={()=>console.log("clicked")}></button>
        </p>
    </div>
</div>

// when we click on the button, the event will first run on div and then on the button, this is called event capturing phase,
// if we want to stop the event propagation, we can use event.stopPropagation() method in the button click handler

//if event is first run at button and then on the div, this is called event bubbling phase,
// we can use event.stopPropagation() method in the button click handler to stop the event propagation 

//bubbling event is the default behavior in react, so we don't need to do anything to make it work

//for capturing event, we need to use the onClickCapture prop in the div element like this:
{/* <div onClickCapture={()=>console.log("div clicked")}> */}