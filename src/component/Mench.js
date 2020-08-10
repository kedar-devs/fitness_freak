import React from 'react';
import Reactplayer from 'react-player'
const display=(chest, name, j)=>{
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
function array(chest, name, j){

    var i=0;
    var tmp=[]
    for (i=0;i<chest.length;i++){
        if(i===2){
            tmp.push(<br></br>)
        }

        tmp.push(display(chest[i],name[i], j))

    }
    return tmp;
    
}
export default function Mench() {
    const bchest=['https://youtu.be/zJmYRT4v9rw','https://youtu.be/Me9bHFAxnCs','https://youtu.be/IODxDxX7oi4','https://youtu.be/rr6eFNNDQdU','https://youtu.be/c3ZGl4pAwZ4','https://youtu.be/WcHtt6zT3Go','https://youtu.be/Aa6zdmje-c4','https://youtu.be/3sLEkLJse5Y']
    const bname=['Jumping Jack','Inclined Push-Ups','Push-Ups','Wide Arm Push-Ups','Triceps Dips','Knee Push-Ups','Cobra Stretch','Chest Stretch']
    const ichest=['https://youtu.be/zJmYRT4v9rw','https://youtu.be/WcHtt6zT3Go','https://youtu.be/IODxDxX7oi4','https://youtu.be/rr6eFNNDQdU','https://youtu.be/CdH5dT12axE','https://youtu.be/YEuQAAZJJbg','https://youtu.be/HO_E8D-4MR8','https://youtu.be/SKPab2YC8BE','https://youtu.be/6jHsraw2NIk','https://youtu.be/Aa6zdmje-c4','https://youtu.be/3sLEkLJse5Y']
    const iname=['Jumping Jack','Knee Push-Ups','Push-Ups','Wide Arm Push-Ups','Hindu Push-Ups','Staggered Push-Ups','Push-Ups and Rotate','Declined Push-Ups','Shoulder Stretch','Cobra Stretch','Chest Stretch']
    const achest=['https://youtu.be/zJmYRT4v9rw','https://youtu.be/bP52FXTlzjA','https://youtu.be/tJrdJBWBu08','https://youtu.be/YEuQAAZJJbg','https://youtu.be/CdH5dT12axE','https://youtu.be/HO_E8D-4MR8','https://youtu.be/J0DnG1_S92I','https://youtu.be/3K8T3JSA2H8','https://youtu.be/fKBeHALPsSU','https://youtu.be/6jHsraw2NIk','https://youtu.be/Aa6zdmje-c4','https://youtu.be/3sLEkLJse5Y']
    const aname=['Jumping Jack','Arm Circle','Burpees','Staggered Push-Ups','Hindu Push-Ups','Push-Ups and Rotate','Diamond Push-Ups','Box Push-Ups','Spiderman Push-Ups','Declined Push-Ups','Shoulder Stretch','Cobra Stretch','Chest Stretch']

    return (
        <div className="container">
                    <div className="beginner">
                        <h3>beginner</h3><br />
                        <div className="row">
                        <div className="card-deck card-beg">
                            {array(bchest, bname,10)}
                        </div>
                    </div>
                </div>
                <div className="intermediate">
                        <h3>intermediate</h3><br />
                        <div className="row">
                        <div className="card-deck card-int">
                            {array(ichest, iname,20)}
                        </div>
                    </div>
                </div>
                <div className="adv">
                        <h3>Advance</h3><br />
                        <div className="row">
                        <div className="card-deck card-adv">
                            {array(achest, aname,30)}
                        </div>
                    </div>
                </div>
                </div>
    )
}
