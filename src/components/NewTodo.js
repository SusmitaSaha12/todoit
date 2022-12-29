import React from "react";
import { Stack } from "@mui/system";
import { TextField, Button } from "@mui/material";

const NewTodo = () => {
    return (
        <div>
            <Stack sx={{width:'40ch'}} ml={3} spacing={2} component="form" noValidate autoComplete="off">
                <h1><u>Create New Todo</u></h1>
                <TextField id="todo-title" size="small" label="Title" variant="outlined" />
                <TextField id="todo-desc"  multiline maxRows={4} label="Description" variant="outlined" />
                <Button variant="contained">Submit</Button>
            </Stack>
        </div>
    )
}

export default NewTodo;