import React from 'react';
import Reactplayer from 'react-player'
const display=(chest, name,j)=>{
    console.log('in display')
    return(
        <div className="col-md-4 col-sm-4">
        <div className="card faded">
            <div className="wrapper">
            <Reactplayer
                    url={chest}
                    className='player'
                    width='100%'
                    height='100%'
                />

                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text farm">perform this excersise atleast {j} times.</p>
                    
                </div>
                </div>
                </div>
    )
    
}
function array(chest, name,j){

    var i=0;
    var tmp=[]
    for (i=0;i<chest.length;i++){
        if(i===2){
            tmp.push(<br></br>)
        }

        tmp.push(display(chest[i],name[i],j))

    }
    return tmp;
    
}
export default function Womench() {
    const bshoulder=['https://youtu.be/nGaXj3kkmrU','https://youtu.be/6kALZikXxLc','https://youtu.be/140RTNMciH8','https://youtu.be/gNywcYw-YSM','https://youtu.be/udo0RzY-9Cg','https://youtu.be/urICkMgMrjk','https://youtu.be/YB0egDzsu18','https://youtu.be/EgIMk-PZwo0','https://youtu.be/VIl7V8hbJGk','https://youtu.be/3Wn0-JyAZm8','https://youtu.be/BglqDh5Xozc','https://youtu.be/u8KplvVTrI8']
    const bname=['Jumping Jack','Triceps Dips','Arm Circle(clockwise and then anti-clockwise)','Chest Press Pulse','Punches','dynamic chest','wall push-up','knee push-up','alternating hooks','up and down plank','Triceps Stretch','Standing Bicep Stretch']
  

    return (
        <div className="container">
                    <div className="arm" style={{background:'pink'}}>
                        <h3>intermediate</h3>
                        <div className="row">
                        <div className="card-deck card-arm">
                            {array(bshoulder, bname,20)}
                        </div>
                    </div>
                </div>
                
                </div>
    )
}
