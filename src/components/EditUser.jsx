import { FormControl, Input, Typography, FormGroup, InputLabel, Button, makeStyles } from "@material-ui/core";
import { useParams, useNavigate } from "react-router-dom";
import { getUsers, editUser } from "../Service/api";
import { useEffect, useState } from "react";



const initialValues = {
    name: '',
    usn: "",
    email: '',
    branch: ''
}


const useStyles = makeStyles({
    form: {
        background: "grey",
        margin: "5% 0 0 18%",
        padding: "10px 20px 30px 20px",
        width: "60%",
        color: "white",
        '& > *': {
            marginTop: "20px"
        }


    },
    button: {
        backgroundColor: "black",
        color: "white"
    }

})






const EditUsers = () => {
    const classes = useStyles();
    const { id } = useParams();
    let history = useNavigate();
    const [user, setUser] = useState(initialValues);
    const { name, usn, email, branch } = user;


    useEffect(() => {
        const loadUserData = async () => {
            const response = await getUsers(id);
            setUser(response.data);
        } 
        loadUserData();
    }, [id]);

    


    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const editUserDetails = async () => {
        const response = await editUser(id, user);
        history.push('/all');

    }

    return (
        <FormGroup className={classes.form} >
            <Typography variant='h4' style={{ fontFamily: "monospace" }}> Edit Students</Typography>
            <FormControl >
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">USN</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='usn' value={usn} aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Branch</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='branch' value={branch} aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} aria-describedby="my-helper-text" />
            </FormControl>
            <Button variant="contained" onClick={() => editUserDetails()} className={classes.button} style={{ borderRadius: 10, width: 50, margin: "20px 0 0 38%" }}>Upload</Button>
        </FormGroup>
    );
}
export default EditUsers;