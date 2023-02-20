import React from 'react';

const DemoOutput = (props) => {
    console.log('demo output')
    return <p>{props.show? 'paragraph show': ''}</p>
};

export default React.memo(DemoOutput);  // component 재생성 되지 않게 하기