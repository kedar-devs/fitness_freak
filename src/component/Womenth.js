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
export default function Womenth() {
    const bchest=['https://youtu.be/u6oYV3aaKNc','https://youtu.be/nGaXj3kkmrU','https://youtu.be/aclHkVaku9U','https://youtu.be/SJ1Xuz9D-ZQ','https://youtu.be/K3vgNL2OFI8','https://youtu.be/Dha6wZbFLbY','https://youtu.be/MeAeUcySvRQ','https://youtu.be/7xy99ZgARVA']
    const bname=['high stepping','Jumping Jack','Squates','donkey kicks(left and then right)','backward lunge','side-lying leg lift','modified burpees','knee to chest stretch(right and then left)']
    const ichest=['https://youtu.be/B2q0-IMtdEE','https://youtu.be/sqDGkIBYPAk','https://youtu.be/ToTUkX3am4w','https://youtu.be/CAZZz7uP-Ok','https://youtu.be/u6oYV3aaKNc','https://youtu.be/nGaXj3kkmrU','https://youtu.be/aclHkVaku9U','https://youtu.be/SJ1Xuz9D-ZQ','https://youtu.be/Dha6wZbFLbY','https://youtu.be/MeAeUcySvRQ','https://youtu.be/7xy99ZgARVA']
    const iname=['side hop','sumo squates','frog press','fire hydrant','high stepping','Jumping Jack','Squates','donkey kicks(left and then right)','side-lying leg lift','modified burpees','knee to chest stretch(right and then left)']
    const achest=['https://youtu.be/u6oYV3aaKNc','https://youtu.be/B2q0-IMtdEE','https://youtu.be/sqDGkIBYPAk','https://youtu.be/ToTUkX3am4w','https://youtu.be/CAZZz7uP-Ok','https://youtu.be/eKR209nWCdE','https://youtu.be/BNDw4ciQoQI','https://youtu.be/XULOKw4E4P4','https://youtu.be/FUX6Pz8vV0s','https://youtu.be/nGaXj3kkmrU','https://youtu.be/aclHkVaku9U','https://youtu.be/SJ1Xuz9D-ZQ','https://youtu.be/Dha6wZbFLbY','https://youtu.be/MeAeUcySvRQ']
    const aname=['high stepping','side hop','sumo squates','frog press','fire hydrant','bottom leg lift(left and then right)','glute kick back(left and then right)','wall sit','side lunge','Jumping squats','Jumping Jack','Squates','donkey kicks(left and then right)','side-lying leg lift','modified burpees','quad stretch with wall(leftand right)','lying butterfly stretch']

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
