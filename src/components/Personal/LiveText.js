import React, {Component} from 'react';
const IPFS = require('ipfs');

class LiveText extends Component
{
    render(){
        const ipfs = new IPFS({
            repo : repo(),
            EXPERIMENTAL : {
                pubsub : true
            }
        });

        ipfs.once('ready', () => ipfs.id((err,info) => {
            if(err) throw err;
            console.log("IPFS ready with address" + info.id)
        }));

        function repo(){
            return 'ipfs/yjs-demo/' + Math.random();
        }
        return(
            <div className="row">
                <div className="col-md-12">
                     <p>Hello World</p>
                </div>
            </div>
        )
    }
}

export default LiveText;