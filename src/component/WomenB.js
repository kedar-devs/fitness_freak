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
export default function Womenb() {
    const bchest=['https://youtu.be/u6oYV3aaKNc','https://youtu.be/D_qMNWY0tHo','https://youtu.be/aclHkVaku9U','https://youtu.be/HypzhX00s6E','https://youtu.be/WowARnE-p0s','https://youtu.be/nmwgirgXLYM','https://youtu.be/SJ1Xuz9D-ZQ','https://youtu.be/iayBtEr06vQ']
    const bname=['high stepping','butt kick','squats','standing glute kickbacks','butt bridge','mountain climber','donkey kicks','kneeling lunge stretch']
    const ichest=['https://youtu.be/u6oYV3aaKNc','https://youtu.be/D_qMNWY0tHo','https://youtu.be/QOVaHwm-Q6U','https://youtu.be/aclHkVaku9U','https://youtu.be/HypzhX00s6E','https://youtu.be/WowARnE-p0s','https://youtu.be/eKR209nWCdE','https://youtu.be/CAZZz7uP-Ok','https://youtu.be/9Sk__yZ2DQY','https://youtu.be/nmwgirgXLYM','https://youtu.be/SJ1Xuz9D-ZQ','https://youtu.be/iayBtEr06vQ']
    const iname=['high stepping','butt kick','lunges','squats','standing glute kickbacks','butt bridge','bottom leg lift(right and then left)','fire hydrant','split squat','mountain climber','donkey kicks','kneeling lunge stretch']
    const achest=['https://youtu.be/u6oYV3aaKNc','https://youtu.be/D_qMNWY0tHo','https://youtu.be/HypzhX00s6E','https://youtu.be/QOVaHwm-Q6U','https://youtu.be/wzHjHs6jlIA','https://youtu.be/QOVaHwm-Q6U','https://youtu.be/WowARnE-p0s','https://youtu.be/eEG9uXjx4vQ','https://youtu.be/MI-jYzIv6JM','https://youtu.be/sqDGkIBYPAk','https://youtu.be/nmwgirgXLYM','https://youtu.be/oGZcBf8KlK8','https://youtu.be/DeTBwEL4m7s','https://youtu.be/SJ1Xuz9D-ZQ','https://youtu.be/aclHkVaku9U','https://youtu.be/eKR209nWCdE','https://youtu.be/CAZZz7uP-Ok','https://youtu.be/9Sk__yZ2DQY','https://youtu.be/iayBtEr06vQ']
    const aname=['high stepping','butt kick','standing glute kickbacks','lunges','curtsy lunges','lunge knee','butt bridge','flutter','bench glute kick back(right and then left)','sumo squat','mountain climber','hip bridge and leg lift(right and then left)','jumping squats','donkey kicks','squats','bottom leg lift','fire hydrant','split squat','kneeling lunge stretch']

    return (
        <div className="container-fluid">
                    <div className="beginner text-left">
                        <h3>beginner</h3><br />
                        <div className="row">
                        <div className="card-deck card-beg">
                            {array(bchest, bname,10)}
                        </div>
                    </div>
                </div>
                <div className="intermediate text-left">
                        <h3>intermediate</h3><br />
                        <div className="row">
                        <div className="card-deck card-int">
                            {array(ichest, iname,20)}
                        </div>
                    </div>
                </div>
                <div className="adv text-left"><hr/>
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
