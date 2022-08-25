import React, { Fragment } from 'react'
import { FormControlLabel, Grid,  Radio, RadioGroup, Typography,IconButton,Box, Select, Button,Paper,TextField, MenuItem, InputLabel, Checkbox, Container} from '@mui/material'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { useEffect,useState } from 'react';
import Mapex from './Mapex';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import '../CSS/Bidprocess.css'
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@mui/styles';
import { margin, padding } from '@mui/system';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const useStyles = makeStyles(() => ({
    paper1:{
        width: 1300,
        padding: 15,
        margin:15
    },

    box1:{
        backgroundColor:'#eeeeee'
    },

    row1:{
        backgroundColor: '#e1f5fe'
    }

    
}))



export default function BidProcess() {
    const classes = useStyles();
    const [currentname, setCurrentname] = useState([]);
    let navigate = useNavigate();

    //add rooms
    const [addRooms, setAddRoom] = useState([
        { room: '',roomSquare:0},
        
    ]);

    const [addRooms_1, setAddRoom_1] = useState([
        { room_1: '',roomSquare_1:0},
        
    ]);

    const [addRooms_2, setAddRoom_2] = useState([
        { room_2: '',roomSquare_2:0},
        
    ]);

    const [addRooms_3, setAddRoom_3] = useState([
        { room_3: '',roomSquare_3:0},
        
    ]);

    //add mbrooms
    const [addMBRoom, setAddMBRoom] = useState([
        {MBRoom: '', MBRoomSquare:0}
    ]);
    const [addMBRoom_1, setAddMBRoom_1] = useState([
        {MBRoom_1: '', MBRoomSquare_1:0}
    ]);
    const [addMBRoom_2, setAddMBRoom_2] = useState([
        {MBRoom_2: '', MBRoomSquare_2:0}
    ]);

    const [addMBRoom_3, setAddMBRoom_3] = useState([
        {MBRoom_3: '', MBRoomSquare_3:0}
    ]);

    //add toilet

    const [addToilet, setAddToilet] = useState([
        {toilet: '', toiletSquare:0}
    ])
    const [addToilet_1, setAddToilet_1] = useState([
        {toilet_1: '', toiletSquare_1:0}
    ])
    const [addToilet_2, setAddToilet_2] = useState([
        {toilet_2: '', toiletSquare_2:0}
    ])

    const [addToilet_3, setAddToilet_3] = useState([
        {toilet_3: '', toiletSquare_3:0}
    ])



    //add bathrooms
    const [addBathRoom, setAddBathRoom] = useState([
        {bathroom: '', bathroomSquare:0 }
    ])
    const [addBathRoom_1, setAddBathRoom_1] = useState([
        {bathroom_1: '', bathroomSquare_1:0 }
    ])
    const [addBathRoom_2, setAddBathRoom_2] = useState([
        {bathroom_2: '', bathroomSquare_2:0 }
    ])
    const [addBathRoom_3, setAddBathRoom_3] = useState([
        {bathroom_3: '', bathroomSquare_3:0 }
    ])

    const [f1hide, setF1Hide]=useState(true);
    const [f2hide, setF2Hide] = useState(true);
    const [f3hide, setF3Hide] =useState(true);

  
    
    useEffect(()=>{
        const currentname = JSON.parse(localStorage.getItem('landowner'));
        if(currentname){
            setCurrentname(currentname);
        }
    },[]);
    const logout = () => {
        localStorage.removeItem("landowner");
        navigate(-1);
      }

     
     
      const [Squarefeet, setSquarefeet] = useState();
      const [duration, setDuration] = useState();
      



   const handleAddRoomFields = () => {
    const values = [...addRooms];
    values.push({room:'', roomSquare:0})
    setAddRoom(values);
   };

   const handleRemoveRoomFields =() =>{
    const values = [...addRooms];
    if(values.length > 1) values.pop();
    setAddRoom(values);
   };
   
   const handleAddRoomFields_1 = () => {
    const values = [...addRooms_1];
    values.push({room_1:'', roomSquare_1:0})
    setAddRoom_1(values);
   };

   const handleRemoveRoomFields_1 =() =>{
    const values = [...addRooms_1];
    if(values.length > 1) values.pop();
    setAddRoom_1(values);
   };

   
   const handleAddRoomFields_2 = () => {
    const values = [...addRooms_2];
    values.push({room_2:'', roomSquare_2:0})
    setAddRoom_2(values);
   };

   const handleRemoveRoomFields_2 =() =>{
    const values = [...addRooms_2];
    if(values.length > 1) values.pop();
    setAddRoom_2(values);
   };

   
   const handleAddRoomFields_3 = () => {
    const values = [...addRooms_3];
    values.push({room_3:'', roomSquare_3:0})
    setAddRoom_3(values);
   };

   const handleRemoveRoomFields_3 =() =>{
    const values = [...addRooms_3];
    if(values.length > 1) values.pop();
    setAddRoom_3(values);
   };

//mbrooms
   const handleAddMBRoomFields =() => {
    const values = [...addMBRoom];
    values.push({MBRoom:'',MBRoomSquare:0})
    setAddMBRoom(values);
   }

   const handleRemoveMBRoomFields = () => {
    const values = [...addMBRoom];
    if(values.length >1) values.pop();
    setAddMBRoom(values);
   }
   const handleAddMBRoomFields_1 =() => {
    const values = [...addMBRoom_1];
    values.push({MBRoom_1:'',MBRoomSquare_1:0})
    setAddMBRoom_1(values);
   }
   const handleRemoveMBRoomFields_1 = () => {
    const values = [...addMBRoom_1];
    if(values.length >1) values.pop();
    setAddMBRoom_1(values);

   }
   const handleAddMBRoomFields_2 =() => {
    const values = [...addMBRoom_2];
    values.push({MBRoom_2:'',MBRoomSquare_2:0})
    setAddMBRoom_2(values);
   }
   const handleRemoveMBRoomFields_2 = () => {
    const values = [...addMBRoom_2];
    if(values.length >1) values.pop();
    setAddMBRoom_2(values);
    
   }
   const handleAddMBRoomFields_3 =() => {
    const values = [...addMBRoom_3];
    values.push({MBRoom_3:'',MBRoomSquare_3:0})
    setAddMBRoom_3(values);
   }

   const handleRemoveMBRoomFields_3 = () => {
    const values = [...addMBRoom_3];
    if(values.length >1) values.pop();
    setAddMBRoom_3(values);
   }
//toilet
   const handleAddToiletFields = () => {
    const values = [...addToilet];
    values.push({toilet:'', toiletSquare:0})
    setAddToilet(values);
   }

   const handleRemoveToiletFields = () => {
    const values = [...addToilet];
    if(values.length >1) values.pop();
    setAddToilet(values);
   }

   const handleAddToiletFields_1 = () => {
    const values = [...addToilet_1];
    values.push({toilet_1:'', toiletSquare_1:0})
    setAddToilet_1(values);
   }

   const handleRemoveToiletFields_1 = () => {
    const values = [...addToilet_1];
    if(values.length >1) values.pop();
    setAddToilet_1(values);
   }
   const handleAddToiletFields_2 = () => {
    const values = [...addToilet_2];
    values.push({toilet_2:'', toiletSquare_2:0})
    setAddToilet_2(values);
   }

   const handleRemoveToiletFields_2 = () => {
    const values = [...addToilet_2];
    if(values.length >1) values.pop();
    setAddToilet_2(values);
   }
   const handleAddToiletFields_3 = () => {
    const values = [...addToilet_3];
    values.push({toilet_3:'', toiletSquare_3:0})
    setAddToilet_3(values);
   }

   const handleRemoveToiletFields_3 = () => {
    const values = [...addToilet_3];
    if(values.length >1) values.pop();
    setAddToilet_3(values);
   }
//bathroom
   const handleAddBathRoomFields = () => {
    const values = [...addBathRoom];
    values.push({bathroom: '' , bathroomSquare:0})
    setAddBathRoom(values)
   }

   const handleRemoveBathRoomFields = () => {
    const values = [...addBathRoom];
    if(values.length >1 ) values.pop();
    setAddBathRoom(values);
   }

   const handleAddBathRoomFields_1 = () => {
    const values = [...addBathRoom_1];
    values.push({bathroom_1: '' , bathroomSquare_1:0})
    setAddBathRoom_1(values)
   }

   const handleRemoveBathRoomFields_1 = () => {
    const values = [...addBathRoom_1];
    if(values.length >1 ) values.pop();
    setAddBathRoom_1(values);
   }
   const handleAddBathRoomFields_2 = () => {
    const values = [...addBathRoom_2];
    values.push({bathroom_2: '' , bathroomSquare_2:0})
    setAddBathRoom_2(values)
   }

   const handleRemoveBathRoomFields_2 = () => {
    const values = [...addBathRoom_2];
    if(values.length >1 ) values.pop();
    setAddBathRoom_2(values);
   }
   const handleAddBathRoomFields_3 = () => {
    const values = [...addBathRoom_3];
    values.push({bathroom_3: '' , bathroomSquare_3:0})
    setAddBathRoom_3(values)
   }

   const handleRemoveBathRoomFields_3 = () => {
    const values = [...addBathRoom_3];
    if(values.length >1 ) values.pop();
    setAddBathRoom_3(values);
   }

  
  


    
    return (
        <>
        <Grid container spacing={2} columns={16} >
        <Grid   item xs={8}>
        <Paper className={classes.paper1} >
            <Box className={classes.box1}>
            <Row>
                <Col><Typography  variant="h5"  > {currentname.username}</Typography></Col>
                <Col><Button onClick={logout}>Logout</Button></Col>
            </Row>
        
        <RadioGroup row aria-labelledby='demo-row-radio-button-group-label' name='row-radio-button-group'>
            <FormControlLabel  value="FullConstruction" control={<Radio/>} label="Full Construction"/>
            <FormControlLabel  value="HalfConstruction"  control={<Radio/>} label="Half construction"/>
        </RadioGroup>

        <Grid sx={{p:4}}>
         <label htmlFor="icon-button-photo">
                    <IconButton color="primary" component="span">
                        <PhotoCamera />
                    </IconButton>
        </label>
        <Button variant="contained"   component="label" >
                    Upload Image
                    <input type="file" hidden />
        </Button>
        </Grid>
         <Row>
            <Grid container spacing={2} columns={16} sx={{p:1}} >
                <Col>
                    <Grid item xs={8}>
                        <TextField value={Squarefeet}  id="standard-basic" label="Square Feet" variant="filled" />
                    </Grid>
                 </Col>
                 <Col>
                 <label>Floor</label>
                            <Select id='duration' >
                                <MenuItem value={0} onClick={() => setF1Hide(true) & setF2Hide(true) & setF3Hide(true)}>0</MenuItem>
                                <MenuItem value={1} onClick={() => setF1Hide(false) & setF3Hide(true) & setF2Hide(true)}>1</MenuItem>
                                <MenuItem value={2} onClick={() => setF2Hide(false) & setF1Hide(false) & setF3Hide(true)}>2</MenuItem>
                                <MenuItem value={3} onClick={() => setF3Hide(false) & setF2Hide(false) & setF1Hide(false) }>3</MenuItem>
                                
                            </Select>
                 
                 </Col>
               <Col>
                    <Grid item xs={8}>
                        <label>Duration</label>
                            <Select id='duration' value={duration} >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                
                            </Select>
                    </Grid>
            </Col>
            <Col>
                <label>Tile</label>
                <Checkbox/>
            </Col>
            <Col>
                
                <RadioGroup row>
                <FormControlLabel value="start"
                control={<Radio/>}
                label="Roof"
                />  
                <FormControlLabel value="Slab"
                control={<Radio/>}
                label="Slab"
                />               
                </RadioGroup>
            </Col>
            </Grid>
            </Row>

            {/*.............................................house-details............................ */}
            
            <Row>
            <Typography>Floors</Typography>
            </Row>

            
                

             
                        <Box>
            <Row  className={classes.row1}>
                <Col>Room</Col>
                <Col>
                <IconButton onClick={handleAddRoomFields}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton onClick={handleRemoveRoomFields}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton>                   
                </Col>

                <Col>Master-BedRoom</Col>
                <Col>
                <IconButton onClick={handleAddMBRoomFields}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton onClick={handleRemoveMBRoomFields}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton> 
                </Col>

                <Col>Toilet</Col>
                <Col>
                <IconButton  onClick={handleAddToiletFields}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton  onClick={handleRemoveToiletFields}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton>                     
                </Col>

                <Col>Bathroom</Col>
                <Col>
                <IconButton  onClick={handleAddBathRoomFields}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton onClick={handleRemoveBathRoomFields}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton> 
                </Col>
            </Row>
            
            <Box sx={{m:2, border:1, borderRadius:2 ,p:2}}>
                <Row>
                    <Col>Kitchen<TextField size='small' variant='standard'></TextField></Col>
                    <Col>Hall<TextField size='small' variant='standard'></TextField></Col>
                </Row>
                    
                <Row>
                    <Col>
                 {
                    addRooms.map((data,i) =>{
                        return(
                           
                                <Row key={i}>
                                <Col md={2}>
                                <Typography >Room </Typography>
                                </Col>
                                <Col>
                                <TextField size='small' variant='standard'  ></TextField>
                                </Col>
                                </Row>
                           
                        )
                    })
                 }
                    
                 
                   
                    
                    </Col>

                    <Col>
                   {
                    addMBRoom.map((data,i) =>{
                        return(
                            <Row key={i}>
                            <Col md={4}>
                                <Typography>MB_Room</Typography>
                                </Col>
                                <Col>
                                <TextField size='small' variant='standard' ></TextField>
                                </Col>
                            </Row>
                        )
                    })
                   }
                    </Col>

                    <Col>
                    {
                        addToilet.map((data,i) =>{
                            return(
                                <Row key={i}>
                                    <Col md={2}>
                                    <Typography>Toilet</Typography>
                                    </Col>
                                    <Col>
                                    <TextField size='small' variant='standard' ></TextField>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                    </Col>

                    <Col>
                    {addBathRoom.map((data,i) =>{
                    return(
                        <Row key={i}>
                    <Col md={4}>
                        <Typography>BathRoom</Typography>
                        </Col>
                        <Col>
                        <TextField size='small' variant='standard' ></TextField>
                        </Col>
                    </Row>
                    )}
                    )}
                    </Col>

                </Row>
            </Box>
            </Box>

            {/* -----------------1------------------ */}

            {!f1hide ?


            <Box>
                <label >Floor : 1</label>
            <Row  className={classes.row1}>
                <Col>Room</Col>
                <Col>
                <IconButton onClick={handleAddRoomFields_1}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton onClick={handleRemoveRoomFields_1}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton>                   
                </Col>

                <Col>Master-BedRoom</Col>
                <Col>
                <IconButton onClick={handleAddMBRoomFields_1}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton onClick={handleRemoveMBRoomFields_1}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton> 
                </Col>

                <Col>Toilet</Col>
                <Col>
                <IconButton  onClick={handleAddToiletFields_1}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton  onClick={handleRemoveToiletFields_1}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton>                     
                </Col>

                <Col>Bathroom</Col>
                <Col>
                <IconButton  onClick={handleAddBathRoomFields_1}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton onClick={handleRemoveBathRoomFields_1}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton> 
                </Col>
            </Row>
            
            <Box sx={{m:2, border:1, borderRadius:2 ,p:2}}>
                <Row>
                    <Col>Kitchen<TextField size='small' variant='standard'></TextField></Col>
                    <Col>Hall<TextField size='small' variant='standard'></TextField></Col>
                </Row>
                    
                <Row>
                    <Col>
                 {
                    addRooms_1.map((data,i) =>{
                        return(
                           
                                <Row key={i}>
                                <Col md={2}>
                                <Typography >Room </Typography>
                                </Col>
                                <Col>
                                <TextField size='small' variant='standard'  ></TextField>
                                </Col>
                                </Row>
                           
                        )
                    })
                 }
                    
                 
                   
                    
                    </Col>

                    <Col>
                   {
                    addMBRoom_1.map((data,i) =>{
                        return(
                            <Row key={i}>
                            <Col md={4}>
                                <Typography>MB_Room</Typography>
                                </Col>
                                <Col>
                                <TextField size='small' variant='standard' ></TextField>
                                </Col>
                            </Row>
                        )
                    })
                   }
                    </Col>

                    <Col>
                    {
                        addToilet_1.map((data,i) =>{
                            return(
                                <Row key={i}>
                                    <Col md={2}>
                                    <Typography>Toilet</Typography>
                                    </Col>
                                    <Col>
                                    <TextField size='small' variant='standard' ></TextField>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                    </Col>

                    <Col>
                    {addBathRoom_1.map((data,i) =>{
                    return(
                        <Row key={i}>
                    <Col md={4}>
                        <Typography>BathRoom</Typography>
                        </Col>
                        <Col>
                        <TextField size='small' variant='standard' ></TextField>
                        </Col>
                    </Row>
                    )}
                    )}
                    </Col>

                </Row>
            </Box>
            </Box>
             :null}

            {/* ---------------------2---------------------- */}

            {!f2hide ?


            <Box>
                <label>Floor : 2</label>
            <Row  className={classes.row1}>
                <Col>Room</Col>
                <Col>
                <IconButton onClick={handleAddRoomFields_2}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton onClick={handleRemoveRoomFields_2}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton>                   
                </Col>

                <Col>Master-BedRoom</Col>
                <Col>
                <IconButton onClick={handleAddMBRoomFields_2}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton onClick={handleRemoveMBRoomFields_2}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton> 
                </Col>

                <Col>Toilet</Col>
                <Col>
                <IconButton  onClick={handleAddToiletFields_2}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton  onClick={handleRemoveToiletFields_2}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton>                     
                </Col>

                <Col>Bathroom</Col>
                <Col>
                <IconButton  onClick={handleAddBathRoomFields_2}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton onClick={handleRemoveBathRoomFields_2}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton> 
                </Col>
            </Row>
            
            <Box sx={{m:2, border:1, borderRadius:2 ,p:2}}>
                <Row>
                    <Col>Kitchen<TextField size='small' variant='standard'></TextField></Col>
                    <Col>Hall<TextField size='small' variant='standard'></TextField></Col>
                </Row>
                    
                <Row>
                    <Col>
                 {
                    addRooms_2.map((data,i) =>{
                        return(
                           
                                <Row key={i}>
                                <Col md={2}>
                                <Typography >Room </Typography>
                                </Col>
                                <Col>
                                <TextField size='small' variant='standard'  ></TextField>
                                </Col>
                                </Row>
                           
                        )
                    })
                 }
                    
                 
                   
                    
                    </Col>

                    <Col>
                   {
                    addMBRoom_2.map((data,i) =>{
                        return(
                            <Row key={i}>
                            <Col md={4}>
                                <Typography>MB_Room</Typography>
                                </Col>
                                <Col>
                                <TextField size='small' variant='standard' ></TextField>
                                </Col>
                            </Row>
                        )
                    })
                   }
                    </Col>

                    <Col>
                    {
                        addToilet_2.map((data,i) =>{
                            return(
                                <Row key={i}>
                                    <Col md={2}>
                                    <Typography>Toilet</Typography>
                                    </Col>
                                    <Col>
                                    <TextField size='small' variant='standard' ></TextField>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                    </Col>

                    <Col>
                    {addBathRoom_2.map((data,i) =>{
                    return(
                        <Row key={i}>
                    <Col md={4}>
                        <Typography>BathRoom</Typography>
                        </Col>
                        <Col>
                        <TextField size='small' variant='standard' ></TextField>
                        </Col>
                    </Row>
                    )}
                    )}
                    </Col>

                </Row>
            </Box>
            </Box>
             :null}

             {/* -----------------3------------------ */}

             {!f3hide? 

             <Box>
                <label>Floor : 3</label>
            <Row  className={classes.row1}>
                <Col>Room</Col>
                <Col>
                <IconButton onClick={handleAddRoomFields_3}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton onClick={handleRemoveRoomFields_3}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton>                   
                </Col>

                <Col>Master-BedRoom</Col>
                <Col>
                <IconButton onClick={handleAddMBRoomFields_3}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton onClick={handleRemoveMBRoomFields_3}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton> 
                </Col>

                <Col>Toilet</Col>
                <Col>
                <IconButton  onClick={handleAddToiletFields_3}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton  onClick={handleRemoveToiletFields_3}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton>                     
                </Col>

                <Col>Bathroom</Col>
                <Col>
                <IconButton  onClick={handleAddBathRoomFields_3}>
                    <AddCircleIcon color="secondary" fontSize="medium"></AddCircleIcon>
                </IconButton>

                <IconButton onClick={handleRemoveBathRoomFields_3}>
                    <RemoveCircleIcon color="secondary" fontSize="medium"></RemoveCircleIcon> 
                </IconButton> 
                </Col>
            </Row>
            
            <Box sx={{m:2, border:1, borderRadius:2 ,p:2}}>
                <Row>
                    <Col>Kitchen<TextField size='small' variant='standard'></TextField></Col>
                    <Col>Hall<TextField size='small' variant='standard'></TextField></Col>
                </Row>
                    
                <Row>
                    <Col>
                 {
                    addRooms_3.map((data,i) =>{
                        return(
                           
                                <Row key={i}>
                                <Col md={2}>
                                <Typography >Room </Typography>
                                </Col>
                                <Col>
                                <TextField size='small' variant='standard'  ></TextField>
                                </Col>
                                </Row>
                           
                        )
                    })
                 }
                    
                 
                   
                    
                    </Col>

                    <Col>
                   {
                    addMBRoom_3.map((data,i) =>{
                        return(
                            <Row key={i}>
                            <Col md={4}>
                                <Typography>MB_Room</Typography>
                                </Col>
                                <Col>
                                <TextField size='small' variant='standard' ></TextField>
                                </Col>
                            </Row>
                        )
                    })
                   }
                    </Col>

                    <Col>
                    {
                        addToilet_3.map((data,i) =>{
                            return(
                                <Row key={i}>
                                    <Col md={2}>
                                    <Typography>Toilet</Typography>
                                    </Col>
                                    <Col>
                                    <TextField size='small' variant='standard' ></TextField>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                    </Col>

                    <Col>
                    {addBathRoom_3.map((data,i) =>{
                    return(
                        <Row key={i}>
                    <Col md={4}>
                        <Typography>BathRoom</Typography>
                        </Col>
                        <Col>
                        <TextField size='small' variant='standard' ></TextField>
                        </Col>
                    </Row>
                    )}
                    )}
                    </Col>

                </Row>
            </Box>
            </Box>
            :null}

           
          

          
           
          
           
<br></br>
            <TextField
                    sx={{width:300}}
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue="Describe about you Dream Home details"   />  


            </Box>    
        
        </Paper>
        </Grid>        
        </Grid>

        <Mapex/>
        
        </>
    )
}
