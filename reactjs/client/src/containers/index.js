import React,{useState} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from  '@material-ui/core/Tab';
import Typography from   '@material-ui/core/Typography';
import Box from    '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import Signin from '../components/signin';
import Signup from '../components/signup';

const SignInOutContainer=()=>{
    const [value, setValue]=useState("");
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      const paperStyle={width: 340, margin:"5px auto"}
      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
    return(
        <>
        <Paper elevation={20} style={paperStyle}>
        <Tabs 
        value={value} 
        onChange={handleChange} 
        aria-label="disabled tabs example">
            <Tab label="Sign In" />
            
            <Tab label="Sign Up" />
        </Tabs><TabPanel value={value} index={0}>
                <Signin handleChange={handleChange}/>
                </TabPanel>
               <TabPanel value={value} index={1}>
                <Signup/>
                </TabPanel>
                </Paper>
            
            </>
  );
}

export default SignInOutContainer