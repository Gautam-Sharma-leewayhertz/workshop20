import { Button,makeStyles } from '@material-ui/core'
import React from 'react'
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';

const user=makeStyles({
    content:{
        margin:'10px'
      },
})

export default function BottomButtons() {
    const classes=user();
    return (
        <div>
            <Button startIcon="" color="primary" variant='contained' className={classes.content}>Menu</Button>
            <Button className={classes.content} startIcon="</>" color="primary" variant='contained'> Handoff</Button>
            <Button className={classes.content} color="primary" variant='contained'
                startIcon={<ChatBubbleOutlinedIcon/>}>
            No Comments
            </Button>
        </div>
    )
}
