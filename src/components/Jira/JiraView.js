import React, {Component} from 'react';
import CardSection from './CardSection';

class JiraView extends Component
{
    render(){
        return(
            <div className="row">
                <div className="col-md-8">
                    <CardSection />
                </div>
                <div className="col-md-1">

                </div>
                <div className="col-md-2">

                </div>
            </div>
        )
    }
}

export default JiraView;