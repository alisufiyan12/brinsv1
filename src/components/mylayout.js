import React, { useState } from 'react';
import { Box, Container } from 'theme-ui';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Button as Uibutton } from 'theme-ui';

const Mylayout = () => {

    const [visible, setVisible] = useState(true);
    
  return (
      <>
      <Button  style={{
      }} 
      label="" 
        icon="pi pi-check" 
        onClick={() => setVisible(false)} />
      <Dialog
        header=""
        visible={visible}
        style={{ 
           display: 'inline-flex',
            //flexWrap: 'wrap',
            justifyContent: 'space-between',
            boxShadow: '-1px 1px 13px 2px rgba(0,0,0,0.15)',
            alignItems: 'center',
            borderRadius: '8px',
            paddingLeft: '20px',
            paddingRight: '20px',
            color: 'white',
            flexDirection: 'row-reverse',
            backgroundColor: '#EA3A60',
            width: ['60px', null, '80px', null, '100px'],
            position: 'fixed',
            bottom: '20px',  // Adjust the distance from the bottom
            right: '20px',   // Adjust the distance from the right
            height: ['60px', null, '80px', null, '100px'],
            overflowY: 'auto', 
            gap: '20px',
        }}
        onHide={() => setVisible(false)}
      >
        <div style={{
            display: 'flex',
            alignItems:'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '20px',
            }}>
            <p style={{
            }}>
            Looking for the <br />Brinsol <em>Academy?</em>
            </p>
            <Uibutton href="https://brinsolacademy.com" sx={styles.mywhiteButton}>Yes</Uibutton>
        </div>
      </Dialog>
    </>
  )
}

export default Mylayout;


const styles = {
    mywhiteButton: {
      border: '2px solid',
      borderColor: 'primary',
      color: 'primary',
      bg: 'transparent',
      borderRadius: '30px',
      padding: ['10px 15px', null, '5px 20px'],
      '&:hover': {
        color: 'white',
        bg: 'primary',
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px',
      },
      },
}