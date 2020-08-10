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
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">perform this excersise atleast {j} times.</p>
                    
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
export default function Mench() {
    const bshoulder=['https://youtu.be/zJmYRT4v9rw','https://youtu.be/Phj3UiCz0ME','https://youtu.be/xgSZNIXJlOQ','https://youtu.be/c3ZGl4pAwZ4','https://youtu.be/bP52FXTlzjA','https://youtu.be/J0DnG1_S92I','https://youtu.be/mDIeogZ8SYQ','https://youtu.be/olPLywe4f60','https://youtu.be/olPLywe4f60','https://youtu.be/olPLywe4f60','https://youtu.be/lsoQDZkmQ0c','https://youtu.be/udo0RzY-9Cg','https://youtu.be/IODxDxX7oi4','https://youtu.be/t6EjIe4A-oI','https://youtu.be/YB0egDzsu18','https://youtu.be/hSaqjF0dMMg','https://youtu.be/u8KplvVTrI8']
    const bname=['Jumping Jack','Arm Raise','Side Arm Raise','Triceps Dips','Arm Circle(clockwise and then anti-clockwise)','Diamond Push-Ups','Chest Press Pulse','Leg Barbell Curle Left','Leg Barbell Curle Right','Diagonal Plank','Punches','Push-Ups','Inchworms','Wall Push-Ups','Triceps Stretch','Standing Bicep Stretch']
    const ishoulder=['https://youtu.be/bP52FXTlzjA','https://youtu.be/pnt7HBOvUj8','https://youtu.be/LwTGJdnmZWo','https://youtu.be/VIl7V8hbJGk','https://youtu.be/HO_E8D-4MR8','https://youtu.be/olPLywe4f60','https://youtu.be/XfFe0xjopos','https://youtu.be/tJrdJBWBu08','https://youtu.be/hSaqjF0dMMg','https://youtu.be/u8KplvVTrI8']
    const iname=['Arm Circle(clockwise and then anti-clockwise)','Floor Tricep Dips','Military Push-Ups','Alternating Hooks','Push up and Rotate','Leg Barbell Curle(first left than right)','Skipping Without Rope','Push-Ups','Burpees','Triceps Stretch','Standing Bicep Stretch']
    const ashoulder=['https://youtu.be/bP52FXTlzjA','https://youtu.be/XfFe0xjopos','https://youtu.be/olPLywe4f60','https://youtu.be/tJrdJBWBu08','https://youtu.be/u3MD5H7JONA','https://youtu.be/LwTGJdnmZWo','https://youtu.be/u6J2wkB2OHw','https://youtu.be/to2cpwqfZfQ','https://youtu.be/gNywcYw-YSM','https://youtu.be/HO_E8D-4MR8','https://youtu.be/hSaqjF0dMMg','https://youtu.be/u8KplvVTrI8']
    const aname=['Arm Circle(clockwise and then anti-clockwise)','Skipping Without Rope','Leg Barbell Curle(first left than right)','Burpees','Arm curl crunchs','military Push-Ups','sholder gator','doorway curl(left and then right)','modified push up low hold','chest press','push up and Rotate','Triceps Stretch','Standing Bicep Stretch']

    return (
        <div className="container">
                    <div className="beginner">
                        <h3>beginner</h3><br />
                        <div className="row">
                        <div className="card-deck card-beg">
                            {array(bshoulder, bname,10)}
                        </div>
                    </div>
                </div>
                <div className="intermediate">
                        <h3>intermediate</h3><br />
                        <div className="row">
                        <div className="card-deck card-int">
                            {array(ishoulder, iname,20)}
                        </div>
                    </div>
                </div>
                <div className="adv">
                        <h3>Advance</h3><br />
                        <div className="row">
                        <div className="card-deck card-adv">
                            {array(ashoulder, aname,30)}
                        </div>
                    </div>
                </div>
                </div>
    )
}
