import React from 'react'
import { Button, Tooltip } from 'evergreen-ui'

function ToolTip(props) {
    return (
        <div style={{ textAlign: "center", marginTop: '100px' }}>
            <Tooltip content={`Selected position is ${props.position}`} position={props.position}>
                <Button appearance="primary">Press</Button>
            </Tooltip>
        </div>
    )
}

export default ToolTip;