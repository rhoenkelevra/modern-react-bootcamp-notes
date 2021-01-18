import React, { Component } from "react";
import Message from "./Props";
import SlotMachine from "./SlotMachine";
import Friend from "./Loops";

class App extends Component {
    render() {
        return (
            <div className='App'>
                <SlotMachine s1='🍇' s2='🍇' s3='🍇' />
                <Message
                    from='Ringo'
                    to='Paul'
                    bangs={4} // props can be ints
                    data={[1, 2, 3, 4, 5]} // or other types of data
                    isFunny={true} // or just isFunny
                    img='https://source.unsplash.com/random/800x600'
                />
                <Message to='Jim' />
                <Friend
                    name='Elton'
                    hobbies={["piano", "dancing", "singing"]}
                />
            </div>
        );
    }
}

export default App;
