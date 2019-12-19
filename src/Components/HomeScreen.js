import React, { Component } from 'react';
import Webcam from 'react-webcam';
import './HomeScreen.css';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idType: [], contactType: [], vistorType: [], selectedVisiterType: '', selectedIdType: '', selectedContactType: '',
            img_path: 'https://obabaerp.files.wordpress.com/2018/06/cropped-orignal-logo-copy-2.png?w=240',
            show: true, showPreview: false,
            date: new Date()
        };
    }
    setRef = webcam => {
        this.webcam = webcam;
    };
    componentDidMount() {
        this.getDrpdowns();

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    getDrpdowns = async () => {
        let res = await axios.get('https://example.com')
        console.log(res.data.clients);
        this.setState({
            idType: res.data.clients
        });

    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    capture = () => {
        this.setState({ showPreview: false });
        this.setState({ show: true });
        const imageSrc = this.webcam.getScreenshot();
        console.log(imageSrc);
        this.setState({ img_path: imageSrc });
        this.setState({ show: false });
        this.setState({ showPreview: true });
    };



    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "evirnment"
        };

        return (
            <div className="App">
                {this.state.showPreview && <img src={this.state.img_path} />}
                <div>
                    {this.state.show &&
                        <Webcam
                            audio={false}
                            height={300}
                            ref={this.setRef}
                            screenshotFormat="image/jpeg"
                            width={300}
                            videoConstraints={videoConstraints} />}
                    <div className="divc">
                        <Button style={{ borderRadius: '80%' }} className="Apps" variant="contained" color="primary" onClick={this.capture}>Capture</Button>
                    </div>
                </div>
                <Card raised className="cards">
                    <CardContent>
                        <div className="row">
                            <div className="col-xl-3 text-xs-center">
                                <TextField
                                    id="outlined-full-width"
                                    label="Date *"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    value={this.state.date.toLocaleDateString()}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"></TextField>
                            </div>
                            <div className="col-xl-3 text-xs-center">
                                <TextField
                                    id="outlined-full-width"
                                    label="Time *"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    value={this.state.date.toLocaleTimeString()}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"></TextField>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 text-xs-center">
                                <TextField
                                    id="outlined-full-width"
                                    label="Name *"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"

                                    variant="outlined"></TextField>
                            </div>
                            <div className="col-xl-3 text-xs-center">
                                <TextField
                                    id="outlined-full-width"
                                    label="Phone No. *"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"></TextField>
                            </div>
                            <div className="col-xl-3 text-xs-center">
                                <TextField
                                    id="outlined-full-width"
                                    label="E-Mail"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"></TextField>
                            </div>
                            <div className="col-xl-3 text-xs-center">
                                <TextField
                                    id="outlined-full-width"
                                    label="Company *"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"></TextField>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 text-xs-center">
                                <FormControl id="outlined-full-width"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined" >
                                    <InputLabel id="demo-simple-select-outlined-label">
                                        Select Visiter type
                                     </InputLabel>

                                    <Select style={{ textAlignLast: 'center' }}
                                       
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                    >
                                        {this.state.idType.map(item => (
                                            <option key={item.value} value={item.value}>
                                                {item.client_name}
                                            </option>
                                        ))}

                                    </Select>

                                </FormControl>
                            </div>
                            <div className="col-xl-3 text-xs-center">
                                <FormControl id="outlined-full-width"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined" >
                                    <InputLabel id="demo-simple-select-outlined-label">
                                        Select Department
                                     </InputLabel>
                                    <Select style={{ textAlignLast: 'center' }}
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined">
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Vender</MenuItem>
                                        <MenuItem value={20}>Sub Contractor</MenuItem>
                                        <MenuItem value={30}>Visiter</MenuItem>
                                        <MenuItem value={40}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="col-xl-3 text-xs-center">
                                <TextField
                                    id="outlined-full-width"
                                    label="Contact Person *"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"></TextField>
                            </div>
                            <div className="col-xl-3 text-xs-center">
                                <TextField
                                    id="outlined-full-width"
                                    label="Purpose *"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"></TextField>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-xl-3 text-xs-center">
                                <FormControl id="outlined-full-width"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined" >
                                    <InputLabel id="demo-simple-select-outlined-label">
                                        Select Govt. Id
                                     </InputLabel>
                                    <Select style={{ textAlignLast: 'center' }}
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Adhar</MenuItem>
                                        <MenuItem value={20}>Voter Id</MenuItem>
                                        <MenuItem value={30}>Driving Licence</MenuItem>
                                        <MenuItem value={40}>Passport</MenuItem>
                                        <MenuItem value={50}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-xl-3 text-xs-center">
                                <TextField
                                    id="outlined-full-width"
                                    label="Govt. id No. *"
                                    style={{ margin: 8 }}
                                    placeholder="if other Mention id name"
                                    fullWidth
                                    margin="normal"

                                    variant="outlined"></TextField>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 text-xs-center">
                                <TextField
                                    id="outlined-full-width"
                                    label="Goods/Vehicle/Other"
                                    multiline
                                    fullWidth
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    rows="4"
                                    margin="normal"
                                    variant="outlined" />
                            </div>
                            <div className="col-xl-3 text-xs-center">
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Address *"
                                    multiline
                                    placeholder=""
                                    style={{ margin: 8 }}
                                    fullWidth
                                    rows="4"
                                    margin="normal"
                                    variant="outlined" />
                            </div>
                            <div className="col-xl-3 text-xs-center">
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Remarks"
                                    multiline
                                    style={{ margin: 8 }}
                                    fullWidth
                                    placeholder=""
                                    rows="4"
                                    margin="normal"
                                    variant="outlined" />
                            </div>
                        </div>
                        <div className="divc">
                            <Button onClick={(e) => this.submit(e)} variant="contained" color="secondary" >CheckIn</Button></div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}