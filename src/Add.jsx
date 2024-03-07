import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Card, CardContent, TextField, Button, Container, ThemeProvider, createTheme, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch'; // Make sure to import the Switch component  

// Custom styled switch component
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));


const Add = () => {
 const navigate = useNavigate();

 const [successMessage, setSuccessMessage] = useState(""); // State to manage success message

 const [darkMode, setDarkMode] = useState(true); // State to toggle dark mode

 const [data, setData] = useState({
    name: "",
    email: "",
    phone: "", // Add a new state for the phone number
    message: "",
    date: new Date().toString(),
 });

 const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://sheetdb.io/api/v1/0vnuwszieiixv",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        setData({ // Reset the form fields to their initial state
            name: "",
            email: "",
            phone: "",
            message: "",
            date: new Date().toString(),
          });
          setSuccessMessage("Your message has been sent successfully!"); // Set success message
        setTimeout(() => {
          setSuccessMessage(""); // Clear success message after 3 seconds
        }, 3000);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
 };

 const theme = useTheme();
 const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
 });


useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#333' : '#fff'; // Change background color based on darkMode
}, [darkMode]);

 return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
      <Typography gutterBottom variant="h3" align="center" style={{ color: darkMode ? '#fff' : '#000' }}>
          Contact Form  
        </Typography>
        {successMessage && (
            <Typography variant="h6" align="center" style={{ color: 'green' }}>
                {successMessage}
            </Typography>
        )}
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} lg={3} xl={6}>
            <Card style={{ width: '90%', padding: "20px 5px", margin: "0 auto", background: 'linear-gradient(45deg, #8e44ad 30%, #3498db 90%)' }}>
                <CardContent>
                 <Typography gutterBottom variant="h5">
                    Contact Us
                 </Typography> 
                 <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                    Fill up the form and our team will get back to you within 24 hours.
                 </Typography> 
                 <form method='post' action='https://script.google.com/macros/s/AKfycbymwR_9pCVfbtP6R7QCdGbAJfQHS2YYagRTdaLEytc6vZECrDybP_XCSZxPQ6xXC1iLqA/exec' name='contact-form' onSubmit={handleSubmit}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <TextField name='name' placeholder="Enter your name" label="Name" variant="outlined" fullWidth required value={data.name} onChange={handleChange} />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField name='email' type="email" placeholder="Enter your email" label="Email" variant="outlined" fullWidth required value={data.email} onChange={handleChange} />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField name='phone' type="tel" placeholder="Enter your phone number" label="Phone Number" variant="outlined" fullWidth required value={data.phone} onChange={handleChange} />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField name='message' label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required value={data.message} onChange={handleChange} />
                      </Grid>
                      <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                      </Grid>
                    </Grid>
                 </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
<FormControlLabel
          control={<MaterialUISwitch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
          label="Toggle Dark Mode"
        />
      </div>
    </ThemeProvider>
 );
};

export default Add;
