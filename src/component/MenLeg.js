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
    const bchest=['https://youtu.be/B2q0-IMtdEE','https://youtu.be/YaXPRqUwItQ','https://youtu.be/Dha6wZbFLbY','https://youtu.be/K3vgNL2OFI8','https://youtu.be/Im5nE3J558k','https://youtu.be/1qlN5EXFUNo','https://youtu.be/7ZQqU0QFB5w','https://youtu.be/-M4-G8p8fmc','https://youtu.be/8pppT2D4zuo','https://youtu.be/YGcqGD88JPw']
    const bname=['Side Hop','Squates','Side Lying(left and then right)','Backward lunge','donkey kick','quade stretch with wall','knee to chest','wall calf raise','sumo squade calf raises with wall','calf stretch']
    const ichest=['https://youtu.be/zJmYRT4v9rw','https://youtu.be/YaXPRqUwItQ','https://youtu.be/Kv5Be3Mb0YM','https://youtu.be/wrwwXE_x-pQ','https://youtu.be/NJ4JEAEIqvU','https://youtu.be/2hzwZQ9YCZM','https://youtu.be/ckummKuzlUU','https://youtu.be/y-wV4Venusw','https://youtu.be/BhQimqvU1tM','https://youtu.be/7ZQqU0QFB5w','https://youtu.be/-4tnXFJTpLo','https://youtu.be/L3v9Z6xPZXE','https://youtu.be/NePr1XKRTLU']
    const iname=['Jumping Jack','Squates','fire hydrant','lunge','side leg crunches','sumo squates','reverse flutter kick','wall sit','quade stretch (left and then right)','knee to chest stretch','calf raise with splayed foil','single leg calf hop','calf stretch']
    const achest=['https://youtu.be/tJrdJBWBu08','https://youtu.be/upsdqLsXvSY','https://youtu.be/Y6U998ea0-8','https://youtu.be/cVYnf2CFO9M','https://youtu.be/NJ4JEAEIqvU','https://youtu.be/eUl1Ttx8b98','https://youtu.be/h4439IQFAqI','https://youtu.be/y-wV4Venusw','https://youtu.be/BhQimqvU1tM','https://youtu.be/AWWF4nimzhk','https://youtu.be/9IdsuqXvIc8','https://youtu.be/NePr1XKRTLU']
    const aname=['Burpees','squates','bottom leg lift(left and then right)','curtsy lunges','side leg circle','Jumping squates','glute kick back(left and then right)','wall sit','quade stretch with wall','lying butterfly stretch','wall resisting single leg calf','calf stretch']

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
