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
export default function Womenbely() {
    const bchest=['https://youtu.be/2J2g7XOr2i4','https://youtu.be/u6oYV3aaKNc','https://youtu.be/UfPPoPayOp4','https://youtu.be/NeAtimSCxsY','https://youtu.be/nmwgirgXLYM','https://youtu.be/eEG9uXjx4vQ','https://youtu.be/JB2oyawG9KI','https://youtu.be/WowARnE-p0s','https://youtu.be/XfFe0xjopos','https://youtu.be/ASdvN_XEl_c','https://youtu.be/JDcdhTuycOI','https://youtu.be/gCPLXLVWfMw']
    const bname=['Jumping Jack','high stepping','standing bicycle crunches','russian twist','Mountain climber','flutter kick','leg raise','butt bridge','skipping without rope','plank','cobra stretch','lying twist stretch']
    const ichest=['https://youtu.be/2J2g7XOr2i4','https://youtu.be/nmwgirgXLYM','https://youtu.be/u6oYV3aaKNc','https://youtu.be/hyv14e2QDq0','https://youtu.be/JB2oyawG9KI','https://youtu.be/9KIRT-5PMJU','https://youtu.be/Trel-z3J3eo','https://youtu.be/-ikJuowk5Lk','https://youtu.be/ASdvN_XEl_c','https://youtu.be/XfFe0xjopos','https://youtu.be/JDcdhTuycOI','https://youtu.be/gCPLXLVWfMw']
    const iname=['Jumping Jack','Mountain climber','high stepping','reverse crunches','leg raise','heel touch','reclined oblique twist','heel to the heaven','plank','skipping without rope','Cobra Stretch','lying twist stretch(right and then left)']
    const achest=['https://youtu.be/2J2g7XOr2i4','https://youtu.be/u6oYV3aaKNc','https://youtu.be/MT8BipYQvRY','https://youtu.be/mK_VURuFYyQ','https://youtu.be/9KIRT-5PMJU','https://youtu.be/bfzhYKX2tDg','https://youtu.be/WowARnE-p0s','https://youtu.be/55yxIvrHUkA','https://youtu.be/-ikJuowk5Lk','https://youtu.be/1wBgF_AJeWE','https://youtu.be/ASdvN_XEl_c','https://youtu.be/XfFe0xjopos','https://youtu.be/JDcdhTuycOI','https://youtu.be/gCPLXLVWfMw']
    const aname=['Jumping Jack','high stepping','cross knee plank','cross arm crunches','heel touch','x man crunch','butt bridge','side crunches','heel to the heaven','v-hold','plank','skipping without rope','Cobra Stretch','lying twist stretch(right and then left)']

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
